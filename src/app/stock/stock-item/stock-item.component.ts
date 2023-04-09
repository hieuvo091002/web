import { Component, OnInit,Input } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { CreateStockComponent } from '../create-stock/create-stock.component';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent {
  @Input() stock: Stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  public isPositiveChange: string = 'positive';
  public changeAmount: number = 0;
  public changeRatio: number = 0;

  toggleFavorite ()
  {
    this.stock.favorite = !this.stock.favorite;
  }
  ngOnInit (): void
  {
    this.changeAmount = this.stock.price - this.stock.previousPrice;
    this.changeRatio = (this.changeAmount / this.stock.price) * 100;
    if (this.stock.price < this.stock.previousPrice)
    {
      this.isPositiveChange = 'negative';
    }
  }
}
