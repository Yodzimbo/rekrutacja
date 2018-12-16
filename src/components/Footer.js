import React from 'react';
import {Link,  withRouter} from 'react-router-dom';

const Footer = () => {
    return  (
        <footer className={'footer-wrapper'}>            
            <ul className={'footer-list'}>
                <li className={'footer-link'}>
                    <Link className={'powered'} to="/">
                        Powered by PGS
                    </Link></li>
            </ul>
        </footer>
    )
}

export default withRouter(Footer)