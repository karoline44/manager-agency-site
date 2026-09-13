export const metadata = {
  title: "WeManage — Artist & Concert Management",
};

export default function Home() {
  return (
    <>
      <header>
        <div className="header-inner">
          <a href="#" className="logo">
            <span className="logo-mark">
              <svg viewBox="0 0 34 34" width="34" height="34" fill="none">
                <circle cx="17" cy="17" r="16" stroke="#C9A227" strokeWidth="1" />
                <text
                  x="17"
                  y="23"
                  textAnchor="middle"
                  fontFamily="'Times New Roman', Times, serif"
                  fontStyle="italic"
                  fontSize="18"
                  fill="#C9A227"
                >
                  W
                </text>
              </svg>
            </span>
            <span className="wordmark">
              <span className="we">We</span>
              <span className="manage">MANAGE</span>
            </span>
          </a>
          <nav>
            <a href="#roster">Roster</a>
            <a href="#services">Tjenester</a>
            <a href="#shows">Konserter</a>
            <a href="#contact">Kontakt</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <span className="hero-eyebrow serif">Artist & konsertbyrå</span>
          <h1>
            Vi setter <em>scenen</em>.
          </h1>
          <p className="hero-sub">
            WeManage håndterer bookinger, turnéplanlegging og karrierebygging for artister som er klare for neste nivå.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Book et møte
            </a>
            <a href="#roster" className="btn-ghost">
              Se roster →
            </a>
          </div>
        </div>
      </section>

      <section className="roster" id="roster">
        <div className="section-head">
          <h2 className="serif">Roster</h2>
          <span className="section-count">4 artister</span>
        </div>
        <div className="lineup">
          <div className="lineup-row">
            <span className="lineup-name">Nord & Stål</span>
            <span className="lineup-meta">
              <span className="tag-green">Elektronisk</span> Oslo
            </span>
          </div>
          <div className="lineup-row">
            <span className="lineup-name">Marte Vik</span>
            <span className="lineup-meta">
              <span className="tag-green">Pop</span> Bergen
            </span>
          </div>
          <div className="lineup-row">
            <span className="lineup-name">Hollow Tide</span>
            <span className="lineup-meta">
              <span className="tag-green">Indie rock</span> Trondheim
            </span>
          </div>
          <div className="lineup-row">
            <span className="lineup-name">DJ Kaldever</span>
            <span className="lineup-meta">
              <span className="tag-green">House</span> Stavanger
            </span>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-head">
          <h2 className="serif">Hva vi gjør</h2>
        </div>
        <div className="services-grid">
          <div className="service">
            <h3 className="serif">Artistledelse</h3>
            <p>
              Karriereplanlegging, kontrakter og daglig oppfølging — vi håndterer det praktiske slik at artisten kan
              fokusere på musikken.
            </p>
          </div>
          <div className="service">
            <h3 className="serif">Konsertbooking</h3>
            <p>Fra klubbspillejobber til festivalscener. Vi forhandler avtaler og sikrer at riderne blir fulgt opp.</p>
          </div>
          <div className="service">
            <h3 className="serif">Turnéproduksjon</h3>
            <p>Logistikk, reise og produksjon rundt hele turneen — planlagt ned til minste detalj.</p>
          </div>
        </div>
      </section>

      <section className="shows" id="shows">
        <div className="section-head">
          <h2 className="serif">Kommende konserter</h2>
        </div>
        <div className="show-list">
          <div className="show-row">
            <span className="show-date">12 OKT</span>
            <span className="show-name">Nord & Stål</span>
            <span className="show-venue">Sentrum Scene, Oslo</span>
          </div>
          <div className="show-row">
            <span className="show-date">24 OKT</span>
            <span className="show-name">Marte Vik</span>
            <span className="show-venue">USF Verftet, Bergen</span>
          </div>
          <div className="show-row">
            <span className="show-date">02 NOV</span>
            <span className="show-name">Hollow Tide</span>
            <span className="show-venue">Blæst, Trondheim</span>
          </div>
          <div className="show-row">
            <span className="show-date">15 NOV</span>
            <span className="show-name">DJ Kaldever</span>
            <span className="show-venue">Fisketorget, Stavanger</span>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <h2 className="serif">
          Klar for å <em>bygge</em> noe sammen?
        </h2>
        <a href="mailto:hei@wemanage.no" className="btn-primary">
          Ta kontakt
        </a>
      </section>

      <footer>
        <div className="footer-inner">
          <span className="footer-copy">© 2026 WeManage. Alle rettigheter forbeholdt.</span>
          <div className="footer-links">
            <a href="#roster">Roster</a>
            <a href="#services">Tjenester</a>
            <a href="#shows">Konserter</a>
          </div>
        </div>
      </footer>
    </>
  );
}
