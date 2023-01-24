module.exports = {
    core: {
        disableTelemetry: true,
        builder: "@storybook/builder-webpack5",
    },
    stories: [
        "../packages/**/stories/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: "@storybook/react",
};
