import React from'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

    constructor (props) {
        super(props);

        this.state = props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = this.demo.bind(this);
    }

    update(field) {
        const cap = (str) => str[0].toUpperCase() + str.slice(1);
        return (e) => {
            let val;
            if (field === 'f_name' || field === 'l_name') {
                if (e.target.value !== "") {
                    val = cap(e.target.value);
                } else {
                    val = '';
                }
            } else {
                val = e.target.value;
            }
            this.setState({ [field]: val});
        };
    }

    componentWillUnmount () {
        this.props.clearErrors();
    }

    renderErrors() {
        
        let errors = this.props.errors.map((err, idx) => {
            return <li key={idx} >{err}</li>
        });
        return (
            <div className='form-errors'>
                <ul>
                    {errors}
                </ul>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    demo(e) {
        const demos = [
            {email: "demo1@gmail.com", password: 'password'},
            {email: "demo2@gmail.com", password: 'password'},
            {email: "demo3@gmail.com", password: 'password'},
            {email: "demo4@gmail.com", password: 'password'},
            {email: "demo5@gmail.com", password: 'password'},
            {email: "demo6@gmail.com", password: 'password'},
            {email: "demo7@gmail.com", password: 'password'},
            {email: "demo8@gmail.com", password: 'password'},
            {email: "demo9@gmail.com", password: 'password'},
            {email: "demo10@gmail.com", password: 'password'}
        ];
        const idx = Math.floor((Math.random() * 10));
        this.props.action(demos[idx]);
    }

    render () {

        const nameInput = () => {
             return (
                 <div className='full-name-container'>
                    <input 
                        type="text"
                        placeholder='First Name'
                        onChange={this.update('f_name')}
                        value={this.state.f_name}
                        required
                    />
                    <input 
                        type="text"
                        placeholder='Last Name'
                        onChange={this.update('l_name')}
                        value={this.state.l_name} 
                        required
                    />
                 </div>
             )
        }

        return (
            <div>
                <header className="form-header">
                    <div className='logo-conatiner'>
                        <Link className='logo-link' to='/'>Jelp</Link>
                    </div>
                </header>
                <div className='form-main'>
                    <div className='form-wrapper'>
                        {this.props.errors.length ? this.renderErrors() : <div></div>}
                        <div className='form-container'>
                            <div className='form-title'>
                                <h2>{this.props.formType} Jelp</h2>
                            </div>
                            <div className='form-paragraph'>
                                {this.props.formType === 'Log in to' ? <p>New to Jelp? {this.props.navLink}</p> : <p>Connect with great local businesses</p>}
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                {this.props.formType === 'Sign up for' ? nameInput() : ''}
                                <input
                                    className={this.props.errors.includes("Email has already been taken") ? 'error' : ''}
                                    type="email"
                                    placeholder='Email'
                                    onChange={this.update('email')}
                                    value={this.state.email} 
                                    required
                                />
                                <input
                                    className={this.props.errors.includes("Password is too short (minimum is 6 characters)") ? 'error' : ''}
                                    type="password"
                                    placeholder='Password'
                                    onChange={this.update('password')}
                                    value={this.state.password}
                                    required
                                />
                                <input id='form-btn' type="submit" value={this.props.formBTN}/>
                                {this.props.formType === 'Log in to' ? <button id='form-btn' onClick={this.demo}>Demo</button> : <div></div>}
                            </form>
                        </div>
                        {this.props.formType === 'Log in to' ? <small>New to Jelp? {this.props.navLink}</small> : <small>Already on Jelp? {this.props.navLink}</small>}
                    </div>
                    <div className='form-side'>
                        <div className="form-img">
                            <img id='auth-img' src={window.auth_img}/>
                        </div>
                    </div>
                </div>
                <footer>

                </footer>
            </div>
        )
    }
}

export default SessionForm;

