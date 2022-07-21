import React, { useState, useEffect } from 'react';
import {
    useNavigate,
} from "react-router-dom";
import a from '../img/a.jpg';

export default function Shop() {
    const navigate = useNavigate();
    return (
        <div className={sty.box}>
            <img style={{
                width: '100%'
            }} src={a} alt="" srcset="" />
        </div>
    );
}
