import { CanActivateFn } from '@angular/router';
import {  inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const api=inject(ApiService)
  const toastr=inject(ToastrService)
  const router=inject(Router)

  if(api.isLoggedIn()){
    return true
  }
  else{
    toastr.warning("Please Login First")
    router.navigateByUrl('/log')
    return false

  }
};
