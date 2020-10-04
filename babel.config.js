module.exports = function (api) {
    api.cache(true);
    
    const presets = [
        '@babel/preset-env',
        '@babel/preset-react'
    ];
    const plugins = [
        '@babel/plugin-proposal-class-properties',
        'babel-plugin-styled-components',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-optional-chaining',
    ];

    return { presets, plugins };
};
