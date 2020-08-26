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
                    {props.onGoBack ? (
                        <button className={classes.ModalTitle__Back} onClick={props.onGoBack}>
                            <span className="material-icons">
                                arrow_back
                            </span>
                        </button>
                    ) : null}
                    {props.caption}
                    <button className={classes.ModalTitle__Close} onClick={props.modalClosed}>
                        <span className="material-icons">
                            close
                        </span>
                    </button>
                </header>
                <main className={classes.Modal__Content} style={{ maxHeight: props.maxHeight, overflowY: props.noScroll ? 'auto' : 'scroll' }}>
                    {props.children}
                </main>
                <footer className={classes.Modal__Footer}>
                    {props.onGoBack ? (
                        <Button
                            type="button"
                            buttonType="flat"
                            onClick={props.onGoBack}
                        >
                            Back
                        </Button>
                    ) : null}

                    <Button
                        type="button"
                        buttonType="flat"
                        buttonTheme="danger"
                        onClick={props.modalClosed}
                    >
                        Close
                    </Button>
                </footer>
            </div>
        </React.Fragment>
    );
}

export default Modal;