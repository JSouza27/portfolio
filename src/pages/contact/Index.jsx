import React from 'react';
import ContactForm from '../../components/contactForm/Index';
import { ContactWrapper, ContactContainer } from './Style';

const Contact = () => (
  <ContactWrapper>
    <ContactContainer>
      <div>
        <h1>Contato</h1>
        <span>Sinta-se à vontade para entrar em contato</span>
      </div>
      <ContactForm />
    </ContactContainer>
  </ContactWrapper>
);

export default Contact;
