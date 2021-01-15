import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantaPage } from './planta.page';

describe('PlantaPage', () => {
  let component: PlantaPage;
  let fixture: ComponentFixture<PlantaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
