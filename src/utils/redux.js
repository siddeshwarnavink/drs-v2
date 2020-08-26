export const serializeFunction = (func) => (func.toString());

// eslint-disable-next-line no-new-func
export const deserializeFunction = (funcString) => (new Function(`return ${funcString}`)());
