import React, {Component} from 'react';
import '../../Assets/footer.css'

export default class Footer extends Component{
    render() {
		return (
            <div style={{border:'2px solid',height:'450px',marginLeft:'5px',marginTop:'30px',marginRight:'2px',backgroundColor:'black'}}>
						<div><p 
						style={{color:'white',
										marginLeft:'100px',
										marginTop:'100px',
										fontSize:'40px',
										fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
										fontWeight:'lighter'				
										}}>Z A L O R A</p>
									<p style={{color:'white',marginLeft:'100px',marginRight:'900px',marginTop:'25px'}}>Sebagai Pusat Fashion Online di Asia, kami menciptakan kemungkinan-kemungkinan gaya tanpa batas dengan cara memperluas jangkauan produk, mulai dari produk internasional hingga produk lokal dambaan. Kami menjadikan Anda sebagai pusatnya. </p>
									<span style={{color:'white',color:'white',marginLeft:'100px',marginRight:'900px',fontWeight:'bold'}}>Bersama ZALORA, You Own Now.</span>
								
						</div>
						<div>
							<ul style={{listStyleType:'none', float :'left', paddingLeft: '450px', marginBlockStart:'-220px',color:'white'}}>
								<li style ={{paddingBottom: '30px', }}><b>LAYANAN</b></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none', color:'white',outline:'none'}}>Bantuan</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none',color:'white', outline:'none'}}>Cara pengembalian</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none',color:'white', outline:'none'}}>Product Index</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none',color:'white', outline:'none'}}>Promo Partner Kami</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none', color:'white',outline:'none'}}>Pembelanjaan Lebih Banyak</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none', color:'white',outline:'none'}}>Konfirmasi Transfer</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none', color:'white',outline:'none'}}>Hubungi Kami</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none',color:'white', outline:'none'}}>Cara Berjualan</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none',color:'white', outline:'none'}}>pengembalian Ongkir</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none',color:'white', outline:'none'}}>Status Order</a></li>
							</ul>
						</div>
						<div>
							<ul style={{listStyleType:'none', float :'left', paddingLeft: '50px', marginBlockStart:'-220px',color:'white'}}>
								<li style ={{paddingBottom: '30px', }}><b>TENTANG KAMI</b></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none', color:'white',outline:'none'}}>About Us</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none',color:'white', outline:'none'}}>Promosikan Brand Anda</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none',color:'white', outline:'none'}}>Pers/Media</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none',color:'white', outline:'none'}}>Karir</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none', color:'white',outline:'none'}}>Persyaratan & Ketentuan</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none', color:'white',outline:'none'}}>Kebijakan Privasi</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none',color:'white', outline:'none'}}>Affiliate Marketing</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none',color:'white', outline:'none'}}>Influencer Program</a></li>
								<li style ={{paddingBottom: '5px',}}><a href='/' style={{textDecoration :'none',color:'white', outline:'none'}}>THREAD by ZALORA</a></li>
							</ul>
						</div>
						<div><p style={{color:'white',
						marginLeft:'950px',
						marginBlockStart:'-220px',
						fontSize:'14px',
						fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
						fontWeight:'bolder'				
						}}>ANDA BARU DI ZALORA?</p>
						<p style={{color:'white',marginLeft:'950px',marginRight:'10px',marginTop:'25px'}}>Dapatkan <span style={{color:'yellow'}}>RP 75.000	VOUCHER</span> (ditambah dengan berita fashion dan peluncuran brand terbaru) hanya dengan berlangganan newsletter kami.</p>
						<p style={{color:'white',marginLeft:'950px',marginRight:'10px',marginTop:'25px'}}>Alamat email Kamu</p>
						<div>
							<input type='email' placeholder='someone@example.com' style={{color:'black',marginLeft:'950px',marginRight:'10px',marginTop:'25px',width:'25%',height:'30px'}}></input>
							<button style={{color:'white', backgroundColor:'black',marginTop:'20px',marginLeft:'75px',height:'50px',width:'150px'}}>WANITA</button>
							<button style={{color:'white', backgroundColor:'black',marginLeft:'20px',height:'50px',width:'150px'}}>PRIA</button>
						</div>
						</div>
			</div>
		);
	}
}