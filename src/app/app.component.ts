import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'InventoryX';

  constructor(private router: Router) { }

  List() {
    this.router.navigate(["list"]);
  }
  Add() {
    this.router.navigate(["add"]);
  }
  Edit() {
    this.router.navigate(["edit"]);
  }
  Delete() {
    this.router.navigate(["delete"]);
  }
}
