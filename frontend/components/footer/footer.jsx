import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <footer>
                <div className='footer-inner-wrapper'>
                    <div className='contact-info'>
                        <div className='footer-info'>
                            Get in touch with the developer
                        </div>
                        <nav className='footer-links'>
                            <a className='github' href="https://github.com/jlshaw117"><i className="fab fa-github-square"></i></a>
                            <a className='email' href="mailto: jlshaw117@gmail.com"><i className="fas fa-envelope"></i></a>
                            <a className='portfolio' href="https://www.jerrikshaw.com/"></a>
                            <a className='linkedin' href="https://www.linkedin.com/in/jerrik-shaw/"><i className="fab fa-linkedin"></i></a>
                            <a className='angellist' href="https://angel.co/jerrik-shaw?al_content=view+your+profile&al_source=transaction_feed%2Fnetwork_sidebar"><i className="fab fa-angellist"></i></a>
                        </nav>
                    </div>
                    <div className='footer-img'></div>
                </div>
            </footer>
        );
    }
}

export default Footer;