import { useState } from "react";
import { t } from './../../assets/utils/index.js';

const startTime = localStorage.getItem('TIME');
if (!startTime) localStorage.setItem('TIME', Date.now());

function Counter() {
    const [diference, setDifference] = useState(Date.now() - localStorage.getItem('TIME'));

    const formatTime = (diference) => {
        const seconds = Math.floor(diference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const day = Math.floor(hours / 24);

        if (day >= 1) return t('Day', day);
        if (hours >= 1) return t('Hour', hours);
        if (minutes >= 1) return t('Minute', minutes);
        if (seconds >= 1) return t('Second', seconds);

        return t('Second', 0);;
    }
    return <span className="block mt-2">{formatTime(diference)}</span>
}

export default Counter;
