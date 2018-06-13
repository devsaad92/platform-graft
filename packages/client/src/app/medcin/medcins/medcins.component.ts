import { Component, OnInit } from '@angular/core';

import { Medcin } from '../../shared/models/Medcin';
import { MedcinService } from './../../shared/services/medcin.service';


@Component({
  selector: 'app-medcins',
  templateUrl: './medcins.component.html',
  styleUrls: ['./medcins.component.scss']
})
export class MedcinsComponent implements OnInit {
  allMedcins: Medcin[];
  loading: Boolean = true;

  constructor(private medcinService: MedcinService) {  }

  ngOnInit() {
    this.getAllMedcins();
  }

  getAllMedcins() {
    this.medcinService.getAll()
      .subscribe(medcins => {
        this.allMedcins = medcins.allMedcins;
        this.loading = medcins.loading;
      });
  }

 /*
    const allMEdcinQuery = this.apollo.watchQuery<AllMedcinQueryResponse>({
      query: ALL_MEDCINS_QUERY
    });

    allMEdcinQuery
      .subscribeToMore({
        document: NEW_MEDCINS_SUBSCRIPTION,
        updateQuery: (previous, { subscriptionData }) => {
          console.log(subscriptionData);
          const newAllMedcins = [
            subscriptionData.data.medcinAdded,
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
      this.dataSource = new MatTableDataSource(this.allMedcins);
    });

    this.subscriptions = [...this.subscriptions, querySubscription];
  }
  */

}



