import Link from 'next/link'

const Menu = ({href, text}) => (
    <li className="nav-item">
        <Link href={href}><a className="nav-link js-scroll-trigger">{text}</a></Link>
    </li>
)

export default Menu