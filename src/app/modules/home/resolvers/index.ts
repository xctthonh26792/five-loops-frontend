import { from } from 'rxjs';
import { HomeResolve, TopProductResolve, ProductDetailResolve } from './home.resolver';
import { PostResolve } from './post.resolver';
import { PrivacyResolve, TermOfServiceResolve, PrivacyDataResolve, TermOfServiceDataResolve } from './privacy.resolver';
import { BannerResolve } from './banner.resolver';

export { HomeResolve, TopProductResolve, ProductDetailResolve } from './home.resolver';
export { PostResolve } from './post.resolver';
export { PrivacyResolve, TermOfServiceResolve, PrivacyDataResolve, TermOfServiceDataResolve } from './privacy.resolver';
export { BannerResolve } from './banner.resolver';

export const RESOLVERS = [
  HomeResolve,
  TopProductResolve,
  ProductDetailResolve,
  PostResolve,
  PrivacyResolve,
  TermOfServiceResolve,
  PrivacyDataResolve,
  TermOfServiceDataResolve,
  BannerResolve
];
