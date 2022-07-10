import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/components/layout';

const Home = React.lazy(() => import('./pages/Home'));
const Item = React.lazy(() => import('./pages/Item'));
const Collection = React.lazy(() => import('./pages/Collection'));
const Help = React.lazy(() => import('./pages/Help'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Home />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/collection"
                    element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Collection />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/collection/men/clothing/:itemID"
                    element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Item />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/collection/women/clothing/:itemID"
                    element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Item />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/support"
                    element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Help />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/help"
                    element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Help />
                        </React.Suspense>
                    }
                />
                <Route
                    path="*"
                    element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <NotFound />
                        </React.Suspense>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
