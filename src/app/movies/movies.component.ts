import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  articles;
  public arr = [];
 // public movie: any;

  constructor(private service: MoviesService) { }

  ngOnInit() {
     console.log("IS this getting Triggered")
    // this.service.getNews().subscribe((data) => {
    // this.articles = data
    //   console.log(data);
    this.service.getNews()
    .subscribe((data={}) =>{
      console.log(data);
      this.arr = data;
    })
    }


    };

