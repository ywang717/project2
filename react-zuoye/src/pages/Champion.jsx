import React, { useState, useEffect } from 'react';
import sty from './champion.module.css';
import {
    useNavigate,
} from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Home() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <div className={sty.box}>

            <div className={sty.inputBox}>
                <input type="text" placeholder={t('search')} />
            </div>

            <div className={sty.centerBox}>
                {t('championDesc')}
            </div>

        </div>
    );
}
