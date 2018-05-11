import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    }
    const today = +Date.now();
    const date = +new Date(value).getTime();
    const diff = (today - date) / (30 * 24 * 60 * 60 * 1000);
    return Math.trunc(diff / 12) + ' Ans  ' + (Math.trunc(diff % 12) + 1) + ' Mois';
  }

}
