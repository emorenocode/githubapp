import { GitHubLabel } from '@/modules/issues/interfaces';
import { IssuesService } from '@/modules/issues/services/issues.service';
import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'issues-label-selector',
  standalone: true,
  imports: [],
  templateUrl: './issues-label-selector.component.html',
  styleUrl: './issues-label-selector.component.css',
})
export class IssuesLabelSelectorComponent {
  labels = input.required<GitHubLabel[]>();
  issuesService = inject(IssuesService);

  onToggleLabel(label: string) {
    this.issuesService.toggleLabels(label);
  }

  isSelected(label: string) {
    return this.issuesService.selectedLabels().has(label);
  }
}
