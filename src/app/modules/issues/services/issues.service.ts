import { getIssues, getLabels } from '@/modules/issues/actions';
import { State } from '@/modules/issues/interfaces';
import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  selectedState = signal<State>(State.All);
  selectedLabels = signal<Set<string>>(new Set<string>());

  labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: () => getLabels(),
  }));

  issuesQuery = injectQuery(() => ({
    queryKey: [
      'issues',
      { state: this.selectedState(), labels: [...this.selectedLabels()] },
    ],
    queryFn: () => getIssues(this.selectedState(), [...this.selectedLabels()]),
  }));

  setSelectedState(state: State) {
    this.selectedState.set(state);
  }

  toggleLabels(label: string) {
    const labels = this.selectedLabels();
    if (labels.has(label)) {
      labels.delete(label);
    } else {
      labels.add(label);
    }
    this.selectedLabels.set(new Set(labels));
  }
}
