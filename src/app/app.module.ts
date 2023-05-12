import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GlobalStatsComponent } from './pages/global-stats/global-stats.component';
import { DetailStatsComponent } from './pages/detail-stats/detail-stats.component';
import { ItemCountComponent } from './pages/item-count/item-count.component';
import { BadgeModule } from 'primeng/badge';
import { ChartModule } from 'primeng/chart';
import { ChartsComponent } from './pages/charts/charts.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, GlobalStatsComponent, DetailStatsComponent, ChartsComponent, ItemCountComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BadgeModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
