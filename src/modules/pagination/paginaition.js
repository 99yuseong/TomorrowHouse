import { ReactComponent as Chevron } from '../../assets/images/Icon/Chevron.svg';
import style from './_pagination.module.scss';

const paging = (from, to) => {
    const numArray = [];
    for (let i = from; i <= to; i++) {
        numArray.push(
            <li key={i}>
                <button className={style.item}>{i}</button>
            </li>
        );
    }
    return numArray;
};

const Pagination = ({ from, to, now, min, max }) => {
    return (
        <div className={style.paginationGroup}>
            {/* previous button */}
            {(() => {
                if (now === min) return;
                return (
                    <button className={style.itemControl}>
                        <Chevron className={style.chevronPre} />
                    </button>
                );
            })()}

            {/* pagination */}
            <ul className={style.items}>{paging(from, to)}</ul>

            {/* next button */}
            {(() => {
                if (now === max) return;
                return (
                    <button className={style.itemControl}>
                        <Chevron className={style.chevronNext} />
                    </button>
                );
            })()}
        </div>
    );
};

export default Pagination;
