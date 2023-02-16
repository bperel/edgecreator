module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript',
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    camelcase: 'off',
    'import/first': 'off',
    'no-console': 'off',
    'import/named': 'off',
    'require-await': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  },
}
