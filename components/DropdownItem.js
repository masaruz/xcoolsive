class DropdownItem extends React.Component {
    constructor(props) {
        super(props)
        this.id = props.id
        this.href = props.href
        this.text = props.text
        this.updateGallery = props.updateGallery
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault()
        this.updateGallery(this.id)
    }

    render() {
        return (
            <div>
                <a onClick={this.handleClick} className="dropdown-item" href={this.href}>{this.text}</a>
                <div className="dropdown-divider"></div>
            </div>
        )
    }
}

export default DropdownItem