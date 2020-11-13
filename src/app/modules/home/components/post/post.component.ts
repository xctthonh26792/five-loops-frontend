import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, AfterViewInit, Injector, Type, ViewChild, Component } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { StorageService, ModalService, ToastrService, SeoService } from '../../../../services';
import { Utils } from '../../../../utils';
import * as _ from 'lodash';
import { environment } from '../../../../../environments/environment'
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private injector: Injector, private route: ActivatedRoute, private modal: ModalService,
    private toastr: ToastrService, seo: SeoService, private router: Router) {
    this.posts = _.get(route.snapshot.data, 'posts');
    this.tops = _.get(route.snapshot.data, 'tops');
    this.banners = _.get(route.snapshot.data, 'banners');
    this.url = environment.api_url;
  }

  posts: Array<any>;
  tops: Array<any>;
  url: string;
  banners: Array<any>;
  slides: Array<any>;

  ngOnInit() {
    this.slides = []
    _.forEach(_.get(this.banners, 'urls'), x => {
      this.slides.push({
        image: `${this.url}/${x}`
      })
    })
  }

  detail(code) {
    this.router.navigateByUrl(`detail/${code}`)
  }

  view_more() {
    this.router.navigateByUrl(`shop`)
  }
}
