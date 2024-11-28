export type PostData = {
  action: 'hide' | 'share';
  contents:
    | {
        kind: string;
        value: string;
      }[]
    | [];
};
