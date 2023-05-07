import { Pipe, PipeTransform } from '@angular/core';
import { MainService } from '../services/main.service';

@Pipe({
  name: 'totalPassengers'
})
export class TotalPassengersPipe implements PipeTransform {

  constructor(private mainService: MainService) {}

  transform(value: string, ...args: number[]): string | string[] {
    if (args.every((item: number) => item == 0)) {
      return value;
    }
    else {
      args.map((item, index) => {
        switch (index) {
          case 0:
              this.mainService.passengers[0] = `${item} Adults  `
            break;
          case 1:
            this.mainService.passengers[1] = `${item} Children  `
          break;
          case 2:
            this.mainService.passengers[2] = `${item} Infants`
          break;

          default:
            break;
        }
      })
      const passengersStr = this.mainService.passengers.join('')
      return passengersStr.substring(0,passengersStr.length - 8)+'...';
    }
  }

}
