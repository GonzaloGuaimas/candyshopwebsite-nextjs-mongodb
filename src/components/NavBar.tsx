import React from 'react'
import { Menubar } from 'primereact/menubar'
import Image from 'next/image'
import logoVertical from '../assets/img/logoVertical.png'

export const NavBar = () => {
  const items = [
    {
        label:'Inicio',
        icon: 'pi pi-fw pi-home'
    },
    {
        label:'Catálogo',
        icon:'pi pi-fw pi-book'
    },
    {
        label:'Contacto',
        icon:'pi pi-fw pi-user'
    }
  ]
  return (
    <Menubar model={items} end={<Image src={logoVertical} height={25} alt={''}/>}/>
  )
}
