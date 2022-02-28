
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(
    private router:Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.listAllUsers();
  }
//Only in the case of static data
  // userData=[
  //   {id:'001',
  //    name:'Aviyan',
  //   address:'ktm',
  //    age:'20',
  //    class:'4th Sem',
  //   },
  //   {id:'002',
  //   name:'Deepak',
  //  address:'Bkt',
  //   age:'24',
  //   class:'4th Sem',
  //  },
  //  {id:'003',
  //    name:'Milan',
  //   address:'Sdp',
  //    age:'18',
  //    class:'4th Sem',
  //   },
  //   {id:'004',
  //    name:'Arjun',
  //   address:'Syangja',
  //    age:'28',
  //    class:'4th Sem',
  //   },
  // ]

  usersResponse: any | [] = [];

  onUserView(id: string | undefined,
    paramName: string | undefined,
    paramEmail: string | undefined,
    paramAddress: string | undefined,
    paramAge: string | undefined){
    this.router.navigate(['home/users/view', id],{
      queryParams: {
        name: paramName,
        email: paramEmail,
        address: paramAddress,
        age: paramAge
      },
    });
  }

  onAddUser(){
    this.router.navigateByUrl('home/users/add');
  };

  onDelete(id: any): void{
  let f = confirm("Are you sure you want to delete");
  if(f){
      this.userService.onDelete(id).subscribe(
        response => {
          console.log(response);
          this.usersResponse = response;
          alert('The user: '+id+' has been deleted');
        },
        error => {
          console.error();
        }
      );
}
else{
return;
}
  }

    //Only in case of static data deletion
    // const index = this.userData.indexOf(data);
    // this.userData.splice(index, 1);
  

  onEdit(id: string | undefined,
    paramName: string | undefined,
    paramEmail: string | undefined,
    paramAddress: string | undefined,
    paramAge: string | undefined){
    this.router.navigate(['home/users/edit', id],{
      queryParams: {
        name: paramName,
        email: paramEmail,
        address: paramAddress,
        age: paramAge
      },
    });
  }
    // this.userService.onView(id).subscribe(
    //   response => {
    //     console.log(response);
    //     this.usersResponse = response;
    //   },
    //   error => {
    //     console.error();
    //   }
    // );
    // this.router.navigateByUrl('home/users/edit');
  

  listAllUsers(): void{
    this.userService.listAllUsers().subscribe(
      response => {
        console.log(response);
        this.usersResponse = response;
      },
      error => {
        console.error();
      } 
    );
  }

}
