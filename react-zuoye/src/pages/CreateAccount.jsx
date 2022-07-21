import React, { useState, useEffect } from 'react';
import {
    useNavigate,
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import sty from './createAccount.module.css';

export default function Shop() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <div className="box">

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '80%',
                margin: '30px auto 0'
            }}>
                <div style={{
                    width: 200
                }} className={sty.home}>
                    {t('name')}
                </div>
                <div onClick={() => {
                    navigate('/')
                }} className={sty.home}>
                    {t('Home')}
                </div>
            </div>


            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '80%',
                margin: '30px auto 0',

            }}>
                <div style={{
                    width: 400,
                    height: 80
                }} className={sty.home}>
                    {t('c1')}
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
                    }} type="text" placeholder={t('email')} />
                </div>
                <div style={{
                    marginBottom: 20
                }}>
                    <input style={{
                        height: 40, padding: '0 10px', width: 200, border: '1px solid'
                    }} type="text" placeholder={t('password')} />
                </div>
                <div style={{
                    marginBottom: 20
                }}>
                    <input style={{
                        height: 40, padding: '0 10px', width: 200, border: '1px solid'
                    }} type="text" placeholder={t('cp')} />
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
                    }}>{t('create')}</button>
                </div>
            </div>


        </div>
    );
}
