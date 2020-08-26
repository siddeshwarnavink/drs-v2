export const getClassList = (classes, props) => {
    const classList = [classes.Button]

    if (props.buttonType === 'flat') {
        classList.push(classes.Button__Flat)
    }

    if (props.buttonTheme === 'danger') {
        classList.push(classes.Danger)
    }

    if (props.buttonTheme === 'success') {
        classList.push(classes.Success)
    }

    return classList
}