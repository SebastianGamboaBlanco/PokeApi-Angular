import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonesAguaComponent } from './pokemones-agua.component';

describe('PokemonesAguaComponent', () => {
  let component: PokemonesAguaComponent;
  let fixture: ComponentFixture<PokemonesAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonesAguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonesAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
