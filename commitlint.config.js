// commitlint.config.js
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Enforce a specific JIRA-style header pattern
    'jira-ticket-required': [2, 'always'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'hotfix', 'docs', 'style', 'refactor', 'test'],
    ],
    'subject-case': [0], // Disable default subject-case to allow custom validation
  },
  plugins: [
    {
      rules: {
        'jira-ticket-required': ({ header }) => {
          // Define the JIRA pattern
          const jiraPattern =
            /^(feat|fix|hotfix|docs|style|refactor|test)\(uac-\d+\): .+$/;

          // if (!jiraPattern.test(header)) {
          //   return [
          //     false,
          //     `❌ Invalid commit message format. \n\nYour commit message should follow this pattern:\n` +
          //       `\n ✅ fix(uac-1234): fix issue with login page\n\n` +
          //       `Where:\n` +
          //       `- The type is one of: feat, fix, hotfix, docs, style, refactor, test\n` +
          //       `- The scope (optional) should be a valid JIRA ticket ID, like: uac-1234\n` +
          //       `- The message should be descriptive. Example: "fix(uac-1234): resolve login issue"\n`,
          //   ];
          // }
          return [true, ''];
        },
      },
    },
  ],
};
