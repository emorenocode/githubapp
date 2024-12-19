import { GitHubIssue, State } from '@/modules/issues/interfaces';
import { NgStyle } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'issue-item',
  standalone: true,
  imports: [RouterLink, NgStyle],
  templateUrl: './issue-item.component.html',
  styleUrl: './issue-item.component.css',
})
export class IssueItemComponent {
  issue = input.required<GitHubIssue>();
  isOpen = computed(() => this.issue().state === State.Open);
}
