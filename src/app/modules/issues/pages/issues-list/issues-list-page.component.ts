import { IssuesLabelSelectorComponent } from '@/modules/issues/components/issues-label-selector/issues-label-selector.component';
import { IssuesService } from '@/modules/issues/services/issues.service';
import { Component, inject } from '@angular/core';
import { IssueItemComponent } from '../../components/issues-item/issue-item.component';

@Component({
  selector: 'app-issues-list-page',
  standalone: true,
  imports: [IssuesLabelSelectorComponent, IssueItemComponent],
  templateUrl: './issues-list-page.component.html',
  styleUrl: './issues-list-page.component.css',
})
export default class IssuesListPageComponent {
  issuesService = inject(IssuesService);

  get labelQuery() {
    return this.issuesService.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }
}
