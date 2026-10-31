"use client";

import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";

const items = [
  { label: "관광생생통", href: "/", current: true },
  { label: "지역생생통", href: "/local", current: false },
  { label: "군산 이야기", href: "/stories", current: false },
] as const;

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.9" /><path d="m16 16 5 5" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        openButton.current?.focus();
      }
    };
    window.addEventListener("keydown", keydown);
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    return () => {
      window.removeEventListener("keydown", keydown);
      document.body.style.overflow = "";
    };
  }, [open]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(query.trim()
      ? "검색 기능은 검증된 관광 콘텐츠가 등록된 후 제공됩니다."
      : "찾으실 장소나 코스를 입력해 주세요.");
    setOpen(false);
  }

  function navigate(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (href === "/") {
      setOpen(false);
      return;
    }
    event.preventDefault();
    setOpen(false);
    setNotice(href === "/local"
      ? "지역생생통은 다음 단계에서 준비합니다."
      : "군산 이야기는 콘텐츠 등록 후 열립니다.");
  }

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="/" aria-label="군산닷컴 관광생생통 홈">
            <img src="/brand/gunsan-wordmark.svg" width="370" height="82" alt="GUNSAN.COM — 군산, 그 이상의 여행" />
          </a>
          <nav className="desktop-nav" aria-label="주 메뉴">
            {items.map(item => (
              <a key={item.href} href={item.href}
                className={item.current ? "desktop-nav__link desktop-nav__link--active" : "desktop-nav__link"}
                aria-current={item.current ? "page" : undefined}
                onClick={event => navigate(event, item.href)}>
                {item.label}
              </a>
            ))}
          </nav>
          <form className="desktop-search" role="search" onSubmit={submitSearch}>
            <SearchIcon />
            <label className="sr-only" htmlFor="desktop-search">군산 검색</label>
            <input id="desktop-search" type="search" value={query} onChange={event => setQuery(event.target.value)}
              placeholder="군산의 장소, 맛집, 코스를 검색해보세요." />
          </form>
          <button type="button" className="mobile-menu-toggle" ref={openButton}
            aria-label="메뉴 열기" aria-expanded={open} aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}>
            <span /><span /><span />
          </button>
        </div>
      </header>
      {notice && <div className="site-notice" role="status"><span>{notice}</span>
        <button type="button" onClick={() => setNotice("")} aria-label="안내 닫기">×</button>
      </div>}
      {open && (
        <div className="mobile-navigation-layer">
          <button type="button" className="mobile-navigation-backdrop" aria-label="메뉴 닫기" onClick={() => setOpen(false)} />
          <section id="mobile-navigation" className="mobile-navigation" role="dialog" aria-modal="true" aria-label="전체 메뉴">
            <div className="mobile-navigation__head">
              <img src="/brand/gunsan-wordmark.svg" width="370" height="82" alt="GUNSAN.COM — 군산, 그 이상의 여행" />
              <button type="button" className="mobile-navigation__close" ref={closeButton}
                aria-label="메뉴 닫기"
                onClick={() => { setOpen(false); openButton.current?.focus(); }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M5 5 19 19M19 5 5 19" />
                </svg>
              </button>
            </div>
            <nav className="mobile-navigation__links" aria-label="모바일 주 메뉴">
              {items.map(item => (
                <a key={item.href} href={item.href} aria-current={item.current ? "page" : undefined}
                  onClick={event => navigate(event, item.href)}>
                  <span>{item.label}</span><span className="mobile-navigation__chevron" aria-hidden="true">›</span>
                </a>
              ))}
            </nav>
            <form role="search" className="mobile-navigation__search" onSubmit={submitSearch}>
              <SearchIcon />
              <label htmlFor="mobile-search" className="sr-only">군산 검색</label>
              <input id="mobile-search" type="search" value={query} onChange={event => setQuery(event.target.value)}
                placeholder="군산의 장소, 맛집, 코스 검색" />
              <button type="submit">검색</button>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
