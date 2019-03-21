class DropdownItem extends React.Component {
    constructor(props) {
        super(props)
        this.id = props.id
        this.href = props.href
        this.text = props.text
        this.updateGallery = props.updateGallery
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <Link href={this.href}><a className="dropdown-item">{this.text}</a></Link>
                <div className="dropdown-divider"></div>
            </div>
        )
    }
}

export default DropdownItem