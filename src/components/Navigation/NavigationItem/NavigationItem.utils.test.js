import { getClassList } from './NavigationItem.utils';

describe('component: <NavigationItem />; util: getClassList()', () => {
    const classes = {
        NavigationItem: 0,
        Active: 1,
        BottombarItem: 2,
    };
    
    it('should have the NavigationItem class by default', () => {
        const output = getClassList(classes, {});
        expect(output).toEqual([classes.NavigationItem]);
    });

    it('should have the BottombarItem class if isBottombar is set true', () => {
        const output = getClassList(classes, { }, true);
        expect(output).toEqual([classes.BottombarItem]);
    });

    it('should have the Active class is active is set true', () => {
        const output = getClassList(classes, { activeLink: true });
        expect(output).toEqual([classes.NavigationItem, classes.Active]);
    });
});