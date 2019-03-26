import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <link rel="shortcut icon" href="static/img/favicon.ico" />
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>          
            
            <link href="static/css/fontawesome-free/all.min.css" rel="stylesheet" type="text/css"/>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"/>
            <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'/>
            <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'/>
            <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'/>
            <link href="static/css/agency.min.css" rel="stylesheet"/>
        </Head>
        {props.children}
        {/* <Modal id="gallery-01" img="static/img/1/01.jpg"/> */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" integrity="sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o" crossOrigin="anonymous"></script>
        <script src="static/js/jquery-easing/jquery.easing.min.js"></script>
        <script src="static/js/jqBootstrapValidation.js"></script>
        <script src="static/js/contact_me.js"></script>
        <script src="static/js/agency.min.js"></script>
    </div>
)

export default Layout