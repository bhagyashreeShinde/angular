import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BannerComponent } from './banner/banner.component';
import { ReceipeSectionComponent } from './receipe-section/receipe-section.component';
import { InvitefriendComponent } from './invitefriend/invitefriend.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BannerComponent,
    ReceipeSectionComponent,
    InvitefriendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
