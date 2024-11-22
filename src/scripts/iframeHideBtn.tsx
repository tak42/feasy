import styles from './index.module.css';

const hideIframe = () => {
  window.parent.postMessage('hide', '*');
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
