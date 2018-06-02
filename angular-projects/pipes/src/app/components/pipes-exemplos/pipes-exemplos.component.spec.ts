/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PipesExemplosComponent } from './pipes-exemplos.component';

describe('PipesExemplosComponent', () => {
  let component: PipesExemplosComponent;
  let fixture: ComponentFixture<PipesExemplosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesExemplosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesExemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
