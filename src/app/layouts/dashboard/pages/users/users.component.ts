import { Component, OnInit } from '@angular/core';

import { user } from './models/index';
import { UsersService } from '../../../../core/services/users.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['fullname', 'age', 'email', 'role', 'actions'];
  dataSource: user[] = [];
  roles: string[] = [];
  constructor(
    private UsersService: UsersService,
    private LoadingService: LoadingService,
    private route: ActivatedRoute
    
  ) {}
  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(): void {
    this.LoadingService.setIsLoading(true);
    forkJoin([
      this.UsersService.getRoles(),
      this.UsersService.getUsers(),
    ]).subscribe({
      next: (value) => {
        this.roles = value[0];
        this.dataSource = value[1];
      },
      complete: () => {
        this.LoadingService.setIsLoading(false);
      },
    });
  }

  onUserSubmitted(ev: user): void {
    this.LoadingService.setIsLoading(true);
    this.UsersService.createUser({ ...ev, id: new Date().getTime() }).subscribe(
      {
        next: (users) => {
          this.dataSource = [...users];
        },
        complete: () => {
          this.LoadingService.setIsLoading(false);
        },
      }
    );
  }

  onDeleteUser(ev: user): void {
    this.LoadingService.setIsLoading(true);
    this.UsersService.deleteUser(ev.id).subscribe({
      next: (users) => {
        this.dataSource = [...users];
      },
      complete: () => {
        this.LoadingService.setIsLoading(false);
      },
    });
  }

}
