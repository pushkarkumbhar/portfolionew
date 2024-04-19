import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { EducationComponent } from './compo/education/education.component';
import { SkillsComponent } from './compo/skills/skills.component';
import { ContactComponent } from './compo/contact/contact.component';
import { HomeComponent } from './compo/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,RouterLink,RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
