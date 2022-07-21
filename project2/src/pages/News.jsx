import React, { useState, useEffect } from 'react';
import {
    useNavigate,
} from "react-router-dom";
import sty from './news.module.css';
import { useTranslation } from 'react-i18next';

export default function News() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <div className={sty.box}>
            <div className={sty.center}>
                <div className={sty.centerItem}>
                    {t("n1")}
                </div>
                <div className={sty.centerItem}>
                    {t("n2")}
                </div>
                <div className={sty.centerItem}>
                    {t("n3")}
                </div>
                <div className={sty.centerItem}>
                    {t("n4")}
                </div>
            </div>


        </div>
    );
}
