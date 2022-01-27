import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { AuthService } from './service/auth.service';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { User3Component } from './user3/user3.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'loginuser', component: LoginuserComponent },
  { path: 'registeruser', component: RegisteruserComponent },
  { path: 'user1', component: User1Component, canActivate: [AuthService] },
  { path: 'user2', component: User2Component, canActivate: [AuthService] },
  { path: 'user3', component: User3Component, canActivate: [AuthService] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
