import { useState, useEffect } from 'react';
import QRCode from 'qrcode';

const useQRCode = (data) => {
  const [qrcode, setQrcode] = useState(null)

  useEffect(() => {

    const generateQrCode = async () => {
      const qr = await QRCode.toDataURL(data)
      setQrcode(qr)
    }

    generateQrCode()
  })

  return qrcode
}

export default useQRCode
