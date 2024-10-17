import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class SearchFilterPipe implements PipeTransform {
  transform(chat: string[], searchTerm: string): string[] {
    if (!searchTerm) {
      return chat;
    }
    return chat.filter((name) =>
      name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
  }
}
