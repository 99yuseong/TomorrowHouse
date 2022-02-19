import style from './_button.module.scss';

const Button = ({ text, color, height, disabled }) => {
    if (disabled) {
        return (
            <button
                disabled
                className={`${style[`${color}`]} ${style[`btn${height}`]}`}
            >
                {text}
            </button>
        );
    } else {
        return (
            <button className={`${style[`${color}`]} ${style[`btn${height}`]}`}>
                {text}
            </button>
        );
    }
};

export default Button;
