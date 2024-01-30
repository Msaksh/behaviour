import Footer from "./Footer";
import Header from "./Header";
import ControlledCarousel from "./ControlledCarousel";
import Typewriter from 'typewriter-effect';
import React, { useState, useEffect } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Spinner from 'react-bootstrap/Spinner';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';


import { carouselData1, carouselData2, carouselData3, carouselData4, carouselData5, carouselData6 } from "../utils/data";

const Home = () => {

  const [showForm, setShowForm] = useState(false);
  const [thanks, setThanks] = useState(false);
  const [careers, setCareers] = useState(false);
  const [hideForm, setHideForm] = useState(true);
  const [formTriggerSource, setFormTriggerSource] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleStartNowClick = (triggerSource) => {
    setShowForm(true);
    setHideForm(false);
    setCareers(false);
    setFormTriggerSource(triggerSource);
    setThanks(false)
  };

  const handleCancelClick = () => {
    setShowForm(false);
    setHideForm(true);
    setCareers(false);
    setFormTriggerSource('');
    setThanks(false)
  };

  const handleCareerClick = () => {
    setShowForm(false);
    setHideForm(false);
    setCareers(true);
    setFormTriggerSource('');
    setThanks(false)
  };

  const initialValues = {
    name: '',
    companyName: '',
    email: '',
    mobile: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobile: Yup.string()
      .required('Mobile is required')
      .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
  });

  const handleFormSubmit = () => {


    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setThanks(true)
      setCareers(false)
      setShowForm(false);
      setHideForm(false);
      setFormTriggerSource('');

    }, 1000);
  };


  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoading]);



  return (<>
    <Header onStartNowClick={handleStartNowClick} showGetInTouchButton={true} />
    <section id="heroSection">
      <div className="container col-xxl-10 px-4 py-md-5 py-0">
        <div className="row mx-0 flex-lg-row-reverse align-items-center justify-content-between g-5 py-5">
          <div className="col-12 col-sm-8 col-lg-5 rounded-4 rightBlackBox d-flex align-items-center justify-content-center p-3">

            {hideForm && (
              <div className="innerRBB d-flex align-items-center justify-content-evenly flex-column">
                <div className="outerTypewriter">
                  <Typewriter
                    options={{
                      strings: [
                        'I want  <span style="color: #D4FB79">rural customers </span> to order our products .',
                        'I want to maximize <span style="color: #FF7E79">on-time deliveries</span>.',
                        'I want a <span style="color: #FFFC79">menu</span> that suits customer preferences.',
                        'I aim to promote <span style="color: #D783FF">collaboration</span> among employees.',
                        'I want my employees to be <span style="color: #73FA79">healthy</span>.',
                        'We want people to opt for <span style="color: #73FDFF">public transport</span> more.',
                        'I aim to improve <span style="color: #FFD479">Trigonometry</span> in next 7 days.'
                      ],
                      autoStart: true,
                      loop: true,
                      html: true
                    }}
                  />
                </div>
                <button className="btn btn-green rounded-5 fw-medium fs-4 px-5 py-2" onClick={() => handleStartNowClick('Start Now')}>
                  Start Now
                </button>
              </div>
            )}

            {showForm && (
              <div className="innerRBB d-flex align-items-center justify-content-evenly flex-column">
                <div className="formParent w-100">
                  <p className="formBoxes">
                    {formTriggerSource === 'Start Now'
                      ? 'What are your goals or desired behaviors? e.g., reach rural customers, punctual employees, quit smokingq'
                      : formTriggerSource === 'GetInTouch'
                        ? 'What can we do for you?'
                        : formTriggerSource === 'marketingGoals'
                          ? 'What are your marketing goals? e.g., reaching rural customers'
                          : formTriggerSource === 'workPlace'
                            ? 'What goals or behaviors are you aiming to achieve in your workplace? e.g., punctuality'
                            : formTriggerSource === 'store'
                              ? 'How do you envision transforming your online or physical store? e.g., enhance customer delight'
                              : formTriggerSource === 'core'
                                ? 'Do you aspire to be lean? e.g., identify core strengths of your product'
                                : formTriggerSource === 'struggle'
                                  ? 'Are you struggling to correct habits aff your health or career?'
                                  : formTriggerSource === 'society'
                                    ? 'Which behaviors do you want citizens to adopt? e.g., timely payment of taxes'
                                    : formTriggerSource === 'nudge'
                                      ? 'Which physical nudges would you like to purchase from Nudgeware? e.g., coffee mugs or t-shirts'
                                      : formTriggerSource === 'punctuality'
                                        ? 'What punctuality goals do you have for employees?'
                                        : formTriggerSource === 'followup'
                                          ? 'Tell us about your communication and followup challenges?'
                                          : formTriggerSource === 'partnerWithUs'
                                            ? 'How would you like to collaborate with us?'
                                            : 'Default message for unknown source.'
                    }
                  </p>
                  {/* <form>

                    <input className="formBoxes noOutlineBorder" placeholder="Your Name" type="text" id="name" name="name" required />
                    <input className="formBoxes noOutlineBorder" placeholder="Company Name (optional)" type="text" id="name" name="name" />
                    <input className="formBoxes noOutlineBorder" placeholder="Email" type="email" id="name" name="name" />
                    <input className="formBoxes noOutlineBorder" placeholder="Mobile" type="tel" id="name" name="name" />

                  </form> */}


                </div>
                {/* <button className="btn btn-green rounded-5 fw-medium fs-5 px-5 py-2" onClick={handleFormSubmit}>

                  {isLoading ? (<span className="d-flex align-items-center justify-content-center"><Spinner animation="border" className="me-2" />Submiting...</span>) : 'Submit'}
                </button> */}


                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleFormSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form className="d-flex justify-content-center flex-column w-100">
                      <Field
                        className="formBoxes noOutlineBorder"
                        placeholder="Your Name"
                        type="text"
                        name="name"
                      />
                      <ErrorMessage name="name" component="div" className="error mb-2" />

                      <Field
                        className="formBoxes noOutlineBorder"
                        placeholder="Company Name (optional)"
                        type="text"
                        name="companyName"
                      />

                      <Field
                        className="formBoxes noOutlineBorder"
                        placeholder="Email"
                        type="email"
                        name="email"
                      />
                      <ErrorMessage name="email" component="div" className="error mb-2" />

                      <Field
                        className="formBoxes noOutlineBorder"
                        placeholder="Mobile"
                        type="tel"
                        name="mobile"
                      />
                      <ErrorMessage name="mobile" component="div" className="error mb-2" />

                      <Button
                        type="submit"
                        className="btn btn-green rounded-5 fw-medium fs-5 px-5 py-2 "
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div>
                            <Spinner animation="border" size="sm" />
                            Submitting...
                          </div>
                        ) : (
                          'Submit'
                        )}
                      </Button>
                    </Form>
                  )}
                </Formik>


                <button className="close-icon" onClick={handleCancelClick}>
                  &#10006;
                </button>
                <p className="formMsg">By submitting this form, you agree to be contacted and recieve information about our offerings from us.</p>
              </div>
            )}

            {thanks && (
              <div className="innerRBB d-flex align-items-center justify-content-evenly flex-column">
                <button className="close-icon" onClick={handleCancelClick}>
                  &#10006;
                </button>
                <div className="text-white">
                  <p className="display-6 fs-1 text-center thanks">Thank you!
                    We'll be in touch soon.
                    In the meantime, feel free
                    to explore our <span className="spanGreen"> social
                      channels</span>.</p>
                </div>
                <div className="d-flex align-items-center justify-content-evenly">
                  <WhatsAppIcon className="socialMediaIcons" />
                  <FacebookIcon className="socialMediaIcons" />
                  <TwitterIcon className="socialMediaIcons" />
                  <XIcon className="socialMediaIcons" />
                  <LinkedInIcon className="socialMediaIcons" />
                  <InstagramIcon className="socialMediaIcons" />
                </div>
              </div>
            )}

            {careers && (
              <div className="innerRBB d-flex align-items-center justify-content-evenly flex-column">
                <button className="close-icon" onClick={handleCancelClick}>
                  &#10006;
                </button>
                <div className="text-white">
                  <p className="display-6 fs-2 text-center">We're hiring!
                    Send your CV to
                    <span className="spanGreen"> people@behavrior.com. </span>
                    Stay updated on our <span className="spanGreen">social
                      channels</span> for more..</p>
                </div>
                <div className="d-flex align-items-center justify-content-evenly">
                  <WhatsAppIcon className="socialMediaIcons" />
                  <FacebookIcon className="socialMediaIcons" />
                  <TwitterIcon className="socialMediaIcons" />
                  <XIcon className="socialMediaIcons" />
                  <LinkedInIcon className="socialMediaIcons" />
                  <InstagramIcon className="socialMediaIcons" />
                </div>
              </div>
            )}

          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-between leftBox px-0">
            <div>
              <h1 className="display-4 fw-medium text-body-emphasis lh-1 mb-3">We shape behaviors to meet your goals.</h1>
              <p className="lead fw-medium cstmPara">Whether it's business success, societal impact, or personal growth, we tailor behaviors to your goals, integrating technology, behavioral economics, and gamification.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <a href="#" className="cstmAnchor text-decoration-none fs-4 text-dark fw-medium">Learn More...</a>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-start">
              <a href="#behaviorSuiteSection" className="d-flex align-items-center text-decoration-none">
                <div className="d-flex align-items-center justify-content-center">
                  <p className="fs-md-3 fs-4 fw-medium suite mb-0 text-dark">Our Behavior Tools</p>

                  <img src="assets/img/nudgeware_logo.png" alt="" className="ms-4 roundImg" />
                  <img src="assets/img/punchtual_logo.png" alt="" className="ms-4 roundImg" />
                  <img src="assets/img/followup_logo.png" alt="" className="ms-4 roundImg" />
                </div>

              </a>
            </div>
          </div>
        </div>
      </div>
    </section >

    <hr className="cstmHrTag" />

    <section id="sliderSection">
      <div className="container col-xxl-10 px-4 py-md-5 py-0">
        <div className="row mx-0 align-items-center justify-content-between g-5 py-5 px-1">
          <div className="col-lg-12 d-flex flex-column justify-content-between px-0">
            <div>
              <h1 className="display-3 fw-medium text-body-emphasis text-center lh-1 mb-3">Tap Into Our Behavioral Expertise
              </h1>
              <p className="lead fw-medium cstmPara text-center">Delve into the realm of impactful behaviors as we reveal strategies
                honed through our ongoing collaboration with diverse clients
              </p>
            </div>
          </div>

          <div className="col-12 px-0">

            <div className="row mx-0 align-items-center justify-content-between g-5 py-5  mb-4" >

              <div className="col-12 col-sm-8 col-lg-5 rounded-4 carouselCard p-3">
                <img src="assets/img/marketing.png" className="behaExperImages" alt="" />
              </div>

              <div className="col-lg-6 d-flex flex-column justify-content-between px-0">
                <div className="d-flex flex-column gap-4">
                  <h1 className="display-6 fw-medium text-body-emphasis lh-1 mb-3">Spread Your <span className="brownTextColor">Story</span>,
                    <span className="brownTextColor">Near</span> And <span className="brownTextColor">Far</span></h1>
                  <p className="lead fw-normal cstmPara">Customised to surpass local limits, our campaigns seamlessly link
                    your brand narrative with audiences, whether they're nearby or in
                    distant markets. Elevate your brand presence as we craft narratives
                    that resonate and reach diverse audiences, connecting with them
                    wherever they may be.  <span><a href="#heroSection" className="cstmAnchor text-decoration-none brownTextColor fw-medium" onClick={() => handleStartNowClick('marketingGoals')}>Learn More...</a></span></p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <ControlledCarousel slides={carouselData1} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" row mx-0 flex-row-reverse  align-items-center justify-content-between g-5 py-5  mb-4">

              <div className="col-12 col-sm-8 col-lg-5 rounded-4 carouselCard p-3">
                <img src="assets/img/workplace.png" className="behaExperImages" alt="" />
              </div>

              <div className="col-lg-6 d-flex flex-column justify-content-between px-0">
                <div className="d-flex flex-column gap-4">
                  <h1 className="display-6 fw-medium text-body-emphasis lh-1 mb-3">Transform Your <span className="seaTextColor">Workplace</span>,
                    Supercharge Your <span className="seaTextColor">Business</span> </h1>
                  <p className="lead fw-normal cstmPara">Revamp your workplace and boost your business success with our
                    program. We focus on shaping impactful behaviors that enhance
                    teamwork, efficiency, and overall performance. Experience a positive
                    shift as your team becomes more motivated and your business
                    achieves new heights.  <span><a href="#heroSection" className="cstmAnchor text-decoration-none seaTextColor fw-medium" onClick={() => handleStartNowClick('workPlace')}>Learn More...</a></span></p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <ControlledCarousel slides={carouselData2} />
                  </div>
                </div>
              </div>
            </div>



            <div className="row mx-0 align-items-center justify-content-between g-5 py-5  mb-4" >

              <div className="col-12 col-sm-8 col-lg-5 rounded-4 carouselCard p-3">
                <img src="assets/img/store.png" className="behaExperImages" alt="" />
              </div>

              <div className="col-lg-6 d-flex flex-column justify-content-between px-0">
                <div className="d-flex flex-column gap-4">
                  <h1 className="display-6 fw-medium text-body-emphasis lh-1 mb-3"><span className="seaGreenTextColor">Store</span> That Works,
                    For <span className="seaGreenTextColor">You</span> And  <span className="seaGreenTextColor">Them</span></h1>
                  <p className="lead fw-normal cstmPara">Revitalise your store, online or at a physical location, with a seamless
                    blend of business success and customer satisfaction through a
                    personalised touch in your transformation. Elevate your business
                    with a tailored approach that caters to both operational needs and
                    customer delight. <span><a href="#heroSection" className="cstmAnchor text-decoration-none seaGreenTextColor fw-medium" onClick={() => handleStartNowClick('store')}>Learn More...</a></span></p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <ControlledCarousel slides={carouselData3} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" row mx-0 flex-row-reverse  align-items-center justify-content-between g-5 py-5  mb-4">

              <div className="col-12 col-sm-8 col-lg-5 rounded-4 carouselCard p-3">
                <img src="assets/img/core.png" className="behaExperImages" alt="" />
              </div>

              <div className="col-lg-6 d-flex flex-column justify-content-between px-0">
                <div className="d-flex flex-column gap-4">
                  <h1 className="display-6 fw-medium text-body-emphasis lh-1 mb-3">Uncover The
                    <span className="seablueTextColor"> Core</span>, Ignite the
                    <span className="seablueTextColor"> Success</span> </h1>
                  <p className="lead fw-normal cstmPara">Embark on your journey to success by honing in on what truly
                    matters most. Rely on our expertise to guide you in identifying,
                    prioritising, and harnessing the essential core elements that not only
                    drive impactful outcomes but also pave the way for sustained growth
                    in all your pursuits.  <span><a href="#heroSection" className="cstmAnchor text-decoration-none seablueTextColor fw-medium" onClick={() => handleStartNowClick('core')}>Learn More...</a></span></p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <ControlledCarousel slides={carouselData4} />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mx-0 align-items-center justify-content-between g-5 py-5  mb-4" >

              <div className="col-12 col-sm-8 col-lg-5 rounded-4 carouselCard p-3">
                <img src="assets/img/personal.png" className="behaExperImages" alt="" />
              </div>

              <div className="col-lg-6 d-flex flex-column justify-content-between px-0">
                <div className="d-flex flex-column gap-4">
                  <h1 className="display-6 fw-medium text-body-emphasis lh-1 mb-3"><span className="yellowBrownTextColor"> Best Version</span> Of Me, Today, <span className="yellowBrownTextColor"> Every day</span></h1>
                  <p className="lead fw-normal cstmPara">Transform your daily life with our behavioral products, unlocking
                    your potential and becoming your best self. Foster well-being,
                    productivity, and success as you embark on a journey of
                    transformative growth. Experience positive life changes through our
                    innovative tools and tailored solutions <span><a href="#heroSection" className="cstmAnchor text-decoration-none yellowBrownTextColor fw-medium" onClick={() => handleStartNowClick('struggle')}> Learn More...</a></span></p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <ControlledCarousel slides={carouselData5} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" row mx-0 flex-row-reverse  align-items-center justify-content-between g-5 py-5  mb-4">

              <div className="col-12 col-sm-8 col-lg-5 rounded-4 carouselCard p-3">
                <img src="assets/img/society.png" className="behaExperImages" alt="" />
              </div>

              <div className="col-lg-6 d-flex flex-column justify-content-between px-0">
                <div className="d-flex flex-column gap-4">
                  <h1 className="display-6 fw-medium text-body-emphasis lh-1 mb-3"><span className="yellowGreenTextColor"> Individual</span> Shifts,
                    <span className="yellowGreenTextColor"> Society</span> Lifts</h1>
                  <p className="lead fw-normal cstmPara">Through a meticulous and personalized approach, we focus on
                    fostering positive shifts at the individual level. We are confident that
                    these intentional changes will radiate outward, contributing to a
                    comprehensive elevation of both individuals and the broader
                    societal fabric.  <span><a href="#heroSection" className="cstmAnchor text-decoration-none yellowGreenTextColor fw-medium" onClick={() => handleStartNowClick('society')}>Learn More...</a></span></p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <ControlledCarousel slides={carouselData6} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <hr className="cstmHrTag" />

    <section id="howWeShapeSection">
      <div className="container col-xxl-10 px-4 py-md-5 py-0">
        <div className="row mx-0 align-items-center justify-content-between g-5 py-5 px-1">
          <div className="col-lg-12 d-flex flex-column justify-content-between px-0">
            <div className="d-flex flex-column align-items-center">
              <h1 className="display-3 fw-medium text-body-emphasis text-center lh-1 mb-3 ">How Do We Shape Behaviors?
              </h1>
              <p className="lead fw-normal cstmPara text-center fs-4 width70">We ensure achieving your intended behaviors and goals via our customized approach.</p>
            </div>
          </div>

          <div className="col-12 px-0">
            <div className="row mx-0 align-items-center justify-content-between g-5 py-5 width95 mb-0 mb-md-4" >
              <div className="col-12 col-sm-8 col-lg-12 p-3 d-flex align-items-center justify-content-center m-0">
                <img src="assets/img/nudge.png" alt="nudege" className="nudgeImg" />
                <img src="assets/img/easy_2.png" alt="makeeasy" className="nudgeImg" />
                <img src="assets/img/rewards.png" alt="rewards" className="nudgeImg" />
              </div>

              <div className="col-lg-12 d-flex justify-content-center px-0">
                <div className="col-md-10">
                  <p className="lead fw-normal cstmPara fs-3  text-center">Shaping behaviors is a nuanced undertaking, demanding the integration of
                    various elements. Our approach incorporates three key elements, alongside
                    others, to adeptly influence and mold behaviors.</p>

                </div>
              </div>
            </div>
          </div>

          <div className="col-12 px-0">
            <div className="row mx-0 align-items-center justify-content-between g-5  width95 mb-4" >
              <div className="col-12 col-sm-8 col-lg-12 p-3 d-flex align-items-center justify-content-end m-0">
                <div className="col-md-4 text-md-end text-center">
                  <p className="fw-medium fs-5 mb-0 redTextColor">PROJECT LIFECYCLE</p>
                  <h1 className="display-3 fw-medium text-body-emphasis lh-1 mb-3">How do we deliver?</h1>

                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a href="#heroSection" className="btn btn-green rounded-5 fw-medium fs-4 px-5 py-2" onClick={() => handleStartNowClick('Start Now')}>Let's Talk</a>
                  </div>
                </div>
              </div>
              {!isMobile && <div className="col-lg-12 d-flex flex-column justify-content-center px-0">

                <div className="col-md-11 d-flex my-4 row">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="col-md-3 d-flex justify-content-center ">
                      <img src="assets/img/brainstorm.png" alt="brain" className="cstmDeliverImg rounded-circle" />
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-center jusitfy-content-center">
                        <p className="fw-medium fs-4">Brainstorm</p>
                        <p className="numbering numbering-1 text-center">1</p>
                      </div>
                      <p className="fs-5 fw-normal cstmLineHeight">We discuss challenges, goals, and
                        brainstorm behaviors to achieve
                        intended outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-11 d-flex my-4 row">
                  <div className="d-flex align-items-center justify-content-between col-md-6">
                    <div className="col-md-3 d-flex justify-content-center ">
                      <img src="assets/img/conclude.png" alt="brain" className="cstmDeliverImg rounded-circle" />
                    </div>
                    <div className="col-md-8">
                      <div className="d-flex align-items-center jusitfy-content-center">
                        <p className="fw-medium fs-4">Conclude</p>
                        <p className="numbering numbering-6 text-center">6</p>
                      </div>
                      <p className="fs-5 fw-normal cstmLineHeight">We gather results, compare them with
                        the desired outcomes, and draw
                        conclusions about the performance.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between col-md-6">
                    <div className="col-md-3 d-flex justify-content-center ">
                      <img src="assets/img/data.png" alt="brain" className="cstmDeliverImg rounded-circle" />
                    </div>
                    <div className="col-md-8">
                      <div className="d-flex align-items-center jusitfy-content-center">
                        <p className="fw-medium fs-4">Collect Data</p>
                        <p className="numbering numbering-2 text-center">2</p>
                      </div>
                      <p className="fs-5 fw-normal cstmLineHeight">We gather necessary data to gain
                        insights and formulate an effective
                        strategy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-11 d-flex my-4 row">
                  <div className="d-flex align-items-center justify-content-between col-md-6">
                    <div className="col-md-3 d-flex justify-content-center ">
                      <img src="assets/img/launch.png" alt="brain" className="cstmDeliverImg rounded-circle" />
                    </div>
                    <div className="col-md-8">
                      <div className="d-flex align-items-center jusitfy-content-center">
                        <p className="fw-medium fs-4">Launch</p>
                        <p className="numbering numbering-5 text-center">5</p>
                      </div>
                      <p className="fs-5 fw-normal cstmLineHeight">Ultimately, we launch the solution and
                        closely monitor its performance.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between col-md-6">
                    <div className="col-md-3 d-flex justify-content-center ">
                      <img src="assets/img/design.png" alt="brain" className="cstmDeliverImg rounded-circle" />
                    </div>
                    <div className="col-md-8">
                      <div className="d-flex align-items-center jusitfy-content-center">
                        <p className="fw-medium fs-4">Design</p>
                        <p className="numbering numbering-3 text-center">3</p>
                      </div>
                      <p className="fs-5 fw-normal cstmLineHeight">We use technology, gamification, and
                        behavioral economics to create a
                        prototype that meets your needs.

                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-11 d-flex my-4 row">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="col-md-3 d-flex justify-content-center ">
                      <img src="assets/img/test.png" alt="brain" className="cstmDeliverImg rounded-circle" />
                    </div>
                    <div className="col-4">
                      <div className="d-flex align-items-center jusitfy-content-center">
                        <p className="fw-medium fs-4">Test</p>
                        <p className="numbering numbering-4 text-center">4</p>
                      </div>
                      <p className="fs-5 fw-normal cstmLineHeight">We conduct prototype testing and
                        implement necessary corrections to
                        achieve the desired outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>}

              {isMobile && <div className="col-lg-12 d-flex flex-column justify-content-center px-0">

                <div className="col-md-11 d-flex my-4 row">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="col-md-3 d-flex justify-content-center px-2">
                      <img src="assets/img/brainstorm.png" alt="brain" className="cstmDeliverImg rounded-circle" />
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-center jusitfy-content-center">
                        <p className="fw-medium fs-4">Brainstorm</p>
                        <p className="numbering numbering-1 text-center">1</p>
                      </div>
                      <p className="fs-5 fw-normal cstmLineHeight">We discuss challenges, goals, and
                        brainstorm behaviors to achieve
                        intended outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-11 d-flex my-4 row">
                  <div className="d-flex align-items-center justify-content-between col-md-6">
                    <div className="col-md-3 d-flex justify-content-center px-2">
                      <img src="assets/img/data.png" alt="brain" className="cstmDeliverImg rounded-circle" />
                    </div>
                    <div className="col-md-8">
                      <div className="d-flex align-items-center jusitfy-content-center">
                        <p className="fw-medium fs-4">Collect Data</p>
                        <p className="numbering numbering-2 text-center">2</p>
                      </div>
                      <p className="fs-5 fw-normal cstmLineHeight">We gather necessary data to gain
                        insights and formulate an effective
                        strategy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-11 d-flex my-4 row">
                  <div className="d-flex align-items-center justify-content-between col-md-6">
                    <div className="col-md-3 d-flex justify-content-center px-2">
                      <img src="assets/img/design.png" alt="brain" className="cstmDeliverImg rounded-circle" />
                    </div>
                    <div className="col-md-8">
                      <div className="d-flex align-items-center jusitfy-content-center">
                        <p className="fw-medium fs-4">Design</p>
                        <p className="numbering numbering-3 text-center">3</p>
                      </div>
                      <p className="fs-5 fw-normal cstmLineHeight">We use technology, gamification, and
                        behavioral economics to create a
                        prototype that meets your needs.

                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-11 d-flex my-4 row">
                  <div className="d-flex align-items-center justify-content-between col-md-6">
                    <div className="col-md-3 d-flex justify-content-center px-2">
                      <img src="assets/img/test.png" alt="brain" className="cstmDeliverImg rounded-circle" />
                    </div>
                    <div className="col-md-8">
                      <div className="d-flex align-items-center jusitfy-content-center">
                        <p className="fw-medium fs-4">Test</p>
                        <p className="numbering numbering-4 text-center">4</p>
                      </div>
                      <p className="fs-5 fw-normal cstmLineHeight">We conduct prototype testing and
                        implement necessary corrections to
                        achieve the desired outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-11 d-flex my-4 row">
                  <div className="d-flex align-items-center justify-content-between col-md-6">
                    <div className="col-md-3 d-flex justify-content-center px-2">
                      <img src="assets/img/launch.png" alt="brain" className="cstmDeliverImg rounded-circle" />
                    </div>
                    <div className="col-md-8">
                      <div className="d-flex align-items-center jusitfy-content-center">
                        <p className="fw-medium fs-4">Launch</p>
                        <p className="numbering numbering-5 text-center">5</p>
                      </div>
                      <p className="fs-5 fw-normal cstmLineHeight">Ultimately, we launch the solution and
                        closely monitor its performance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-11 d-flex my-4 row">
                  <div className="d-flex align-items-center justify-content-between col-md-6">
                    <div className="col-md-3 d-flex justify-content-center px-2">
                      <img src="assets/img/conclude.png" alt="brain" className="cstmDeliverImg rounded-circle" />
                    </div>
                    <div className="col-md-8">
                      <div className="d-flex align-items-center jusitfy-content-center">
                        <p className="fw-medium fs-4">Conclude</p>
                        <p className="numbering numbering-6 text-center">6</p>
                      </div>
                      <p className="fs-5 fw-normal cstmLineHeight">We gather results, compare them with
                        the desired outcomes, and draw
                        conclusions about the performance.
                      </p>
                    </div>
                  </div>
                </div>


              </div>}


            </div>
          </div>

        </div>
      </div>
    </section>

    <hr className="cstmHrTag" />


    <section id="behaviorSuiteSection">
      <div className="container col-xxl-10 px-4 py-md-5 py-0">
        <div className="row mx-0 align-items-center justify-content-between g-5 py-5 px-1">
          <div className="col-lg-12 d-flex flex-column justify-content-between px-0">
            <div>
              <h1 className="display-3 fw-medium text-body-emphasis text-center lh-1 mb-3 cstmH1Tag">Our Behavior Tools
              </h1>
              <p className="lead fw-medium cstmPara text-center">We are consistently engaged in developing behavior-building products that anyone can use.</p>
            </div>
          </div>

          <div className="col-12 px-0">

            <div className="row mx-0 align-items-center justify-content-between g-5 py-5 width95 mb-0 mb-md-4" >

              <div className="col-12 col-sm-8 col-lg-3 p-3 d-flex align-items-center justify-content-center">
                <img src="assets/img/nudgeware_logo.png" alt="" width={200} />
              </div>

              <div className="col-lg-9 d-flex flex-column justify-content-between px-0">
                <div className="col-md-8">
                  <h1 className="display-6 fw-medium text-body-emphasis lh-1 mb-3">Nudgeware
                  </h1>
                  <p className="lead fw-normal cstmPara">Nudgeware is a store featuring a curated collection of physical
                    goods carefully selected to serve as catalysts for positive change.
                    Whether you're striving for healthier habits, increased productivity,
                    or enhanced overall well-being, each item is purposefully chosen to
                    guide you towards your goals. <span> <a href="#heroSection" className="cstmAnchor text-decoration-none  text-dark fw-medium" onClick={() => handleStartNowClick('nudge')}> Learn More...</a></span></p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">

                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-12 px-0">

            <div className="row mx-0 align-items-center justify-content-between g-5 py-5 width95 mb-0 mb-md-4" >

              <div className="col-lg-9 d-flex justify-content-end px-0">
                <div className="col-md-8 position-relative">
                  {/* <span className="redTextColor aquaComingSoon">Coming Soon</span> */}
                  <h1 className="display-6 fw-medium text-body-emphasis lh-1 mb-3 aquaComingSoon">Punchtual</h1>
                  <p className="lead fw-normal cstmPara">Punchtual is not just about clocking in; it's about transforming your workplace attendance experience into a seamless journey.
                    Punctuality becomes a breeze, discipline is ingrained, and
                    employees find joy and satisfaction in a system that values their
                    time and commitment.<span><a href="#heroSection" className="cstmAnchor text-decoration-none text-dark fw-medium" onClick={() => handleStartNowClick('punctuality')}>Learn More...</a></span></p>

                </div>
              </div>

              <div className="col-12 col-sm-8 col-lg-3 p-3 d-flex align-items-center justify-content-center">
                <img src="assets/img/punchtual_logo.png" alt="" width={200} />
              </div>
            </div>

          </div>

          <div className="col-12 px-0">

            <div className="row mx-0 align-items-center justify-content-between g-5 py-5 width95 mb-0 mb-md-4" >

              <div className="col-12 col-sm-8 col-lg-3 p-3 d-flex align-items-center justify-content-center">
                <img src="assets/img/followup_logo.png" alt="" width={200} />
              </div>

              <div className="col-lg-9 d-flex flex-column justify-content-between px-0">
                <div className="col-md-8 position-relative">
                  <h1 className="display-6 fw-medium text-body-emphasis lh-1 mb-3 followupSoon">Followup
                  </h1>
                  <p className="lead fw-normal cstmPara">Followup is your time-saving ally, automating communication and
                    closing gaps to enhance efficiency effortlessly. Say farewell to
                    manual efforts, as Followup not only streamlines your interactions
                    but also turns every communication into a pathway for increased
                    productivity and financial success. <span> <a href="#heroSection" className="cstmAnchor text-decoration-none  text-dark fw-medium" onClick={() => handleStartNowClick('followup')}> Learn More...</a></span></p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <hr className="cstmHrTag" />


    <section id="aboutSection">
      <div className="container col-xxl-10 px-4 py-md-5 py-0">
        <div className="row mx-0 align-items-center justify-content-between g-5 py-5">

          <div className="col-lg-6 d-flex flex-column justify-content-between px-0">
            <div>
              <p className="fw-medium fs-5 mb-0 redTextColor">ABOUT US</p>
              <h1 className="display-3 fw-medium text-body-emphasis lh-1 mb-3">Who Are We? </h1>

            </div>
          </div>
          <div className="col-12 col-sm-8 col-lg-6 rounded-4 d-flex align-items-center justify-content-center p-3 mt-0">
            <div className=" d-flex align-items-center justify-content-md-evenly justify-content-start  flex-column">
              <p className="heroText text-justify fs-4 fw-medium mb-0"> We are a team deeply immersed in
                technology, UI/UX, behavioral economics,
                and gamification. Our passion fuels
                strategic experimentation, seamlessly
                integrating innovative solutions into the
                daily fabric of individuals, businesses, and
                society.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <Footer onStartNowClick={handleStartNowClick} handleCareerClick={handleCareerClick} />
  </>
  );
};


export default Home;
