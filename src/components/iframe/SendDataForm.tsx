import React, { useState } from 'react';
import { supportedValues } from '../../const';
import type { SupportedValueKeys } from '../../types';
import styles from './styles/form.module.css';
import { postMessageToParent } from './utils/Post';

export const SendDataForm = () => {
  type InputSettings = { [key in SupportedValueKeys]: string };

  const labelValues: InputSettings = {
    famiryName: '姓',
    firstName: '名',
    email: 'メールアドレス',
    tel: '電話番号',
    business: '職業',
    old: '年齢',
    gender: '性別',
  };
  const placeholderSettings: InputSettings = {
    famiryName: '富士',
    firstName: '太郎',
    email: 'mail@co.jp',
    tel: '999-9999-9999',
    business: '会社員',
    old: '99',
    gender: '男性 or 女性',
  };

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

  const useDynamicForm = (initialVal: { [key: string]: string }) => {
    const [form, setForm] = useState(initialVal);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return { form, handleChange };
  };

  const SupportedValueInput = (key: SupportedValueKeys) => {
    const { form, handleChange } = useDynamicForm({
      key: '',
    });

    return (
      <input
        title={labelValues[key]}
        className={styles.basicInput}
        value={form[key]}
        placeholder={placeholderSettings[key]}
        onChange={handleChange}
      />
    );
  };

  return (
    <div className={styles.container}>
      {supportedValues.map((key) => {
        return (
          <div style={{ width: '100%' }} key={key}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'left', width: '160px', color: 'blue', fontWeight: 'bold' }}>
                <label>{labelValues[key]}</label>
              </div>
              {SupportedValueInput(key)}
            </div>
          </div>
        );
      })}
      <div style={{ width: '100%', textAlign: 'right' }}>
        <button onClick={() => postMessageToParent('check', [])} className={styles.shareBtn}>
          データ共有
        </button>
      </div>
    </div>
  );
};
