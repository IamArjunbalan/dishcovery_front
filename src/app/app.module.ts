import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { LandComponent } from './land/land.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { ViewComponent } from './view/view.component';
import { ReviewComponent } from './review/review.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { MealplanComponent } from './mealplan/mealplan.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { ViewreviewComponent } from './viewreview/viewreview.component';
import {HttpClientModule} from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MydishComponent } from './mydish/mydish.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegComponent,
    LandComponent,
    AddDishComponent,
    DishListComponent,
    ViewComponent,
    ReviewComponent,
    AdminDashComponent,
    MealplanComponent,
    AdmindashComponent,
    ViewreviewComponent,
    MydishComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
