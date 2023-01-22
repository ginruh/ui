module.exports = {
    // features: {
    //     previewMdx2: true,
    // },
    stories: [
        "../src/stories/**/*.stories.mdx",
        "../packages/**/*.stories.mdx",
        "../packages/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: "@storybook/react",
};
