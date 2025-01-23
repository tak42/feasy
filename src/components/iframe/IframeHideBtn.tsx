import styles from './styles/form.module.css';
import { sendPostMessageToParent } from './utils/Post';

export const IframeHideBtn = () => {
  return (
    <div>
      <button onClick={() => sendPostMessageToParent('hide', [])} className={styles.hideBtn}>
        Iframe 非表示
      </button>
    </div>
  );
};
