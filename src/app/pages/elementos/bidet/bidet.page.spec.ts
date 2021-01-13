import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BidetPage } from './bidet.page';

describe('BidetPage', () => {
  let component: BidetPage;
  let fixture: ComponentFixture<BidetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BidetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
