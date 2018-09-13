import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: Array<any>, property: string, search: string): any {
    return array.filter(item => item[property].toLowerCase().includes(search))
  }

}
