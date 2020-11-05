import { Routes } from '@angular/router';

import {
  AllPostComponent,
  ContactUsComponent,
  DetailComponent,
  HomeComponent,
  PostComponent,
  PrivacyComponent,
  ReskinDesignComponent
} from './components';

import {
  HomeResolve,
  PostResolve,
  PrivacyDataResolve,
  PrivacyResolve,
  ProductDetailResolve,
  TermOfServiceDataResolve,
  TermOfServiceResolve,
  TopProductResolve
} from './resolvers';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: PostComponent,
        resolve: { posts: HomeResolve, tops: TopProductResolve }
      },
      {
        path: 'detail/:path',
        component: DetailComponent,
        resolve: { data: ProductDetailResolve, tops: TopProductResolve },
      },
      {
        path: 'shop',
        component: AllPostComponent,
        resolve: { fetch: PostResolve },
      },
      {
        path: 'privacy',
        component: PrivacyComponent,
        resolve: { data: PrivacyResolve, title: PrivacyDataResolve },
      },
      {
        path: 'term-of-service',
        component: PrivacyComponent,
        resolve: { data: TermOfServiceResolve, title: TermOfServiceDataResolve },
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'pricing-plan',
        component: ReskinDesignComponent
      },
    ],
  },
  { path: '**', redirectTo: 'not-found' }
];
