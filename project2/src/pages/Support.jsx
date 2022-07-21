import React, { useState, useEffect } from 'react';
import {
    useNavigate,
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import sty from './support.module.css'

export default function Shop() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <div className={sty.box}>
            <div className={sty.tit}>
                {t('name')}
            </div>
            <div className={sty.inputBox}>
                <input type="text" placeholder={t('p')} />
            </div>
            <div className={sty.center}>
                <div className={sty.centerItem}>
                    {t('p1')}
                </div>
                <div className={sty.centerItem}>
                    {t('p2')}
                </div>
                <div className={sty.centerItem}>
                    {t('p3')}
                </div>
                <div className={sty.centerItem}>
                    {t('p4')}
                </div>

            </div>



        </div>
    );
}
