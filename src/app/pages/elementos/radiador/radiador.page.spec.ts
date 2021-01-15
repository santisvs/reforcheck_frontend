import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RadiadorPage } from './radiador.page';

describe('RadiadorPage', () => {
  let component: RadiadorPage;
  let fixture: ComponentFixture<RadiadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RadiadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
