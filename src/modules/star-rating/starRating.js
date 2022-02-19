import style from './_star-rating.module.scss';
import { ReactComponent as Star } from '../../assets/images/Icon/Star.svg';

const StarRating = ({ size, rating }) => {
    return (
        <div className={style[`rating${size}`]}>
            {rating >= 1 ? <Star className={style.isActive} /> : <Star />}
            {rating >= 2 ? <Star className={style.isActive} /> : <Star />}
            {rating >= 3 ? <Star className={style.isActive} /> : <Star />}
            {rating >= 4 ? <Star className={style.isActive} /> : <Star />}
            {rating >= 5 ? <Star className={style.isActive} /> : <Star />}
        </div>
    );
};

export default StarRating;
