import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchFilter"
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    var returnArr = [];
    value.forEach(element => {
      if (element.Name.search(args) !== -1) {
        console.log(element.Name.search(args));
        returnArr.push(element);
      }
    });

    return returnArr;
  }
}
