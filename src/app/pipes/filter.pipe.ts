import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allStudents:any[],searchKey:string,propertyname:string): any[] {
    const result:any=[]
    if(!allStudents || searchKey=="" || propertyname==""){
      return allStudents
    }
    allStudents.forEach((item:any)=>{
      if(item[propertyname].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
