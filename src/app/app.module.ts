import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { PrimarynavComponent } from './components/primarynav/primarynav.component';
import { CarouselComponent } from './pages/home/components/carousel/carousel.component';
import { FashionComponent } from './pages/home/components/fashion/fashion.component';
import { BestSellingProductsComponent } from './pages/home/components/best-selling-products/best-selling-products.component';
import { ProductLeftCardComponent } from './components/product-left-card/product-left-card.component';
import { ProductTopCardComponent } from './components/product-top-card/product-top-card.component';
import { ProductVariationComponent } from './components/product-variation/product-variation.component';
import { ProductRatingComponent } from './components/product-rating/product-rating.component';
import { TrendingProductsComponent } from './pages/home/components/trending-products/trending-products.component';
import { BestSellersComponent } from './pages/home/components/trending-products/best-sellers/best-sellers.component';
import { FeaturedProductsComponent } from './pages/home/components/trending-products/featured-products/featured-products.component';
import { OnSaleComponent } from './pages/home/components/trending-products/on-sale/on-sale.component';
import { TrendingItemsComponent } from './pages/home/components/trending-items/trending-items.component';
import { RecentStoryComponent } from './pages/home/components/recent-story/recent-story.component';
import { WhyChooseUsComponent } from './pages/home/components/why-choose-us/why-choose-us.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopnavComponent,
    PrimarynavComponent,
    CarouselComponent,
    FashionComponent,
    BestSellingProductsComponent,
    ProductLeftCardComponent,
    ProductTopCardComponent,
    ProductVariationComponent,
    ProductRatingComponent,
    TrendingProductsComponent,
    BestSellersComponent,
    FeaturedProductsComponent,
    OnSaleComponent,
    TrendingItemsComponent,
    RecentStoryComponent,
    WhyChooseUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
