import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveformComponent implements OnInit {

  reactiveForm: FormGroup = new FormGroup({});
  constructor( 
    private form: FormBuilder){}
  

  ngOnInit(): void {
    this.reactiveForm = this.form.group({
      firstname: [undefined],
      lastname: [undefined],
      email: [undefined],
      address: [undefined],
      password: [undefined],
    });
  }

    onSubmitForm(form: any): void {
     console.log(form.value);
    }
  }


