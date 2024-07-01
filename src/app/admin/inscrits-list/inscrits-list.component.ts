import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-inscrits-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inscrits-list.component.html',
  styleUrl: './inscrits-list.component.css'
})
export class InscritsListComponent implements OnInit {


	users: User[] | undefined;

	constructor(private userService: UserService, private router: Router) {

	}

	ngOnInit(): void {
		this.getUsers();
	}

	private getUsers() {
		this.userService.getUserList().subscribe(data => {
			this.users = data;
		});
	}

	updateUser(id: number) {
		this.router.navigate(['inscrits', id]);
	}

	deleteUser(id: number) {
		this.userService.deleteUser(id).subscribe(data => {
			console.log(data);
			this.getUsers();
		});
	}

}
