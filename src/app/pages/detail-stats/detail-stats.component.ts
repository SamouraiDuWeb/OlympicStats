import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartData } from '../../core/models/ChartData';
import { ChartOptions } from '../../core/models/ChartOptions';
import { Subscription } from 'rxjs';
import { OlympicCountry } from 'src/app/core/models/Olympic';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-detail-stats',
  templateUrl: './detail-stats.component.html',
  styleUrls: ['./detail-stats.component.scss'],
})
export class DetailStatsComponent implements OnInit, OnDestroy {

  countryName?: string;
  countryId?: number;

  currentCountryStats?: OlympicCountry;

  sub!: Subscription;
  olympics?: OlympicCountry[];
  errorMessage: string = '';

  entriesLabel: string = 'Number of entries';
  medalsLabel: string = 'Total number medals';
  athleteLabel: string = 'Total number of athletes';
  entriesCount?: number = 0;
  medalsCount?: number = 0;
  athleteCount?: number = 0;
  chartData: any;
  chartType: string = 'line';
  chartOptions: any;

  defaultCountry: OlympicCountry = {
    id: 1,
    country: 'Italy',
    participations: [
      {
        id: 1,
        year: 2012,
        city: 'Londres',
        medalsCount: 28,
        athleteCount: 372,
      },
      {
        id: 2,
        year: 2016,
        city: 'Rio de Janeiro',
        medalsCount: 28,
        athleteCount: 375,
      },
      {
        id: 3,
        year: 2020,
        city: 'Tokyo',
        medalsCount: 40,
        athleteCount: 381,
      },
    ],
  };

  constructor(
    private olympicService: OlympicService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countryId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.sub = this.olympicService.getOlympics().subscribe({
      next: (olympics) => {
        this.olympics = olympics;
        const arr = this.olympics?.filter((ol) => ol.id == this.countryId);
        this.currentCountryStats = arr ? arr[0] : this.defaultCountry;
        this.drawGraphic();
      },
      error: (err) => (this.errorMessage = err),
    });
  }
  drawGraphic() {
    this.entriesCount = this.currentCountryStats?.participations.length;

    this.medalsCount = this.currentCountryStats?.participations
      .map((p) => p.medalsCount)
      .reduce((sum, current) => {
        sum = sum + current;
        return sum;
      });

    this.athleteCount = this.currentCountryStats?.participations
      .map((p) => p.athleteCount)
      .reduce((sum, current) => {
        sum = sum + current;
        return sum;
      });
    const label = this.currentCountryStats?.participations.map((v) => v.year);
    const data = this.currentCountryStats?.participations.map(
      (v) => v.medalsCount
    );
    this.countryName = this.currentCountryStats?.country;
    this.chartType = 'line';
    this.chartData = {
      labels: label,
      datasets: [
        {
          label: 'Medals per year',
          data: data,
        },
      ],
    };
  }

  onBack() : void{
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
