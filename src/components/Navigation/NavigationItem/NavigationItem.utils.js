export const getClassList = (classes, props, isBottombar = false) => {
    let classList = [classes.NavigationItem];

    if(isBottombar) {
        classList = [classes.BottombarItem]
    }
    
    if (props.activeLink) {
        classList.push(classes.Active);
    }

    return classList;
}