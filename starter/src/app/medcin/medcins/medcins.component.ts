import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Apollo } from 'apollo-angular';
import { Medcin } from '../../types';

import { ALL_MEDCINS_QUERY, AllMedcinQueryResponse } from '../graphql';
import { NEW_MEDCINS_SUBSCRIPTION, NewMedcinSubcriptionResponse } from '../graphql';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-medcins',
  templateUrl: './medcins.component.html',
  styleUrls: ['./medcins.component.scss']
})
export class MedcinsComponent implements OnInit {
  allMedcins: Medcin[] = [];
  loading: Boolean = true;
  displayedColumns = ['id', 'firstName', 'dateDeNaissance', 'sexe', 'specialty', 'email', 'lastName'];
  dataSource: any;

  subscriptions: Subscription[] = [];

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {

    this.apollo.watchQuery<AllMedcinQueryResponse>({
      query: ALL_MEDCINS_QUERY,
      pollInterval: 1000,
    }).valueChanges.subscribe((response) => {

      this.allMedcins = response.data.allMedcins;
      this.loading = response.data.loading;
      this.dataSource = new MatTableDataSource(this.allMedcins);
    });
  }

/*     const allMEdcinQuery = this.apollo.watchQuery<AllMedcinQueryResponse>({
      query: ALL_MEDCINS_QUERY
    });

    allMEdcinQuery
      .subscribeToMore({
        document: NEW_MEDCINS_SUBSCRIPTION,
        updateQuery: (previous, { subscriptionData }) => {
          console.log(subscriptionData);
          const newAllMedcins = [
            (<any>subscriptionData).newMedcin,
            ...(<any>previous).allMedcins
          ];
          return {
            ...previous,
            allMedcins: newAllMedcins
          };
        }
      });

    const querySubscription = allMEdcinQuery.valueChanges.subscribe((response) => {
      this.allMedcins = response.data.allMedcins;
      this.loading = response.data.loading;
    });

    this.subscriptions = [...this.subscriptions, querySubscription];
  }
 */
}
