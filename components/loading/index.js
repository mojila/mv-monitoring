import React from 'react';
import ReactLoading from 'react-loading';

export default () => (
    <div style={{ marginTop: '200px' }}>
        <center><ReactLoading type="spin" width={64} height={64} color="#444"/></center>
    </div>
);