import { Component, OnInit } from '@angular/core';
import { GetgamesService } from './getgames.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit { 
gameDetails;
filteredGames;

  constructor(private games: GetgamesService) {
    this.games.getGames().subscribe(game => this.filteredGames = this.gameDetails = game);
   }

filter(query: string) {
  this.filteredGames = (query) ?
  this.gameDetails.filter(g => g.title.toLowerCase().includes(query.toLocaleLowerCase())) : this.gameDetails;

}

  ngOnInit() {
     }
}
