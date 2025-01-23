import type { PostActions, SharedCombination } from '../../../types/Post.type';

export const SendPostMessageToParent = (action: PostActions, content: SharedCombination[]) => {
  window.parent.postMessage({ action, content }, '*');
};
