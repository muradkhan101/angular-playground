import { Pipe, PipeTransform } from '@angular/core';

function addPadding(num: number) {
  return num.toString().length === 1
    ? '0' + num
    : num;
}
@Pipe({
  name: 'timeDuration'
})
export class TimeDurationPipe implements PipeTransform {

  transform(timestamp: number, args?: any): any {
    let timestampInSeconds = Math.floor(timestamp / 1000);
    let hours = Math.floor(timestampInSeconds / 60 / 60);
    let minutes = Math.floor((timestampInSeconds - hours * 60 * 60) / 60);
    let seconds = timestampInSeconds - (hours * 60 * 60) - (minutes * 60);
    console.log(hours, minutes, seconds);
    return `${addPadding(hours)}:${addPadding(minutes)}:${addPadding(seconds)}`;
  }

}
