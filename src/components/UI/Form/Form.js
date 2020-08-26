import React from 'react';

import { onSubmitHandler } from './Form.utils';

const form = (props) => (
    <form onSubmit={(e) => onSubmitHandler(e, props)}>
        {props.children}
    </form>
)

export default form;