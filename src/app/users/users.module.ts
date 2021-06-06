import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing.module';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [UsersComponent, UsersDetailsComponent, TodosComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UsersModule {}
