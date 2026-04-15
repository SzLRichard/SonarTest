import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                requestAnimationFrame: 'readonly',
                setTimeout: 'readonly'
            },
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            eqeqeq: 'error',
            indent: ['error', 4],
        },
    },
];
