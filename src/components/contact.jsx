import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import checkIcon from './check.svg';
import errorIcon from './error.svg';
import infoIcon from './info.svg';
import warningIcon from './warning.svg';
import  { Toast } from './toast'



export const Contact = (props) => {
  const initialState = {
    name: '',
    email: '',
    message: '',
    sending: false
  }
  const [{ name, email, message, sending }, setState] = useState(initialState)
  const [list, setList] = useState([]);

  let toastProperties = null;
  const handleChange = (e) => {
    console.log('changed')
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
    
  }
  const clearState = () => {
    setState({ ...initialState })
  }
  const showToast = type => {
    console.log("show toast ");
    const id = Math.floor((Math.random() * 101) + 1);

    switch(type) {
      case 'success':
        toastProperties = {
          id,
          title: 'Thank You',
          description: 'We will be in touch soon!',
          backgroundColor: '#5cb85c',
          icon: checkIcon
        }
        break;
      case 'danger':
        toastProperties = {
          id,
          title: 'Danger',
          description: 'This is a error toast component',
          backgroundColor: '#d9534f',
          icon: errorIcon
        }
        break;
      case 'info':
        toastProperties = {
          id,
          title: 'Info',
          description: 'This is an info toast component',
          backgroundColor: '#5bc0de',
          icon: infoIcon
        }
        break;
      case 'warning':
        toastProperties = {
          id,
          title: 'Warning',
          description: 'This is a warning toast component',
          backgroundColor: '#f0ad4e',
          icon: warningIcon
        }
        break;

        default:
          setList([]);
    }

    setList([...list, toastProperties]);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setState({name:name, email:email,message:message,sending : true})
    emailjs
      .sendForm(
        'service_jng5qtm', 'template_j8p6ml5', e.target, 'user_3ViM6YRaYRgcT9stPVEqF'
      )
      .then(
        (result) => {
          console.log("result " + result.text)
          clearState()
          showToast('success')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    console.log("sending = " + {sending}),

    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contact Us</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate='true' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                        value={name}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                        value={email}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                {sending && (
                  <i
                    className="fa fa-refresh fa-spin"
                    style={{ marginRight: "5px" }}
                  />
                  )}
                  {sending && <span>Sending Message</span>}
                  {!sending && <span>Send Message</span>}
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              {/* <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p> */}
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : '/'}>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast 
        toastList={list}
        position='bottom-left'
        autoDelete={true}
        dismissTime={7000}
      />
      <div id='footer'>
        <div className='container text-center light'>
        </div>
      </div>
    </div>
  )
}
