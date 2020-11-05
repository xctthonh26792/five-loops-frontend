import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, AfterViewInit, Injector, Type, ViewChild, Component } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { StorageService, ModalService, ToastrService, SeoService } from '../../../../services';
import { Utils } from '../../../../utils';
import * as _ from 'lodash';
import { environment } from '../../../../../environments/environment'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  constructor(private injector: Injector, private route: ActivatedRoute, private modal: ModalService,
    private toastr: ToastrService, seo: SeoService, private router: Router) {
    this.posts = _.get(route.snapshot.data, 'posts')
    this.tops = _.get(route.snapshot.data, 'tops')
    this.url = environment.api_url;
  }

  posts: Array<any>;
  tops: Array<any>;
  url: string;

  detail(code) {
    this.router.navigateByUrl(`detail/${code}`)
  }
}
