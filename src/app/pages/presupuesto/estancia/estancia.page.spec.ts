import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstanciaPage } from './estancia.page';

describe('EstanciaPage', () => {
  let component: EstanciaPage;
  let fixture: ComponentFixture<EstanciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstanciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstanciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
