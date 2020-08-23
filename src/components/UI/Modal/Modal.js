import React from 'react';

import classes from './Modal.module.scss';
import Backdrop from '../../Transparent/Backdrop/Backdrop';
import Button from '../Button/Button';

const Modal = props => {
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}>
                <header className={classes.Modal__Title}>
                    {props.caption}
                    <button className={classes.ModalTitle__Close} onClick={props.modalClosed}>×</button>
                </header>
                <main className={classes.Modal__Content} style={{ maxHeight: props.maxHeight }}>
                    {props.children}
                </main>
                <footer className={classes.Modal__Footer}>
                    <Button
                        type="button"
                        buttonType="flat"
                        buttonTheme="danger"
                        onClick={props.modalClosed}
                    >
                        Cancel
                    </Button>
                </footer>
            </div>
        </React.Fragment>
    );
}

export default Modal;