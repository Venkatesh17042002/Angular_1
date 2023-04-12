import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camel'
})
export class CamelPipe implements PipeTransform {

  transform(value:string):string{
    
    value=value.toLowerCase();
    let temp="";
    for(let i=0;i<value.length;i++)
    {
      if(value[i]==' ')
      {
        temp+=value[i+1].toUpperCase();
        i++;
      }
      else
      temp+=value[i];
    }
    return temp;
  }

}
