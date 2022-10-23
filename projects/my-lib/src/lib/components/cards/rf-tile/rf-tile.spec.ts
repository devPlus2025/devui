import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfTile } from './rf-tile';

describe('RfTile', () => {
  let component: RfTile;
  let fixture: ComponentFixture<RfTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfTile ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfTile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
