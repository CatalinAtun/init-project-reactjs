import React from 'react';
import {
  ButtonDefault,
  MainLogo,
  ControlledCarousel,
  Title,
  Accordion,
  BadgeWithText,
  BadgeWithCounter,
  BadgeAlone,
  Pills,
  BtnGroup,
  BasicCard
} from '../../components';
import { images, dataAccordion, groupBtn } from '../../data/data'
import './style.css';

const Default = () => {
    return (
      <div>
        <div className='container-fluid home'>
          <MainLogo />
          <ButtonDefault
            name='Iniciar sesión'
            variant='link'
            path='/login'
          />
          <ButtonDefault
            name='Crear cuenta'
            path='/new-account'
          />
          <BasicCard size='18rem' variantImg='top' src='http://www.gifs-animados.es/wallpapers/wallpapers/ardillas/wallpaper-ardillas-4838185.jpg' title='Carta ardilla' text='Ardillita' variantBtn='link' titleBtn='Aceptar' subtitle='jejeje ardilla' colorCard='light' colorText='black' colorBorder='success'/>
          <br></br>
          <BtnGroup items={groupBtn} />
          <ButtonDefault name='active' active />
          <ButtonDefault name='block' block />
          <ButtonDefault name='disabled' disabled />
          <Title title='Home' />
          <Pills variant='info' title='pill' />
          <BadgeAlone variant='info' title='badge solo' />
          <BadgeWithText text="Nuevo badge" variant='info' title="Nuevo" />
          <BadgeWithCounter variantBtn='info' variantBadge='light' text='badge con contador' counter='3' />
          <Accordion items={dataAccordion} defaultActiveKey='0' />
          <ControlledCarousel items={images} />
        </div>
      </div>
    );
  }

export default Default; 