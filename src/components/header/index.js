import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<a href="/" class={style.logo}>
			<h1>TaskManger</h1>
		</a>
		<nav>
			<Link activeClassName={style.active} href="/">
				Home
			</Link>
			<Link activeClassName={style.active} href="/profile">
				Me
			</Link>
			<Link activeClassName={style.active} href="/profile/john">
				John
			</Link>
			<Link activeClassName={style.active} href="/login">
				login
			</Link>
		</nav>
	</header>
);

export default Header;
