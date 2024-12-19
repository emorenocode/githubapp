import { sleep } from '@/helpers';
import { GitHubIssue } from '@/modules/issues/interfaces';
import { environment } from 'src/environments/environment.development';

const API_URL = environment.apiUrl;

export const getIssues = async (): Promise<GitHubIssue[]> => {
  await sleep(1500);

  try {
    const resp = await fetch(`${API_URL}/issues`);
    if (!resp.ok) throw "Can't load issues";
    const issues: GitHubIssue[] = await resp.json();
    return issues;
  } catch (error) {
    throw error;
  }
};
