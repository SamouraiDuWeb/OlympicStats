import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OlympicCountry } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-global-stats',
  templateUrl: './global-stats.component.html',
  styleUrls: ['./global-stats.component.scss']
})
export class GlobalStatsComponent implements OnInit, OnDestroy {
  public olympics?: OlympicCountry[];
  errorMessage: string = '';
  sub! : Subscription;
  chartData: any;
  chartType: string = "";

  joLabel : string = "Number of JOs";
  countryLabel : string = "Number of countries";
  joCount?: number = 0;
  countryCount? : number = 0;

  constructor(private olympicService: OlympicService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.olympicService.getOlympics().subscribe({
      next: olympics => {
          this.olympics = olympics;
          this.drawChart();
      },
      error: err => this.errorMessage = err
  });
  }
  drawChart() {
    const label = this.olympics?.map( olympic => olympic.country);
    const data = this.olympics?.map(val => {
      //number of JOs
      this.joCount = val.participations.length;
      return val.participations.map(p => p.medalsCount).reduce((sum,current) => {
        sum = sum + current;
        return sum;
      })
    });
    //number of countries
    this.countryCount = this.olympics?.length;
    this.chartType = "pie";
    this.chartData = {
      labels: label,
      datasets: [
          {
              data: data
          }
      ]
  };
  }

}
