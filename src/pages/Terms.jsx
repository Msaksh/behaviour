import React from 'react'
import Header from '../Components/Header';

const Terms = () => {
  return (
    <>
      <Header showGetInTouchButton={false} />
      <section id="termsSection">
        <div className="container col-xxl-12 px-4 py-md-5">
          <div className='mb-4'>
            <h1 className='text-center'>Terms of Service for Behavrior
            </h1>
            <h2 className='text-center'>(Wowrior Innovations PVT LTD)</h2>
          </div>

          <div className='mb-4'>
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing or using the services provided by Wowrior Innovations
              PVT LTD, you agree to be bound by these Terms of Service. If you do
              not agree with any part of these terms, please refrain from using our
              services.
            </p>
          </div>

          <div className='mb-4'>
            <h3>2. Description of Services</h3>
            <p> Wowrior Innovations PVT LTD provides consulting, strategy, design and
              development and other related services and products (collectively
              referred to as the "Services").
            </p>
          </div>

          <div className='mb-4'>
            <h3>3. Payment Terms</h3>
            <p><span className='fw-bold'>a. Pricing: </span> The prices for our services are based on the scope of work
              and the type of project and are subject to change. We reserve the right
              to modify our pricing at any time.</p>
            <p><span className='fw-bold'>b. Payment: </span> Clients are required to make payments for services
              through our secure online payment system. All major credit cards and
              other payment methods are accepted.</p>
            <p><span className='fw-bold'>c. Currency: </span> : All transactions are processed in Indian National Rupee
              (INR). If you are an international client, please be aware that standard
              currency exchange rates and additional fees may apply.</p>
          </div>

          <div className='mb-4'>
            <h3>4. Intellectual Property</h3>
            <p><span className='fw-bold'>a. Ownership: </span>Unless otherwise agreed upon in writing, Wowrior
              Innovations PVT LTD retains ownership of all intellectual property rights
              associated with the deliverables produced during the provision of
              services. The ownership would be transferred to the respective client
              once the final settlement of all invoices are cleared.
            </p>
            <p><span className='fw-bold'>b. Client Materials:</span>Clients are responsible for ensuring that they have
              the right to use any materials provided to Wowrior Innovations PVT LTD
              for use in the design process.
            </p>
          </div>

          <div className='mb-4'>
            <h3>5. Confidentiality</h3>
            <p>All information shared between the client and Wowrior Innovations PVT
              LTD will be kept confidential. This includes but is not limited to project
              details, marketing content, business strategies, and any other
              proprietary information.
            </p>
          </div>

          <div className='mb-4'>
            <h3>6. Termination of Services</h3>
            <p>Wowrior Innovations PVT LTD reserves the right to terminate services
              at any time for any reason. Clients may also terminate services
              according to the terms outlined in the agreement between the client and
              Wowrior Innovations PVT LTD, signed before the initiation of the
              project.
            </p>
          </div>

          <div className='mb-4'>
            <h3>7. Limitation of Liability</h3>
            <p>Wowrior Innovations PVT LTD is not liable for any direct, indirect,
              incidental, or consequential damages arising out of the use or inability
              to use our services.
            </p>
          </div>

          <div className='mb-4'>
            <h3>8. Governing Law</h3>
            <p>These Terms of Service shall be governed by and construed in
              accordance with the applicable laws of India.

            </p>
          </div>

          <div className='mb-4'>
            <h3>9. Changes to Terms</h3>
            <p>Wowrior Innovations PVT LTD reserves the right to update or modify
              these Terms of Service at any time. Clients will be notified of any
              changes, and continued use of our services constitutes acceptance of
              the updated terms.
            </p>
          </div>

          <div className='mb-4'>
            <h3>10. Contact Information</h3>
            <p>If you have any questions or concerns regarding these Terms of
              Service, please contact us at hello@behavrior.com
            </p>
          </div>

        </div>
      </section ></>
  )
}

export default Terms;