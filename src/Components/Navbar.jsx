import home from '../images/Homer.svg'
import like from '../images/Izbrannoe.svg'
import cart from '../images/card.svg'
import user from '../images/user.svg'
import '../Css/Main.css'
import { Link } from 'react-router-dom'
function Main() {
	return (
		<div className='main-container'>
			<div className='nav-bar'>
				<ul>
					<li>
						<Link to="/">
							<img src={home} alt='' />
						</Link>
					</li>
					<li>
						<img src={like} alt='' />
					</li>
					<li>
						<Link to='./cart'>
							<img src={cart} alt='' />
						</Link>
					</li>
					<li>
						<img src={user} alt='' />
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Main
