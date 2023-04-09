import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent   {
  // //public stocks: Stock[];
  // public stocks$: Observable<Stock[]>;
  // //public stocks$: Stock[];

  // constructor(private stockService: StockService) {
  //   this.stocks$ = this.stockService.get();
  //   this.stocks$ = this.stockService.getStocks();
  // }

  // ngOnInit(): void {
  //   this.stockService.getStocksAsResponse()
  //   .subscribe((Response)=>{
  //     console.log('OBSERVE "response" RESPONSE is',Response);
  //   });

  //   this.stockService.getStocksAsString()
  //   .subscribe((Response)=>{
  //     console.log('OBSERVE "response" RESPONSE is',Response);
  //   });

  //   this.stockService.getStocksAsEvents()
  //   .subscribe((Response)=>{
  //     console.log('OBSERVE "response" RESPONSE is',Response);
  //   });

  // }
  public stocks: Stock[];

  constructor(private stockService: StockService) {
    this.stocks = this.stockService.get();
  }
  
  
}
