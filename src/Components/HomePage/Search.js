import React, { Component } from 'react';
class Search extends Component {
	render() {
		return (
			<input				
				placeholder="Cari produk, tren dan merek"
				style={{
					width: '480px',
					height: '30px',
					float:'left',
					marginRight: '10px',
					paddingTop:'5px'
				}}
			/>
		);
	}
}
export default Search;
