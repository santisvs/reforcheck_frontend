import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnitPage } from './unit.page';

describe('UnitPage', () => {
  let component: UnitPage;
  let fixture: ComponentFixture<UnitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
