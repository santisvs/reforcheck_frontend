import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropietarioPage } from './propietario.page';

describe('PropietarioPage', () => {
  let component: PropietarioPage;
  let fixture: ComponentFixture<PropietarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropietarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropietarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
