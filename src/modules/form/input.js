import { ReactComponent as Search } from '../../assets/images/Icon/Search.svg';
import style from './_form.module.scss';

const Input = ({ placeholder }) => {
    return (
        <div className={style.inputGroup}>
            <Search className={style.search} />
            <input className={style.input} placeholder={placeholder} />
        </div>
    );
};

export default Input;
