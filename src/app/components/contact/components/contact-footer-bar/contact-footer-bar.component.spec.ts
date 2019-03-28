import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFooterBarComponent } from './contact-footer-bar.component';

describe('ContactFooterBarComponent', () => {
  let component: ContactFooterBarComponent;
  let fixture: ComponentFixture<ContactFooterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFooterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFooterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
