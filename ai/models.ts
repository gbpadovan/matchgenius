import { anthropic } from '@ai-sdk/anthropic';
import { openai } from '@ai-sdk/openai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const DEFAULT_MODEL_NAME: string = 'claude-haiku';

export const models: Array<Model> = [
  {
    id: 'claude-haiku',
    label: 'Claude Haiku',
    apiIdentifier: 'claude-3-haiku-20240307',
    description: 'Fast and efficient model for everyday tasks',
  },
  {
    id: 'claude-sonnet',
    label: 'Claude Sonnet',
    apiIdentifier: 'claude-3-sonnet-20240229',
    description: 'Advanced model for complex tasks and longer context',
  },
  {
    id: 'claude-opus',
    label: 'Claude Opus',
    apiIdentifier: 'claude-3-opus-20240229',
    description: 'Most powerful Claude model for complex reasoning',
  },
];
