
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(
    private router:Router) { }

  ngOnInit(): void {
  }

  userData=[
    {id:'001',
     name:'Aviyan',
    address:'ktm',
     age:'20',
     class:'4th Sem',
    },
    {id:'002',
    name:'Deepak',
   address:'Bkt',
    age:'24',
    class:'4th Sem',
   },
   {id:'003',
     name:'Milan',
    address:'Sdp',
     age:'18',
     class:'4th Sem',
    },
    {id:'004',
     name:'Arjun',
    address:'Syangja',
     age:'28',
     class:'4th Sem',
    },
  ]

  onUserView(id: string){
    this.router.navigateByUrl('users/edit');
  };

  onAddUser(){
    this.router.navigateByUrl('users/add');
  };

  onDelete(data: any){
    const index = this.userData.indexOf(data);
    this.userData.splice(index, 1);
  };

}
