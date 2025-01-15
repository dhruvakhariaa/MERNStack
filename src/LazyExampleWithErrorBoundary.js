import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

// Lazy-loaded components
const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./NonExistentComponent")); // Simulate an error

function LazyExampleWithErrorBoundary() {
    return (
        <div>
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Home />
                </Suspense>
            </ErrorBoundary>

            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <About />
                </Suspense>
            </ErrorBoundary>

            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Contact /> {/* This will throw an error */}
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}

export default LazyExampleWithErrorBoundary;
