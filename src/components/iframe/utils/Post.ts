import type { PostData } from '../../../types/Post.type';

export const postMessageToParent = (action: PostData['action'], content: PostData['content']) => {
  window.parent.postMessage({ action, content }, '*');
};
