import { sleep } from '@/helpers';
import { GitHubIssue } from '@/modules/issues/interfaces';
import { environment } from 'src/environments/environment.development';

const API_URL = environment.apiUrl;

export const getIssueByNumber = async (
  issueNumber: string
): Promise<GitHubIssue> => {
  await sleep(1500);

  try {
    const resp = await fetch(`${API_URL}/issues/${issueNumber}`);
    if (!resp.ok) throw "Can't load issue";
    const issue: GitHubIssue = await resp.json();
    return issue;
  } catch (error) {
    throw error;
  }
};
