import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public section: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.section = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
