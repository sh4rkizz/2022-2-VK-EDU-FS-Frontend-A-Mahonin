import './App.css'

import React, {Component} from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'

import {PageChat, PageProfile, PageChatList, PageNotFound} from './pages'


export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path='/' element={<PageChatList/>}/>
                    <Route path='/chat' element={<PageChat/>}/>
                    <Route path='/profile' element={<PageProfile/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </HashRouter>
        )
    }
}
