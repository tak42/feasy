import type { PostActions, SharedCombination } from '../../../types/Post.type';

export const postMessageToParent = (action: PostActions, content: SharedCombination[]) => {
  window.parent.postMessage({ action, content }, '*');
};
