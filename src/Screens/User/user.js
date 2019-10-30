import React, { Component } from 'react';
class User extends Component {
	render() {
		return (
			<div>
			<ul style={{listStyleType:'none', float :'left', paddingLeft: '120px', paddingTop: '80px',}}>
				<li style ={{paddingBottom: '30px', }}><b>Akun Saya</b></li>
				<li style ={{paddingBottom: '20px',}}><a href='/profile/akun' style={{textDecoration :'none', color:'black',outline:'none'}}>Akun saya</a></li>
				<li style ={{paddingBottom: '20px',}}><a href='/profile/maintanance' style={{textDecoration :'none', color:'black',outline:'none'}}>Wallet</a></li>
				<li style ={{paddingBottom: '20px',}}><a href='/profile/maintanance' style={{textDecoration :'none', color:'black',outline:'none'}}>ZNOW saya</a></li>
				<li style ={{paddingBottom: '20px',}}><a href='/profile/maintanance' style={{textDecoration :'none', color:'black',outline:'none'}}>Lacak Pesanan</a></li>
				<li style ={{paddingBottom: '20px',}}><a href='/profile/maintanance' style={{textDecoration :'none', color:'black',outline:'none'}}>Penukaran &amp; pengembalian</a></li>
			</ul>
			<ul style={{float :'left'}}></ul>
			</div>
		);
	}
}
export default User;
