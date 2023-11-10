import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// components
import TitleBox from '../../components/TitleBox/TitleBox';

export default function Permutations() {

  const [ arr , setArr ] = useState('');
  const navigate = useNavigate();

  const permutationsTest = (value) => {
    if (value.length === 0) {
      return ['0']
    } else if (value.length === 1) {
      return [value];
    } else if (value.length === 2) {
      return [value, value[1] + value[0]];
    } else {
      return (
        value.split('').reduce((acc, letter, i) =>
          acc.concat(permutationsTest(value.slice(0, i) + value.slice(i + 1)).map(val => letter + val)),
          [])
      );
    };
  };

  // console.log(permutationsTest(arr));

  return (
    <>
      <main className='container d-flex flex-column align-items-center px-2 py-3 w-100'>
        <TitleBox
          title='Permutations'
          desc='permutations test.'
        />
        <Form className='mb-4' style={{ width : '330px' }}>
          <Form.Group>
            <Form.Label>Input</Form.Label>
            <Form.Control 
              type='text' 
              placeholder='Please Enter' 
              onChange={e => setArr(e.target.value)}
            />
          </Form.Group>
        </Form>
        <div className='mb-3'>
          {!arr ?  "-" : 
            permutationsTest(arr).join(' , ')
          }
        </div>
        <Button
          variant='primary'
          onClick={() => navigate('/')}
        >
          Back
        </Button>
      </main>
    </>
  );
}
