import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function MenuCard({ data }) {
    return (
        <Col 
            lg={4}
            md={6} 
            sm={12}
            className='my-3'
        >
            <Card
                style={{ width: '345px' }}
                className='p-2'
            >
                <Link 
                    to={data.linkTo}
                    className='d-flex flex-column align-items-center justify-content-center text-decoration-none'
                >
                    <Card.Img
                        variant='top'
                        src='https://img.blognone.com/logo/prod/118x118/logo/neversitup-co-ltd.jpg'
                        style={{ width : '90px' }}
                    />
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}
