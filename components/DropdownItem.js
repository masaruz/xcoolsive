import Link from 'next/link'

class DropdownItem extends React.Component {
    constructor(props) {
        super(props)
        this.id = props.id
        this.href = props.href
        this.text = props.text
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