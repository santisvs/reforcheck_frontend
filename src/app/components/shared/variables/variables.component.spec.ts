import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VariablesComponent } from './variables.component';

describe('VariablesComponent', () => {
  let component: VariablesComponent;
  let fixture: ComponentFixture<VariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
