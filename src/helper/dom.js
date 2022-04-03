/*
 * Copyright (c) 2021 PT Telkom Indonesia Tbk
 * 
 * This software is licensed to PT Telkom Indonesia Tbk
 * 
 * All use of the material herein is restricted All rights are reserved
 * You may not use, copy, duplicate, modify, merge, publish, distribute, sublicense the Software without prior written agreement
 */
const addElementOnHead = (el, attr) => {
    let nameTag = document.createElement(el);

    if(typeof attr === 'object') {
        for(let key of Object.keys(attr)) {
            nameTag.setAttribute(key, attr[key]);
        }
    }

    document.head.appendChild(nameTag);
}

export {
    addElementOnHead
}