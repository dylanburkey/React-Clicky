import React from "react";


WebFontConfig = {
    custom: {
        families: ['Gugi', 'PT Serif'],
        urls: ['https://fonts.googleapis.com/css?family=Gugi|PT+Serif']
    },
    timeout: 2000,
    active: () =>
        sessionStorage.fonts = true;
}
export default WebFontConfig;