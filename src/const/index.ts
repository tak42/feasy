export const ALLOWED_ORIGINS = ['https://form.cao.go.jp'] as const;

export const SUPPORTED_VALUES = [
  'famiryName',
  'firstName',
  'email',
  'tel',
  'old',
  'gender',
  'business',
] as const;

// q1:氏名 q2:メアド q4:tel q5:old, q6:性別（Radio）, q7:職業
export const CAO_INPUT_IDS = ['q1', 'q2', 'q4', 'q5', 'q6_1', 'q6_2', 'q7'] as const;
