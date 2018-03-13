import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';



@NgModule({
    exports: [
        HttpClientModule,
        ApolloModule,
        HttpLinkModule
    ]
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

        // using the ability to split links, you can send data to each link
        // depending on what kind of operation is being sent
        const link = split(
            // split based on operation type
            ({ query }) => {
                const { kind, operation } = getMainDefinition(query);
                return kind === 'OperationDefinition' && operation === 'subscription';
            },
            ws,
            http,
        );

        apollo.create({
            link,
            cache: new InMemoryCache()
        });

       /*  apollo.create({
            link: http,
            cache: new InMemoryCache()
        }); */
    }
}
