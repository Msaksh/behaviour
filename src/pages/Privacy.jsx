import React from 'react'
import Header from '../Components/Header'

const Privacy = () => {
  return (<>
    <Header showGetInTouchButton={false} />
    <section id="privacySection">
      <div className="container col-xxl-12 px-4 py-md-5">
        <div className='mb-4'>
          <h1 className='text-center'>Privacy Policy for Behavrior</h1>
          <h2 className='text-center'>(Wowrior Innovations PVT LTD)</h2>
        </div>

        <div className='mb-4'>
          <h3>1. Introduction</h3>
          <p>Welcome to Wowrior Innovations PVT LTD (hereby referred to, in this
            document, as "we," "our," or "us"). This Privacy Policy outlines our
            practices regarding the collection, use, and disclosure of personal
            information when you use our website, services, or make online
            payments.
          </p>
        </div>

        <div className='mb-4'>
          <h3>2. Information We Collect</h3>
          <p> <span className='fw-bold'>-Personal Information: </span> When you use our website or services, we may
            collect personal information such as your name, email address, phone
            number, billing address, and payment details.
          </p>

          <p> <span className='fw-bold'>- Non-Personal Information: </span>We may collect non-personal
            information, including but not limited to browser type, language
            preference, metadata and referring site</p>
        </div>

        <div className='mb-4'>
          <h3>3. How We Use Your Information</h3>
          <p>We use the collected information for the following purposes:          </p>
          <p><span className='fw-bold'>- To Provide Services: </span> To deliver the services you requested, including
            design services and processing online payments.</p>
          <p><span className='fw-bold'>- Communication:  </span> To communicate with you regarding our services,
            updates, and promotional offers</p>
          <p><span className='fw-bold'>- Analytics: </span> To analyze website usage and improve our services.</p>
        </div>

        <div className='mb-4'>
          <h3>4. Payment Processing</h3>
          <p>We use third-party payment processors to handle online transactions.
            Your payment information is securely processed, and we do not store
            your complete payment details on our servers.
          </p>
        </div>

        <div className='mb-4'>
          <h3>5. International Data Transfers</h3>
          <p>Your information may be transferred and processed outside your
            country of residence. By using our services, you consent to the transfer
            of information to countries that may have different data protection laws.
          </p>
        </div>

        <div className='mb-4'>
          <h3>6. Security Measures</h3>
          <p>We implement reasonable security measures to protect your
            information from unauthorized access or disclosure.
          </p>
        </div>

        <div className='mb-4'>
          <h3>7. Cookies and Similar Technologies</h3>
          <p>We use cookies and similar technologies to enhance your experience
            on our website. You can manage your cookie preferences through your
            browser settings.
          </p>
        </div>

        <div className='mb-4'>
          <h3>8. Third-Party Links</h3>
          <p>Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these websites
            outside of Behavrior’s website domain.
          </p>
        </div>

        <div className='mb-4'>
          <h3>9. Your Choices </h3>
          <p>You can update your personal information, opt-out of marketing
            communications, or request the deletion of your data by contacting us.
            The contact information is as mentioned below.
          </p>
        </div>

        <div className='mb-4'>
          <h3>10. Changes to this Privacy Policy</h3>
          <p>We may update this Privacy Policy periodically. The latest version will
            be posted on our website with the effective date.
          </p>
        </div>

        <div className='mb-4'>
          <h3>11. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at
            hello@behavrior.com
          </p>
        </div>

      </div>
    </section >
  </>
  )
}

export default Privacy