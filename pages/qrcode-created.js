import Image from 'next/image'
import useQRCode from '../hooks/useQRCode'

export default function Home() {
  const wifiQrcode = `WIFI:S:BRUNO PINHEIRO;T:WPA;P:js123456;H:false;;`

  const qrCode = useQRCode(wifiQrcode)
  console.log({ qrCode })
  return (
    <div className={styles.container}>
      <Image src={qrCode} alt="qrCode" />
    </div>
  )
}
