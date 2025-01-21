import styles from './styles/form.module.css';
import { toParentMessage } from './utils/Post';

export const IframeHideBtn = () => {
  return (
    <div>
      <button onClick={() => toParentMessage('hide', [])} className={styles.hideBtn}>
        Iframe 非表示
      </button>
    </div>
  );
};
