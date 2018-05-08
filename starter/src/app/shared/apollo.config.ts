import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, split, concat } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { setContext } from 'apollo-link-context';
import { getMainDefinition } from 'apollo-utilities';


@NgModule({
    imports: [
        HttpClientModule, // provides HttpClient for HttpLink
        ApolloModule,
        HttpLinkModule
    ],
    exports: [
        HttpClientModule,
        ApolloModule,
        HttpLinkModule,
    ],
    providers: [
       // Apollo
    ],
})
export class GraphQLModule {

    constructor(apollo: Apollo, httpLink: HttpLink) {
        // Create an http link:
        const uri = 'http://localhost:3000/graphql';
        const http = httpLink.create({ uri }); // createUploadLink(uri)

        const middlewareLink = setContext((_, { headers }) => {
            const token = localStorage.getItem('token');
            const refreshToken = localStorage.getItem('refreshToken');

            if (!token && !refreshToken) {
                return {};
            } else {
                return {
                    headers: {
                        'x-token': localStorage.getItem('token'),
                        'x-refresh-token': localStorage.getItem('refreshToken'),
                    }
                };
            }
        });

        const afterwareLink = new ApolloLink((operation, forward) => {
            const { headers } = operation.getContext();

            if (headers) {
                const token = headers.get('x-token');
                const refreshToken = headers.get('x-refresh-token');

                if (token) {
                    localStorage.setItem('token', token);
                }

                if (refreshToken) {
                    localStorage.setItem('refreshToken', refreshToken);
                }
            }

            return forward(operation);
        });

        const httpLinkwithMiddleware = afterwareLink.concat(middlewareLink.concat(http));

        // Create a WebSocket link:
        const ws = new WebSocketLink({
            uri: `ws://localhost:3000/subscriptions`,
            options: {
                reconnect: true
            }
        });

        const link = split(
            ({ query }) => {
                const definition = getMainDefinition(query);
                return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
            },
            ws,
            httpLinkwithMiddleware
        );

        apollo.create({
            link,
            cache: new InMemoryCache()
        });
    }
}
