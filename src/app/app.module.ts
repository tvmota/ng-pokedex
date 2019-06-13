import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CardModule } from './components/card/card.module';
import { AutoCompleteModule } from './components/autocomplete/autocomplete.module';
import { EvolutionListComponent } from './components/evolution-list/evolution-list.component';
import { InitialPageComponent } from './pages/initial/initial.component';
import { DetailPageComponent } from './pages/detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonService } from './services/PokemonService';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    DetailPageComponent,
    EvolutionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CardModule,
    AutoCompleteModule,
    AppRoutingModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
