export type PostActions = 'hide' | 'share' | 'check';

export type SharedCombination = { id: string; value: string };

export type CombinationOrigins = {
  [key: string]: SharedCombination[];
};

export type PostData = {
  action: PostActions;
  content: SharedCombination[];
};

export type PostFunc = {
  [key in PostActions]: (event: MessageEvent) => void;
};
