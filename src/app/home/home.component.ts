import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor (private http: HttpClient, private router: Router) {}

  // 2. we need http client to get data -> injecting it in constructor and importing from @angular/common/http
  // 3. we also need to app HttpClienModule into app.module.ts

  ngOnInit() {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  // 1.calling getTrenfingMovies on ngOnInit hook so it gets the data from data file (ussually data is send in this format by API)

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies)=> {
      this.trendingMovies = movies;
    });
  }

  getTheatreMovies() {
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies)=> {
      this.theatreMovies = movies;
    });
  }

  getPopularMovies() {
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies)=> {
      this.popularMovies = movies;
    });
  }
  // 4.we can now use http get() method to get data and assign every object to array


  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }

  // 5. we add function to navigate to specific movie. For this we need to add router in constructor function
  // we must also change some parameters in app-routing.module.ts
}
