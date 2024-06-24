import React, {useEffect, useState} from "react";
import MainLayout from "../../layouts/MainLayout";
import Gallery from "../../components/gallery/Gallery";
import {useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import Stream from "../../components/stream/Stream";

const StreamPage = () => {

  const { pages } = useSelector(state => state.site)

  const [page, setPage] = useState(null)


  useEffect(() => {
    pages.map(p => {
      if (p.slug === 'stream') {
        setPage(p)
      }
    })
  }, [pages])

  const breadcrumbs = [
    {
      name: 'Главная',
      url: '/'
    },
    {
      name: 'Трансляция'
    },
  ]

  return (
    <MainLayout breadcrumbs={breadcrumbs} page={page}>
      <Stream/>
      {page && <div
        dangerouslySetInnerHTML={{__html: page?.description}}
      />}
    </MainLayout>

  );
}

export default StreamPage