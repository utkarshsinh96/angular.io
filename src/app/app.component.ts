import { Component } from '@angular/core';
// import { ApiService } from '../api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie';
  private apiUrl='https://api.themoviedb.org/3/movie/550?api_key=779eeb74ebac33d316c68a4d86a92e84';
  data: any={};

}
// 779eeb74ebac33d316c68a4d86a92e84
// https://api.themoviedb.org/3/movie/550?api_key=779eeb74ebac33d316c68a4d86a92e84