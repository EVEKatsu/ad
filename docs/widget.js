(function(){

'use strict';

const AD_TAG = document.getElementsByClassName('evekatsu-ad')[0];
const AD_WIDTH = AD_TAG.dataset.width === undefined ? "640" : AD_TAG.dataset.width;
const AD_HEIGHT = AD_TAG.dataset.height === undefined ? "360" : AD_TAG.dataset.height;

AD_TAG.style.display = 'none';

const AD_LIST = [
    { "type": "banner", "src": "character/93658049.jpg", "href": "https://www.youtube.com/channel/UCsjRA_020N1meHdtVPzUYMg" },
    { "type": "banner", "src": "character/94097177.jpg", "href": "http://shel3.com/" },
    { "type": "banner", "src": "character/94570608.jpg", "href": "http://maytenth3100.hatenablog.com/" },
    { "type": "banner", "src": "character/95235307.jpg", "href": "https://twitter.com/Takuya_Gogiko/status/888991704748916738" },
    { "type": "banner", "src": "character/95249176.jpg", "href": "https://mrandmsevejp.wixsite.com/mr-and-ms-eve-jp" },
    { "type": "banner", "src": "character/96224663.jpg", "href": "https://katana-masen.com/" },

    { "type": "banner", "src": "corporation/98217414.jpg", "href": "https://clare55.tumblr.com/" },
    { "type": "banner", "src": "corporation/98418839.jpg", "href": "http://nacho.wp.xdomain.jp/" },
    { "type": "banner", "src": "corporation/98476559.jpg", "href": "https://c8n8o16.tumblr.com/" },

    { "type": "banner", "src": "alliance/98476559.jpg", "href": "https://blog.caladrius.info/" },
    { "type": "banner", "src": "alliance/99006138.jpg", "href": "https://samuraisouldout.wordpress.com/" },

    { "type": "youtube", "id": "bIyvehdJMHs" },
    { "type": "youtube", "id": "Bb93mcd20s4" },
    { "type": "youtube", "id": "cesolDt1FI4" }
];

const AD_FUNCTIONS = {
    "banner": function(kwargs) {
        var html = '<a href="' + kwargs["href"] + '" target="_blank">';
        html += '<img src="' + kwargs["src"] + '" width="' + AD_WIDTH + '" />';
        html += '</a>';
        createIFrame(html);
    },
    "youtube": function(kwargs) {
        var html =  '<iframe width="' + AD_WIDTH + '" height="' + AD_HEIGHT + '" src="https://www.youtube.com/embed/' + 
                    kwargs["id"] + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        var div = document.createElement('div');
        div.id = 'evekatsu-ad-widget';
        div.innerHTML = html;
        AD_TAG.parentNode.insertBefore(div, AD_TAG);
    }
};

const createIFrame = function(widget) {
    var iframe = document.createElement('iframe');
    iframe.scrolling = 'no';
    iframe.frameBorder = 0;
    iframe.marginWidth = 0;
    iframe.marginHeight = 0;
    iframe.width = '100%';
    iframe.height = '180px';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.id = 'evekatsu-ad-widget';
    
    AD_TAG.parentNode.insertBefore(iframe, AD_TAG);

    var doc = iframe.contentWindow.document;
    doc.open();
    doc.write(widget);
    doc.close();
};

var ad = AD_LIST[Math.floor(Math.random() * AD_LIST.length)];
AD_FUNCTIONS[ad["type"]](ad);

})();
