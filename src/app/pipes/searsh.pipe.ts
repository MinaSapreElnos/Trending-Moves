import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searsh'
})
export class SearshPipe implements PipeTransform {

  transform(data:any[], term:string): unknown {
    return data.filter(el =>el.title.toLowerCase().includes(term.toLowerCase()));
  }

}
