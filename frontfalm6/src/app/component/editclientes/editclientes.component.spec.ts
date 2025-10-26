import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditclientesComponent } from './editclientes.component';

describe('EditclientesComponent', () => {
  let component: EditclientesComponent;
  let fixture: ComponentFixture<EditclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditclientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
