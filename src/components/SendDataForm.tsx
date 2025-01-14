import { useCallback, useEffect, useMemo, useState } from 'react';
import styles from '../styles/form.module.css';
import type { CombinationOrigins, PostData } from '../types/Post.type';

const allowedOrigins = ['https://form.cao.go.jp'];

/*
設定値を配列に追加するだけで対応可能なものにする
設定値: feasyをIframeで表示している親サイトのOrigin
配列: オリジンをキーにした連想配列

オリジンと設定値を格納した連想配列のキーの整合性を担保する
型として設定する？
*/

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

  const searchCombination = useCallback(
    (origin: string) => {
      return combineIdentifiers[origin];
    },
    [combineIdentifiers]
  );

  const toShare = useCallback(
    (origin: string) => {
      const postData: PostData = {
        action: 'share',
        content: searchCombination(origin),
      };

      window.parent.postMessage(postData, '*');
    },
    [searchCombination]
  );

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (!allowedOrigins.some((origin) => origin === event.data))
        return alert('このオリジンは許可されていません。');

      toShare(event.data);
    });
  }, [toShare]);

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
