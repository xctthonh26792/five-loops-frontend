import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PrivacyApi } from '../../../apis';
import { StorageService } from '../../../services';

@Injectable()
export class PrivacyResolve implements Resolve<Object> {
  constructor(private router: Router, private api: PrivacyApi, private storage: StorageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.api.get('privacy')
  }
}

@Injectable()
export class PrivacyDataResolve implements Resolve<Object> {
  constructor(private router: Router, private api: PrivacyApi, private storage: StorageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return 'Privacy policy';
  }
}

@Injectable()
export class TermOfServiceResolve implements Resolve<Object> {
  constructor(private router: Router, private api: PrivacyApi, private storage: StorageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.api.get('term-of-service')
  }
}

@Injectable()
export class TermOfServiceDataResolve implements Resolve<Object> {
  constructor(private router: Router, private api: PrivacyApi, private storage: StorageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return 'Terms & Conditions';
  }
}
