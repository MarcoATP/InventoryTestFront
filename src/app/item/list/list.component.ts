import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Item } from 'src/app/model/Item';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  quanty: number;
  items: Item[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getItems().subscribe(data => {
      this.items = data;
    })
  }

  edit(item: Item) {
    localStorage.setItem("no", item.no.toString());
    this.router.navigate(["edit"]);
  }

  delete(item: Item) {
    //localStorage.setItem("no",item.no.toString());
    //this.router.navigate(["delete"]);
    this.service.deleteItem(item.no).subscribe(data => {
      alert("Se eliminó con Exito...!!!");
      this.items = this.items.filter(i => i !== item);

    });
  }

  withdraw(item: Item) {
    if ((item.amountModifier.trim() != "") || this.numberValidation(item)) {
      this.service.withdrawAmountItem(item).subscribe(data => {
        item.amount -= parseInt(item.amountModifier);
      });
    }
  }

  deposite(item: Item) {
    if ((item.amountModifier.trim() != "") || this.numberValidation(item)) {
      this.service.depositeAmountItem(item).subscribe(data => {
        item.amount += parseInt(item.amountModifier);
      });
    }
  }

  numberValidation(item: Item): boolean {
    let amount: number = parseInt(item.amountModifier);
    return !((amount === null) || (typeof amount === "undefined") || (typeof amount === undefined));
  }

}
