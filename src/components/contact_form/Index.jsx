import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { Form, FormContainer } from './Style';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubjet] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();
  const THREE = 3;

  const serviceId = 'service_javndgh';
  const templateId = 'template_oa0m5v6';
  const userId = 'user_7gPwXFxxZ06KfbjY4aLtL';

  const schema = yup.object().shape({
    firstName: yup.string()
      .required('Campor nome é obrigatório').min(THREE, 'Insira um nome valido'),
    email: yup.string()
      .required('Campor email é obrigatório').email('Insira um email valido'),
    subject: yup.string().required('Campor assunto é obrigatório'),
    message: yup.string().required('Campor menssagem é obrigatório'),
  });

  const resetStates = () => {
    setEmail('');
    setFirstName('');
    setLastName('');
    setMessage('');
    setSubjet('');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      schema.validateSync(
        { firstName, email, subject, message },
        { abortEarly: false },
      );
      console.log(form.current);
      emailjs.sendForm(serviceId, templateId, form.current, userId)
        .then((result) => {
          toast.success(`${result.text} menssagem envida!`);
          e.target.reset();
        }, (error) => {
          console.log(error.text);
          toast.error(error.text);
        });

      resetStates();
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <FormContainer>
      <Form ref={ form } onSubmit={ sendEmail }>
        <div>
          <label htmlFor="first_name">Nome*</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={ firstName }
            onChange={ (e) => setFirstName(e.target.value) }
          />
        </div>
        <div>
          <label htmlFor="last_name">Sobrenome</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={ lastName }
            onChange={ (e) => setLastName(e.target.value) }
          />
        </div>
        <div>
          <label htmlFor="user_email">Email*</label>
          <input
            type="email"
            name="user_email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div>
          <label htmlFor="subject_matter">Assunto*</label>
          <input
            type="text"
            name="subject_matter"
            value={ subject }
            onChange={ (e) => setSubjet(e.target.value) }
          />
        </div>
        <div>
          <label htmlFor="message">Menssagem*</label>
          <textarea
            name="message"
            value={ message }
            onChange={ (e) => setMessage(e.target.value) }
          />
        </div>
        <button type="submit">Enviar</button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
