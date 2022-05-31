import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieFormeComponent } from './categorie-forme.component';

describe('CategorieFormeComponent', () => {
  let component: CategorieFormeComponent;
  let fixture: ComponentFixture<CategorieFormeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieFormeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieFormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
