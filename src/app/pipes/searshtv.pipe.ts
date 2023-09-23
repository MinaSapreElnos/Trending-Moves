import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searshtv'
})
export class SearshtvPipe implements PipeTransform {

  transform(data:any[] ,term:string): unknown {
    return data.filter(el=>el.name.toLowerCase().includes(term.toLowerCase()));
  }

}
