import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { HttpClientModule} from '@angular/common/http';
import { GetprojectsService } from './getprojects.service';
import { GamesComponent } from './games/games.component';
import { GetgamesService } from './games/getgames.service';



@NgModule({
  declarations: [
    AppComponent,
    ProjectdetailsComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
      ],
  providers: [GetprojectsService,
  GetgamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
