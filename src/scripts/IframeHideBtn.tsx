import styles from './index.module.css';
import type { PostData } from './Post.type';

const hideIframe = () => {
  const postData: PostData = {
    action: 'hide',
    contents: [],
  };
  window.parent.postMessage(postData, '*');
};

export const IframeHideBtn = () => {
  return (
    <div>
      <button onClick={hideIframe} className={styles.hideBtn}>
        Iframe 非表示
      </button>
    </div>
  );
};
