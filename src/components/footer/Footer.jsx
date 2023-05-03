import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="footer1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6 mb--50 d-flex justify-content-sm-start justify-content-center">
            <div className="footer-widget">
              <div className="widget-title">
                <h5>À propos de nous</h5>
              </div>
              <div className="menu-container">
                <ul>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>
                        Nous contacter <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      Termes &amp; Conditions <i className="bx bx-up-arrow-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Confidentialité &amp; politique <i className="bx bx-up-arrow-alt" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb--50 d-flex justify-content-md-center justify-content-sm-end justify-content-center">
            <div className="footer-widget">
              <div className="widget-title">
                <h5>Pour les candidats</h5>
              </div>
              <div className="menu-container">
                <ul>
                  <li>
                    <Link
                      legacyBehavior
                      href="#"
                    >
                      <a>
                        Create Resume <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>
                        {" "}
                        Browse Categories <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>
                        {" "}
                        Save Jobs List <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>
                        {" "}
                        Browse Jobs <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>
                        {" "}
                        Candidate Dashboard <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb--50 d-flex justify-content-lg-center justify-content-md-end justify-content-sm-start justify-content-center">
            <div className="footer-widget">
              <div className="widget-title">
                <h5>Pour les employeurs</h5>
              </div>
              <div className="menu-container">
                <ul>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>
                        Poster un emploi <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>
                        Parcourir les candidats <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>
                        Forfaits d'emploi <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>
                        Emplois en vedette <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      <a>
                        {" "}
                        Tableau de bord Entreprise <i className="bx bx-up-arrow-alt" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*<div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-end justify-content-center">*/}
          {/*  <div className="footer-widget four">*/}
          {/*    <div className="widget-title">*/}
          {/*      <h5>Download App</h5>*/}
          {/*    </div>*/}
          {/*    <div className="app-list">*/}
          {/*      <ul>*/}
          {/*        <li>*/}
          {/*          <a href="#">*/}
          {/*            <img src="/assets/images/icon/apple-app.svg" alt="" />*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href="#">*/}
          {/*            <img src="/assets/images/icon/google-play.svg" alt="" />*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div className="footer-btm">
          <div className="footer-logo">
            <img style={{
              width: '167px',
                height: '146px'
            }} src="/assets/images/PEARLLL%20PNG.png" alt="" />
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center">
    "'          {/*<div className="support">*/}
              {/*  <div className="icon">*/}
              {/*    <img*/}
              {/*      src="/assets/images/icon/footer-support-icon.svg"*/}
              {/*      alt=""*/}
              {/*    />*/}
              {/*  </div>*/}
              {/*  <div className="content">*/}
              {/*    <h5>Support Line:</h5>*/}
              {/*    <a href="tel:+099-03573983465">+099-035 7398 3465</a>*/}
              {/*  </div>*/}
              {/*</div>'"*/}
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <div className="footer-btm-menu">
                <ul>
                  <li>
                    <a href="#">Confidentialité & politique</a>
                  </li>
                  <li>
                    <a href="#">Conditions d'utilisation</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/Egens+Lab/@23.8340712,90.3634979,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c14c8682a473:0xa6c74743d52adb88!8m2!3d23.8340663!4d90.3656866">
                      Notre Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row border-top align-items-center">
            <div className="col-lg-6 d-flex  justify-content-lg-start justify-content-center">

            </div>
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <div className="social-area">
                <h6>Suivez PEARL:</h6>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
