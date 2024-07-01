import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})


export class UserService {

	private basUrl = "http://localhost:8080/user";

	constructor(private http: HttpClient) { }

	getUserList(): Observable<User[]> {
		return this.http.get<User[]>(`${this.basUrl}`);
	}

	createUser(user: User): Observable<Object> {
		return this.http.post(`${this.basUrl}`, user);
	}

	getUserById(id: number): Observable<User> {
		return this.http.get<User>(`${this.basUrl}/${id}`);
	}

	updateUser(id: number, user: User): Observable<Object> {
		return this.http.put(`${this.basUrl}/${id}`, user);
	}

	deleteUser(id: number): Observable<Object> {
		return this.http.delete(`${this.basUrl}/${id}`);
	}

}
