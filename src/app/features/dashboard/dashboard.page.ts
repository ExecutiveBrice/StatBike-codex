import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [IonContent],
  styleUrl: './dashboard.page.scss',
  templateUrl: './dashboard.page.html'
})
export class DashboardPage {}
