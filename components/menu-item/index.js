import React from 'react';
import { withRouter } from 'next/router';

class MenuItem extends React.Component {
    render() {
        let { children, active, to = '/', router } = this.props;

        return (
            <div onClick={() => router.push(to)} className={"pointer p-2 pl-4 pr-4 mb-2 small text-center " + (active ? "bg-primary text-white border border-primary":"bg-white border border border-secondary")}>
                {children}
            </div>
        );
    }
}

export default withRouter(MenuItem);