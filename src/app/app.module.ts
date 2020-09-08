import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuComponent} from './menu/menu.component';
import { PromiseComponent } from './promise/promise.component';
import {AboutMoreComponent} from './about-more/about-more.component';
import {AboutComponent} from './about/about.component';
import {ErformanceComponent} from './erformance/erformance.component';
import {ExitComponent} from './exit/exit.component';
import {LegendsComponent} from './legends/legends.component';
import {TrapComponent} from './trap/trap.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ActivityComponent } from './activity/activity.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CaluselComponent } from './calusel/calusel.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutMoreComponent,
    AboutComponent,
    ErformanceComponent,
    ExitComponent,
    LegendsComponent,
    TrapComponent,
    PromiseComponent,
    MainPageComponent,
    ActivityComponent,
    ContactsComponent,
    ReviewsComponent,
    CaluselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
