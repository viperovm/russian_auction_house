import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import Gallery from "../../components/gallery/Gallery";
import MainLayout from "../../layouts/MainLayout";

const HomePage = () => {

  const { pages } = useSelector(state => state.site)

  const [page, setPage] = useState(null)

  useEffect(() => {
    pages.map(p => {
      if(p.slug === 'about') {
        setPage(p)
      }
    })
  }, [pages])

  return (
    <MainLayout page={page}>
      {page && <div
        dangerouslySetInnerHTML={{__html: page?.description}}
      />}
      {<Gallery/>}
    </MainLayout>
  );
};

export default HomePage;