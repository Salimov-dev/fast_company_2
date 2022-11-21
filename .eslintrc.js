module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        semi: [2, "always"],
        "space-before-function-paren": ["error", "never"]
    }
};
