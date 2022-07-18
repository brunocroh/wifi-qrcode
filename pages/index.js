import NavBar from '../components/NavBar';
import useQRCode from '../hooks/useQRCode'

export default function Home() {

  const wifiQrcode = `WIFI:S:BRUNO PINHEIRO;T:WPA;P:js123456;H:false;;`

  const qrCode = useQRCode(wifiQrcode)
  console.log({ qrCode });
  return (
    <div className='relative w-full h-screen bg-white flex flex-col'>
      <NavBar />
      <div className='flex w-full h-44 justify-center items-center'>
        <div className='text-black'>
          teste
        </div>
      </div>
      <div className='flex flex-row h-full'>
        <div className='flex h-full flex-grow p-10 justify-center items-center'>
          <div className='flex flex-col justify-center items-center border-2 bg-white p-16 rounded-lg'>
            <h1 className='text-4xl text-black'> Wifi com QRCode!</h1>
            <h2 className='text-sm text-center text-gray-400'> Acesse sua rede wifi, com o QRCode </h2>
            <div className='flex mb-5 mt-5'>
              <div className='p-1 w-14 text-white bg-black'> 
                <span>SSID</span>
              </div>
              <input className='h-8 w-64 p-1 border border-l-0' placeholder='Wifi do Bruno' type="text" />
            </div>
            <div className='flex mb-5'>
              <div className='bg-black p-1 w-14 text-white'> 
                <span>Senha</span>
              </div>
              <input className='h-8 w-64 p-1 border border-l-0' placeholder='********' type="password" />
            </div>
            <button className='w-[312px] bg-gradient-to-r from-green-400 to-blue-500 p-1 font-bold text-white'> Imprimir </button>
          </div>
          <div className='flex-grow flex justify-center items-center'>
            <img className='rounded-xl' src={qrCode} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}
