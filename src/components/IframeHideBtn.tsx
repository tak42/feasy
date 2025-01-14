import styles from '../styles/form.module.css';
import type { PostData } from '../types/Post.type';

const postHideIframe = () => {
  const postData: PostData = {
    action: 'hide',
    content: [],
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
