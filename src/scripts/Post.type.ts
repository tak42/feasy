export type PostData = {
  action: 'hide' | 'share';
  content: {
    name: string;
    email: string;
    old: string;
  };
};
