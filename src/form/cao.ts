import type { SupportedValue } from '../types';

// q1:氏名 q2:メアド q4:tel q5:old, q6:性別（Radio）, q7:職業
const caoInputIds = ['q1', 'q2', 'q4', 'q5', 'q6_1', 'q6_2', 'q7'] as const;

export type CaoInputIds = (typeof caoInputIds)[number];

export const generateCaoDto = (
  data: SupportedValue
): { id: CaoInputIds[number]; val: string }[] => {
  return [
    { id: 'q1', val: `${data.famiryName} ${data.firstName}` },
    { id: 'q2', val: data.email },
    { id: 'q4', val: data.tel },
    { id: 'q5', val: data.old },
    { id: 'q6_1', val: data.gender },
    { id: 'q6_2', val: data.gender },
    { id: 'q7', val: data.business },
  ];
};
