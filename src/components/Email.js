import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Email() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_i6pc1in', 'template_84pshuh', form.current, '-8Id4U1Kt-65uLBlK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return(
        <div className='contactEmailBox'>
            <p className='contactTitle' >Contact Me</p>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input className='nameBox' type="text" name="user_name" placeholder='Your name'/>
                <label>Email</label>
                <input className='emailBox' type="email" name="user_email" placeholder='name@email.com'/>
                <label>Message</label>
                <textarea className='messageBox' name="message" placeholder='Leave me a message here'/>
                <input className='contactSubmit' type="submit" value="Send"/>
        </form>
      </div>
    )
}

export default Email