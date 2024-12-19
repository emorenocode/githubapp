import { sleep } from '@/helpers';
import { GitHubLabel } from '@/modules/issues/interfaces';
import { environment } from 'src/environments/environment.development';

const API_URL = environment.apiUrl;

export const getLabels = async (): Promise<GitHubLabel[]> => {
  await sleep(1500);

  try {
    const resp = await fetch(`${API_URL}/labels`);
    if (!resp.ok) throw "Can't load labels";
    const labels: GitHubLabel[] = await resp.json();
    return labels;
  } catch (error) {
    throw error;
  }
};
