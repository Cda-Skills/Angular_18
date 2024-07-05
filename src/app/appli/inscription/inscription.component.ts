import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})

export class InscriptionComponent implements OnInit {
	
 	user: User = new User();

	constructor(private userService: UserService, private router: Router) { }

	ngOnInit(): void {}

	saveUser() {
		this.userService.createUser(this.user).subscribe({
			next: (data) => {
				console.log(data);
				this.redirectToUserList();
			},
			error: (e) => {
				console.log(e);
			}
		});
	}

	redirectToUserList() {
		this.router.navigate(['/liste']);
	}

	onSubmit() {
		console.log("This is the create button !!");
		
		this.saveUser();
	}

}




