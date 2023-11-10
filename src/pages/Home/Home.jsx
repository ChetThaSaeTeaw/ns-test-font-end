import React from 'react';
import Row from 'react-bootstrap/Row';

// components
import TitleBox from '../../components/TitleBox/TitleBox';
import MenuCard from '../../components/cards/MenuCard/MenuCard';

// data
import { menuLists } from '../../assets/data/menuLists';


export default function Home() {
  return (
    <>
      <main className='container d-flex flex-column align-items-center px-2 py-3'>
        <>
          <TitleBox 
            title='Neversitup Test (Font-End)' 
            desc='Start on : Friday November 10, 2566 (20.00) , Finished in : Saturday, November 11, 2566 (20.00)' 
          />
        </>
        <Row>
          {menuLists.map((menu, index) => {
            return (
              <React.Fragment key={index}>
                <MenuCard data={menu} />
              </React.Fragment>
            )
          })}
        </Row>
      </main>
    </>
  )
}
