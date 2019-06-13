import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { FotoComponent } from './foto/foto.component';
import { BadgeComponent } from './badge/badge.component';

import { CapitalizeFiltro } from '../../filters/CapitalizeFilter.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CardComponent,
    FotoComponent,
    BadgeComponent,
    CapitalizeFiltro
  ],
  exports: [CardComponent, BadgeComponent, CapitalizeFiltro]
})
export class CardModule {}
