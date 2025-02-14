import type { ALLOWED_ORIGINS, SUPPORTED_VALUES } from '../const';
import type { CaoInputIds } from '../form/cao';

export type AllowedOrigins = typeof ALLOWED_ORIGINS;

export type CombinedFormIds = CaoInputIds;

// ここは関数の戻り値がオブジェクトになるようにする
export type GenerateDtoFunc = Record<
  AllowedOrigins[number],
  (data: SupportedValue) => Record<CombinedFormIds, string>
>;

export type SupportedValue = Record<(typeof SUPPORTED_VALUES)[number], string>;
