import React,{Component} from 'react';
import {  Link }  from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

class headCategory extends Component{
    render() {
		return (
            <div>
            <BrowserRouter>
            <Link to="/">WANITA </Link>
            <Link to="/">PRIA</Link>
            </BrowserRouter>
            </div>
		);
	}
}
export default headCategory;