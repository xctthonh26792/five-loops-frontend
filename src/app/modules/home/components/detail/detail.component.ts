import { Router, ActivatedRoute } from '@angular/router';
import { Injector, Component } from '@angular/core';
import { ModalService, ToastrService, SeoService } from '../../../../services';
import { Utils } from '../../../../utils';
import * as _ from 'lodash';
import { environment } from '../../../../../environments/environment'
import {
  Gallery,
  GalleryItem,
  ImageItem
} from "ng-gallery";
import { Lightbox } from 'ng-gallery/lightbox';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  constructor(private injector: Injector, private route: ActivatedRoute, private modal: ModalService,
    private toastr: ToastrService, seo: SeoService, private router: Router, private gallery: Gallery, private lightbox: Lightbox) {
    this.url = environment.api_url;
    route.params.subscribe(() => {
      this.data = _.get(route.snapshot.data, 'data')
      this.tops = _.get(route.snapshot.data, 'tops')
    })
    console.log(this.data)
  }

  data: any;
  tops: Array<any>;
  url: string;
  items: GalleryItem[];

  detail(code) {
    this.router.navigateByUrl(`detail/${code}`);
  }

  goToLink(url: string) {
    if (Utils.isStringNotEmpty(url)) {
      window.open(url, "_blank");
    }
  }

  view() {
    this.items = _.map(_.get(this.data, 'images'), x => new ImageItem({ src: `${this.url}/${x}`, thumb: `${this.url}/${x}` }));
    const lightboxRef = this.gallery.ref("lightbox");
    this.lightbox.open(0, "lightbox", { panelClass: "fullscreen" });
    lightboxRef.load(this.items);
  }
}
