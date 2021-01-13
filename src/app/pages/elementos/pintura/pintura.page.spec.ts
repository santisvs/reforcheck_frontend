import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PinturaPage } from './pintura.page';

describe('PinturaPage', () => {
  let component: PinturaPage;
  let fixture: ComponentFixture<PinturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PinturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
