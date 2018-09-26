import React from 'react';
import './styles.css';

export default ({ companyName, companyMotto, companyEst }) => <header>
    <h1>{companyName}</h1>
    <p><span>{companyMotto}</span><span>Since {companyEst}</span></p>
</header>;