import * as React from 'react';
import { Container } from 'reactstrap';

import '../css/Frame.css'
export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <Container className="Container">
            <div className="content">
                {props.children}
            </div>
        </Container>
    </React.Fragment>
);
