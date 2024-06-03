// react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
// Context
import { Context } from "./context/Context";
// Img
import logo from './images/navbar-img/img.png'
import img from './images/hero-img/img.png'
// Icon
import {AiOutlineClose} from 'react-icons/ai'
// ReactHook
import { useEffect, useState } from "react";
// GridLoader
import GridLoader from "react-spinners/GridLoader";
// Text.js
import Text from "./language/Text";


function App() {
  const {product, developers, beta, pricing, start, sign, your,pass, loginn, database, authen, storage, functionn, coming, support, resourse, cases, system, terms, docum, refer, guides, comp, blog, open, law, store, an, withh, start1, inter, integ, light, thin, sleek, objec, drag, file, column, list, multi, pat, any, out, prof, upda, creat, manag, dep, integ1, lev, store1, expore, pub, pub1, authe, simpl, built,fasts, integ2, serve, auoto, resizes, file1, file2, file3, file4, file5, buiders} = Text;

  const [langu, setLangu] = useState(0);

  useEffect(()=>{
    const getLangu = JSON.parse(localStorage.getItem('langu'))

    getLangu && setLangu(getLangu)

  }, [])

  useEffect(()=>{
    localStorage.setItem('langu', JSON.stringify(langu))
  }, [langu])

  const [auth, setAuth] = useState(false);
  const currentLogin = 'Darker'
  const currentPassword = 'darker689'


  const [dark, setDark] = useState(false);

  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    },3000)
  },[])
  return (
    <div className={dark ? "body body_active" : "body"}>
      {
        loading ? <div className="loading"><GridLoader  color={'#24B47E'} loading={loading}  size={50} /></div> :
        <Context.Provider value={{logo, img, AiOutlineClose, dark, setDark,auth, setAuth, currentLogin, currentPassword, langu, setLangu, product, developers,beta, pricing, start, sign, your, pass, loginn, database, authen, storage, functionn, coming, support, resourse, cases, system, terms, docum, refer, guides, comp, blog, open, law, store, an, withh, start1, inter, integ, light, thin, sleek, objec, drag, file, column, list, multi, pat, any, out, prof, upda, creat, manag, dep, integ1, lev, store1, expore, pub, pub1, authe, simpl, built, fasts, integ2, serve, auoto, resizes, file1, file2, file3, file4, file5, buiders}}>
          <Router>
            <Navbar/>
            <Routes>
              {
                auth ? 
                <>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                </>:
                <>
                  <Route path="*" element={<Login/>} />
                </>
              }
            </Routes>
            <Footer/>
          </Router>
        </Context.Provider>
      }
    </div>
  );
}

export default App;
