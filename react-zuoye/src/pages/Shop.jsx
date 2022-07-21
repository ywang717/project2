import React, { useState, useEffect } from 'react';
import {
    useNavigate,
} from "react-router-dom";
import sty from './shop.module.css'
import { useTranslation } from 'react-i18next';

export default function Shop() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <div className="box">
            <div className={sty.center}>
                <div className={sty.centerItem}>
                    {t('s1')}
                </div>
                <div className={sty.centerItem}>
                    {t('s2')}
                </div>
                <div className={sty.centerItem}>
                    {t('s3')}
                </div>
                <div className={sty.centerItem}>
                    {t('s4')}
                </div>
                <div className={sty.centerItem}>
                    {t('s5')}
                </div>
                <div className={sty.centerItem}>
                    {t('s6')}
                </div>
            </div>

        </div>
    );
}
