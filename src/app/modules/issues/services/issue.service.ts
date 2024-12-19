import { getIssueByNumber, getIssueComments } from '@/modules/issues/actions';
import { Injectable, signal } from '@angular/core';
import {
  injectQuery,
  injectQueryClient,
} from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issueNumber = signal<string | null>(null);
  private queryClient = injectQueryClient();

  issueQuery = injectQuery(() => ({
    queryKey: ['issues', this.issueNumber()],
    queryFn: () => getIssueByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null,
    staleTime: 1000 * 60 * 2,
  }));

  issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issues', this.issueNumber(), 'comments'],
    queryFn: () => getIssueComments(this.issueNumber()!),
    enabled: this.issueNumber() !== null,
  }));

  setIssueNumber(issueNumber: string) {
    this.issueNumber.set(issueNumber);
  }

  prefetchIssue(issueNumber: string) {
    this.queryClient.prefetchQuery({
      queryKey: ['issues', issueNumber],
      queryFn: () => getIssueByNumber(issueNumber),
      staleTime: 1000 * 60 * 2,
    });
  }
}
