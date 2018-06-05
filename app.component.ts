import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppComponent {
  title = 'app';
}
