import React, { useState } from 'react';
import styles from './styles/form.module.css';
import { postMessageToParent } from './utils/Post';

export const SendDataForm = () => {
  // useEffect(() => {
  //   const handleMessage = (event: MessageEvent) => {
  //     if (!allowedOrigins.includes(event.data)) return alert('このオリジンは許可されていません。');

  //     postMessageToParent('share', combineIdentifiers[event.data]);
  //   };

  //   window.addEventListener('message', handleMessage);

  //   return () => {
  //     window.removeEventListener('message', handleMessage);
  //   };
  // }, []);

  // type DynamicState<T> = { [key: string]: T };

  const useDynamicForm = (initialVal: { [key: string]: string }) => {
    const [form, setForm] = useState(initialVal);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return { form, handleChange };
  };

  const SupportedValueInput = (key: string) => {
    const { form, handleChange } = useDynamicForm({
      key: '',
    });
    return (
      <input title={key} className={styles.basicInput} value={form[key]} onChange={handleChange} />
    );
  };

  // 型から入力フィールドを自動で生成させる
  return (
    <div className={styles.container}>
      {['famiryName', 'firstName'].map((key) => {
        return (
          <>
            <p className={styles.spaceY} />
            {SupportedValueInput(key)}
            <p className={styles.spaceY} />
          </>
        );
      })}
      <div style={{ textAlign: 'right' }}>
        <button onClick={() => postMessageToParent('check', [])} className={styles.shareBtn}>
          データ共有
        </button>
      </div>
    </div>
  );
};
