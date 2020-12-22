import React, { Suspense } from 'react';

export default function withSuspense(WrappedComponent) {
    return function(props) {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <WrappedComponent {...props} />
        </Suspense>
      );
    };
  }