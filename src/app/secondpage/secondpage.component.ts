import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {

posts$:Object;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    );
  }
}
