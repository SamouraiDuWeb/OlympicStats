import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OlympicCountry } from 'src/app/core/models/Olympic';
import { AppConfig } from 'src/app/core/models/app.config';
import { AppConfigService } from 'src/app/core/services/app.config.service';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { ChartOptions } from 'src/app/core/models/ChartOptions';
import { ChartData } from 'src/app/core/models/ChartData';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  public olympics?: OlympicCountry[];
  errorMessage: string = '';
  sub! : Subscription;
  @Input() chartData!: ChartData;
  @Input() chartType: string = "";

  subscription?: Subscription;

  chartOptions: ChartOptions | undefined;

  config?: AppConfig;
  labelJo : string = "Number of JOs";
  labelCountry : string = "Number of countries";
  countryId? : number;

  constructor(private olympicService: OlympicService, private configService: AppConfigService, private router : Router) {}

  ngOnInit(): void {
    this.drawChart();
  }

  selectData(event: { element: { index: number } }) {
    const labels = this.chartData.labels;
    if (labels && Array.isArray(labels)) {
      const selectedLabel = labels[event.element.index].toString();
      this.getCountryId(selectedLabel);
    }
  }

  getCountryId(countryName : string) {
    this.sub = this.olympicService.getOlympics().subscribe({
      next: olympics => {
          this.olympics = olympics;
          const arr = this.olympics?.filter(ol => ol.country == countryName);
          this.countryId = arr?.length ? arr[0].id : 0;
          this.router.navigate(['/country-stats',this.countryId]);
      },
      error: err => this.errorMessage = err
    });
  }

  drawChart() {
    this.config = this.configService.config;
    this.updateChartOptions();
    this.subscription = this.configService.configUpdate$.subscribe(config => {
        this.config = config;
        this.updateChartOptions();
    });

  }

  updateChartOptions() {
    this.chartOptions = {
      backgroundColor: ['#956065', '#b8cbe7', '#89a1db', '#793d52', '#9780a1']
    }
  }
  DEFAULT_COLORS = ['#956065', '#b8cbe7', '#89a1db', '#793d52', '#9780a1']
}
