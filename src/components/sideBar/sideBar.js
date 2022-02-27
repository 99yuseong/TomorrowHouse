import style from './_side-bar.module.scss';

import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import { ReactComponent as Community } from '../../assets/images/Icon/Community.svg';
import { ReactComponent as Expert } from '../../assets/images/Icon/Expert.svg';
import { ReactComponent as Store } from '../../assets/images/Icon/Store.svg';
import { ReactComponent as Chevron } from '../../assets/images/Icon/Chevron.svg';
import { ReactComponent as New } from '../../assets/images/Icon/New.svg';

import Avatar from '../../modules/avatar/avatar';
import Button from '../../modules/button/button';
import { useState } from 'react';

const SideBar = () => {
    const [opened, setOpened] = useState({
        community: false,
        store: false,
        interior: false,
    });

    const [isActive, setIsActive] = useState(null);

    const toggleMenu = (event) => {
        const openNow = { ...opened };
        for (let key in openNow) {
            if (key === event.target.id) {
                openNow[key] = !openNow[key];
            } else {
                openNow[key] = false;
            }
        }
        setOpened(openNow);
    };

    const canClickMenu = (event) => {
        event.preventDefault();
    };

    return (
        <aside className={style.sideBar}>
            <header>
                <h1 className={style.logo}>
                    <a href="/">
                        <Logo />
                    </a>
                </h1>

                {/* 로그인을 한 경우 */}
                <div className={style.avatar}>
                    <a href="/">
                        <div className={style.avatarImg}>
                            <Avatar
                                url={require('../../assets/images/img-user-01.jpg')}
                                size="24"
                            />
                        </div>
                        <h2 className={style.username}>사달라</h2>
                    </a>
                </div>

                {/* 로그인을 하지 않은 경우 */}
                {/* <div className={style.auth}>
                    <a href="/">
                        <Button text="로그인" color="outlined" height="40" />
                    </a>
                    <a href="/">
                        <Button text="회원가입" color="primary" height="40" />
                    </a>
                </div> */}
            </header>

            <div>
                <div
                    className={`${style.menu} ${
                        opened.community ? style.isOpen : ''
                    }`}
                >
                    <button
                        className={style.menuBtn}
                        onClick={toggleMenu}
                        onBlur={toggleMenu}
                        type="button"
                        id="community"
                    >
                        <div className={style.left}>
                            <div className={style.menuIcon} aria-hidden>
                                <Community />
                            </div>
                            <h3>커뮤니티</h3>
                        </div>
                        <div className={style.dropdownIcon} aria-hidden>
                            <Chevron />
                        </div>
                    </button>

                    <nav
                        className={style.communityNav}
                        onMouseDown={canClickMenu}
                    >
                        <h3 className="visually-hidden">메뉴</h3>
                        <ul className={style.navList}>
                            <li>
                                <a href="/">홈</a>
                            </li>
                            <li>
                                <a href="/">팔로잉</a>
                            </li>
                            <li>
                                <a href="/">사진</a>
                            </li>
                            <li>
                                <a href="/">집들이</a>
                            </li>
                            <li>
                                <a href="/">노하우</a>
                            </li>
                            <li>
                                <a href="/">전문가집들이</a>
                            </li>
                            <li>
                                <a href="/">셀프가이드</a>
                            </li>
                            <li>
                                <a href="/">질문과답변</a>
                            </li>
                            <li>
                                <a href="/">이벤트</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div
                    className={`${style.menu} ${
                        opened.store ? style.isOpen : ''
                    }`}
                >
                    <button
                        className={style.menuBtn}
                        onClick={toggleMenu}
                        onBlur={toggleMenu}
                        type="button"
                        id="store"
                    >
                        <div className={style.left}>
                            <div className={style.menuIcon} aria-hidden>
                                <Store />
                            </div>
                            <h3>스토어</h3>
                        </div>
                        <div className={style.dropdownIcon} aria-hidden>
                            <Chevron />
                        </div>
                    </button>

                    <nav className={style.storeNav} onMouseDown={canClickMenu}>
                        <h3 className="visually-hidden">메뉴</h3>
                        <ul className={style.navList}>
                            <li>
                                <a href="/">스토어홈</a>
                            </li>
                            <li>
                                <a href="/">카테고리</a>
                            </li>
                            <li>
                                <a href="/">신혼가구</a>
                            </li>
                            <li>
                                <a href="/">베스트</a>
                            </li>
                            <li>
                                <a href="/">오늘의딜</a>
                            </li>
                            <li>
                                <a href="/">연휴특가</a>
                            </li>
                            <li>
                                <a href="/">월동준비</a>
                            </li>
                            <li>
                                <a href="/">리퍼마켓</a>
                            </li>
                            <li>
                                <a href="/">
                                    기획전
                                    <div className={style.newBadge}>
                                        <New />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div
                    className={`${style.menu} ${
                        opened.interior ? style.isOpen : ''
                    }`}
                >
                    <button
                        className={style.menuBtn}
                        onClick={toggleMenu}
                        onBlur={toggleMenu}
                        type="button"
                        id="interior"
                    >
                        <div className={style.left}>
                            <div className={style.menuIcon} aria-hidden>
                                <Expert />
                            </div>
                            <h3>인테리어시공</h3>
                        </div>
                        <div className={style.dropdownIcon} aria-hidden>
                            <Chevron />
                        </div>
                    </button>

                    <nav
                        className={style.interiorNav}
                        onMouseDown={canClickMenu}
                    >
                        <h3 className="visually-hidden">메뉴</h3>
                        <ul className={style.navList}>
                            <li>
                                <a href="/">업체찾기</a>
                            </li>
                            <li>
                                <a href="/">간편상담</a>
                            </li>
                            <li>
                                <a href="/">견적계산</a>
                            </li>
                            <li>
                                <a href="/">이사</a>
                            </li>
                            <li>
                                <a href="/">설치/수리</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* 로그인을 했을 경우 */}
            <footer className={style.footer}>
                <h2 className="visually-hidden">유저 메뉴</h2>
                <ul className={style.footerList}>
                    <li>
                        <a href="/">마이페이지</a>
                    </li>
                    <li>
                        <a href="/">나의쇼핑</a>
                    </li>
                    <li>
                        <a href="/">스크랩북</a>
                    </li>
                    <li>
                        <a href="/">알림</a>
                    </li>
                    <li>
                        <a href="/">이벤트</a>
                    </li>
                </ul>
            </footer>
        </aside>
    );
};

export default SideBar;
