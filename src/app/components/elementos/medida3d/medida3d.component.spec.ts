import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Medida3dComponent } from './medida3d.component';

describe('Medida3dComponent', () => {
  let component: Medida3dComponent;
  let fixture: ComponentFixture<Medida3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Medida3dComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Medida3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
