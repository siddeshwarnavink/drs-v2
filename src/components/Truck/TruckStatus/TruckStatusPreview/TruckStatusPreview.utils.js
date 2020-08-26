export const getStatusColorClass = (props, classes) => {
    if (props.status === 'No plan') {
        return classes.Danger;
    } else if (props.driverStatus === 'PENDING' || props.driverStatus === 'ACKNOWLEDGED') {
        return classes.Warning;
    }
    return classes.Success;
}