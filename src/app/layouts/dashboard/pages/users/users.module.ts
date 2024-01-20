import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './components/user-form/user-form.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {  MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [UsersComponent, UserFormComponent],
  imports: [CommonModule, MatTableModule, MatInputModule, MatFormFieldModule,MatCardModule,MatSelectModule, MatButtonModule, ReactiveFormsModule,  SharedModule],
  exports: [UsersComponent],
})
export class UsersModule {}
