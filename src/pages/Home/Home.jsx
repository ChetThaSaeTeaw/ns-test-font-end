import './Home.scss';
import React from 'react';

// components
import SEO from '../../components/SEO/SEO';
import TitleBox from '../../components/TitleBox/TitleBox';
import MenuCard from '../../components/cards/MenuCard/MenuCard';

// data
import { menuLists } from '../../assets/data/menuLists';
import { seoLists } from '../../assets/data/seoLists';

export default function Home() {
  return (
    <>
      <SEO 
        title={seoLists[0].title}
        desc={seoLists[0].desc}
        favicon={seoLists[0].favicon}
      />
      <main className='container d-flex flex-column align-items-center px-2 py-3'>
        <>
          <TitleBox 
            title={seoLists[0].title}
            desc={seoLists[0].desc}
          />
        </>
        <div className='menu-cards-container'>
          {menuLists.map((menu, index) => {
            return (
              <React.Fragment key={index}>
                <MenuCard data={menu} />
              </React.Fragment>
            )
          })}
        </div>
      </main>
    </>
  )
}
