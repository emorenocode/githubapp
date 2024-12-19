import { IssuesLabelSelectorComponent } from '@/modules/issues/components/issues-label-selector/issues-label-selector.component';
import { IssuesService } from '@/modules/issues/services/issues.service';
import { Component, computed, inject } from '@angular/core';
import { IssueItemComponent } from '../../components/issues-item/issue-item.component';
import { State } from '@/modules/issues/interfaces';

@Component({
  selector: 'app-issues-list-page',
  standalone: true,
  imports: [IssuesLabelSelectorComponent, IssueItemComponent],
  templateUrl: './issues-list-page.component.html',
  styleUrl: './issues-list-page.component.css',
})
export default class IssuesListPageComponent {
  issuesService = inject(IssuesService);
  currentIssueState = computed(() => this.issuesService.selectedState());

  get labelQuery() {
    return this.issuesService.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

  onChangeState(state: string) {
    const currentState =
      {
        [State.All]: State.All,
        [State.Open]: State.Open,
        [State.Closed]: State.Closed,
      }[state] ?? State.All;

    this.issuesService.setSelectedState(currentState);
  }
}
