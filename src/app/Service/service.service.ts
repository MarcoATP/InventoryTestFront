import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Item } from '../model/Item';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/inventory/';
  urlList = 'http://localhost:8080/inventory/items';
  urlAdd = 'http://localhost:8080/inventory/insertItem';
  urlEdit = 'http://localhost:8080/inventory/updateItem';
  urlDelete = 'http://localhost:8080/inventory/deletItem';
  urlWithdraw = 'http://localhost:8080/inventory/withdrawAmount';
  urlDeposite = 'http://localhost:8080/inventory/depositeAmount';

  getItems() {
    return this.http.get<Item[]>(this.urlList);
  }

  getItemById(no: number) {
    return this.http.get<Item>(this.url+""+no);
  }

  createItem(item: Item) {
    return this.http.post<Item[]>(this.urlAdd, item);
  }

  updateItem(item: Item) {
    return this.http.put<Item[]>(this.urlEdit, item);
  }

  deleteItem(no: number) {
    return this.http.delete<Item[]>(this.url+""+no);
  }

  withdrawAmountItem(item: Item) {
    return this.http.put<Item[]>(this.urlWithdraw,item);
  }

  depositeAmountItem(item: Item) {
    return this.http.put<Item[]>(this.urlDeposite,item);
  }
}
