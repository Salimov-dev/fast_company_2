module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "plugin:react/recommended",
        "standard",
        "plugin:react-hooks/recommended"
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react", "react-hooks"],
    rules: {
        indent: "off", // Отступ количество пробелов
        // indent: ["error", 4], // Отступ количество пробелов
        semi: [2, "always"], // Точка с запятой в конце строки

        // Ошибка при наличии пробела при обозночении функции, уберём её
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        // "space-before-function-paren": ["error", "never"],

        // Использование двойных кавычек
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "react-hooks/rules-of-hooks": "error", // Проверяем правила хуков
        "react-hooks/exhaustive-deps": "warn" // Проверяем зависимости эффекта
    }
};
