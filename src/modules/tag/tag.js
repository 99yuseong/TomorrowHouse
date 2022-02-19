import style from './_tag.module.scss';

const Tag = ({ text, color }) => {
    return <div className={style[color]}>{text}</div>;
};

export default Tag;
