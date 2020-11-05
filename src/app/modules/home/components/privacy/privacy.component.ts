import { Router, ActivatedRoute } from '@angular/router';
import { Injector, Component } from '@angular/core';
import { ModalService, ToastrService, SeoService } from '../../../../services';
import * as _ from 'lodash';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {

  constructor(private injector: Injector, private route: ActivatedRoute, private modal: ModalService,
    private toastr: ToastrService, seo: SeoService, private router: Router) {
    this.data = _.get(route.snapshot.data, 'data');
    this.title = _.get(route.snapshot.data, 'title');
    seo.init(this.title)
  }
  data: any;
  title: string;
}
