import { ApolloLink, Observable, RequestHandler } from 'apollo-link';
import { print } from 'graphql/language/printer';


type ServerError = Error & {
    response: Response;
    result: Record<string, any>;
    statusCode: number;
};

type ServerParseError = Error & {
    response: Response;
    statusCode: number;
};

type ClientParseError = Error & {
    parseError: Error;
};

const throwServerError = (response, result, message) => {
    const error = new Error(message) as ServerError;

    error.response = response;
    error.statusCode = response.status;
    error.result = result;

    throw error;
};

const parseAndCheckResponse = request => (response: Response) => {
    return response
        .json()
        .catch(e => {
            const parseError = e as ServerParseError;
            parseError.response = response;
            parseError.statusCode = response.status;

            throw parseError;
        })
        .then(result => {
            if (response.status >= 300) {
                throwServerError(
                    response,
                    result,
                    `Response not successful: Received status code ${response.status}`,
                );
            }
            if (!result.hasOwnProperty('data') && !result.hasOwnProperty('errors')) {
                throwServerError(
                    response,
                    result,
                    `Server response was missing for query '${request.operationName}'.`,
                );
            }
            return result;
        });
};


export interface FetchOptions {
    uri?: string;
    fetch?: GlobalFetch['fetch'];
    includeExtensions?: boolean;
    credentials?: string;
    headers?: any;
    fetchOptions?: any;
}

const defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
};

export default (
    {
        uri,
        includeExtensions,
        ...requestOptions,
    }: FetchOptions = {},
) => {
    const fetcher = fetch;
    return new ApolloLink(
        operation =>
            new Observable(observer => {
                const {
                    headers,
                    credentials,
                    fetchOptions = {},
                    uri: contextURI,
                    http: httpOptions = {},
                } = operation.getContext();
                const { operationName, extensions, variables, query } = operation;
                const http = { ...defaultHttpOptions, ...httpOptions };
                const body = { operationName, variables };

                // console.log(variables);

                if (includeExtensions || http.includeExtensions) {
                    (body as any).extensions = extensions;
                }

                // not sending the query (i.e persisted queries)
                if (http.includeQuery) { (body as any).query = print(query); }

                let serializedBody;
                try {
                    serializedBody = JSON.stringify(body);
                } catch (e) {
                    const parseError = new Error(
                        `Network request failed. Payload is not serializable: ${e.message}`,
                    ) as ClientParseError;
                    parseError.parseError = e;
                    throw parseError;
                }

                const myHeaders = {
                    accept: '*/*',
                };

                if (variables.file) {
                    // delete options.headers['content-type'];

                    serializedBody = new FormData();
                    serializedBody.append('operations', body);
                    serializedBody.append('file', variables.file);
                } else {
                    // serializedBody.body = body;
                    myHeaders['content-type'] = 'application/json';
                 }

                let options = fetchOptions;
                if (requestOptions.fetchOptions) {
                    options = { ...requestOptions.fetchOptions, ...options };
                }
                const fetcherOptions: any = {
                    method: 'POST',
                    ...options,
                    headers: myHeaders,
                    body: serializedBody,
                };


                if (requestOptions.credentials) {
                    fetcherOptions.credentials = requestOptions.credentials;
                }
                if (credentials) { fetcherOptions.credentials = credentials; }

                if (requestOptions.headers) {
                    fetcherOptions.headers = {
                        ...fetcherOptions.headers,
                        ...requestOptions.headers,
                    };
                }
                if (headers) {
                    fetcherOptions.headers = { ...fetcherOptions.headers, ...headers };
                }

                fetcher(contextURI || uri, fetcherOptions)
                    // attach the raw response to the context for usage
                    .then(response => {
                        operation.setContext({ response });
                        return response;
                    })
                    .then(parseAndCheckResponse(operation))
                    .then(result => {
                        // we have data and can send it to back up the link chain
                        observer.next(result);
                        observer.complete();
                        return result;
                    })
                    .catch(err => {
                        // fetch was cancelled so its already been cleaned up in the unsubscribe
                        if (err.name === 'AbortError') { return; }
                        observer.error(err);
                    });

                return () => {};
            }),
    );
};

