import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import * as Pages from './pages'

function App() {
    return (
        <div id="app">
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Pages.Welcome />}/>
                    <Route path="/about" element={<Pages.About />}/>
                    <Route path="/search" element={<Pages.Search />}/>
                </Routes>
            </main>
        </div>
    )
}

export default App;