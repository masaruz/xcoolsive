const Row = ({name,desc,icon}) => (
    <div className="col-md-4">
        <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className={`fas ${icon} fa-stack-1x fa-inverse`}></i>
        </span>
        <h4 className="service-heading">{name}</h4>
        {desc.map((i,key) => <div key={key} className="text-muted">{i}</div>)}
    </div>
)

export default Row