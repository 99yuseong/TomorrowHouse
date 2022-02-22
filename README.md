# 내일의 집

1. GNB

-   로그인을 했을 때

```jsx
<div className={style.btnList}>
    <div className={`lg-hidden ${style.btnItem}`}>
        <button
            className={`${style.iconBtn} ${style.search}`}
            type="button"
            aria-label="검색창 열기 버튼"
        >
            <Search />
        </button>
    </div>
    <div className={`sm-hidden ${style.btnItem}`}>
        <a className={style.iconBtn} href="/" aria-label="북마크 페이지로 이동">
            <Bookmark />
        </a>
    </div>
    <div className={`sm-hidden ${style.btnItem}`}>
        <a className={style.iconBtn} href="/" aria-label="알림 페이지로 이동">
            <Bell />
            <strong className={style.badge}>1</strong>
        </a>
    </div>
    <div className={style.btnItem}>
        <a
            className={style.iconBtn}
            href="/"
            aria-label="장바구니 페이지로 이동"
        >
            <Cart />
            <strong className={style.badge}>99</strong>
        </a>
    </div>
    <div className={`sm-hidden ${style.btnItem} ${style.myMenu}`}>
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
                <li className={style.dropdownItem}>
                    <a href="/">마이페이지</a>
                </li>
                <li className={style.dropdownItem}>
                    <a href="/">나의 쇼핑</a>
                </li>
                <li className={style.dropdownItem}>
                    <a href="/">이벤트</a>
                </li>
                <li className={style.dropdownItem}>
                    <button type="button">로그아웃</button>
                </li>
            </ul>
        </div>
    </div>
</div>
```

-   로그인을 하지 않았을 때

```jsx
<div className={style.btnList}>
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
            <strong className={style.badge}>99</strong>
        </a>
    </div>
    <div className={`sm-hidden ${style.btnItem} ${style.auth}`}>
        <a href="/">로그인</a>
        <a href="/">회원가입</a>
    </div>
</div>
```
