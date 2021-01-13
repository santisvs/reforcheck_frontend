import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaneraPage } from './banera.page';

describe('BaneraPage', () => {
  let component: BaneraPage;
  let fixture: ComponentFixture<BaneraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaneraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaneraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
