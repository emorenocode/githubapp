import { GitHubLabel } from '@/modules/issues/interfaces';
import { Component, input } from '@angular/core';

@Component({
  selector: 'issues-label-selector',
  standalone: true,
  imports: [],
  templateUrl: './issues-label-selector.component.html',
  styleUrl: './issues-label-selector.component.css',
})
export class IssuesLabelSelectorComponent {
  labels = input.required<GitHubLabel[]>();
}
