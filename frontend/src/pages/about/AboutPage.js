import React, {useEffect, useState} from "react";
import MainLayout from "../../layouts/MainLayout";
import Gallery from "../../components/gallery/Gallery";
import {useSelector} from "react-redux";
import { useParams } from "react-router-dom";

const AboutPage = () => {

  const { pages } = useSelector(state => state.site)

  const [page, setPage] = useState(null)

  let { doc } = useParams();

  useEffect(() => {
    pages.map(p => {
      if(doc && p.slug === `about/${doc}`){
        setPage(p)
      } else if (!doc && p.slug === 'about') {
        setPage(p)
      }
    })
  }, [doc, pages])

  const breadcrumbs = [
    {
      name: 'Главная',
      url: '/'
    },
    {
      name: 'О нас',
      url: doc? '/about' : ''
    },
    {
      name: doc? page?.name : '',
    },
  ]

  return (
    <MainLayout breadcrumbs={breadcrumbs} page={page}>
      {page && <div
        dangerouslySetInnerHTML={{__html: page?.description}}
      />}
      {!doc && <Gallery/>}
    </MainLayout>

  );
}

export default AboutPage