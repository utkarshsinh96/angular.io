import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private http: HttpClient) { }
    
   getNews() {
      return this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=779eeb74ebac33d316c68a4d86a92e84`);
    }
}
