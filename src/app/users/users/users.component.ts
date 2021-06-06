import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersService } from '../../services/users.service';
import { Todos } from '../../models/todos.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: Users[];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users: Users[]) => {
      this.users = users;
    });
  }
}
