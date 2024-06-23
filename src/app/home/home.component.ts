import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent , ServicesComponent , ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
