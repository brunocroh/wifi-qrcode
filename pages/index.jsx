import { useReducer } from 'react'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import useQRCode from '../hooks/useQRCode'

export default function Home() {
  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { ssid: '', password: '' }
  )

  const qrCode = useQRCode(
    `WIFI:S:${inputValues.ssid};T:WPA;P:${inputValues.password};H:false;;`
  )

  const handleOnChange = (event) => {
    const { name, value } = event.target
    setInputValues({ [name]: value })
  }

  return (
    <div className="relative flex flex-col w-full h-screen text-white bg-white">
      <NavBar />
      <div className="flex flex-col items-center justify-center w-full px-4 pt-16 h-96">
        <h1 className='text-4xl font-normal text-black'>
          Acesse seu Wifi com QR Code!
        </h1>
        <p className='text-black font-karla w-[80%] mt-6 mb-8 text-center'>
          O Jeito mais fácil, rápido e simples das pessoas conectarem na sua rede Wifi!
          Você pode baixar a imagem ou imprimir, não precisa mais ficar repetindo sua senha 😊
        </p>
      </div>
      <div className="relative flex flex-row h-full">
        <div className="flex items-center justify-center flex-grow h-full p-10 bg-gray-100">
          <div className="absolute top-[-35px] flex justify-center items-center p-16 bg-white border-2 rounded-lg shadow-md">
            <div className="px-5 border-r-2">
              <h1 className="text-4xl text-black"> Wifi com QRCode!</h1>
              <h2 className="text-sm text-center text-gray-400">
                {' '}
                Acesse sua rede wifi, com o QRCode{' '}
              </h2>
              <div className="flex mt-5 mb-5">
                <div className="p-1 text-white bg-black w-14">
                  <span>SSID</span>
                </div>
                <input
                  className="w-64 h-8 p-1 text-black border border-l-0"
                  placeholder="Wifi do Bruno"
                  name="ssid"
                  onChange={handleOnChange}
                  type="text"
                />
              </div>
              <div className="flex mb-5">
                <div className="p-1 text-white bg-black w-14">
                  <span>Senha</span>
                </div>
                <input
                  className="w-64 h-8 p-1 text-black border border-l-0"
                  placeholder="********"
                  name="password"
                  onChange={handleOnChange}
                  type="password"
                />
              </div>
              <button className="w-[312px] bg-gradient-to-r from-green-400 to-blue-500 p-1 font-bold text-white">
                {' '}
                Imprimir{' '}
              </button>
            </div>
            <div>
<<<<<<< HEAD
              <Image className="w-64 h-64 rounded-xl" src={qrCode} alt="" />
=======
              <img className="w-56" src={qrCode} alt="QR Code" />
>>>>>>> 6245ec96bf04e36c3f39535e615dc503056c6d84
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
