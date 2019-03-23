const Row = ({name,desc,icon}) => (
    <div className="col-md-4">
        <span className="fa-stack fa-4x">
            <i>
                <img src={icon} className="img-thumbnail"/>
            </i>
        </span>
        <h4 className="service-heading">{name}</h4>
        {desc.map((i,key) => <div key={key} className="text-muted">{i}</div>)}
    </div>
)

export default Row