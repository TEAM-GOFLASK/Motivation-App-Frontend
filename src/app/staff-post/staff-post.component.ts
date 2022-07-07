import { Component, OnInit } from '@angular/core';
import { StaffService } from '../_services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-post',
  templateUrl: './staff-post.component.html',
  styleUrls: ['./staff-post.component.css']
})
export class StaffPostComponent implements OnInit {
  postArr: any = [];
  ngOnInit() {
    this.getPosts();
  }

  constructor(
    private router: Router,
    private staffService: StaffService,
  ) { }

  getPosts() {
    this.staffService.getPosts().subscribe(data => {
      this.postArr = data;
    })
  }
}

// export class StaffPageComponent implements OnInit {

//   constructor(private TestEveningServicesService: TestServicesService) { }
//   listposts: Post [] = [];
//   ngOnInit(): void {

//     this.TestEveningServicesService.getPosts()
//     .subscribe(
//       data=>{
//         this.listposts=data
//       }
//     );
//   }

// }
