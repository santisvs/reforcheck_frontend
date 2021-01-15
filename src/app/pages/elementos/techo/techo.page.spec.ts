import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TechoPage } from './techo.page';

describe('TechoPage', () => {
  let component: TechoPage;
  let fixture: ComponentFixture<TechoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TechoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
