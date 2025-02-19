import type { CombinedFormIds } from '.';

export type PostActions = 'hide' | 'share' | 'check';

export type PostData = {
  action: PostActions;
  content: Record<CombinedFormIds, string> | Record<string, never>;
};

export type PostFunc = {
  [key in PostActions]: (event: MessageEvent) => void;
};
