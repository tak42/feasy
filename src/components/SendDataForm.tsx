import { useEffect, useMemo, useState } from 'react';
import styles from '../styles/form.module.css';
import type { CombinationOrigins, PostData } from '../types/Post.type';

const allowedOrigins = ['https://form.cao.go.jp'];

export const SendDataForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [old, setOld] = useState('');

  const combineIdentifiers: CombinationOrigins = useMemo(() => {
    return {
      [allowedOrigins[0]]: [
        {
          id: 'q1',
          value: name,
        },
        {
          id: 'q2',
          value: email,
        },
        {
          id: 'q5',
          value: old,
        },
      ],
    };
  }, [name, email, old]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!allowedOrigins.includes(event.data)) return alert('このオリジンは許可されていません。');

      const postData: PostData = {
        action: 'share',
        content: combineIdentifiers[event.data],
      };

      window.parent.postMessage(postData, '*');
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [combineIdentifiers]);

  const originCheck = () => {
    const postData: PostData = {
      action: 'check',
      content: [],
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
        <button onClick={originCheck} className={styles.shareBtn}>
          データ共有
        </button>
      </div>
    </div>
  );
};
