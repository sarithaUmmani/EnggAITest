import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  // search a filter dynamically
  transform(items: any[], searchText: string): any[] {

    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(itm => {
      return itm.title.toLowerCase().includes(searchText);
    });
  }
}
