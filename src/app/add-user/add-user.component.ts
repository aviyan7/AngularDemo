import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onAdd(){
    alert("New user is added");
    this.router.navigateByUrl('users');
  }

}