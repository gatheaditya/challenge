import { Component, OnInit } from '@angular/core';
import { GetprojectsService } from '../getprojects.service';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
projects;
  constructor(private getdetails: GetprojectsService) { }

  ngOnInit() {
this.projects = this.getdetails.getdetails();
  }

}
