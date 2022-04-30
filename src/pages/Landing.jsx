import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../Components'
import { Link } from 'react-router-dom'

const Landing = () => {
	return (
		<Wrapper>
			<main>
				<nav>
					<Logo />
				</nav>
				<div className='container page'>
					{/* info */}
					<div className='info'>
						<h1>
							job <span>tracking</span> app
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
							saepe reiciendis delectus accusamus voluptate, suscipit provident
							error non laborum rerum!
						</p>
						<Link to='/register'>
							<button className='btn btn-hero'>Login/Register</button>
						</Link>
					</div>
					<img src={main} alt='job hunt' className='img main-img' />
				</div>
			</main>
		</Wrapper>
	)
}
export default Landing
