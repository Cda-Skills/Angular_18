import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopmenuComponent } from './general/topmenu/topmenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_18';
}
