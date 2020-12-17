import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public section: string;

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Presupuesto',
      url: 'budget',
      icon: 'warning'
    },
    {
      title: 'Unidades',
      url: 'unit',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    this.section = this.activatedRoute.snapshot.paramMap.get('id');
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
