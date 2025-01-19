import { usePost } from '../hooks/Post';
import styles from '../styles/form.module.css';

export const IframeHideBtn = () => {
  const postHook = usePost();

  const postHideIframe = () => {
    postHook.toParentMessage('hide', []);
  };

  return (
    <div>
      <button onClick={postHideIframe} className={styles.hideBtn}>
        Iframe 非表示
      </button>
    </div>
  );
};
