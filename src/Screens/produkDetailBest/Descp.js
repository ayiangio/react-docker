import React from 'react'
import './Descp.css'
import Data from '../../data/dataBestseller'

export default function Desc (props) {
  let data = Data.find((item) => props.id === item.id)
  let price = String(data.price)
  console.log(data)
  return (
    <div className='desc'>
      <div className='brand'>
        <p>{data.brand}</p>
        <p className='type'>{data.type}</p>
      </div>
      <div className='material'>
        <p className='price' >Rp. {price.substr(0, 3)}.{price.substring(3, 6)}</p>
        <br />
        <p>{data.material_1}</p>
        <p>{data.material_2}</p>
        <p>{data.material_3}</p>
        <p>{data.material_4}</p>
        <p>{data.material_5}</p>
        <br />
        <br />
      </div>

      <div className='refund'>
        <p>Pengiriman Nominal Tertentu <button className='send'>Gratis*</button></p>
        <p>30 HARI PENGEMBALIAN <button className='send'>Gratis*</button></p>
        <p>CASH ON DELIVERY <button className='send'>Tersedia*</button></p>
        <br />
      </div>

      <div className='seller'>
        <p>DIJUAL OLEH <i>{data.store}</i></p>
        <br />
      </div>

      <div className='diliver'>
        <p>Pengiriman dari: <button className='send'>Luar Negeri</button></p>
        <p>Total pemesanan produk luar negeri <br /> di atas  Rp 1,000,000 dikenakan biaya tambahan</p>
        <br />
      </div>
      <div className='time'>
        <p>ESTIMASI PENGIRIMAN</p>
        <i>Jabodetabek 5-7 hari kerja, luar </i>
        <br />
        <i>Jabodetabek 7-12 hari kerja</i>
        <br />
        <i><b>Produk ini dikirim terpisah</b></i>
        <br />
        <br />
      </div>

      <div className='check'>
        <p>CEK ESTIMASI PENGIRIMAN</p>
        <br />
        <input type='text' id='search' placeholder='Masukan kota di sini' />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}
