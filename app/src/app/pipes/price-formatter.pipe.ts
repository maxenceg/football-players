import { Pipe, PipeTransform } from '@angular/core';
import { PlayerSignin } from '../models/player.model';

@Pipe({
  name: 'priceFormatter',
})
export class PriceFormatterPipe implements PipeTransform {
  transform(price: PlayerSignin): string {
    if (!price) {
      return '';
    }

    switch (price.currency) {
      case 'eur':
        return price.amount.toLocaleString() + '€';
      case 'gpp':
        return '£' + price.amount.toLocaleString();
      default:
        return price.amount.toLocaleString() + price.currency;
    }
  }
}
