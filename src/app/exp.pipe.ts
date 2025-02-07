import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  experience: any;
  joinYear: any;
  currentYear: any;

  transform(value: any): any {

    this.currentYear = new Date().getFullYear();
    this.joinYear = new Date(value).getFullYear();
    this.experience = this.currentYear - this.joinYear;

    return this.experience + ' Year(s)';
  }

}

