import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
  { path: 'curriculum/:id', component: CurriculumComponent },
];
