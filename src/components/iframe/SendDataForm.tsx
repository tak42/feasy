import React, { useEffect, useState } from 'react';
import { ALLOWED_ORIGINS, SUPPORTED_VALUES } from '../../const';
import type { SupportedValue, SupportedValueKeys } from '../../types';
import styles from './styles/form.module.css';
import { postMessageToParent } from './utils/Post';

const useDynamicForm = (initialVal: { [key in SupportedValueKeys]: string }) => {
  const [form, setForm] = useState(initialVal);

  const handleChange = (key: SupportedValueKeys, e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return { form, handleChange };
};

// ブラウザに保存した値を使用する
const initialValues: SupportedValue = {
  famiryName: '',
  firstName: '',
  email: '',
  tel: '',
  business: '',
  old: '',
  gender: '',
};

export const SendDataForm = () => {
  const { form, handleChange } = useDynamicForm(initialValues);

  const labelValues: SupportedValue = {
    famiryName: '姓',
    firstName: '名',
    email: 'メールアドレス',
    tel: '電話番号',
    business: '職業',
    old: '年齢',
    gender: '性別',
  };
  const placeholderSettings: SupportedValue = {
    famiryName: '富士',
    firstName: '太郎',
    email: 'mail@co.jp',
    tel: '999-9999-9999',
    business: '会社員',
    old: '99',
    gender: '男性 or 女性',
  };

  // どうやってサイト固有設定から適したものを特定して、入力データを親ページに送るか
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!ALLOWED_ORIGINS.includes(event.data)) return alert('このオリジンは許可されていません。');

      // postMessageToParent('share', combineIdentifiers[event.data]);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className={styles.container}>
      {SUPPORTED_VALUES.map((key) => {
        return (
          <div style={{ width: '100%' }} key={key}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'left', width: '160px', color: 'blue', fontWeight: 'bold' }}>
                <label>{labelValues[key]}</label>
              </div>
              <input
                title={labelValues[key]}
                className={styles.basicInput}
                value={form[key]}
                placeholder={placeholderSettings[key]}
                onChange={(e) => handleChange(key, e)}
              />
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
