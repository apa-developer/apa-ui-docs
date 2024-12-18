const config = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['chore', 'docs', 'feat', 'fix', 'revert']],
    },
}

export default config
