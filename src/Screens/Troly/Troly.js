import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DataL from '../../data/dataMen'
import DataW from '../../data/dataWomen'
import './Troly.css'
function findL (id, cat) {
  let data = DataL.find((item) => item.id === id && item.cat === cat)
  return data
}

function findW (id, cat) {
  let data = DataW.find((item) => item.id === id && item.cat === cat)
  return data
}

function Troly (props) {
  let dataCowo = findL(props.location.id, props.location.category)
  let dataCewe = findW(props.location.id, props.location.category)
  console.log(props.location.id)
  let dataReal = dataCowo || dataCewe
  let harga = dataReal.price	
  let viewHarga = String(harga)
  let hrg = `Rp. ${viewHarga.substr(0, 3)}.${viewHarga.substring(3, 6)}`
  function totalHarga () {
    harga = Number(document.getElementById('qty').value) * dataReal.price
    harga = String(harga).slice('')
    let no = 0
    let a = ''

    for (let i = harga.length; i > 0; i--) {
      if (i !== harga.length) {
        if ((i) % 3 === 0) {
          a += '.'
        }
      }
      a += harga[no]
      no++
    }

    console.log(a)
    hrg = a
    a = `Rp. ${a}`
    document.getElementById('total').innerHTML = a
    document.getElementById('tot').innerHTML = ': ' + a
    document.getElementById('bayar').innerHTML = ': ' + a
  }


  return (
    <div style={{ width: '140%' }}>
      <ul
        style={{
          listStyleType: 'none',
          float: 'left',
          paddingLeft: '120px',
          paddingTop: '80px',
          width: '35%'
        }}
      >
        <div style={{ backgroundColor: 'grey' }}>
          <li style={{ padding: '12px', fontSize: '13px' }}>
            <b>
              {dataReal.brand}
              <label style={{ float: 'right' }}>Estimasi Biaya Pengiriman: gratis </label>
            </b>
          </li>
        </div>
        <li style={{ paddingTop: '10px' }}>{dataReal.brand}</li>
        <li style={{ paddingTop: '10px' }}>
          {dataReal.type}<label style={{ float: 'right', color: 'red' }} id={'total'}>Rp. {viewHarga.substr(0, 3)}.{viewHarga.substring(3, 6)}</label>
        </li>
        <div style={{ paddingTop: '30px' }}>
          <img
            style={{ width: '15%', float: 'left' }}
            src={dataReal.image_url}
          />

          <li style={{ float: 'left', paddingLeft: '20px', paddingBottom: '20px', paddingRight: '200px'  }}>
            <label style={{ paddingRight: '125px' }}> Jumlah </label>
            <select id='qty' onChange={totalHarga}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
            <br />
          </li>
          <li style={{ float: 'left', paddingLeft: '20px', paddingBottom: '20px', paddingRight: '200px' }}>
            <label style={{ paddingRight: '125px' }}>Ukuran </label> SSSSS<br />
          </li>
          <li style={{ float: 'left', paddingLeft: '20px', paddingBottom: '20px'  }}>
            <label style={{ paddingRight: '125px' }}>Warna </label> Pelangi (no lgbt)
          </li>
        </div>
      </ul>
      <div style={{ float: 'left', 
listStyleType: 'none',
        float: 'left', 
paddingLeft: '130px',
        paddingTop: '80px',
        width: '20%' }}>
        <p className='size'>Total Pembayaran</p>
        <p className='detail'>Total <label style={{ paddingLeft: '100px' }} id='tot'>: Rp. {viewHarga.substr(0, 3)}.{viewHarga.substring(3, 6)}</label></p>
        <br />
        <p className='detail'>Pengiriman <label style={{ paddingLeft: '60px' }}>: Gratis</label></p>
        <br />
        <p className='detail'><b>Jumlah Total  <label style={{ paddingLeft: '45px' }} id='bayar'>: Rp. {viewHarga.substr(0, 3)}.{viewHarga.substring(3, 6)}</label></b></p>
        <br />
        <Link to ='/Checkout/process'><button className='pesan'>Lanjut Ke Checkout</button></Link>
        <br />
        <button className='wish'>Lanjut Belanja</button>
      </div>
    </div>
  )
}
export default Troly
