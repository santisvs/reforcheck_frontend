import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.page.html',
  styleUrls: ['./unit.page.scss'],
})
export class UnitPage implements OnInit {

  private title: any;

  constructor() { }

  ngOnInit() {
    this.title = "Unidades";
  }


}
