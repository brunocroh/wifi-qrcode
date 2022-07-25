import NavBar from '../components/NavBar';
import useQRCode from '../hooks/useQRCode'

export default function Home() {

  const wifiQrcode = `WIFI:S:BRUNO PINHEIRO;T:WPA;P:js123456;H:false;;`

  const qrCode = useQRCode(wifiQrcode)
  console.log({ qrCode });
  return (
    <div className='relative flex flex-col w-full h-screen text-white bg-black bg-white'>
      <NavBar />
      <div className='flex items-center justify-center w-full h-64 bg-gray-400'>
        <div className='text-black'>
          teste
        </div>
      </div>
      <div className='flex flex-row h-full bg-black'>
        <div className='flex items-center justify-center flex-grow h-full p-10'>
          <div className='flex flex-col items-center justify-center p-16 bg-white border-2 rounded-lg'>
            <h1 className='text-4xl text-black'> Wifi com QRCode!</h1>
            <h2 className='text-sm text-center text-gray-400'> Acesse sua rede wifi, com o QRCode </h2>
            <div className='flex mt-5 mb-5'>
              <div className='p-1 text-white bg-black w-14'> 
                <span>SSID</span>
              </div>
              <input className='w-64 h-8 p-1 border border-l-0' placeholder='Wifi do Bruno' type="text" />
            </div>
            <div className='flex mb-5'>
              <div className='p-1 text-white bg-black w-14'> 
                <span>Senha</span>
              </div>
              <input className='w-64 h-8 p-1 border border-l-0' placeholder='********' type="password" />
            </div>
            <button className='w-[312px] bg-gradient-to-r from-green-400 to-blue-500 p-1 font-bold text-white'> Imprimir </button>
            <div className='flex items-center justify-center flex-grow'>
              <img className='rounded-xl' src={qrCode} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
