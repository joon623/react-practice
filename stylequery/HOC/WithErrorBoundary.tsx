import {FC} from 'react';
import {ErrorBoundary, ErrorBoundaryPropsWithComponent,} from 'react-error-boundary';
import {QueryErrorResetBoundary} from 'react-query';

type WithErrorBoundaryProps = ErrorBoundaryPropsWithComponent;

const WithErrorBoundary: FC<WithErrorBoundaryProps> = (props) => (
    <QueryErrorResetBoundary>
        {({reset}) => <ErrorBoundary onReset={reset} {...props} />}
    </QueryErrorResetBoundary>
);

export {WithErrorBoundary};
export type {WithErrorBoundaryProps};
