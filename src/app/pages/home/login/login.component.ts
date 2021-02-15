import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-loggin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private authenticationService: AuthenticationService,private userService:UserService ) { }

  ngOnInit() {}

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      username: '',
      email: '',
      password1: '',
      password2: '',
    }
  }

  login(form?: NgForm){
    this.authenticationService.login(form.value)
    .pipe(first())
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
        }

      },
      (error) => {console.log(error)});
      //this.authenticationService.getUserId('dfs');
  }
}
