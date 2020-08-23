import { updateObject } from './object';

describe('global util: updateObject; function: updateObject()', () => {
    it('should merge the objects correctly', () => {
        const output = updateObject({ foo: 1 }, { bar: 0 })
        expect(output).toEqual({ foo: 1, bar: 0 });
    });
});