import { getClassList } from './Button.utils';

describe('component: <Button />; util: getClassList()', () => {
    const classes = {
        Button: 0,
        Button__Flat: 1,
        Danger: 2
    };

    it('should have the Button class by default', () => {
        const output = getClassList(classes, {});
        expect(output).toEqual([classes.Button]);
    });

    it('should have the Button__Flat class if buttonType is set to flat', () => {
        const output = getClassList(classes, { buttonType: 'flat' });
        expect(output).toEqual([classes.Button, classes.Button__Flat]);
    });

    it('should have the Danger class if buttonTheme is set to danger', () => {
        const output = getClassList(classes, { buttonTheme: 'danger' });
        expect(output).toEqual([classes.Button, classes.Danger]);
    });
});