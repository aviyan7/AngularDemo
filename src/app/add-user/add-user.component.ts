import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, AbstractControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  submitted = false;
  disabled = false;
  constructor( 
    private form: FormBuilder,
    private userService: UserService,
    private router: Router
    ){}
  

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm = this.form.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      pass: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
    });
  }

    onSubmit(user: any): void {
      this.userService.addUsers(user).subscribe(
        (response: any) => {
          console.log(response);
        }, (error: any) => {
          console.error(error);
        }
      );
    }

    onBack(){
      this.router.navigateByUrl('/home/users');
    }

    get forms(): { [key: string]: AbstractControl } {
      return this.userForm.controls;
    }

}
