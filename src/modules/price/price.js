import style from './_price.module.scss';

const Price = ({ option, price, unit }) => {
    price = price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        <div className={style[`price${option}`]}>
            <div className={style.price}>{price}</div>
            <div className={style.unit}>{unit}</div>
        </div>
    );
};

export default Price;
