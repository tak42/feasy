import React, { useEffect, useState } from 'react';
import { ALLOWED_ORIGINS, SUPPORTED_VALUES } from '../../const';
import { generateDtoFunc } from '../../form';
import type { AllowedOrigins, SupportedValue } from '../../types';
import styles from './styles/form.module.css';
import { postMessageToParent } from './utils/Post';

const useDynamicForm = (initialVal: { [key in keyof SupportedValue]: string }) => {
  const [form, setForm] = useState(initialVal);

  const handleChange = (key: keyof SupportedValue, e: React.ChangeEvent<HTMLInputElement>) => {
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
      const origin: AllowedOrigins[number] | undefined = event.data;

      if (!origin) return alert(`無効なメッセージイベントのデータです。\n処理をキャンセルします。`);
      if (!ALLOWED_ORIGINS.includes(origin)) return alert('このオリジンは許可されていません。');

      const dto = generateDtoFunc[origin](form);

      postMessageToParent('share', dto);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [form]);

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
        <button onClick={() => postMessageToParent('check', {})} className={styles.shareBtn}>
          データ共有
        </button>
      </div>
    </div>
  );
};
