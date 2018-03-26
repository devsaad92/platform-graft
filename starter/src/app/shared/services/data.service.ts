import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';

import { AppError } from '../../common/app-error';
import { BadInput } from '../../common/bad-input';
import { NotFoundError } from '../../common/not-found-error';

@Injectable()
export class DataService {
  apollo: Apollo;
  constructor(apollo: Apollo, private queryAll?, private queryOne?, private mutationDelete?) {
    this.apollo = apollo;
  }

  getAll() {
    return this.apollo.watchQuery({
      query: this.queryAll
      // pollInterval: 1000,
    }).valueChanges.map(response => response.data)
      .catch(this.handleError);
  }

  getOne(id) {
    return this.apollo.watchQuery({
      query: this.queryOne,
       variables: {
        id
      }
    }).valueChanges.map(response => response.data)
      .catch(this.handleError);
  }



  delete(id) {
    return this.apollo.mutate({
      mutation: this.mutationDelete,
      variables: {
        id
      },
      refetchQueries: [{ query: this.queryAll }]
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404) {
        return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }
}
