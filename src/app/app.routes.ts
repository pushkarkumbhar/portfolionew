import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EducationComponent } from './compo/education/education.component';
import { SkillsComponent } from './compo/skills/skills.component';
import { ContactComponent } from './compo/contact/contact.component';
import { HomeComponent } from './compo/home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'education',component:EducationComponent},
    {path:'skills',component:SkillsComponent},
    {path:'contact',component:ContactComponent}
];
