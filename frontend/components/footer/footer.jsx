import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <footer>
                <div className='contact-info'>
                    <div className='footer-info'>
                        Get in touch with the developer
                    </div>
                    <nav className='footer-links'>
                        <a href="https://www.linkedin.com/in/jerrik-shaw/"><i class="fab fa-linkedin"></i></a>
                        <a href="https://angel.co/jerrik-shaw?al_content=view+your+profile&al_source=transaction_feed%2Fnetwork_sidebar"><i class="fab fa-angellist"></i></a>
                        <a href="https://www.jerrikshaw.com/"><i class="fas fa-briefcase"></i></a>
                        <a href="mailto: jlshaw117@gmail.com"><i class="fas fa-envelope"></i></a>
                    </nav>
                </div>
                <div className='footer-img'></div>
            </footer>
        );
    }
}

export default Footer;