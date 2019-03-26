import Row from './Row'

const logos = [
    'static/img/logo/01.jpg',
    'static/img/logo/02.jpg',
    'static/img/logo/03.jpg',
    'static/img/logo/04.jpg',
    'static/img/logo/05.jpg',
    'static/img/logo/06.png',
    'static/img/logo/07.jpg',
    'static/img/logo/08.jpg',
]

const Container = () => (
    <section id="services">
        <div className="container">
            <div className="row text-center">
                {logos.map((logo, key) => (<Row key={key} logo={logo}/>))}
            </div>
        </div>
    </section>
)

export default Container