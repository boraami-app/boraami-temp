import { Routes, Route, Link } from "react-router-dom";
import boraamiLogo from "./assets/boraami-primary-horizontal-logo.svg";
import blueHeroImg from "./assets/blu-app.png";
import googlePlayDownloadBtn from "./assets/google_store.svg";
import AppStoreDownloadBtn from "./assets/app-store-download-btn.svg";
import FAQList from "./components/FAQList";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import ScrollToTop from "./components/ScrollToTop";
import SafetyPolicyPage from "./pages/SafetyPolicyPage";
import "./App.css";

const HomePage = () => {
  return (
    <div className="app homepage">
      {/* Hero Section */}
      <div className="hero">
        <main>
          <figure className="screenshot">
            <img src={blueHeroImg} alt="Blu with Boraami App Screenshots" width="100%" />
          </figure>

          <div className="content">
            <header>
              <h2>Boraami is Live!</h2>
            </header>

            <p>
              A safe and inclusive social media app for <span className="bold">ARMY</span> to stay
              connected, and support all the <span className="bold">BTS</span> members
            </p>

            <div className="store-links">
              <p>Now available on Android play store and Apple App Store</p>
              <div className="download-btns">
                <a
                  href="https://play.google.com/store/apps/details?id=app.boraami.mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={googlePlayDownloadBtn}
                    alt="Get it on Google Play"
                    className="store-badge"
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/boraami/id6749337745"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={AppStoreDownloadBtn}
                    alt="Get it on App Store"
                    className="store-badge"
                  />
                </a>
              </div>
            </div>

            <div className="feedback">
              <p>Experiencing a bug or have feedback?</p>
              <br />
              <div className="feedback-row">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeMDb6CNh5bZ12vG-shlbWrDjA1kL0yX5HwJHESlU12UiLNuQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feedback-button"
                >
                  Submit report or feedback
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Additional Sections */}
      <div className="sections">
        <section className="faqs">
          <FAQList />
        </section>

        <section className="support">
          <h3>Do you need support?</h3>
          <p>
            We're here to help! For any issues or assistance, please reach us at{" "}
            <a href="mailto:support@boraami.app" target="_blank" rel="noopener noreferrer">
              support@boraami.app
            </a>
            , we're happy to support you with kindness and care.
          </p>
        </section>
      </div>
      <footer>
        <div className="footer-content">
          <div className="footer-column">
            <img src={boraamiLogo} alt="Boraami Logo" className="footer-logo" />
            <p>© 2026 Boraami. All rights reserved.</p>
          </div>
          <div className="footer-column">
            <Link to="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-link">
              Terms & Conditions
            </Link>
            <Link to="/safety-policy" className="footer-link">
              Child Safety Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/safety-policy" element={<SafetyPolicyPage />} />
      </Routes>
    </>
  );
};

export default App;
