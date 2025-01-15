import React, {Suspense} from "react";

const LazyComponent = React.lazy(() => import("./App1"));

function LazyExample() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
}

export default LazyExample;