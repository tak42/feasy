type PostActions = 'hide' | 'share' | 'check';

type SharedCombination = { id: string; value: string };

export type CombinationOrigins = {
  [key: string]: SharedCombination[];
};

// PostDataのコンテンツはオリジンのキーから抽出した組み合わせを格納する
export type PostData = {
  action: PostActions;
  content: SharedCombination[];
};

export type PostFunc = {
  [key in PostActions]: (event: MessageEvent) => void;
};
