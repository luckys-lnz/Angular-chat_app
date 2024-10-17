import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatTopComponent } from './chat-top/chat-top.component';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatTopComponent, DashboardOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-chat_app';
}
