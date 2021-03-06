import DropdownItem from './DropdownItem'

const Dropdown = ({items}) => (
    <li className="nav-item">
        <div className="dropdown">
            <div className="nav-link js-scroll-trigger">
                <div className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Our Collection
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {items.map((i, k) => 
                        <DropdownItem href={i.link} text={i.text} key={k} id={k} length={items.length}/>
                    )}
                </div>
            </div>
        </div>
    </li>
)

export default Dropdown