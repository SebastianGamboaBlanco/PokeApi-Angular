import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonesPlantaComponent } from './pokemones-planta.component';

describe('PokemonesPlantaComponent', () => {
  let component: PokemonesPlantaComponent;
  let fixture: ComponentFixture<PokemonesPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonesPlantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonesPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
