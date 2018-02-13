import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetgamesService {
private url = 'https://fullstackchallenege.herokuapp.com/all' ;
  constructor(private http: HttpClient) { }

  getGames()  {
    return this.http.get(this.url);
  }



}
