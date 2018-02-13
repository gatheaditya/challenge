import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetprojectsService {
  getdetails(): any {
   return  this.http.get('http://starlord.hackerearth.com/kickstarter').subscribe();
  }
  constructor(private http: HttpClient) { }
ngonInIt(): void {
  this.getdetails();
}
}
