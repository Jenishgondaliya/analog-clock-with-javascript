setInterval(() => {
    d = new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();

    hrotattion= 30*htime + mtime/2 + stime/120;
    mrotattion= 6*mtime+stime/10;
    srotattion= 6*stime;
    hour.style.transform=`rotate(${hrotattion}deg)`;
    minute.style.transform=`rotate(${mrotattion}deg)`;
    second.style.transform=`rotate(${srotattion}deg)`;
    
}, 1000);