import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RevestimientoPage } from './revestimiento.page';

describe('RevestimientoPage', () => {
  let component: RevestimientoPage;
  let fixture: ComponentFixture<RevestimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevestimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RevestimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
