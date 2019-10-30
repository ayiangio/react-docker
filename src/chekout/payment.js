import React from 'react'
import { Link } from 'react-router-dom'
import '../chekout/payment.css'

export default function address () {
  return (
    <div className='checkout'>
      <div className='logo'>
        <img src='https://marketing.co.id/wp-content/uploads/2017/11/Zalora-logo-black.png' className='zalora' alt='zalora' />
        <img src='https://static-id.zacdn.com/cms/cw22/996x57_LPDESKTOP_GRATISPENGIRIMANINDONESIA.jpg' className='ongkir' alt='ongkir' />
        <br />
      </div>
      <div className='header'>
        <p style={{ float: 'left' }}>METODE PEMBAYARAN</p> <p className='pesan'>Bank Transfer (Konfirmasi Manual)</p>
      </div>
      <div className='header2'>
        <p style={{ float: 'left' }}>Bayar Di Tempat</p> <p className='pesan'>Bank Transfer (Konfirmasi Manual)</p>
        <p className='pesan'>Bank Transfer - Virtual Account</p> <p className='pesan'>Kartu Kredit/Debit</p>
        <p className='gift'>Tambahkan Gif Card</p>
      </div>
      <div className='box'>
        <img src='https://static-id.zacdn.com/cms/checkout/logos-bank.png' alt='bank' className='bank' />
      </div>
      <div className='desc'>
        <p>Kami akan verifikasi pembayaran Anda max. 1x24 jam setelah Anda melakukan konfirmasi pembayaran</p>
        <br />
        <p style={{ marginLeft: '116px' }}>Transfer pembayaran ke nomor rekening BCA, Mandiri, BNI, atau BRI</p>
        <p style={{ marginLeft: '170px' }}>yang akan diberikan setelah Anda selesai berbelanja</p>
        <br />
      </div>
      <br />
      <div className='add'>
        <p>Tidak suka menunggu?</p>
      </div>
      <div>
        <p style={{ marginLeft: '190px' }}>Nikmati verifikasi pembayaran yang lebih cepat lewat opsi <b>Bank Transfer (Konfirmasi Otomatis)</b></p>
      </div>
      <br />
      <br />
      <div className='button'>
        <Link to='/Checkout/process/done' >  <button className='save'>LANJUTKAN KE TAHAP AKHIR</button></Link>
      </div>
      <br />
      <br />
    </div>
  )
}
