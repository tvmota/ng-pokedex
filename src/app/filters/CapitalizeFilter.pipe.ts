import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})

export class CapitalizeFiltro implements PipeTransform {
  transform(titulo: string) {
    if (titulo) {
      return titulo.charAt(0).toUpperCase() + titulo.slice(1);
    }
    return titulo;
  }
}
