import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/Item';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {

  item: Item = new Item();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    let no = localStorage.getItem("no");
    this.service.getItemById(+no).subscribe(data => {
      
      this.item = data;
    });
  }

  save(item:Item) {

    this.service.updateItem(item).subscribe(data => {
      alert("Se actualizó con Exito...!!!");
      this.router.navigate(["list"]);
    });
  }

}
