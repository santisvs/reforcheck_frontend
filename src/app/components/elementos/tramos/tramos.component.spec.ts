import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TramosComponent } from './tramos.component';

describe('TramosComponent', () => {
  let component: TramosComponent;
  let fixture: ComponentFixture<TramosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TramosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
