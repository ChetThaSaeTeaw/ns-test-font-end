import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// components
import TitleBox from '../../components/TitleBox/TitleBox';

export default function FindTheOdd() {

    const [ inputOdd , setInputOdd ] = useState("");
    const navigate = useNavigate();

    // let arr = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

    const findOddInt = (value) => {
        let count = 0;
        let arr = value.sort();
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                }
            };
            if (count % 2 !== 0) {
                return arr[i];
            };
        };
    };

    // console.log(findOddInt([...inputOdd]));

    return (
        <>
            <main className='container'>
                <main className='container d-flex flex-column align-items-center px-2 py-3'>
                    <TitleBox
                        title='Find the odd int'
                        desc='Find the odd int test.'
                    />
                    <Form className='mb-4' style={{ width: '330px' }}>
                        <Form.Group>
                            <Form.Label>Input</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Please Enter'
                                onChange={e => setInputOdd(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    <div className='my-3'>
                        {!inputOdd ? "-" :
                            findOddInt([...inputOdd])
                        }
                    </div>
                    <Button
                        variant='primary'
                        onClick={() => navigate('/')}
                    >
                        Back
                    </Button>
                </main>
            </main>
        </>
    );
};
