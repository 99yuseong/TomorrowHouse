import style from './_gnb.module.scss';
import Input from '../../modules/form/input';
import Button from '../../modules/button/button';

import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import { ReactComponent as Menu } from '../../assets/images/Icon/Menu.svg';
import { ReactComponent as Search } from '../../assets/images/Icon/Search.svg';
import { ReactComponent as Bookmark } from '../../assets/images/Icon/Bookmark.svg';
import { ReactComponent as Bell } from '../../assets/images/Icon/Bell.svg';
import { ReactComponent as Cart } from '../../assets/images/Icon/Cart.svg';
import { ReactComponent as Chevron } from '../../assets/images/Icon/Chevron.svg';

const GlobalNaviBar = () => {
    return (
        <header className={style.gnb}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className={style.gnbWrapper}>
                            <div className={style.gnbLeft}>
                                <h1
                                    className={style.logo}
                                    aria-label="메인 페이지로 이동"
                                >
                                    <a href="/">
                                        <Logo />
                                    </a>
                                </h1>
                                <button
                                    className={`sm-only ${style.iconBtn} ${style.menu}`}
                                    type="button"
                                    aria-label="메뉴 열기 버튼"
                                >
                                    <Menu />
                                </button>
                                <nav className={`sm-hidden ${style.nav}`}>
                                    <h2 className="visually-hidden">메뉴</h2>
                                    <ul>
                                        <li>
                                            <a href="/">커뮤니티</a>
                                        </li>
                                        <li>
                                            <a href="/">스토어</a>
                                        </li>
                                        <li>
                                            <a href="/">인테리어시공</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className={style.gnbRight}>
                                <div className={`lg-only ${style.searchInput}`}>
                                    <Input
                                        className="lg-only"
                                        placeholder="스토어 검색"
                                    />
                                </div>

                                {/* NOTE : 로그인을 했을 때 */}
                                <div className={style.btnList}>
                                    <div
                                        className={`lg-hidden ${style.btnItem}`}
                                    >
                                        <button
                                            className={`${style.iconBtn} ${style.search}`}
                                            type="button"
                                            aria-label="검색창 열기 버튼"
                                        >
                                            <Search />
                                        </button>
                                    </div>
                                    <div
                                        className={`sm-hidden ${style.btnItem}`}
                                    >
                                        <a
                                            className={style.iconBtn}
                                            href="/"
                                            aria-label="북마크 페이지로 이동"
                                        >
                                            <Bookmark />
                                        </a>
                                    </div>
                                    <div
                                        className={`sm-hidden ${style.btnItem}`}
                                    >
                                        <a
                                            className={style.iconBtn}
                                            href="/"
                                            aria-label="알림 페이지로 이동"
                                        >
                                            <Bell />
                                            <strong className={style.badge}>
                                                1
                                            </strong>
                                        </a>
                                    </div>
                                    <div className={style.btnItem}>
                                        <a
                                            className={style.iconBtn}
                                            href="/"
                                            aria-label="장바구니 페이지로 이동"
                                        >
                                            <Cart />
                                            <strong className={style.badge}>
                                                99
                                            </strong>
                                        </a>
                                    </div>

                                    <div
                                        className={`sm-hidden ${style.btnItem} ${style.myMenu}`}
                                    >
                                        <button
                                            className={`${style.iconBtn} ${style.avatar}`}
                                            type="button"
                                            aria-label="마이메뉴 열기 버튼"
                                        >
                                            <img
                                                src={require('../../assets/images/img-user-01.jpg')}
                                                alt="user profile"
                                            />
                                        </button>
                                        <div className={style.dropdown}>
                                            <ul className={style.dropdownList}>
                                                <li
                                                    className={
                                                        style.dropdownItem
                                                    }
                                                >
                                                    <a href="/">마이페이지</a>
                                                </li>
                                                <li
                                                    className={
                                                        style.dropdownItem
                                                    }
                                                >
                                                    <a href="/">나의 쇼핑</a>
                                                </li>
                                                <li
                                                    className={
                                                        style.dropdownItem
                                                    }
                                                >
                                                    <a href="/">이벤트</a>
                                                </li>
                                                <li
                                                    className={
                                                        style.dropdownItem
                                                    }
                                                >
                                                    <button type="button">
                                                        로그아웃
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* NOTE : 로그인을 하지 않았을 때 */}
                                {/* <div className={style.btnList}>
                                    <div className={`lg-hidden ${style.btnItem}`}>
                                        <button
                                            className={`${style.iconBtn} ${style.search}`}
                                            type="button"
                                            aria-label="검색창 열기 버튼"
                                        >
                                            <Search />
                                        </button>
                                    </div>
                                    <div className={style.btnItem}>
                                        <a
                                            className={style.iconBtn}
                                            href="/"
                                            aria-label="장바구니 페이지로 이동"
                                        >
                                            <Cart />
                                            <strong className={style.badge}>
                                                99
                                            </strong>
                                        </a>
                                    </div>
                                    <div
                                        className={`sm-hidden ${style.btnItem} ${style.auth}`}
                                    >
                                        <a href="/">로그인</a>
                                        <a href="/">회원가입</a>
                                    </div>
                                </div> */}

                                <div
                                    className={`sm-hidden ${style.writingBtn}`}
                                >
                                    <Button
                                        text="글쓰기"
                                        color="primary"
                                        height="40"
                                        icon={<Chevron />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default GlobalNaviBar;
