import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PostApi } from '../../../apis';
import { StorageService } from '../../../services';
@Injectable()
export class PostResolve implements Resolve<Object> {
  constructor(private router: Router, private api: PostApi, private storage: StorageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const quantity = this.storage.resolve(state.url) || 9;
    return this.api.post(`allpost`, {
      page: 1,
      quantity: quantity,
      query: ''
    });
  }
}
