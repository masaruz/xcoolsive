import Row from './Row'

const Container = ({name,images,desc}) => (
    <section className="bg-light" id="portfolio">
        <div className="container">
            <div className="row" style={{marginBottom: '50px;'}}>
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">{name}</h2>
                <div className="section-subheading text-muted">{desc}</div>
                </div>
            </div>
            <div className="row">
                {images.map((i,k) => <Row name="name" key={k} desc="description" modal={`#gallery-${k}`} img={i}/>)}
            </div>
        </div>
    </section>
)

export default Container