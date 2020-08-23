import { onSubmitHandler } from './Form.utils';

describe('component: <Form />; util: onSubmitHandler()', () => {
    const classes = {
        Button: 0,
        Button__Flat: 1,
        Danger: 2
    };

    it('should execute preventDefault() of first argument', () => {
        let isRan = false;
        onSubmitHandler({
            preventDefault: () => {
                isRan = true;
            },
        }, { onSubmit: (e) => { } });
        expect(isRan).toBe(true);
    });

    it('should execute onSubmit() of second argument', () => {
        let isRan = false;
        onSubmitHandler({ preventDefault: () => { }, }, {
            onSubmit: (e) => {
                isRan = true;
            }
        });
        expect(isRan).toBe(true);
    });
});