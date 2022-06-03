import React from 'react';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <div>
                    <Result
                        status="error"
                        title="Oops Something went wrong"
                        subTitle="Please check your internet connection. If error persist let us know, we will do our best to fix it!!"
                        extra={[
                            <Button type="primary" key="console">
                                Go Back
                            </Button>
                        ]}
                    />
                </div>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
