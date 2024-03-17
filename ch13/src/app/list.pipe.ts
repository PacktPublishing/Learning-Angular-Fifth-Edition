import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'list',
  standalone: true
})
export class ListPipe implements PipeTransform {

  transform(value: string): string[] {
    return value.split(',');
  }

}
