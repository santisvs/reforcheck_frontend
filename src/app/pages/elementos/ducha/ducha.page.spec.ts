import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DuchaPage } from './ducha.page';

describe('DuchaPage', () => {
  let component: DuchaPage;
  let fixture: ComponentFixture<DuchaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuchaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DuchaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
