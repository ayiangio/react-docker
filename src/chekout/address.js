import React from 'react'
import {Link} from 'react-router-dom'
import '../chekout/address.css'

export default function address () {
  return (
    <div className='checkout'>
      <div className='logo'>
        <img src='https://marketing.co.id/wp-content/uploads/2017/11/Zalora-logo-black.png' className='zalora' alt='zalora' />
        <img src='https://static-id.zacdn.com/cms/cw22/996x57_LPDESKTOP_GRATISPENGIRIMANINDONESIA.jpg' className='ongkir' alt='ongkir' />
        <br />
      </div>
      <div className='header'>
        <p style={{ float: 'left' }}>ALAMAT PENGIRIMAN</p> <p className='pesan'>Cantumkan alamat untuk pengiriman pesanan kamu.</p>
      </div>
      <div className='header2'>
        <p style={{ marginLeft: '45%' }}>ALAMAT KAMU</p>
      </div>
      <div className='box'>
        <p>Arizal Arkan</p>
        <p>Karangtengah, Selomerto, Wonosobo</p>
        <p>Jawa Tengah</p>
        <p>Wonosobo</p>
        <br />
        <p>085717671899</p>
      </div>
      <br />
      <div className='add'>
        <p>+ Cantumkan alamat baru</p>
      </div>
      <br />
      <br />
      <div className='button'>
      <Link to='/Checkout/process/payment'> <button className='save'>SIMPAN & LANJUTKAN</button></Link>
      </div>
      <br />
      <br />
    </div>
  )
}
