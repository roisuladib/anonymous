import type { UserConfig } from '@commitlint/types';

import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [RuleConfigSeverity.Error, 'never'],
    'subject-case': [0],
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'hotfix',
        'perf',
        'refactor',
        'release',
        'revert',
        'style',
        'test',
        'wip',
      ],
    ],
  },
};

export default Configuration;
