import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZardToastComponent } from '@shared/components/toast/toast.component';
import { ZardButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ZardToastComponent, ZardButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('taskify');
}
