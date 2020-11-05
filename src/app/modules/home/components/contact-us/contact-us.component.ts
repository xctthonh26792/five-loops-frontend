import { Component, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService, ToastrService } from '../../../../services';
import { FeedbackApi } from '../../../../apis';
import * as _ from 'lodash';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  constructor(injector: Injector, seo: SeoService, route: ActivatedRoute, private api: FeedbackApi, private toastr: ToastrService,
    private router: Router) {
    this.model = {};
    seo.init('contact us');
  }
  model: any;

  accept(f: NgForm) {
    if (f.invalid) { return; }
    this.api.post('create', this.model).then(() => {
      this.toastr.success(`Thank you for your message. It has been sent.`);
      this.model = {}
      this.model.message = "<p><br></p>"

    }).catch(() => {
      this.toastr.error(`Send message unsuccess. Please try again`);
      return;
    })
  }
}
