const a = 10;
const b = 20;
const c = 30;

export const obj = {
    name: 'Aude',
    age: 30,
    Gender: 'Ms'
}

const fn = () => {
    console.log('This is a function')
}

export default a; /* 默认导出 */

export {b,c,fn}; /* 命名导出 */
