import { AuthService } from './../../shared/services/auth.service';
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
  admin = 0;

  constructor(private medcinService: MedcinService, private authService: AuthService) {  }

  ngOnInit() {
    this.getAllMedcins();
    this.admin = this.authService.currentUser.roleId;
  }

  getAllMedcins() {
    this.medcinService.getAll()
      .subscribe(medcins => {
        this.allMedcins = medcins.allMedcins;
        this.loading = medcins.loading;
      });
  }

  deleteM(value) {
    console.log(value);
    this.medcinService.delete(value).subscribe();
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



