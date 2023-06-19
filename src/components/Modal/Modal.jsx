import css from './Modal.module.css';

const Modal = props => {
    // console.log(props);
    const { imgURL } = props;
    // console.log(imgURL);
    return (
        <div className={css.Overlay}>
            <div className={css.Modal}>
                <img src={imgURL} alt="" width="800px" />
            </div>
        </div>
    );
};

export default Modal;
