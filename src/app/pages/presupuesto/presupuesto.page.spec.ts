import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresupuestoPage } from './presupuesto.page';

describe('PresupuestoPage', () => {
  let component: PresupuestoPage;
  let fixture: ComponentFixture<PresupuestoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresupuestoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresupuestoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
