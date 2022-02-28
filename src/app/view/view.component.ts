import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 user: any = {};
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
 
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log("param: ", res);
      this.user = res;
    });
  }

  onBack(){
    this.router.navigateByUrl('home/users');
  }

}
