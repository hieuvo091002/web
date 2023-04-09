import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Stock } from '../model/stock';
import { of as ObservableOf } from 'rxjs';
import { HttpServiceService } from './http-service.service';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  // private stockList: Stock[];
  // constructor(private http: HttpClient) {
  //   this.stockList = [
  //     new Stock("Garena", "GA", 85, 80),
  //   new Stock("GO", "G", 747.32, 747.92),
  //   new Stock("CGV", "C", 91, 90),
  //   new Stock("Ama", "AM", 43, 45),
  //   new Stock("Tw", "TW", 19, 18.03),
  //   ]
  //  }
  //  get(): Observable<Stock[]>{
  //    return  ObservableOf(this.stockList);
  //  }
  //  find(name: string){
  //    return this.stockList.findIndex(s => s.name === name);
  //  }
  //  add(stock: Stock){
  //    if(this.find(stock.name) != -1){
  //       return false;  
  //   }
  //   this.stockList.push(stock);
  //   return true;
  //  }

  //  getStocks(): Observable<Stock[]>{
  //   return this.http.get<Stock[]>('/api/stock',{
  //     headers: new HttpHeaders()
  //     .set('Authorization','MyAuthorizationHeaderValue')
  //     .set('X-EXAMPLE-HEADER','TestValue'),
  //     params:{
  //       q:'test',
  //       test:'value'
  //     },
  //     observe:'body'
  //   });
  //  }

  //  getStocksAsResponse(): Observable<HttpResponse<Stock[]>>{
  //   return this.http.get<Stock[]>('/api/stock',{observe:'response'});
  //  }

  //  getStocksAsEvents(): Observable<HttpEvent<any>>{
  //   return this.http.get('/api/stock',{observe:'events'});
  //  }

  //  getStocksAsString(): Observable<string>{
  //   return this.http.get('/api/stock',{responseType:'text'});
  //  }

  //  getStocksAsBlod(): Observable<Blob>{
  //   return this.http.get('/api/stock',{responseType:'blod'});
  //  }
  private stockList: Stock[] = [];
  constructor(private httpService: HttpServiceService)
  {
    this.httpService.get().subscribe(data =>
      data.stocks.forEach((stock: Stock) =>
        this.stockList.push(stock)));
  }
  get ()
  {
    return this.stockList;
  }
  find (name: string)
  {
    return this.stockList.findIndex(s => s.name === name);
  }
  add (stock: Stock)
  {
    if (this.find(stock.name) != -1)
    {
      return false;
    }
    this.httpService.post(stock).subscribe(s => this.stockList.push(s));
    return true;
  }
}
