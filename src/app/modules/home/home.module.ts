import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../pipes';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http'

import { NgxMaskModule } from '../../plugins/ngx-mask'
import { NgxSummernoteModule } from '../../plugins/ngx-summernote'

import { COMPONENTS } from './components';
import { DIALOGS } from './dialogs';
import { RESOLVERS } from './resolvers';

import { routes } from './home.routing';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    MatCarouselModule.forRoot(),
    NgxMaskModule.forChild(),
    NgxSummernoteModule.forChild()
  ],
  providers: [...RESOLVERS],
  exports: [RouterModule],
  declarations: [...COMPONENTS, ...DIALOGS],
  entryComponents: [...DIALOGS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
