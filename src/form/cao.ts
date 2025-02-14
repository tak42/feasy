import type { SupportedValue } from '../types';

// q1:氏名 q2:メアド q4:tel q5:old, q6:性別（Radio）, q7:職業
const caoInputIds = ['q1', 'q2', 'q4', 'q5', 'q6_1', 'q6_2', 'q7'] as const;

export type CaoInputIds = (typeof caoInputIds)[number];

// このままではfavoriteBtn.tsでは受け取れない
// favoriteBtn.tsでこのIDの型情報を認識する
export const generateCaoDto = (data: SupportedValue): Record<CaoInputIds, string> => {
  return {
    q1: `${data.famiryName} ${data.firstName}`,
    q2: data.email,
    q4: data.tel,
    q5: data.old,
    q6_1: data.gender,
    q6_2: data.gender,
    q7: data.business,
  };
};
