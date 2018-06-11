import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user$:any;
  constructor(private data:DataService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      params => this.user$ = params.id
    );  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      result => this.user$ = result
    );
  }

}
