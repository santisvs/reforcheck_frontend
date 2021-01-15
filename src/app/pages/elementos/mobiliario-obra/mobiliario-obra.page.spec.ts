import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobiliarioObraPage } from './mobiliario-obra.page';

describe('MobiliarioObraPage', () => {
  let component: MobiliarioObraPage;
  let fixture: ComponentFixture<MobiliarioObraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiliarioObraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobiliarioObraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
