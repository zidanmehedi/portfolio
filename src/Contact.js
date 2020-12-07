import React, { useContext } from 'react';
import Section from './Section';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import emailjs from 'emailjs-com';


const Address = (Props) => {
    return (
        <div className='row'>
            {Props.icon}
            <div className='info'>
                <div className='head'>{Props.head}</div>
                <div className='sub-title'>{Props.sub_title}</div>
            </div>
        </div>
    );
}

const SocialMedia = (Props) => {
    return (
        <a href= {Props.href} target='_blank'>
            <IconButton className={'icon-button ' + Props.site}>
                {Props.icon}
            </IconButton>
        </a>
    );
}


function ContactContent() {
    const image_class = "column left";
    const text_class = "column right";
    const field_name = "field name";
    const field_email = "field email";
    const field_textarea = "field textarea";

    const AddressProperties = [
        {
            icon: <AccountCircleRoundedIcon className='icon' />,
            head: 'Name',
            sub_title: 'Mehedi Hassan Zidan',
        },
        {
            icon: <HomeRoundedIcon className='icon' />,
            head: 'Address',
            sub_title: "Narayanganj, Bangladesh",
        },
        {
            icon: <EmailRoundedIcon className='icon' />,
            head: 'E-Mail',
            sub_title: 'mkzzidan786@gmail.com',
        },
    ];

    const SocialMedias = [
        {
            href: 'http://facebook.com/zidanMehedi.171/',
            site: 'fb',
            icon: <FacebookIcon className=' icon' />,
        },
        {
            href: 'http://linkedin.com/in/zidanmehedi/',
            site: 'ld',
            icon: <LinkedInIcon className='icon' />,
        },
        {
            href: 'http://github.com/zidanMehedi',
            site: 'gh',
            icon: <GitHubIcon className='icon' />,
        },
    ];

    const sendEmail = (event) => {
        event.preventDefault();
        console.log(event.target[0].name);

       if(event.target[0].value !== "" && event.target[1].value !== "" && event.target[2].value !== "" && event.target[3].value !== ""){
            emailjs.sendForm('service_a3vaprs', 'zidanmehedigmail', event.target, 'user_aTSNZ5f6VxQCfl4ZAyyGs').then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
       }else{
           alert('Please Fill Up All Input Fields');
       }

        event.target.reset();
    }

    return (
        <>
            <div className={image_class}>
                <div className="text">Contact With Me</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil doloribus distinctio itaque illo nam. </p>
                <div className='icons'>
                    {
                        AddressProperties.map((arr, index) => {
                            return <Address key = {index} icon={arr.icon} head={arr.head} sub_title={arr.sub_title} />
                        })
                    }
                </div>
                <div className='social-icon'>
                    {
                        SocialMedias.map((arr, index)=>{
                            return <SocialMedia key = {index} href = {arr.href} site = {arr.site} icon = {arr.icon}/>
                        })
                    }
                </div>
            </div>
            <div className={text_class}>
                <div className='text'>Message Me</div>
                <div className='void'></div>
                <form onSubmit = {sendEmail}>
                    <div className='fields'>
                        <div className={field_name}>
                            <input type='text' placeholder='Name' name = 'name'></input>
                        </div>
                        <div className={field_email}>
                            <input type='text' placeholder='Email' name = 'email'></input>
                        </div>
                    </div>
                    <div className='field'>
                        <input type='text' placeholder='Subject' name = 'subject'></input>
                    </div>
                    <div className={field_textarea}>
                        <textarea cols='30' rows='10' placeholder='Message' name = 'message'></textarea>
                    </div>
                    <div className='button'>
                        <button type='submit' name = 'submit'> Send </button>
                    </div>
                </form>
            </div>
        </>
    );
}

function Contact() {


    return (
        <>
            <Section sectionClassName="contact" sectionId="contact" widthClassName="max-width" contentClassName="contact-content" titleValue="Contact" content={<ContactContent />} />
        </>
    );
}

export default Contact;
