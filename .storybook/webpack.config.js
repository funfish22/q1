const path = require('path');

module.exports = ({ config }) => {
    // a bunch of other rules here

    config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules'];

    // Alternately, for an alias:
    config.resolve.alias = {
        '@components': path.resolve(__dirname, '..', 'src', 'resources/components'),
    };

    return config;
};
