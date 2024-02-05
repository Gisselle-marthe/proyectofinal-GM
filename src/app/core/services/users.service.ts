import { Inject, Injectable } from '@angular/core';
import { MY_USER_TOKEN } from '../injection-tokens';
import { delay, of, tap, Observable } from 'rxjs';
import { user } from '../../layouts/dashboard/pages/users/models/index';
import { AlertsService } from './alerts.service';

const ROLES_DB: string[] = ['ADMIN', 'USER', 'STUDENTS'];

let USER_DB: user[] = [
  {
    id: 1,
    name: 'David',
    lastName: 'saenz',
    age: '19',
    email: 'dzaens@emaeil.com',
    password: '1234567',
    role: 'STUDENTS',
  },
  {
    id: 2,
    name: 'Jorge',
    lastName: 'Suarez',
    age: '29',
    email: 'jsuarez@emaeil.com',
    password: '7891011',
    role: 'USER',
  },
  {
    id: 3,
    name: 'Gabriel',
    lastName: 'Blasco',
    age: '30',
    email: 'blascog@emaeil.com',
    password: 'gb093458',
    role: 'ADMIN',
  },
  {
    id: 4,
    name: 'Maria',
    lastName: 'Gordillo',
    age: '20',
    email: 'mary893@emaeil.com',
    password: 'm095gordillo',
    role: 'STUDENTS',
  },
  {
    id: 5,
    name: 'Marisol',
    lastName: 'Llanos',
    age: '20',
    email: 'llanos45@emaeil.com',
    password: '1lan0s55',
    role: 'STUDENTS',
  },
  {
    id: 6,
    name: 'Fernando',
    lastName: 'Mejia',
    age: '25',
    email: 'fernandomej87@emaeil.com',
    password: '087463fm',
    role: 'STUDENTS',
  },
  {
    id: 7,
    name: 'Matilde',
    lastName: 'Centeno',
    age: '30',
    email: 'matildecenten0@emaeil.com',
    password: 'Centmatil',
    role: 'STUDENTS',
  },
  {
    id: 8,
    name: 'Elsa',
    lastName: 'Tovar',
    age: '18',
    email: 'Telsa32@emaeil.com',
    password: '94764532',
    role: 'STUDENTS',
  },
  {
    id: 9,
    name: 'Abril',
    lastName: 'Godoy',
    age: '19',
    email: 'abrilg1653@emaeil.com',
    password: 'aprilg0d0y',
    role: 'STUDENTS',
  },
  {
    id: 10,
    name: 'Jorge',
    lastName: 'Sans',
    age: '23',
    email: 'sansjorge23@emaeil.com',
    password: 'Jorgesans034',
    role: 'USER',
  },
];
@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private alerts: AlertsService) {}
  getRoles() {
    return of(ROLES_DB).pipe(delay(3000));
  }

  getUsers() {
    return of(USER_DB).pipe(delay(3000));
  }
  createUser(paylood: user) {
    USER_DB.push(paylood);
    return this.getUsers().pipe(
      tap(() => this.alerts.showSuccess('Exitoso', 'Se Ha agregado el Usuario'))
    );
  }
  deleteUser(userID: number) {
    USER_DB = USER_DB.filter((user) => user.id !== userID);
    return this.getUsers().pipe(
      tap(() =>
        this.alerts.showSuccess('Exitoso', 'Se Ha eliminado el Usuario')
      )
    );
  }

  getUserById(id: number | string): Observable<user | undefined> {
    return of(USER_DB.find((user) => user.id == id)).pipe(delay(1000));
  }
}
