import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  trendingMovies: any;

  constructor (private http: HttpClient) {}

  // 2. we need http client to get data -> injecting it in constructor and importing from @angular/common/http
  // 3. we also need to app HttpClienModule into app.module.ts

  ngOnInit() {
    this.getTrendingMovies();
  }

  // 1.calling getTrenfingMovies on ngOnInit hook so it gets the data from data file (ussually data is send in this format by API)

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies)=> {
      this.trendingMovies = movies;
      console.log(movies);
    });
  }

  // 4.we can now use http get() method to get data and assign every object to array

}
