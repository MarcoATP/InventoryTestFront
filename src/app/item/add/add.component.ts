import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Item } from 'src/app/model/Item';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {
  item: Item = new Item();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  save(item:Item){
    this.service.createItem(item).subscribe(data=>{
      alert("Se agregó con Exito...!!!");
      this.router.navigate(["list"]);
    })
  }
}
