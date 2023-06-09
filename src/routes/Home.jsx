import { Nav, Col, Row, Container } from 'react-bootstrap';

export default function Home() {

  const Books = [
    {
      id: 1,
      title: "Neuromancer",
      imageUrl: 'https://img1-kidega.mncdn.com/UPLOAD/Neuromancer-ithakiyayinlari.jpg',
    },
    {
      id: 2,
      title: "Yedi Yıldız Taşı",
      imageUrl:
        'https://img1-kidega.mncdn.com/mnresize/200/307/UPLOAD/urunler/9786257994682.jpg',
    },

    {
      id: 3,
      title: "İyi Akşamlar Bay Soares",
      imageUrl:
        'https://img1-kidega.mncdn.com/mnresize/200/307/UPLOAD/urunler/9786051859125.jpg',
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

  return (
    <Container className='mt-5'>


      <Row >
        <Col className='col-xl-3 border
        p-3 mt-3'>

          <Container>
            <h5 className='mt-3'>Kitap</h5>
            <div className='bg-secondary p-2 text-white'>
              KATEGORİLER
            </div>

            <hr />
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link eventKey="link-1"><span> + </span>Edebiyat</Nav.Link>
              <Nav.Link eventKey="link-2"><span> + </span>Eğitim</Nav.Link>
              <Nav.Link eventKey="link-1"><span> + </span>Bilişim & Bilgisayar</Nav.Link>
              <Nav.Link eventKey="link-2"><span> + </span>Çocuk & Gençlik</Nav.Link>
              <Nav.Link eventKey="link-2"><span> + </span>Siyaset - Politika</Nav.Link>
              <Nav.Link eventKey="link-1"><span> + </span>İnsan ve Toplum</Nav.Link>
              <Nav.Link eventKey="link-2"><span> + </span>Tarih</Nav.Link>
              <Nav.Link eventKey="link-1"><span> + </span>Akademik</Nav.Link>
              <Nav.Link eventKey="link-2"><span> + </span>Bilim</Nav.Link>
              <Nav.Link eventKey="link-1"><span> + </span>Felsefe</Nav.Link>
              <Nav.Link eventKey="link-2"><span> + </span>Hukuk</Nav.Link>
            </Nav>
          </Container>

        </Col>
        <Col className='col-xl-9'>
          <img src="https://img1-kidega.mncdn.com/UPLOAD/BANNER/catImage/KitapSayfas%C4%B1%C3%9CstBar.png" alt="" className='img-fluid p-3' />
          <Row>
            <h3 className='p-2 border-start border-5 border-warning mx-3'>Yeni Çıkan Kitaplar</h3>
            {Books.map((Books) => (
              <Col className='col-xl-3 col-6 my-2 '>
                <div className='card-img  '>
                  <img
                    className=" img-fluid  rounded-4 d-block mx-auto"
                    src={Books.imageUrl}

                    style={{ width: '100% ', height: '250px', objectFit: 'contain' }}

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
