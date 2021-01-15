import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropiedadPage } from './propiedad.page';

describe('PropiedadPage', () => {
  let component: PropiedadPage;
  let fixture: ComponentFixture<PropiedadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiedadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropiedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
