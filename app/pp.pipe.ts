import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pp'
})
export class PpPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
