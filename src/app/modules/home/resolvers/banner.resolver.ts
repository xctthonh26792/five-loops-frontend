import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { BannerApi } from '../../../apis';
import { StorageService } from '../../../services';

@Injectable()
export class BannerResolve implements Resolve<Object> {
  constructor(private router: Router, private api: BannerApi, private storage: StorageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.api.get('TENJIN_BANNER')
  }
}
