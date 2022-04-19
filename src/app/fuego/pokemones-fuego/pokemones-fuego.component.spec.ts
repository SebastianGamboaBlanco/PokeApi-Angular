import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonesFuegoComponent } from './pokemones-fuego.component';

describe('PokemonesFuegoComponent', () => {
  let component: PokemonesFuegoComponent;
  let fixture: ComponentFixture<PokemonesFuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonesFuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonesFuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
