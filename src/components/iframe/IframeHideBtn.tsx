import styles from './styles/form.module.css';
import { SendPostMessageToParent } from './utils/Post';

export const IframeHideBtn = () => {
  return (
    <div>
      <button onClick={() => SendPostMessageToParent('hide', [])} className={styles.hideBtn}>
        Iframe 非表示
      </button>
    </div>
  );
};
