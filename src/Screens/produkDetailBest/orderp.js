import React from 'react'
import './orderp.css'
import {Link} from 'react-router-dom'
export default function order (props) {
  return (
    <div className='order'>
      <p className='size'>PILIH UKURAN</p>
      <p className='detail'>Anda tidak yakin? Lihat Detail Ukuran</p>
      <br />
      <p className='much'>One size</p>
      <p className='slod'>Saat ini tersedia</p>
      <br />
      <Link to ={{pathname:'/Checkout',id:props.id ,category:props.cat}}><button className='pesan'>Pesan</button></Link>
      <br />
      <button className='wish'>TAMBAHKAN KE WISHLIST</button>
    </div>
  )
}
