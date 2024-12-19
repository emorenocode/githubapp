import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesLabelSelectorComponent } from './issues-label-selector.component';

describe('IssuesLabelSelectorComponent', () => {
  let component: IssuesLabelSelectorComponent;
  let fixture: ComponentFixture<IssuesLabelSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuesLabelSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuesLabelSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
