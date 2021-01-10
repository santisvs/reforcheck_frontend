import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InmueblePage } from './inmueble.page';

describe('InmueblePage', () => {
  let component: InmueblePage;
  let fixture: ComponentFixture<InmueblePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmueblePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InmueblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
