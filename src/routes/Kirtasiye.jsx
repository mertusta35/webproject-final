import { Carousel, Col, Row, Container } from 'react-bootstrap';


export default function Kirtasiye() {

    const Kirtas = [
        {
            id: 1,
            title: "Get a Hobby",
            imageUrl: 'https://m.media-amazon.com/images/I/51sZCd11enL._AC_UF1000,1000_QL80_.jpg',
        },
        {
            id: 2,
            title: "Crafts and Hobbies",
            imageUrl: 'https://m.media-amazon.com/images/I/612xL78gkkL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFOURANDHALF%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA80%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg',
        },

        {
            id: 3,
            title: "Animal Farm",
            imageUrl: 'https://qph.cf2.quoracdn.net/main-qimg-af5ed10354c11e94e69a1c06bb21421e.webp',
        },
        {
            id: 4,
            title: "Heart Robot",
            imageUrl: 'https://metaphorsandmoonlight.com/wp-content/uploads/51QNIyg8TLL.jpg',
        },
        {
            id: 5,
            title: "How Cycling can save the World",
            imageUrl: 'https://imgix.bustle.com/uploads/image/2018/1/1/03bb4ab8-702c-465b-980a-260e41f0732e-how-cycling-can-save-the-world1.jpg?w=414&h=632&fit=crop&crop=faces&auto=format%2Ccompress',
        },
        {
            id: 6,
            title: "Crying",
            imageUrl: 'https://images-us.bookshop.org/ingram/9780525657743.jpg?height=250&v=v2-42c80b74ffd10c204322367adc5699a7',
        },
        {
            id: 7,
            title: "End Times",
            imageUrl: 'https://images-us.bookshop.org/ingram/9780593490501.jpg?height=250&v=v2',
        },
        {
            id: 8,
            title: "Atomic Habits",
            imageUrl: 'https://images-us.bookshop.org/ingram/9780735211292.jpg?height=250&v=v2-6f5ec5995cc02aae02f42dc75e235cd5',
        },

    ]

    const Slider = [
        {
            id: 1,
            Image: 'https://static.ticimax.cloud/42669/uploads/sayfatasarim/sayfa6/a1877ec4-7bf3-400e-97f0-afedb798d3fb.jpg',
        },
        {
            id: 2,
            Image: 'https://i.idefix.com/pimages/Content/Uploads/BannerFiles/idefix/Idefix_Eylul-Kitap-LP_R1_1200x390.jpg',
        },

        {
            id: 3,
            Image: 'https://www.aydindenge.com.tr/media/22239b3bedb6fc67e3155f35c8aa10d7.jpg',
        },
        {
            id: 4,
            Image: 'https://pr1.nicelocal.biz.tr/mMtfEmT8Pj4-G4v5g1lv1g/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2SETePB_AnVfziXGjs4dB8S_B2IKENYD1e8eVNMQ-sMn51CRSDJ6R0UzLR4xIKSH9A',
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
                        <h3 className='p-2 border-start border-5 border-warning '>Yeni Çıkan Hobi & Kırtasiye Kitapları</h3>
                        <hr />
                        {Kirtas.map((Books) => (
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
