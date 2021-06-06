import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos.model';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todos[];
  todoID: string;
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTodos();
    this.todoID = this.route.snapshot.params.id;
  }

  getTodos(): void {
    this.userService.getTodos().subscribe((todos: Todos[]) => {
      this.todos = todos.filter(
        (data) => data.userId.toString() === this.route.snapshot.params.id
      );
    });
  }
}
