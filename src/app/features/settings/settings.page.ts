import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [IonContent],
  styleUrl: './settings.page.scss',
  templateUrl: './settings.page.html'
})
export class SettingsPage {}
