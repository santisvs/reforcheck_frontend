import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InodoroPage } from './inodoro.page';

describe('InodoroPage', () => {
  let component: InodoroPage;
  let fixture: ComponentFixture<InodoroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InodoroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InodoroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
