import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

// components
import TitleBox from '../../components/TitleBox/TitleBox';

const data = [
    { id : 1 , title : 'Please Enter' , value : ''}, // should return 0
    { id : 2 , title : [':)', ';(', ';}', ':-D'] , value : [':)', ';(', ';}', ':-D']}, // should return 2
    { id : 3 , title : [';D', ':-(', ':-)', ';~)'] , value : [';D', ':-(', ':-)', ';~)']}, // should return 3
    { id : 4 , title : [';]', ':[', ';*', ':$', ';-D'] , value : [';]', ':[', ';*', ':$', ';-D']}, // should return 1
];

export default function CountSmileys() {

    const [ smiley , setSmiley ] = useState(0);
    const navigate = useNavigate();

    const countSmileys = (arr) => {
        const smileys = [":)", ";)", ":-)", ";-)", ";~)", ":~)", ":D", ";D", ":~D", ";-D", ":-D", ";~D"];
        let empty = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < smileys.length; j++) {
                if (arr[i] === smileys[j]) {
                    empty++;
                };
            };
        };
        return empty;
    };

    // console.log(countSmileys(data[3].value));

    return (
        <>
            <main className='container d-flex flex-column align-items-center px-2 py-3'>
                <TitleBox
                    title='Count the smiley faces'
                    desc='Count the smiley faces.'
                />
                <Form className='mb-4' style={{ width: '330px' }}>
                    <Form.Group>
                        <Form.Label>Select</Form.Label>
                        <Form.Select  onChange={e => setSmiley(e.target.value)}>
                            {data.map((item , index) => {
                                return (
                                    <option 
                                        key={index} 
                                        value={index}
                                    >
                                        {item.title}
                                    </option>
                                )
                            })}
                        </Form.Select>
                    </Form.Group>
                </Form>
                <div className='my-3'>
                  {!smiley ? '-' :
                    <p>Result : <strong>{countSmileys(data[smiley].value)}</strong></p>
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
};
