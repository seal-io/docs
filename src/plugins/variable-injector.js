const plugin = (options) => {
    // Replace all occurrences of {{ varName }} with the value of varName
    const replace = (str) => str.replace(/{{\s*([A-Z_]+)\s*}}/g, (match, varName) => {
        return options.replacements[varName] || match;
    });
    const transformer = async (ast) => {
        const {visit} = await import('unist-util-visit')
        visit(ast, ['text', 'code', 'inlineCode', 'link'], (node) => {
            if (node.type === 'link') {
                node.url = replace(node.url)
            } else {
                node.value = replace(node.value)
            }
        });
    };
    return transformer;
};

module.exports = plugin;
