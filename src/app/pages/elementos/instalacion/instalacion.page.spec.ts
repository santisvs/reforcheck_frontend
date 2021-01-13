import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstalacionPage } from './instalacion.page';

describe('InstalacionPage', () => {
  let component: InstalacionPage;
  let fixture: ComponentFixture<InstalacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstalacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
