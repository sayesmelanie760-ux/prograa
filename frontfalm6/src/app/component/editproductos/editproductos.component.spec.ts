import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproductosComponent } from './editproductos.component';

describe('EditproductosComponent', () => {
  let component: EditproductosComponent;
  let fixture: ComponentFixture<EditproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditproductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
