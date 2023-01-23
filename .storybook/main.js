module.exports = {
    core: {
        disableTelemetry: true,
        builder: "@storybook/builder-webpack5",
    },
    stories: [
        "../packages/**/stories/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: [
        {
            name: "@storybook/addon-postcss",
            options: {
                postcssLoaderOptions: {
                    implementation: require("postcss"),
                },
            },
        },
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: "@storybook/react",
};
