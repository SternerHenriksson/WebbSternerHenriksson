export function Footer() {
  return (
    <footer className="sh-footer">
      <div className="sh-footer-inner">
        <div className="sh-footer-grid" style={{ paddingBottom: 48 }}>
          <div>
            <p className="sh-footer-wordmark">
              Sterner<em>&amp;</em>Henriksson
            </p>
            <a
              className="sh-btn sh-btn-secondary"
              href="mailto:webbsternerhenriksson@gmail.com"
              style={{ fontSize: 13, padding: "11px 20px" }}
            >
              webbsternerhenriksson@gmail.com
            </a>
          </div>

          <div>
            <h4>Kontakt</h4>
            <ul>
              <li>
                <a href="mailto:webbsternerhenriksson@gmail.com">E-post</a>
              </li>
              <li>
                <a href="tel:+46701234567">Telefon</a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Bolaget</h4>
            <ul>
              <li>
                <a href="#tjanster">Tjänster</a>
              </li>
              <li>
                <a href="#om-oss">Om oss</a>
              </li>
              <li>
                <a href="#kontakt">Kontakt</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>&nbsp;</h4>
            <ul>
              <li style={{ color: "rgba(245, 242, 236, 0.45)", fontSize: 13, opacity: 1 }}>
                Sterner &amp; Henriksson AB
              </li>
              <li style={{ color: "rgba(245, 242, 236, 0.45)", fontSize: 13, opacity: 1 }}>
                Grundat 2026 · Stockholm
              </li>
            </ul>
          </div>
        </div>

        <div className="sh-footer-fine">
          <span>© {new Date().getFullYear()} Sterner &amp; Henriksson AB</span>
          <span style={{ display: "flex", gap: 20 }}>
            <a href="#">Integritet</a>
            <a href="#">Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
