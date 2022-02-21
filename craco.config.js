module.exports = {
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
                @import "src/scss/_constants.scss";
                @import "src/scss/_mixins.scss";
                `,
            },
        },
    },
};
