import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './module/homepage';
import Nav from './module/nav';

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/' element={<></>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
