import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStatsComponent } from './detail-stats.component';

describe('DetailStatsComponent', () => {
  let component: DetailStatsComponent;
  let fixture: ComponentFixture<DetailStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
