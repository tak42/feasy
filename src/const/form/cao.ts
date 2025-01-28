import type { TransferValue } from '../../types';

// type Gender = ['男', '女'];

// SupportedInputValuesから拡張させないと、好き勝手に指定できてしまう
type ExistsInputValues = ['name', 'email', 'tel', 'old', 'gender', 'business'];

export type CaoDto = {
  [key in ExistsInputValues[number]]: TransferValue;
};

// sourceValueに当て込むための引数の型定義をする
export const createTrasferDto = (): CaoDto => {
  return {
    name: {
      SpecifiedId: 'q1',
      sourceValue: '',
    },
    email: {
      SpecifiedId: 'q1',
      sourceValue: '',
    },
    tel: {
      SpecifiedId: 'q1',
      sourceValue: '',
    },
    old: {
      SpecifiedId: 'q1',
      sourceValue: '',
    },
    gender: {
      SpecifiedId: 'q1',
      sourceValue: '',
    },
    business: {
      SpecifiedId: 'q1',
      sourceValue: '',
    },
  };
};
