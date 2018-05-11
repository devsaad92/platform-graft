import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greffe'
})
export class GreffePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    }

    const today = +Date.now();
    const date = +new Date(value).getTime();
    const diff = (today - date) / (24 * 60 * 60 * 1000);
    return Math.trunc(diff) + 'Jrs Aprés greffe';
  }

}

