import './banner.scss'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Banner({title, classImg}) {

	// const [aboutPage, setAboutPage] = useState(false);

	// const location = useLocation();
	
	// useEffect(() => {
	// 	if(location.pathname === '/about'){
	// 		setAboutPage(true)
	// 	};
	// }, [])

	// classImg = "banner " + classImg;

	return (
		
		 <section className={classImg ? "banner " + classImg : "banner"}>
			{/* {!aboutPage && <p>Chez vous, partout et ailleurs</p>} */}
			{title && <p>{title}</p>}
		</section>
	)
}


// <section className={aboutPage ? 'banner banner_about' : 'banner'}>