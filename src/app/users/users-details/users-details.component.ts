import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css'],
})
export class UsersDetailsComponent implements OnInit {
  user: Users;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.userService
      .getUser(this.route.snapshot.params.id)
      .subscribe((user: Users) => {
        this.user = user;
      });
  }
}
