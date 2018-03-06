import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Medcin } from '../../types';

import { ALL_MEDCINS_QUERY, AllMedcinQueryResponse } from '../graphql';


@Component({
  selector: 'app-medcins',
  templateUrl: './medcins.component.html',
  styleUrls: ['./medcins.component.scss']
})
export class MedcinsComponent implements OnInit {

  allMedcins: Medcin[] = [];
  loading: Boolean = true;


  constructor(private apollo: Apollo) {
  }

  ngOnInit() {

    this.apollo.watchQuery<AllMedcinQueryResponse>({
      query: ALL_MEDCINS_QUERY
    }).valueChanges.subscribe((response) => {

      this.allMedcins = response.data.allMedcins;
      this.loading = response.data.loading;
    });
  }

}
