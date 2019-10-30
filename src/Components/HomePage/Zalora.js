import React, { Component } from 'react';
import Search from './Search';
import Profile from './Profile';
import Love from './Love';
import Troly from './Troly';
class headZalora extends Component {
	render() {
		return (
			<div style={{ backgroundColor: 'black',height: '75px',}}>
				<div style={{paddingTop: '15px',}}><a
					href="/"
					style={{
						marginBlockStart: '0px',
						fontSize: '35px',
						fontStyle: 'Soft Elegance',
						color: 'white',
                        paddingLeft: '10%',
                        textDecoration: 'none',
                        outline:'none',
                        fontWeight: 'lighter',float:'left'
					}}
				>
					Z A L O R A
				</a>
				<a
					href="/women"
					style={{
                        paddingLeft: '40px',
                        paddingTop: '10px',
						fontSize: '25px',
						color: 'white',
						textDecoration: 'none',
						fontStyle: 'Soft Elegance',
                        color: 'white',
                        outline:'none',
                        fontWeight: 'lighter',float:'left'
					}}
				>
					WANITA
				</a>
				<a href="/men"
					style={{
						paddingLeft: '20px',
						fontSize: '25px',
						paddingTop: '10px',
						paddingRight: '25px',
						fontStyle: 'Soft Elegance',
                        color: 'white',
                        textDecoration: 'none',
                        outline:'none',
                        fontWeight: 'lighter',float:'left'
					}}
				>
					PRIA
				</a>				
					<Search />				
                <a href="/profile" style={{
					textDecoration: 'none',
					outline:'none',float:'left'}}><Profile/></a>
					<a href="" style={{
						textDecoration: 'none',
						outline:'none',float:'left'}}> <Love/></a>
					<a href="#" style={{
                        outline:'none',}}><Troly/></a>
				</div>
				
			</div>
		);
	}
}
export default headZalora;
