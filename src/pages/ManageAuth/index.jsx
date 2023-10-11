import React, { Fragment } from 'react'
import {Body, Footer, Header} from './components'
import {useNavigation} from './hooks'
import {studentService} from '@services'

export const ManageAuth = () => {

    const {screen, setScreen} = useNavigation()

  return (
    <Fragment>
        <Header screen={screen}/>
        <Body/>
        <Footer/>
    </Fragment>
  )
}
