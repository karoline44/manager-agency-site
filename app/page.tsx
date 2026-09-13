:root {
  --black: #0A0A0A;
  --black-2: #131210;
  --gold: #C9A227;
  --gold-dim: #8A7420;
  --cream: #F5F3EE;
  --muted: #8A8680;
  --hairline: rgba(201, 162, 39, 0.25);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  background: var(--black);
  color: var(--cream);
  font-family: 'Times New Roman', Times, serif;
  font-weight: 400;
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, .serif {
  font-family: 'Times New Roman', Times, serif;
  font-weight: 400;
  letter-spacing: -0.01em;
}

a { color: inherit; text-decoration: none; }

.wrap {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 32px;
}

/* ---------- Header ---------- */
header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--hairline);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
  max-width: 1080px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 21px;
}

.logo-mark {
  width: 34px;
  height: 34px;
  position: relative;
  flex-shrink: 0;
}

.wordmark {
  font-family: 'Times New Roman', Times, serif;
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
}

.wordmark .we {
  font-style: italic;
  font-weight: 500;
  color: var(--cream);
}

.wordmark .manage {
  font-weight: 400;
  letter-spacing: 0.14em;
  color: var(--gold);
  font-size: 0.72em;
  margin-left: 2px;
}

nav {
  display: flex;
  gap: 36px;
  font-size: 14px;
  color: var(--muted);
}

nav a:hover { color: var(--gold); }

@media (max-width: 720px) {
  nav { display: none; }
}

/* ---------- Hero ---------- */
.hero {
  padding: 140px 32px 120px;
  position: relative;
  border-bottom: 1px solid var(--hairline);
}

.hero-inner {
  max-width: 1080px;
  margin: 0 auto;
}

.hero-eyebrow {
  font-size: 13px;
  color: var(--gold);
  margin-bottom: 24px;
  display: block;
}

.hero h1 {
  font-size: clamp(48px, 8vw, 96px);
  line-height: 0.98;
  max-width: 800px;
}

.hero h1 em {
  font-style: italic;
  color: var(--gold);
}

.hero-sub {
  margin-top: 32px;
  max-width: 480px;
  color: var(--muted);
  font-size: 17px;
  font-weight: 300;
}

.hero-actions {
  margin-top: 48px;
  display: flex;
  gap: 20px;
  align-items: center;
}

.btn-primary {
  background: var(--gold);
  color: var(--black);
  padding: 14px 30px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 2px;
  transition: background 0.2s ease;
  display: inline-block;
}

.btn-primary:hover { background: #dbb539; }

.btn-ghost {
  color: var(--cream);
  font-size: 14px;
  border-bottom: 1px solid var(--hairline);
  padding-bottom: 3px;
}

.btn-ghost:hover { border-color: var(--gold); }

/* ---------- Roster (lineup style) ---------- */
.roster {
  padding: 100px 32px;
  border-bottom: 1px solid var(--hairline);
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 56px;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
}

.section-head h2 { font-size: 34px; }

.section-count {
  font-size: 13px;
  color: var(--muted);
}

.lineup {
  max-width: 1080px;
  margin: 0 auto;
}

.lineup-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 26px 0;
  border-top: 1px solid var(--hairline);
  transition: padding-left 0.25s ease;
}

.lineup-row:last-child { border-bottom: 1px solid var(--hairline); }

.lineup-row:hover {
  padding-left: 16px;
  background: linear-gradient(90deg, rgba(201,162,39,0.05), transparent);
}

.lineup-name {
  font-family: 'Times New Roman', Times, serif;
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 400;
}

.lineup-meta {
  display: flex;
  gap: 32px;
  align-items: center;
  color: var(--muted);
  font-size: 13px;
}

.tag-green {
  color: var(--gold);
  border: 1px solid var(--gold-dim);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
}

@media (max-width: 640px) {
  .lineup-row { flex-direction: column; align-items: flex-start; gap: 10px; }
}

/* ---------- Services ---------- */
.services {
  padding: 100px 32px;
  border-bottom: 1px solid var(--hairline);
  background: var(--black-2);
}

.services-grid {
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

@media (max-width: 780px) {
  .services-grid { grid-template-columns: 1fr; }
}

.service {
  padding: 40px;
  border-left: 1px solid var(--hairline);
}

.service:first-child { border-left: none; }

@media (max-width: 780px) {
  .service { border-left: none; border-top: 1px solid var(--hairline); }
  .service:first-child { border-top: none; }
}

.service h3 {
  font-size: 22px;
  margin-bottom: 16px;
  color: var(--gold);
}

.service p {
  color: var(--muted);
  font-size: 15px;
  font-weight: 300;
}

/* ---------- Shows ---------- */
.shows {
  padding: 100px 32px;
  border-bottom: 1px solid var(--hairline);
}

.show-list {
  max-width: 1080px;
  margin: 0 auto;
}

.show-row {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 24px;
  align-items: center;
  padding: 22px 0;
  border-top: 1px solid var(--hairline);
  font-size: 15px;
}

.show-row:last-child { border-bottom: 1px solid var(--hairline); }

.show-date {
  font-family: 'Times New Roman', Times, serif;
  color: var(--gold);
  font-size: 13px;
  letter-spacing: 0.03em;
}

.show-name {
  font-family: 'Times New Roman', Times, serif;
  font-size: 19px;
}

.show-venue {
  color: var(--muted);
  font-size: 13px;
}

@media (max-width: 640px) {
  .show-row { grid-template-columns: 1fr; gap: 6px; padding: 20px 0; }
}

/* ---------- CTA / Footer ---------- */
.cta {
  padding: 140px 32px;
  text-align: center;
}

.cta h2 {
  font-size: clamp(36px, 6vw, 64px);
  max-width: 620px;
  margin: 0 auto 40px;
}

.cta h2 em { color: var(--gold); font-style: italic; }

footer {
  border-top: 1px solid var(--hairline);
  padding: 48px 32px;
}

.footer-inner {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-copy {
  color: var(--muted);
  font-size: 13px;
}

.footer-links {
  display: flex;
  gap: 28px;
  font-size: 13px;
  color: var(--muted);
}

.footer-links a:hover { color: var(--gold); }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { transition: none !important; }
}
