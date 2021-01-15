import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClimatizacionPage } from './climatizacion.page';

describe('ClimatizacionPage', () => {
  let component: ClimatizacionPage;
  let fixture: ComponentFixture<ClimatizacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimatizacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClimatizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
