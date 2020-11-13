import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostApi } from './post.api';
import { PrivacyApi } from './privacy.api';
import { FeedbackApi } from './feedback.api';
import { BannerApi } from './banner.api';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: []
})
export class ApisModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApisModule,
      providers: [
        PostApi,
        PrivacyApi,
        FeedbackApi,
        BannerApi
      ]
    };
  }
}
