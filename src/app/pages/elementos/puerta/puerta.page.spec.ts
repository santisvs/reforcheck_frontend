import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuertaPage } from './puerta.page';

describe('PuertaPage', () => {
  let component: PuertaPage;
  let fixture: ComponentFixture<PuertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
