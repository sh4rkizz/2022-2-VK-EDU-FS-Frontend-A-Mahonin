import './App.css'

import React, {Component} from 'react'
import {Route, Routes} from 'react-router-dom'

import {PageChat, PageEditProfile, PageProfile, PageChatList, PageNotFound, PageSettings, LoginPage} from './Pages'


export default class App extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<PageChatList/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/settings' element={<PageSettings/>}/>
                <Route path='/chat' element={<PageChat/>}/>
                <Route path='/profile' element={<PageProfile/>}/>
                <Route path='/edit_profile' element={<PageEditProfile/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        )
    }
}
