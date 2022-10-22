import { Pipe, PipeTransform } from '@angular/core';
import { League } from '../models/league.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: League[], filterText: string): League[] {
    if (!filterText) {
      return [];
    }

    return list
      ? list.filter(
          (item) => item.name.search(new RegExp(filterText, 'i')) > -1
        )
      : [];
  }
}
