import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LavaboPage } from './lavabo.page';

describe('LavaboPage', () => {
  let component: LavaboPage;
  let fixture: ComponentFixture<LavaboPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavaboPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LavaboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
