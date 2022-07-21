import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import NHLState from './context/nhl/NHLState';
import './App.css';

function App() {
	return (
		<NHLState>
			<Router>
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</Router>
		</NHLState>
	);
}

export default App;
