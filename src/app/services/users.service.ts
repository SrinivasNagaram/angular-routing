import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';
import { Todos } from '../models/todos.model';

const USERS_API = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${USERS_API}/users`);
  }

  getUser(id: string): Observable<Users> {
    return this.http.get<Users>(`${USERS_API}/users/${id}`);
  }

  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(`${USERS_API}/todos`);
  }
}
