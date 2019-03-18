import Row from './Row'

const Container = ({name,images,desc}) => (
    <section className="bg-light" id="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">{name}</h2>
                <h3 className="section-subheading text-muted">{desc}</h3>
                </div>
            </div>
            <div className="row">
                {images.map((i,k) => <Row name="name" key={k} desc="description" modal={`#gallery-${k}`} img={i}/>)}
            </div>
        </div>
    </section>
)

export default Container