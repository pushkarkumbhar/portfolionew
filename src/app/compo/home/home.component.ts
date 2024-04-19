import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { EducationComponent } from '../education/education.component';
import { ContactComponent } from '../contact/contact.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SkillsComponent,EducationComponent,ContactComponent,RouterLink,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
