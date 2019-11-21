import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFiltersComponent } from './pokemon-filters.component';

describe('PokemonFiltersComponent', () => {
  let component: PokemonFiltersComponent;
  let fixture: ComponentFixture<PokemonFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
