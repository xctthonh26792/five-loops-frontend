import { Component, ViewContainerRef } from '@angular/core';
import { LoadingService, SeoService } from './services';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private view: ViewContainerRef, private loading: LoadingService, private seo: SeoService,
    private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.init();
  }

  init() {
    this.seo.init('five-loops');
  }
}
