import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RodapiePage } from './rodapie.page';

describe('RodapiePage', () => {
  let component: RodapiePage;
  let fixture: ComponentFixture<RodapiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodapiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RodapiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
