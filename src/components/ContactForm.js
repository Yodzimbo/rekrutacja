import React, { Component } from 'react';


class Contact extends Component {
    
    constructor(props) {
        super(props);    
        this.state = {
            name: null,
            email: null,
            message: null,
            formErrors: {
                name: '',
                email: '',
                message: ''
            }
        };
    }
    handleSubmit = e => {
        const formValid = ({ formErrors, ...rest }) => {
            let valid = true;
          
            // validate form errors being empty
            Object.values(formErrors).forEach(val => {
                val.length > 0 && (valid = false);
            });
          
            // validate the form was filled out
            Object.values(rest).forEach(val => {
                val === null && (valid = false);
            });
          
            return valid;
        };
        e.preventDefault();
    
        if (formValid(this.state)) {
            console.log(`
                --SUBMITTING--
                Name: ${this.state.name}
                Email: ${this.state.email}
                Message: ${this.state.message}
            `);
        } else {
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
    };
    
    handleChange = e => {
        e.preventDefault();
        const emailRegex = RegExp(
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
            case 'name':
                formErrors.name =
                value.length < 3 ? 'Pole jest wymagane' : '';
                break;
            case 'email':
                formErrors.email = emailRegex.test(value)
                ? ''
                : 'invalid email address';
                break;
            default:
                break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
    
      render() {
        const { formErrors } = this.state;
    
        return (
            <div className={'message-box'}>
                <div className={'message-wrapper'}>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className={'message-name'}>
                        <label htmlFor='name'></label>
                        <input
                            className={formErrors.name.length > 0 ? 'error' : null}
                            placeholder='Name'
                            type='text'
                            name='name'
                            onChange={this.handleChange}
                        />
                        {formErrors.name.length > 0 && (
                            <span className={'error-message'}>{formErrors.name}</span>
                        )}
                        </div>
                        <div className={'message-email'}>
                        <label htmlFor='email'></label>
                        <input
                            className={formErrors.email.length > 0 ? 'error' : null}
                            placeholder='Email'
                            type='email'
                            name='email'
                            onChange={this.handleChange}
                        />
                        {formErrors.email.length > 0 && (
                            <span className={'error-message'}>{formErrors.email}</span>
                        )}
                        </div>
                        <div className={'message-message'}>
                        <label htmlFor='message'></label>
                        <textarea
                            className={formErrors.message.length > 0 ? 'error' : null}
                            placeholder='Message'
                            type='message'
                            name='message'
                            onChange={this.handleChange}
                        />
                        </div>
                        <div className={'message-send'}>
                            <a className={'message-button'} type='submit'>Send</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;