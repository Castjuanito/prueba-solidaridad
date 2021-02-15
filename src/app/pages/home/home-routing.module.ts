import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage

  },
  {
    path: 'login', component: HomePage,
    children: [{ path: '', component: LoginComponent }]
},
{
    path: 'signup', component: HomePage,
    children: [{ path: '', component: SignupComponent }]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
