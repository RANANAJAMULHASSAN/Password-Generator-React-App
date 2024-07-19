import React, { useState } from 'react'
import './main.css';
import { UC, LC, NU, SB } from './data/Charset';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  let [upperCase, setUpperCase] = useState(false)
  let [LowerCase, setLowerCase] = useState(false)
  let [number, setNumber] = useState(false)
  let [Symbols, setSymbols] = useState(false)
  let [passwordlen, setPasswordlen] = useState(10)
  let [fpass, setFpass] = useState("")
  let CreatePassword = () => {
    let finalPass = ""
    let charSet = ""
    if (upperCase || LowerCase || number || Symbols) {
      if (upperCase) charSet += UC;
      if (LowerCase) charSet += LC;
      if (number) charSet += NU;
      if (Symbols) charSet += SB;
      for (let i = 0; i < passwordlen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length))
        setFpass(finalPass)
      }

    }
    else {
      toast.warn("Please check atleast one Checkbox!",{
        theme: "dark",
      });
    }
  }
  let copyPass = () => {
    navigator.clipboard.writeText(fpass)
    if(fpass){

      toast.success("Password copy Successfully!",{
        theme: "dark",
      });
    }
  }
  return (
    <>
      <div className="container">
        <div className="box">
          <h2>Password Generator</h2>
          <div className="passinput">
            <input type="text" value={fpass} readOnly /><button onClick={copyPass} className='btn-copy'>Copy</button>
          </div>
          <div className="passwordlength passlength">
            <h3>Password length</h3>
            <input type="number" max={20} min={10} value={passwordlen} onChange={(event) => setPasswordlen(event.target.value)} />
          </div>
          <div className="passwordlength">
            <h3>Include Upper letters</h3>
            <input type="checkbox" checked={upperCase} onChange={() => setUpperCase(!upperCase)} />
          </div>
          <div className="passwordlength">
            <h3>Include Lower letters</h3>
            <input type="checkbox" checked={LowerCase} onChange={() => setLowerCase(!LowerCase)} />
          </div>
          <div className="passwordlength">
            <h3>Include Number</h3>
            <input type="checkbox" checked={number} onChange={() => setNumber(!number)} />
          </div>
          <div className="passwordlength">
            <h3>Include Symbols</h3>
            <input type="checkbox" checked={Symbols} onChange={() => setSymbols(!Symbols)} />
          </div>
          <button className='btn' onClick={CreatePassword}>Generate Password</button>
        </div>

      </div>
      <ToastContainer 
      position="top-center"
      />
    </>
  )
}
