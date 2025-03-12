import type { CaoInputIds, SupportedValue } from '../types';

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
