import { Component } from '@angular/core';
import {
  IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barChartOutline, mapOutline, settingsOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    IonHeader,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar
  ],
  styleUrl: './tabs.page.scss',
  templateUrl: './tabs.page.html'
})
export class TabsPage {
  constructor() {
    addIcons({ barChartOutline, timeOutline, mapOutline, settingsOutline });
  }
}
