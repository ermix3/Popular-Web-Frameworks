import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkChartComponent } from './framework-chart.component';

describe('FrameworkChartComponent', () => {
  let component: FrameworkChartComponent;
  let fixture: ComponentFixture<FrameworkChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameworkChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrameworkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
