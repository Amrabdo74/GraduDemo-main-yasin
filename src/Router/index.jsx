import React,{useState} from 'react'
import {Navigate, Route, createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import RootLayout from '../pages/layout';
import Overview from '../pages';
import UserCharts from '../pages/usercharts';
import UsersProfile from '../pages/UsersProfile';
import UserProfile from '../pages/UserProfile';
import SignInLayout from '../pages/signIn/SignInLayout';
import { Protected } from '../components/Protected';
// import AuthService from '../components/Auth/authin';

const isAuthenticated = false;
const router = createBrowserRouter(createRoutesFromElements(
    
    <>
            <Route path={"/signIn"} element={<SignInLayout />}>
                
            </Route>
        <Route path={"/"} element={<RootLayout /> }>
            <Route index element={<Protected><Overview/></Protected>}></Route>
            <Route path="/usercharts" element={<UserCharts/>}></Route>
            <Route path="/usersprofile" element={<UsersProfile/>}></Route>
            <Route path='user-profile' element={<UserProfile/>}></Route>
        </Route>
        
    </>
));

export default router