import React from 'react'

const Footer = () => {
  return (
    <footer className='footerContainer'>
      <div className='footerContainerDiv'>
        <section className='footerCol1'>
          <h2 className='footerHeadingMain'>DiLo</h2>
          <p className='footerParagraph footerContent'>
            Készítse el nálunk álmai <b className='boldText'>fürdőszobáját</b>{' '}
            és <b className='boldText'>konyháját!</b>
          </p>
        </section>
        <div className='mobileOnlyHR'></div>
        <section className='footerCol2'>
          <h5 className='footerHeading'>Felfedezés</h5>
          <a href='#' className='footerContent footerLink'>
            Kezdőlap
          </a>
          <a href='#' className='footerContent footerLink'>
            Rólunk
          </a>
          <a href='#' className='footerContent footerLink'>
            Termékek
          </a>
          <a href='#' className='footerContent footerLink'>
            Szolgáltatások
          </a>
          <a href='#' className='footerContent footerLink'>
            Regisztráció
          </a>
        </section>
        <section className='footerCol3'>
          <h5 className='footerHeading'>Címünk</h5>
          <a
            href='https://www.google.com/maps/place/Budapest,+Szenth%C3%A1roms%C3%A1g+t%C3%A9r+5,+1014/@47.5023403,19.0318886,17z/data=!3m1!4b1!4m5!3m4!1s0x4741dc189c948a0f:0x80b8738998a2bfa6!8m2!3d47.5023403!4d19.0340827'
            className='footerAddress footerContent footerLink'
          >
            <span className='footerAddressRow'>1014 Budapest,</span>
            <span className='footerAddressRow'>Szentháromság tér 5.</span>
          </a>

          <h5 className='footerHeading'>Kapcsolat</h5>
          <a
            href='mailto:dilo@szaniter.hu'
            className='footerContent footerLink'
          >
            Email
          </a>
          <a href='tel:0636203040506' className='footerContent footerLink'>
            Telefon
          </a>
        </section>
        <section className='footerCol31'>
          <h5 className='footerHeading'>Címünk</h5>
          <a
            href='https://www.google.com/maps/place/Budapest,+Szenth%C3%A1roms%C3%A1g+t%C3%A9r+5,+1014/@47.5023403,19.0318886,17z/data=!3m1!4b1!4m5!3m4!1s0x4741dc189c948a0f:0x80b8738998a2bfa6!8m2!3d47.5023403!4d19.0340827'
            className='footerAddress footerContent footerLink'
          >
            <span className='footerAddressRow '>1014 Budapest,</span>
            <span className='footerAddressRow'>Szentháromság tér 5.</span>
          </a>
        </section>
        <section className='footerCol32'>
          <h5 className='footerHeading'>Kapcsolat</h5>
          <a
            href='mailto:dilo@szaniter.hu'
            className='footerContent footerLink'
          >
            Email
          </a>
          <a href='tel:0636203040506' className='footerContent footerLink'>
            Telefon
          </a>
        </section>
        <section className='footerCol4'>
          <h5 className='footerHeading'>Követés</h5>
          <a
            href='https://www.instagram.com'
            rel='noreferrer'
            target='_blank'
            className='footerContent footerLink'
          >
            Instagram
          </a>
          <a
            href='https://www.facebook.com'
            rel='noreferrer'
            target='_blank'
            className='footerContent footerLink'
          >
            Facebook
          </a>
        </section>
        <section className='footerCol5'>
          <h5 className='footerHeading'>Jog</h5>
          <a href='#' className='footerContent footerLink'>
            Feltételek
          </a>
          <a href='#' className='footerContent footerLink'>
            Titoktartás
          </a>
        </section>
        <div className='flexBreak'></div>
        <div className='mobileOnlyHR'></div>
        <section className='legal footerContent'>
          © 2021 DiLo. All Rights Reserved.
        </section>
      </div>
    </footer>
  )
}

export default Footer
