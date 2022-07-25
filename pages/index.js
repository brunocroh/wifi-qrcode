import { useReducer } from 'react'
import NavBar from '../components/NavBar';
import useQRCode from '../hooks/useQRCode'

export default function Home() {

  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({...state, ...newState}),
    { ssid: '', password: '' }
  )


  const qrCode = useQRCode(`WIFI:S:${inputValues.ssid};T:WPA;P:${inputValues.password};H:false;;`)

  const handleOnChange = (event) => {
    const { name, value } = event.target
    setInputValues({ [name]: value })
  }

  console.log({
    inputValues
  });

  return (
    <div className='relative flex flex-col w-full h-screen text-white bg-white'>
      <NavBar />
      <div className='flex items-center justify-center w-full bg-gray-400 h-80'>
        <div className='text-white'>
          Crie o QRCode para acessar sua rede wifi Fácil e Rápido!
        </div>
      </div>
      <div className='relative flex flex-row h-full bg-black'>
        <div className='flex items-center justify-center flex-grow h-full p-10'>
          <div className='absolute top-[-35px] flex justify-center items-center p-16 bg-white border-2 rounded-lg'>
            <div className='px-5 border-r-2'>
              <h1 className='text-4xl text-black'> Wifi com QRCode!</h1>
              <h2 className='text-sm text-center text-gray-400'> Acesse sua rede wifi, com o QRCode </h2>
              <div className='flex mt-5 mb-5'>
                <div className='p-1 text-white bg-black w-14'> 
                  <span>SSID</span>
                </div>
                <input
                  className='w-64 h-8 p-1 text-black border border-l-0'
                  placeholder='Wifi do Bruno'
                  name='ssid'
                  onChange={handleOnChange}
                  type='text'
                />
              </div>
              <div className='flex mb-5'>
                <div className='p-1 text-white bg-black w-14'> 
                  <span>Senha</span>
                </div>
                <input
                  className='w-64 h-8 p-1 text-black border border-l-0'
                  placeholder='********'
                  name='password'
                  onChange={handleOnChange}
                  type='password'
                />
              </div>
              <button className='w-[312px] bg-gradient-to-r from-green-400 to-blue-500 p-1 font-bold text-white'> Imprimir </button>
            </div>
            <div>
              <img className='rounded-xl' src={qrCode} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
