import React from 'react'
import { IoLocationSharp, IoLogoWhatsapp } from 'react-icons/io5'

export const FooterBar = () => {
  return (
    <div className='footer-container'>
      <div>
          <IoLocationSharp  size={'2em'} color={'white'}/>
          <p>9 de Julio 310</p>
      </div>
      <div>
          <IoLogoWhatsapp  size={'2em'} color={'white'}/>
          <p>+54 387 4646 037</p>
      </div>
    </div>
  )
}
