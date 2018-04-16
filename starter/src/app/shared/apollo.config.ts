import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
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
        const http = httpLink.create({ uri });

        // Create a WebSocket link:
        const ws = new WebSocketLink({
            uri: `ws://localhost:3000/subscriptions`,
            options: {
                reconnect: true
            }
        });

        const middlewareLink = new ApolloLink((operation, forward) => {
            operation.setContext({
                headers: {
                    'x-token': localStorage.getItem('token') || null,
                    'x-refresh-token': localStorage.getItem('refreshToken') || null,
                }
            });
            return forward(operation);
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

        // using the ability to split links, you can send data to each link
        // depending on what kind of operation is being sent
        const link = split(
            // split based on operation type
            ({ query }) => {
                const { kind, operation } = getMainDefinition(query);
                return kind === 'OperationDefinition' && operation === 'subscription';
            },
            ws,
           // http,
            afterwareLink.concat(middlewareLink.concat(http))
        );

        // const link1 = afterwareLink.concat(middlewareLink.concat(link));

        apollo.create({
            link,
            cache: new InMemoryCache()
        });
    }
}
