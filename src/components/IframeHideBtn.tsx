import type { PostData } from '../types/Post.type';
import styles from './index.module.css';

const postHideIframe = () => {
  const postData: PostData = {
    action: 'hide',
    content: {
      name: '',
      email: '',
      old: '',
    },
  };

  window.parent.postMessage(postData, '*');
};

export const IframeHideBtn = () => {
  return (
    <div>
      <button onClick={postHideIframe} className={styles.hideBtn}>
        Iframe 非表示
      </button>
    </div>
  );
};
