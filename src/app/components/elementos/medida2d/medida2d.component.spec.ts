import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Medida2dComponent } from './medida2d.component';

describe('Medida2dComponent', () => {
  let component: Medida2dComponent;
  let fixture: ComponentFixture<Medida2dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Medida2dComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Medida2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
