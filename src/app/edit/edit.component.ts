import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , AbstractControl} from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: any = {};
  id: number = 0;

  userForm: FormGroup = new FormGroup({});

  submitted = false;
  disabled = false;

  constructor( 
    private form: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ){}

    getId() {
      this.activatedRoute.params.subscribe((param) => (this.id = param['id']));
    }

    ngOnInit(): void {
      this.getId();
      this.activatedRoute.queryParams.subscribe((res) => {
        this.user = res;
        console.log(this.user);
      });
      this.initForm();
    }
  
    initForm(){
      this.userForm = this.form.group({
        name: this.user.name,
        email: this.user.email,
        address: this.user.address,
        age: this.user.age,
      });
    }

    onSubmit(user: any): void {
      this.userService.onEdit(this.id, user).subscribe(
        (response: any) => {
          console.log(response);
          this.router.navigate(['/home/users']);
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
