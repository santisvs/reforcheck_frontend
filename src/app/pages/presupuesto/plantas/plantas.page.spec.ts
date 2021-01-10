import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantasPage } from './plantas.page';

describe('PlantasPage', () => {
  let component: PlantasPage;
  let fixture: ComponentFixture<PlantasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
