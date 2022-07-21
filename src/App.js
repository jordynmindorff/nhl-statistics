import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Team from './components/teams/Team';
import Player from './components/players/Player';
import NotFound from './components/pages/NotFound';
import NHLState from './context/nhl/NHLState';
import './App.css';
import 'flag-icons/css/flag-icons.css';

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
							<Route path='/team/:id' element={<Team />} />
							<Route path='/player/:id' element={<Player />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</Router>
		</NHLState>
	);
}

export default App;
