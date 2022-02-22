import style from './_button.module.scss';

const Button = ({ text, color, height, disabled, icon }) => {
    if (disabled) {
        return (
            <button
                disabled
                className={`${style[`${color}`]} ${style[`btn${height}`]}`}
            >
                {text}
                {icon}
            </button>
        );
    } else {
        return (
            <button className={`${style[`${color}`]} ${style[`btn${height}`]}`}>
                {text}
                {icon}
            </button>
        );
    }
};

export default Button;
