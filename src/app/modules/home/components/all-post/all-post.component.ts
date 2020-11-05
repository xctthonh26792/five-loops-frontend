import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService, ModalService, ToastrService, StorageService } from '../../../../services';
import { PostApi } from '../../../../apis';
import * as _ from 'lodash';
import { environment } from '../../../../../environments/environment';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements AfterViewInit {

  constructor(injector: Injector, seo: SeoService, route: ActivatedRoute, private api: PostApi, private router: Router, private storage: StorageService) {
    seo.set('app-templates');
    this.models = _.get(route.snapshot.data, 'fetch.models') || [];
    this.total = _.get(route.snapshot.data, 'fetch.count') || 0;
    this.count = _.get(route.snapshot.data, 'fetch.models.length') || 0;
    this.page = 1;
    this.quantity = 9;
    this.url = environment.api_url;
  }
  url: string
  models: Array<any>;
  page: number;
  quantity: number;
  total: number;
  loading: boolean;
  query: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  count: number;

  detail(code) {
    this.router.navigateByUrl(`detail/${code}`);
  }

  search(value: string) {
    this.fetch({ page: this.page, quantity: this.quantity, query: value })
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((page: PageEvent) => {
      this.storage.resolve(this.router.url, page.pageSize)
      this.fetch({
        page: (page.pageIndex + 1),
        quantity: page.pageSize,
        query: this.query
      })
    })
  }

  fetch(value: {
    page: number,
    quantity: number,
    query: string
  }) {
    this.loading = true
    this.api
      .post(`allpost`, {
        page: value.page,
        quantity: value.quantity,
        query: value.query
      })
      .then((response: FetchResult) => {
        this.total = response.count;
        this.models = response.models;
        this.count = response.models.length;
        this.page = value.page;
        this.quantity = value.quantity;
      }).then(() => {
        this.loading = false
      });
  }

}
