export const onSubmitHandler = (event, props) => {
    event.preventDefault();
    props.onSubmit(event);
}
