import type { CombinedFormIds } from '.';

export type PostActions = 'hide' | 'share' | 'check';

export type PostInputDataSet = { id: CombinedFormIds[number]; val: string };

export type PostData = {
  action: PostActions;
  content: PostInputDataSet[];
};

export type PostFunc = {
  [key in PostActions]: (event: MessageEvent) => void;
};
