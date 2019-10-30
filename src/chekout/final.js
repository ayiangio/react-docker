import React from 'react'
import {Link} from 'react-router-dom'
import '../chekout/final.css'

export default function address () {
  return (
    <div className='checkout'>
      <div className='logo'>
        <img src='https://marketing.co.id/wp-content/uploads/2017/11/Zalora-logo-black.png' className='zalora' alt='zalora' />
        <img src='https://static-id.zacdn.com/cms/cw22/996x57_LPDESKTOP_GRATISPENGIRIMANINDONESIA.jpg' className='ongkir' alt='ongkir' />
        <br />
      </div>
      <div style={{textAlign:'center'}}>Pembayaran Selesai</div>      
      <div style={{textAlign:'center', paddingTop:'50px'}}>
       <Link to='/'> <button style={{backgroundColor:'black', color:'white',width:'130px', height:'30px'}}>LANJUT BELANJA</button></Link>
      </div>
    </div>
  )
}
