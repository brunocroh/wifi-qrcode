import Form from '../components/Form';
import useQRCode from '../hooks/useQRCode'

export default function Home() {

  const wifiQrcode = `WIFI:S:BRUNO PINHEIRO;T:WPA;P:js123456;H:false;;`

  const qrCode = useQRCode(wifiQrcode)
  console.log({ qrCode });
  return (
    <div className='container bg-black h-full w-full flex content-center justify-center'>
      <div>
      <Form />
    
      </div>
      <div>
        <img src={qrCode} alt="qrCode"/>
      </div>
    </div>
  )
}
