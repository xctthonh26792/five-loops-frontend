import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { StorageService } from '../../../services';

@Injectable()
export class TrueResolve implements Resolve<Object> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true
  }
}

@Injectable()
export class FalseResolve implements Resolve<Object> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return false
  }
}
