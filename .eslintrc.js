module.exports = {
    root: true,
    env: {
        es2021: true,
        node: true,
        browser: true,
    },
    extends: [
        "eslint:recommended",
        "standard-with-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "plugin:storybook/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.eslint.json"],
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/indent": ["error", 4],
    },
};
