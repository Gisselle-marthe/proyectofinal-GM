import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './components/user-form/user-form.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { UsersService } from '../../../../core/services/users.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UsersMockService } from '../../../../core/services/users-mock.service';
import { MatIconModule } from '@angular/material/icon';
import { UsersRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

@NgModule({
  declarations: [UsersComponent, UserFormComponent, UserDetailComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule,
    UsersRoutingModule,
    MatIconModule
  ],
  exports: [UsersComponent],
  providers: [
    // {
    //   provide: UsersService,
    //   useClass: UsersMockService,
    // },
  ],
})
export class UsersModule {}
