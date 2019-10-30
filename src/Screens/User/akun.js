import React, { Component } from 'react';
class Akun extends Component {
	render() {
		return (
			<div>
			<ul style={{listStyleType:'none', float :'left', paddingLeft: '120px', paddingTop: '80px',width:'50%'}}>
				<div style ={{backgroundColor:'grey', }}><li style ={{ padding: '12px', }}><b>Informasi Kontak</b></li></div>
				<li style={{paddingTop: '50px'}}><label style={{paddingRight: '150px',}}>Nama :</label> Admin</li>
				<li style={{paddingTop: '30px'}}><label style={{paddingRight: '148px',}}>E-mail : </label> Admin@mail.com</li>
				<li style={{paddingTop: '30px',paddingBottom: '30px',}}><label style={{paddingRight: '102px',}}>Tanggal Lahir :</label>32-13-1000SM</li>
				<li style={{paddingBottom: '50px'}}><label style={{paddingRight: '125px',}}>Password : </label> **********</li>
				<div style ={{backgroundColor:'grey', }}><li style ={{ padding: '12px', }}><b>Alamat Penagihan/Alamat Pengiriman</b></li></div>
				
			</ul>
			
			</div>
		);
	}
}
export default Akun;