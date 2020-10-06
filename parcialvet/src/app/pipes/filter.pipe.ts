import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for(const consulta of value){
      if(consulta.title.indexOf(arg) > -1){
         resultPosts.push(consulta);
      };
    };
    return resultPosts;
  }

}
