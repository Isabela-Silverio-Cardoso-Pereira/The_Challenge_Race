import React from 'react'
import { Card, CardContent, Grid} from '@material-ui/core';
import {Link } from "react-router-dom";
import QrReader from 'react-qr-reader';
import styled from "styled-components";
import { useState } from 'react';
import {motion} from 'framer-motion'



function Scan() {
    const NavUnlisted = styled.ul`
        text-decoration: none;
`;
    const linkStyle = {
        color: '#fff',
        textDecoration: "none",
}
    const [scanResultWebCam, setScanResultWebCam] =  useState('');

    const handleErrorWebCam = (error: any) => {
        console.log(error);
}
    const handleScanWebCam = (result: any) => {
        if (result){
            setScanResultWebCam(result);
    }
}



return <>
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
        <header className="wave">
        <div className="headline">
                <h1>Valide</h1>
                <div className="subtitle">
                    <span>Validando a sua pergunta</span>
                </div>
                
            </div>
        <div className="fInputTxt">
        
                <div className="central">
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <QrReader
                            delay={300}
                            style={{width: '100%'}}
                            onError={handleErrorWebCam}
                            onScan={handleScanWebCam}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
                </div>

            <div className="btnParent quizNext">
                <NavUnlisted>
                    <button className="btn-enter">
                        <Link style={linkStyle} to="/nextQuestion">NEXT</Link>
                    </button>
                </NavUnlisted>
            </div>
        </div>
        </header>
        <footer>
            <svg className="footerWave waveScan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#BF1E2E" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
        </footer>
    </motion.div>
</>
}
export default Scan