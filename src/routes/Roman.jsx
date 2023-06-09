import { Carousel, Col, Row, Container } from 'react-bootstrap';


export default function Roman() {

    const Romans = [
        {
            id: 1,
            title: "SPQR: A History of Ancient Roma",
            imageUrl: 'https://m.media-amazon.com/images/I/71GRXseK-rL._AC_UF1000,1000_QL80_.jpg',
        },
        {
            id: 2,
            title: "The History of the Decline and Fall of the Roman Empire: Vol. 1",
            imageUrl: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625584151/history-of-the-decline-and-fall-of-the-roman-empire-vol-1-9781625584151_hr.jpg',
        },

        {
            id: 3,
            title: "The Twelve Caesars",
            imageUrl: 'https://m.media-amazon.com/images/I/51YxfOSjIaL.jpg',
        },
        {
            id: 4,
            title: "Rubicon",
            imageUrl: 'https://m.media-amazon.com/images/I/51Ob0GldiUS._AC_UF894,1000_QL80_.jpg',
        },
        {
            id: 5,
            title: "The Roman Revolution",
            imageUrl: 'https://fivebooks.com/app/uploads/2011/09/0198810016.01.LZ_.jpg',
        },
        {
            id: 6,
            title: "Meditations",
            imageUrl: 'https://m.media-amazon.com/images/I/51cQEdN9KuL._AC_UF1000,1000_QL80_.jpg',
        },
        {
            id: 7,
            title: "The Storm Before the Storm: The Beginning of the End of the Roman Republic",
            imageUrl: 'https://m.media-amazon.com/images/I/51Mhv3Dfk0L.jpg',
        },
        {
            id: 8,
            title: "Dynasty: The Rise and Fall of the House of Caesar",
            imageUrl: 'https://m.media-amazon.com/images/I/91hTmiPaIaL._AC_UF1000,1000_QL80_.jpg',
        },

    ]

    const Slider = [
        {
            id: 1,
            Image: 'https://sm.ign.com/t/ign_tr/screenshot/default/comicbooks-1_7agg.1280.jpg',
        },
        {
            id: 2,
            Image: 'https://www.dunyabizim.com/images/haberler/2019/11/sekizinci_sanat_cizgi_roman_h38872_85c5c.jpg',
        },

        {
            id: 3,
            Image: 'https://www.topragizbiz.com/resim/images/cizgiroman.jpg',
        },
        {
            id: 4,
            Image: 'https://media.bantmag.com/wp-content/uploads/2016/08/Convergence-8-splash-page-2-800x533.webp',
        }


    ]
    return (
        <Container className='mt-5'>
            <Row >
                <Carousel className='mb-5'>
                    {Slider.map((Slider) => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={Slider.Image}
                                alt="First slide"
                                height={450}
                                style={{objectFit: 'contain'}}
                            />
                        </Carousel.Item>
                    ))}

                </Carousel>


                <Col className='col-xl-12'>

                    <Row>
                        <h3 className='p-2 border-start border-5 border-warning '>Yeni Çıkan Romanlar</h3>
                        <hr />
                        {Romans.map((Books) => (
                            <Col className='col-xl-3 col-6 my-2 '>
                                <div className='card-img  '>
                                    <img
                                        className=" img-fluid w-100  rounded-4 d-block mx-auto"
                                        src={Books.imageUrl}
                                        style={{ height: '250px', objectFit: 'contain' }}
                                    />
                                </div>
                                <h6 className='fw-bold p-3' style={{ textAlign: 'center', fontSize: '12px' }}>{Books.title}</h6>
                            </Col>
                        ))}
                    </Row>
                </Col>


            </Row>
        </Container>

    );
}
