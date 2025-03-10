import type { ALLOWED_ORIGINS, SUPPORTED_VALUES } from '../const';
import type { CaoInputIds } from '../form/cao';
import type { PostInputDataSet } from './Post.type';

export type AllowedOrigins = typeof ALLOWED_ORIGINS;

export type CombinedFormIds = CaoInputIds;

export type GenerateDtoFunc = Record<
  AllowedOrigins[number],
  (data: SupportedValue) => PostInputDataSet[]
>;

export type SupportedValue = Record<(typeof SUPPORTED_VALUES)[number], string>;
