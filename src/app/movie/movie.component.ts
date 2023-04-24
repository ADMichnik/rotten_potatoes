import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  type ='';
  id ='';
  url ='';
  movies: any;
  movie: any;

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    // initialization function gets paramaters from object loaded in  home component and assigs it to variable
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }
    // based on type function assings path corresponding to it
    this.getMovie();
  }

  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: {id: string}) => movie.id == this.id
      );
      if (index > -1) {
        this.movie = this.movies[index];
      }
    })
  }

  // this function assings objects avaiable in corresponding .json file  to movies array
  // then based on index it looks for correct movie
  // then in assigs object to movie variable

}
