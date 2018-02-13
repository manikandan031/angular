import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';
import {IProduct} from './product';
import { ActivatedRoute } from '@angular/router';
import { RouterLinkStubDirective, QueryParamsStubDirective } from '../../testing/router-stubs';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from '../../shared/pipes/convert-to-spaces.pipe';
import { StarComponent } from '../../shared/star/star.component';

class ProductServiceStub {

  getProducts() {
    return Observable.of([{
      id: 1,
      productName: 'Test Product',
      productCode: 'testCode',
      releaseDate: '20/12/1986',
      description: 'Test Product Description',
      price: 100.5987,
      starRating: 3,
      imageUrl: '',
      tags: ['test']
    }]);
  }
}


class StatComponentStub {

}

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let ar: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ProductListComponent, RouterLinkStubDirective, QueryParamsStubDirective, ConvertToSpacesPipe, StarComponent],
      providers: [
        { provide: ProductService, useClass: ProductServiceStub },
        { provide: ActivatedRoute, useValue: { snapshot: { queryParams: { filterBy: 't', showImage: 'true' } } } }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read query params filterBy and showImage', () => {
    fixture.detectChanges();
    expect(component.listFilter).toEqual('t');
    expect(component.showImage).toEqual(true);
  });

  it('should perform filter - zero match', () => {
    let products = component.performFilter('nothing');
    expect(products.length).toEqual(0);
  });

  it('should perform filter - exact match', () => {
    let products = component.performFilter('test');
    expect(products.length).toEqual(1);
  });
});
