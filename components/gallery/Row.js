const Row = ({modal, img, name, desc}) => (
    <div className="col-md-4 col-sm-6 portfolio-item">
        {/* <a className="portfolio-link" data-toggle="modal" href={modal}> */}
            {/* <div className="portfolio-hover"> */}
                {/* <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                </div> */}
            {/* </div> */}
            <img className="img-fluid" src={img} alt=""/>
        {/* </a>
        <div className="portfolio-caption">
            <h4>{name}</h4>
            <p className="text-muted">{desc}</p>
        </div> */}
    </div>
)

export default Row