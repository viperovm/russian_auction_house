import React, {useEffect, useState} from "react";
import MainLayout from "../../layouts/MainLayout";
import Gallery from "../../components/gallery/Gallery";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Stream from "../../components/stream/Stream";
import {login, checkAuthenticated} from "../../store/actions/authActions";
import Input from "../../components/Inputs/Input";
import {streamAction} from "../../store/actions/siteActions";

const StreamPage = () => {

  const dispatch = useDispatch()

  const {user} = useSelector(state => state.auth)

  const {pages, stream} = useSelector(state => state.site)

  const [page, setPage] = useState(null)
  const [data, setData] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(data))
  }

  console.log(data)

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if(!user) {
      dispatch(checkAuthenticated())
    }
  }, [user])

  useEffect(() => {
    pages.map(p => {
      if (p.slug === 'stream') {
        setPage(p)
      }
    })
  }, [pages])

  useEffect(() => {
    if(!stream){
      dispatch(streamAction())
    }
  },[stream])

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
      <>
        {user
          ?
          <>
            {stream
              ?
              <>
                <h1>{stream?.name}</h1>
                <Stream/>
              </>
              :
              <>
                {page && <div className='stream-page-text'
                  dangerouslySetInnerHTML={{__html: page?.description}}
                />}
              </>}
          </>
          :
          <div className='login-wrapper'>
            <div className='login-form-body'>
              <h1>Вход</h1>
              <p>Авторизуйтесь для просмотра трансляци</p>
              <form onSubmit={submitHandler}>
                <Input type="email" name="email" label="Email" placeholder="Введите Ваш email" required={true}
                       data={data?.email}
                       handler={changeHandler}/>
                <Input type="password" name="password" label="Пароль" placeholder="Введите Ваш пароль"
                       required={true} data={data?.password}
                       handler={changeHandler}/>
                <input className="submit-button" type="submit" value="Войти"/>
              </form>
            </div>
          </div>
        }
      </>
    </MainLayout>

  );
}

export default StreamPage