import { getIssueByNumber, getIssueComments } from '@/modules/issues/actions';
import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issueNumber = signal<string | null>(null);

  issueQuery = injectQuery(() => ({
    queryKey: ['issues', this.issueNumber()],
    queryFn: () => getIssueByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null,
  }));

  issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issues', this.issueNumber(), 'comments'],
    queryFn: () => getIssueComments(this.issueNumber()!),
    enabled: this.issueNumber() !== null,
  }));

  setIssueNumber(issueNumber: string) {
    this.issueNumber.set(issueNumber);
  }
}
