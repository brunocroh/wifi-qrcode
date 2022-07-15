import Form from '../components/Form';
import useQRCode from '../hooks/useQRCode'

export default function Home() {

  const wifiQrcode = `WIFI:S:BRUNO PINHEIRO;T:WPA;P:js123456;H:false;;`

  const qrCode = useQRCode(wifiQrcode)
  console.log({ qrCode });
  return (
    <div className='container flex content-center justify-center w-full h-full bg-black'>
      <div>
        <h1 className=''> Crie um QRCode para acessar sua rede WIFI!</h1>
      </div>
      <div>
        <img src={qrCode} alt="qrCode"/>
      </div>
    </div>
  )
}
