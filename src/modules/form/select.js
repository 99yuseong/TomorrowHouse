import { ReactComponent as Caret } from '../../assets/images/Icon/Caret.svg';
import style from './_form.module.scss';

const Select = ({ options }) => {
    return (
        <div className={style.selectGroup}>
            <Caret className={style.caret} />
            <select className={style.select}>
                {options.map((option, index) => (
                    <option key={index} value={index}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
