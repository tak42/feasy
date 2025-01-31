import type { SupportedValueTypes } from '../../types';

// type Gender = ['男', '女'];

type CaoDto = Pick<SupportedValueTypes, 'famiryName'>;

// sourceValueに当て込むための引数の型定義をする
export const createTransferDto = (): CaoDto => {
  return {
    famiryName: {
      SpecifiedId: 'q1',
      sourceValue: '',
    },
  };
};
