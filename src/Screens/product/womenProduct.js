import React from 'react'
import { Link } from 'react-router-dom'
import '../../Assets/product.css'
import Data from '../../data/dataWomen'
import footer from '../../Components/HomePage/footer'


function listWomen() {
    let data = Data
    console.log(data)

    return (
        <div>
            <div className="list">
                <div className="list-item">
                    {
                        data.map(
                            item => {
                                return (
                                    <Link to={`/women/detail/${item.id}`}>
                                        <div className="item" id="items" productid={item.id}>
                                            <img src={item.image_url} alt="gambar" />
                                            <div>
                                                <p className="barang">{item.productName}</p>
                                                <p className="harga">{item.productPrice}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        )
                    }
                </div>
            </div>
            <div className="sidebar">
                <h4 style={{ textAlign: 'center' }}>KATEGORI</h4>
                <ul style={{ listStyleType: 'none', }}>
                    <li style={{ paddingTop: '40px' }}>
                        <a href='/women/pakaian' style={{ textDecoration: 'none', color: 'black', outline: 'none' }}>Pakaian</a>
                    </li>

                    <li style={{ paddingTop: '20px' }}>
                        <a href='/women/sepatu' style={{ textDecoration: 'none', color: 'black', outline: 'none' }}>Sepatu</a>
                    </li>

                    <li style={{ paddingTop: '20px' }}>
                        <a href='#' style={{ textDecoration: 'none', color: 'black', outline: 'none' }}>Tas</a>
                    </li>
                    <li style={{ paddingTop: '20px' }}>
                        <a href='#' style={{ textDecoration: 'none', color: 'black', outline: 'none' }}>Celana</a>
                    </li>
                    <li style={{ paddingTop: '20px' }}>
                        <a href='#' style={{ textDecoration: 'none', color: 'black', outline: 'none' }}>Jam</a>
                    </li>
                    <li style={{ paddingTop: '20px' }}>
                        <a href='#' style={{ textDecoration: 'none', color: 'black', outline: 'none' }}>Assesoris</a>
                    </li>
                    <li style={{ paddingTop: '20px' }}>
                        <a href='#' style={{ textDecoration: 'none', color: 'black', outline: 'none' }}>Batik</a>
                    </li>
                </ul>   
            </div>
            <footer/>
        </div>
    )
}


export default listWomen
