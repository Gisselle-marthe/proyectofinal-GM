import { Pipe, PipeTransform } from '@angular/core';
import { user } from '../layouts/dashboard/pages/users/models/index';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(
    value: user,

    ...args: unknown[]
  ): unknown {
    const result = value.name + ' ' + value.lastName;

    return result;
  }
}
