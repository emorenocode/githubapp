import { GitHubIssue, State } from '@/modules/issues/interfaces';
import { IssueService } from '@/modules/issues/services/issue.service';
import { NgStyle } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'issue-item',
  standalone: true,
  imports: [RouterLink, NgStyle],
  templateUrl: './issue-item.component.html',
  styleUrl: './issue-item.component.css',
  host: {
    '(mouseenter)': 'prefetchIssue()',
  },
})
export class IssueItemComponent {
  issue = input.required<GitHubIssue>();
  isOpen = computed(() => this.issue().state === State.Open);
  issueService = inject(IssueService);

  prefetchIssue() {
    this.issueService.setIssue(this.issue());
  }
}
