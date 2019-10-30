import React, {Component} from 'react';

export default class Highlight extends Component{
    render() {
		return (
            <div style={{ marginLeft: '20px', marginRight: '25px' }}>
            <h1 style={{ textAlign: 'center',
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            fontSize: "40px"}}>Now Trendings</h1>
                <img
					src="https://static-id.zacdn.com/cms/cw27/620x420_DESKTOP_N2_RPLLPLEXTRA30VC.jpg"				
					style={{
						marginTop: '70px',
                        marginLeft: '100px',
					}}
                />
                <img 
                    src="https://static-id.zacdn.com/cms/cw27/360x420_DESKTOP_N1_CASUALFOOTWEARUNDER249K_WOMEN.jpg" 
                    style={{
                        marginTop: '70px',
                        marginLeft: '100px',
                        
                    }}
                />
                <img 
                    src="https://static-id.zacdn.com/cms/cw27/360x420_DESKTOP_N1_FASHIONBAGS70OFF_WOMEN.jpg" 
                    style={{
                        marginTop: '70px',
                        marginLeft: '100px',
                      
                    }}
                />
                <img 
                    src="https://static-id.zacdn.com/cms/cw27/620x420_DESKTOP_N2_SPORTS50OFF_WOMEN.jpg" 
                    style={{
                        marginTop: '70px',
                        marginLeft: '100px',
                       
                    }}
                />
                
				</div>
		);
	}
}