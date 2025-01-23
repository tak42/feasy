import type { PostActions, SharedCombination } from '../../../types/Post.type';

export const sendPostMessageToParent = (action: PostActions, content: SharedCombination[]) => {
  window.parent.postMessage({ action, content }, '*');
};
