import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IluminacionPage } from './iluminacion.page';

describe('IluminacionPage', () => {
  let component: IluminacionPage;
  let fixture: ComponentFixture<IluminacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IluminacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IluminacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
