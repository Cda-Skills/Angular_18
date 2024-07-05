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

	/* updateUser(): Observable<Object> {
	
		console.log('How does Angular works ??');
	} */

	deleteUser(id: number): Observable<Object> {
		return this.http.delete(`${this.basUrl}/${id}`);
	}
	
	deleteAllUsers(): Observable<Object> {
		return this.http.delete(`${this.basUrl}`);
	}

}
