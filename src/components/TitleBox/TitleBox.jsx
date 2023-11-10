import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

export default function TitleBox({ title , desc }) {
  return (
    <>
        <h1>{title}</h1>
        <Link to='/'>
          <img
            src='https://img.blognone.com/logo/prod/118x118/logo/neversitup-co-ltd.jpg'
            alt='nerversitup-logo'
            className='my-4'
          />
        </Link>
        <Alert variant='success'>{desc}</Alert>
    </>
  )
}
