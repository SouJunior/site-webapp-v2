import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import ErrorBoundary from './components/.global/error-boundary';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          {/* Skip to main content link for keyboard navigation */}
          <a
            href="#main-content"
            className="skip-link"
            style={{
              position: 'absolute',
              left: '-9999px',
              zIndex: 999,
              padding: '8px 16px',
              background: '#000',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '14px',
            }}
            onFocus={(e) => {
              e.target.style.left = '6px';
              e.target.style.top = '6px';
            }}
            onBlur={(e) => {
              e.target.style.left = '-9999px';
              e.target.style.top = 'auto';
            }}
          >
            Pular para o conteúdo principal
          </a>

          <main id="main-content" tabIndex={-1}>
            <Routes>
              <Route element={<DefaultLayout />}>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={React.createElement(route.component)}
                  />
                ))}
              </Route>
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
