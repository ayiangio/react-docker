import React, { Component } from 'react';

export default class Highlight extends Component {
    render() {
        return (
            <div style={{ marginLeft: '20px', marginRight: '25px' }}>
                <h1 style={{
                    textAlign: 'center',
                    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                    fontSize: "40px"
                }}>This Week's Highlight</h1>
                <img
                    src="https://static-id.zacdn.com/cms/cw27/360x420_DESKTOP_N1_ZALORALOVESLOCAL25VC_WOMEN.jpg"
                    style={{
                        marginTop: '70px',
                        marginLeft: '100px',
                        width: '370px',
                        height: '420px'
                    }}
                />
                <img
                    src="https://static-id.zacdn.com/cms/cw27/620x420_DESKTOP_N2_EOSSBLOUSETUNIKEXTRA25_WOMEN.jpg"
                    style={{
                        marginTop: '70px',
                        marginLeft: '100px',
                        width: '690px',
                        height: '420px'
                    }}
                />

            </div>
        );
    }
}