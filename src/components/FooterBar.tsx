import React from 'react'
import { IoLocationSharp, IoLogoWhatsapp } from 'react-icons/io5'

export const FooterBar = () => {
  return (
    <div className='footer-container'>
      <div>
          <IoLocationSharp  size={'2em'} color={'#fff'}/>
          <a href="https://goo.gl/maps/BAApxbd1WneaYZv38"><p>9 de Julio 310</p></a>
      </div>
      <div>
          <IoLogoWhatsapp  size={'2em'} color={'#fff'}/>
          <a href="https://wa.link/9cptla"><p>+54 387 4646 037</p></a>
      </div>
    </div>
  )
}
