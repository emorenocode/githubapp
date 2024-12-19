import { IssueService } from '@/modules/issues/services/issue.service';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { IssueCommentComponent } from '../../components/issue-comment/issue-comment.component';

@Component({
  selector: 'app-issues-page',
  standalone: true,
  imports: [RouterLink, IssueCommentComponent],
  templateUrl: './issues-page.component.html',
  styleUrl: './issues-page.component.css',
})
export default class IssuesPageComponent {
  route = inject(ActivatedRoute);
  issueService = inject(IssueService);
  issueQuery = this.issueService.issueQuery;
  issueCommentsQuery = this.issueService.issueCommentsQuery;

  issueNumber = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('number') ?? ''),
      tap((number) => this.issueService.setIssueNumber(number))
    )
  );
}
