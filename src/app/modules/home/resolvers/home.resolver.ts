import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PostApi } from '../../../apis';
import { StorageService } from '../../../services';
import _ from 'lodash';

@Injectable()
export class HomeResolve implements Resolve<Object> {
  constructor(private router: Router, private api: PostApi, private storage: StorageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.api.get("getall");
  }
}

@Injectable()
export class TopProductResolve implements Resolve<Object> {
  constructor(private router: Router, private api: PostApi, private storage: StorageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.api.get("top6");
  }
}

@Injectable()
export class ProductDetailResolve implements Resolve<Object> {
  constructor(private router: Router, private api: PostApi, private storage: StorageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const path: string = _.get(route, 'params.path')
    const code = path.substr(path.lastIndexOf('-') + 1);
    return this.api.get(`detail/${code}`)
  }
}
