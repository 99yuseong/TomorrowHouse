import style from './_avatar.module.scss';

const Avatar = ({ url, size }) => {
    if (size === '24') {
        return (
            <div className={style.avatar24}>
                <img src={url} alt="user" />
            </div>
        );
    }
    if (size === '32') {
        return (
            <div className={style.avatar32}>
                <img src={url} alt="user" />
            </div>
        );
    }
};

export default Avatar;
