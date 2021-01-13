import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoladoPage } from './solado.page';

describe('SoladoPage', () => {
  let component: SoladoPage;
  let fixture: ComponentFixture<SoladoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoladoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
