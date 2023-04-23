import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalPassengers'
})
export class TotalPassengersPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string | string[] {
    const passengers: string[] = [];
    if (args.every((item: number) => item == 0)) {
      return value;
    }
    else {
      args.map((item, index) => {
        switch (index) {
          case 0:
              passengers[0] = `${item} Adults `
            break;
          case 1:
            passengers[1] = `${item} Children `
          break;
          case 2:
            passengers[2] = `${item} Infants`
          break;

          default:
            break;
        }
      })
      const passengersStr = passengers.join('')
      return passengersStr.substring(0,passengersStr.length - 8)+'...';
    }
  }

}
