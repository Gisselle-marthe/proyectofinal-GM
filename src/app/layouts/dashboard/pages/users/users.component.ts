import { Component } from '@angular/core';

import { user } from './models/index';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  displayedColumns: string[] = [ 'fullname', 'age', 'email', 'role'];
  dataSource: user[] = [
    {
      id: 1,
      name: 'David',
      lastName: 'saenz',
      age: '19',
      email: 'dzaens@emaeil.com',
      password: '1234567',
      role: 'ADMIN',
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
      role: 'USER',
    },
    {
      id: 5,
      name: 'Marisol',
      lastName: 'Llanos',
      age: '20',
      email: 'llanos45@emaeil.com',
      password: '1lan0s55',
      role: 'USER',
    },
    {
      id: 6,
      name: 'Fernando',
      lastName: 'Mejia',
      age: '25',
      email: 'fernandomej87@emaeil.com',
      password: '087463fm',
      role: 'USER',
    },
    {
      id: 7,
      name: 'Matilde',
      lastName: 'Centeno',
      age: '30',
      email: 'matildecenten0@emaeil.com',
      password: 'Centmatil',
      role: 'USER',
    },
    {
      id: 8,
      name: 'Elsa',
      lastName: 'Tovar',
      age: '18',
      email: 'Telsa32@emaeil.com',
      password: '94764532',
      role: 'USER',
    },
    {
      id: 9,
      name: 'Abril',
      lastName: 'Godoy',
      age: '19',
      email: 'abrilg1653@emaeil.com',
      password: 'aprilg0d0y',
      role: 'USER',
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

  onuserPushed(ev: user): void {

    this.dataSource =[...this.dataSource, ev]
  }
}
