import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';
import { SuperheroComponent } from 'src/app/modules/superhero/superhero.component';
import { TablesComponent } from 'src/app/modules/tables/tables.component';
import { InsertComponent } from '../../modules/insert/insert.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children:[
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'insert',
        component: InsertComponent,
      },
      {
        path: 'tables',
        component: TablesComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'superhero',
        component: SuperheroComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
