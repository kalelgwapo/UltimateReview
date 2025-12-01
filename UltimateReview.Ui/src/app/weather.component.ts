import { Component, OnInit, signal } from '@angular/core';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-weather',
  standalone: true,
  template: `
    <h2>Weather Forecast</h2>
    <div *ngIf="isLoading()">Loading weather data...</div>
    <div *ngIf="error()" style="color: red;">{{ error() }}</div>
    <table border="1" *ngIf="weatherList().length && !isLoading() && !error()">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (°C)</th>
          <th>Temp. (°F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of weatherList()">
          <td>{{ item.date }}</td>
          <td>{{ item.temperatureC }}</td>
          <td>{{ item.temperatureF }}</td>
          <td>{{ item.summary }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class WeatherComponent implements OnInit {
  weatherList = signal<WeatherForecast[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);

  ngOnInit() {
    fetch('http://localhost:8787/weatherforecast')
      .then(res => {
        if (!res.ok) throw new Error('Server error: ' + res.status);
        return res.json();
      })
      .then(data => {
        this.weatherList.set(data);
        this.isLoading.set(false);
      })
      .catch(err => {
        this.error.set('Could not load weather data. Backend not running or blocked by CORS.');
        this.isLoading.set(false);
      });
  }
}
