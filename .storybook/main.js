module.exports = {
    core: {
        disableTelemetry: true,
        builder: "@storybook/builder-webpack5",
    },
    stories: [
        "../packages/**/src/stories/*.stories.@(js|jsx|ts|tsx)",
        "../packages/**/src/stories/*.stories.mdx",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: "@storybook/react",
};
