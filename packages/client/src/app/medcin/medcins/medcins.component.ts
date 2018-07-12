import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Medcin } from '../../shared/models/Medcin';
import { MedcinService } from './../../shared/services/medcin.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-medcins',
  templateUrl: './medcins.component.html',
  styleUrls: ['./medcins.component.scss']
})
export class MedcinsComponent implements OnInit {
  allMedcins: Medcin[];
  loading: Boolean = true;
  admin = 0;

  @ViewChild(DatatableComponent) table: DatatableComponent;

  temp = [];


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
        this.temp = [...medcins.allMedcins];
      });
  }

  deleteM(value) {
    this.medcinService.delete(value).subscribe();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(d => {
      return d.firstName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.allMedcins = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
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



