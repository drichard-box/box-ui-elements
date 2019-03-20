/**
 * @flow
 * @file withErrorBoundary HOC which adds error boundaries as well as error logging
 * @author Box
 */

import * as React from 'react';
import DefaultError from './DefaultError';
import ErrorBoundary from './ErrorBoundary';

type ErrorBoundaryProps = React.ElementConfig<typeof ErrorBoundary>;
type ProvidedErrorBoundaryProps = {
    children: $PropertyType<ErrorBoundaryProps, 'children'>,
    errorComponent: $PropertyType<ErrorBoundaryProps, 'errorComponent'>,
    errorOrigin: $PropertyType<ErrorBoundaryProps, 'errorOrigin'>,
};
type RequiredErrorBoundaryProps = $Diff<ErrorBoundaryProps, ProvidedErrorBoundaryProps>;

function withErrorBoundary<T: {}>(errorOrigin: ElementOrigin, errorComponent: React.ComponentType<any> = DefaultError) {
    return (WrappedComponent: React.AbstractComponent<T>): React.AbstractComponent<RequiredErrorBoundaryProps & T> =>
        React.forwardRef((props: Object, ref: React.Ref<any>) => (
            <ErrorBoundary errorComponent={errorComponent} errorOrigin={errorOrigin} {...props}>
                <WrappedComponent ref={ref} {...props} />
            </ErrorBoundary>
        ));
}

export default withErrorBoundary;
