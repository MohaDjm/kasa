import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/kasa",
		element: <Home />
	},
	{
		path: "/accomodation/:id",
		element: <Accomodation />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "*",
		element: <NotFound />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>

{/* // 			<RouterProvider>
// 				<BrowserRouter>
// 					<Routes>
// 						<Route path="/" element={<Home />} />	
// 						<Route path="/accomodation/:id/" element={<Accomodation />} />	
// 						<Route path="/about/" element={<About />} />	
// 						<Route path="*" element={<NotFound />} />	
// 					</Routes>
// 				</BrowserRouter>
// 			</RouterProvider> */}
 		</>
	);
}

export default App;
