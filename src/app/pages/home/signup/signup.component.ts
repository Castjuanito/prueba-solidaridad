import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.resetForm();
  }

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

  signup(form: NgForm){
    this.userService.registration(form.value)
    .pipe(first())
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
         // this.router.navigate([this.returnUrl]);
        }

      },
      (error) => {console.log(error)});
  }

}
