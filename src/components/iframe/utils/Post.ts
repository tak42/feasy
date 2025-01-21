import type { PostActions, SharedCombination } from '../../../types/Post.type';
export const toParentMessage = (action: PostActions, content: SharedCombination[]) => {
  window.parent.postMessage({ action, content }, '*');
};
