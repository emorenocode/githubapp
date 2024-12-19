import { sleep } from '@/helpers';
import { GitHubIssue, State } from '@/modules/issues/interfaces';
import { environment } from 'src/environments/environment.development';

const API_URL = environment.apiUrl;

export const getIssues = async (
  state: State,
  labels: string[]
): Promise<GitHubIssue[]> => {
  await sleep(1500);

  const params = new URLSearchParams();
  params.append('state', state);

  if (labels.length > 0) {
    params.append('labels', labels.join(','));
  }

  try {
    const resp = await fetch(`${API_URL}/issues?${params}`);
    if (!resp.ok) throw "Can't load issues";
    const issues: GitHubIssue[] = await resp.json();
    return issues;
  } catch (error) {
    throw error;
  }
};
