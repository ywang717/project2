import React, { useState, useEffect } from 'react';
import {
    useNavigate,
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import sty from './login.module.css';

export default function Shop() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <div className="box">

            <div className={sty.titBox}>
                {t('Login')}
                <div onClick={() => {
                    navigate('/')
                }} className={sty.home}>
                    {t('Home')}
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                padding: '50px',
                fontSize: 20
            }}>
                <div style={{
                    marginBottom: 20
                }}>
                    <input style={{
                        height: 40,
                        padding: '0 10px',
                        width: 200,
                        border: '1px solid'
                    }} type="text" placeholder={t('username')} />
                </div>
                <div style={{
                    marginBottom: 20
                }}>
                    <input style={{
                        height: 40, padding: '0 10px', width: 200, border: '1px solid'
                    }} type="text" placeholder={t('password')} />
                </div>
                <div style={{
                    textAlign: 'left',
                    width: 200,
                    margin: 'auto'
                }}>
                    <input type="checkbox" name="" id="me" />
                    <label style={{
                        fontSize: 14
                    }} htmlFor="me">{t('re')}</label>
                </div>
                <div style={{
                    marginBottom: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30
                }}>
                    <button style={{
                        width: 150,
                        paddingBottom: 5
                    }}>{t('go')}</button>
                </div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <a>{t('can')}</a>
                </div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <a onClick={() => {
                        navigate('/CreateAccount')
                    }}>{t('cc')}</a>
                </div>
            </div>


        </div>
    );
}
