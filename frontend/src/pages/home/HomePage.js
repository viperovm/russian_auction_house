import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import Gallery from "../../components/gallery/Gallery";
import MainLayout from "../../layouts/MainLayout";
import Banner from "../../components/banner/Banner";

const HomePage = () => {

  const { pages } = useSelector(state => state.site)

  const [page, setPage] = useState(null)

  useEffect(() => {
    pages.map(p => {
      if(p.slug === '/') {
        setPage(p)
      }
    })
  }, [pages])

  return (
    <MainLayout page={page}>
      <Banner/>
      {page && <div
        dangerouslySetInnerHTML={{__html: page?.description}}
      />}
    </MainLayout>
  );
};

export default HomePage;