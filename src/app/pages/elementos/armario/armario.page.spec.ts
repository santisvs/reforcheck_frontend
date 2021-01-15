import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArmarioPage } from './armario.page';

describe('ArmarioPage', () => {
  let component: ArmarioPage;
  let fixture: ComponentFixture<ArmarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArmarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
