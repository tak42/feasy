import { useState } from 'react';
import type { PostData } from '../types/Post.type';
import styles from './index.module.css';

export const SendDataForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [old, setOld] = useState('');
  const toShare = () => {
    const postData: PostData = {
      action: 'share',
      content: {
        name,
        email,
        old,
      },
    };

    window.parent.postMessage(postData, '*');
  };

  return (
    <div className={styles.container}>
      <p className={styles.spaceY} />
      <input
        title="氏名"
        className={styles.basicInput}
        placeholder="富士 太郎"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className={styles.spaceY} />
      <input
        title="メールアドレス"
        className={styles.basicInput}
        placeholder="mail@co.jp"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className={styles.spaceY} />
      <input
        title="年齢"
        className={styles.basicInput}
        placeholder="20"
        value={old}
        type="number"
        onChange={(e) => setOld(e.target.value)}
      />
      <p className={styles.spaceY} />
      <div style={{ textAlign: 'right' }}>
        <button onClick={toShare} className={styles.shareBtn}>
          データ共有
        </button>
      </div>
    </div>
  );
};
