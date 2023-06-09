import { Carousel, Col, Row, Container } from 'react-bootstrap';


export default function Kids() {

    const Books = [
        {
            id: 1,
            title: "Neuromancer",
            imageUrl: 'https://img1-kidega.mncdn.com/UPLOAD/Neuromancer-ithakiyayinlari.jpg',
        },
        {
            id: 2,
            title: "Filim Uyumak İstemiyor",
            imageUrl:
                'https://img1-kidega.mncdn.com/mnresize/200/307/UPLOAD/urunler/9786254292941.jpg',
        },

        {
            id: 3,
            title: "Geri Dönüşüm Muhteşem Olacak",
            imageUrl:
                'https://img1-kidega.mncdn.com/mnresize/200/307/UPLOAD/urunler/9786257662499.jpg',
        },
        {
            id: 4,
            title: "Yaşadım Demek İçin Ne Yapmalı?",
            imageUrl:
                'https://img1-kidega.mncdn.com/UPLOAD/yasadimdemekicin-tuhaf.jpg',
        },
        {
            id: 5,
            title: "Gündelik Yaşamda Ve Psikoterapide Kişilik Bozuklukları",
            imageUrl:
                'https://img1-kidega.mncdn.com/UPLOAD/kisilikbozukluklari-kanon-min.jpg',
        },
        {
            id: 6,
            title: "İleri Beyin Koçu",
            imageUrl:
                'https://img1-kidega.mncdn.com/mnresize/260/399/UPLOAD/urunler/9786258361193.jpg',
        },
        {
            id: 7,
            title: "Kürk Mantolu Madonna",
            imageUrl:
                'https://img1-kidega.mncdn.com/mnresize/260/399/UPLOAD/urunler/9789753638029.jpg',
        },
        {
            id: 8,
            title: "Balıkçı ve Oğlu",
            imageUrl:
                'https://img1-kidega.mncdn.com/mnresize/260/399/UPLOAD/urunler/9789751042125.jpg',
        },

    ]

    const Slider = [
        {
            id: 1,
            Image: 'https://img1-kidega.mncdn.com/UPLOAD/2022-mayis-kampayalari/750X417cocukkitaplarisenligi.png',
        },
        {
            id: 2,
            Image:
                'https://img1-kidega.mncdn.com/UPLOAD/2023-nisan-kampanyalari/750_417dogancocuk.png',
        },

        {
            id: 3,
            Image:
                'https://img1-kidega.mncdn.com/UPLOAD/2023-nisan-kampanyalari/750x417tudemyyainlarinisan.png',
        },
        {
            id: 4,
            Image:
                'https://img1-kidega.mncdn.com/UPLOAD/2023-nisan-kampanyalari/750_417cancocukyayinlarinisan.png',
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
                        <h3 className='p-2 border-start border-5 border-warning '>Yeni Çıkan Çocuk Kitaplar</h3>
                        <hr />
                        {Books.map((Books) => (
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
