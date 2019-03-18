const Menu = ({href, text}) => (
    <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={href}>{text}</a>
    </li>
)

export default Menu