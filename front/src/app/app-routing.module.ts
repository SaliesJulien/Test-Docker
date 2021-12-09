import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from "src/app/presentation/pages/auth-page/auth-page.component"
import { HomePageComponent } from './presentation/pages/home-page/home-page/home-page.component';

const routes: Routes = [
  { path: 'auth', component: AuthPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
