import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = ({ onStartNowClick, handleCareerClick }) => {
  return (<>
    <section id="footerSection">
      <div class="container py-5">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
          <div class="col-md-4 mb-5 mb-md-3">
            <a href="/">
              <img src="assets/img/logoWhite.png" alt="logo" width={250} className="mb-2" />
            </a>
            <p class="fw-normal fs-5">Behavrior innovates for businesses, society,
              and individuals, using technology, behavioral
              economics, and gamification to shape
              behaviors for goal achievement</p>
            <div className="d-flex align-items-center justify-content-between">
              <WhatsAppIcon className="socialMediaIcons text-dark" />
              <FacebookIcon className="socialMediaIcons text-dark" />
              <TwitterIcon className="socialMediaIcons text-dark" />
              <XIcon className="socialMediaIcons text-dark" />
              <LinkedInIcon className="socialMediaIcons text-dark" />
              <InstagramIcon className="socialMediaIcons text-dark" />
            </div>
          </div>

          <div className="col-md-2"></div>

          <div class="col-md-4 mb-5 mb-md-3 d-flex align-items-center">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">Reach out @+919958557753</li>
              <li class="nav-item mb-2">hello@beharior.com</li>


            </ul>
          </div>

          <div class="col-md-2 mb-5 mb-md-3 d-flex align-items-center">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#heroSection" className="cstmAnchor text-decoration-none text-white fw-medium" onClick={() => onStartNowClick('partnerWithUs')}>Partner With Us</a>
              </li>
              <li class="nav-item mb-2"><a href="#heroSection" className="cstmAnchor text-decoration-none text-white fw-medium" onClick={() => handleCareerClick()}>Careers</a></li>

            </ul>
          </div>

        </footer>
        <hr />
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
          <p class="col-md-4 mb-0 secondaryTextColor">© 2024 behavrior.com | All rights reserved.</p>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="/privacy" class="nav-link px-2  secondaryTextColor">Privacy</a></li>
            <li class="nav-item"><a href="/terms" class="nav-link px-2 secondaryTextColor">Terms</a></li>
          </ul>
        </footer>
      </div>
    </section>
  </>
  );
};

export default Footer;
