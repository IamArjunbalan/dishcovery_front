import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandComponent } from './land/land.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { ViewComponent } from './view/view.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { ReviewComponent } from './review/review.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { MealplanComponent } from './mealplan/mealplan.component';
import { ViewreviewComponent } from './viewreview/viewreview.component';
import { authGuard } from './guards/auth.guard';
import { MydishComponent } from './mydish/mydish.component';


const routes: Routes = [
  {path:'',component:LandComponent},
  {path:'log',component:LoginComponent},
  {path:'reg',component:RegComponent},
  {path:'add',canActivate:[authGuard],component:AddDishComponent},
  {path:'view/:id',canActivate:[authGuard],component:ViewComponent},
  {path:'list',canActivate:[authGuard],component:DishListComponent},
  {path:'review',component:ReviewComponent},
  {path:'admindash',canActivate:[authGuard],component:AdminDashComponent},
  {path:'dishlist',canActivate:[authGuard],component:DishListComponent},
  {path:'plan',canActivate:[authGuard],component:MealplanComponent},
  {path:'viewreview',component:ViewreviewComponent},
  {path:'mydish', canActivate:[authGuard],component:MydishComponent},
  

  

  {path:'**',redirectTo:''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
