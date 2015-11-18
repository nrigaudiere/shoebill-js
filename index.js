
/**
 * ShoebillJS
 */

'use strict';

var Entities = require('html-entities').AllHtmlEntities;
var entities = new Entities();

function ShoebillJS() {
    this.meta = {};
}


/* Open Graph */
ShoebillJS.prototype.ogtitle = function(ogtitle) {
    this.meta['og:title'] = ogtitle;
};

ShoebillJS.prototype.ogtype = function(ogtype) {
    this.meta['og:type'] = ogtype;
};

ShoebillJS.prototype.ogurl = function(ogurl) {
    this.meta['og:url'] = ogurl;
};

ShoebillJS.prototype.ogdescription = function(ogdescription) {
    this.meta['og:description'] = ogdescription;
};

ShoebillJS.prototype.ogsitename = function(ogsitename) {
    this.meta['og:site_name'] = ogsitename;
};

ShoebillJS.prototype.ogdeterminer = function(ogdeterminer) {
    this.meta['og:determiner'] = ogdeterminer;
};

ShoebillJS.prototype.oglocale = function(oglocale) {
    this.meta['og:locale'] = oglocale;
};

ShoebillJS.prototype.oglocalealt = function(oglocalealt) {
    this.meta['og:locale:alternate'] = oglocalealt;
};

/* end Open Graph*/


/* Twitter Card */
ShoebillJS.prototype.twcard = function(twcard) {
    this.meta['twitter:card'] = twcard;
};

ShoebillJS.prototype.twsite = function(twsite) {
    this.meta['twitter:site'] = twsite;
};

ShoebillJS.prototype.twcreator = function(twcreator) {
    this.meta['twitter:creator'] = twcreator;
};

ShoebillJS.prototype.twtitle = function(twtitle) {
    this.meta['twitter:title'] = twtitle;
};

ShoebillJS.prototype.twdescription = function(twdescription) {
    this.meta['twitter:description'] = twdescription;
};

ShoebillJS.prototype.twimage = function(twimage) {
    this.meta['twitter:image'] = twimage;
};
/* end Twitter Card */

/**
 * @param {object|string} image 
 * @param {string} image.url
 * @param {string} image.secure_url
 * @param {string} image.type
 * @param {string} image.width
 * @param {string} image.height
 */
ShoebillJS.prototype.ogimage = function(image) {
    if (typeof image === 'string') {
        this.meta['og:image'] = image;
    } else {
        for (var prop in image) {
            if (image.hasOwnProperty(prop)) {
                this.meta[['og', 'image', prop].join(':')] = image[prop];
            }
        }

        if (image.url) {
            this.meta['og:image'] = image.url;
        }
    }
};

ShoebillJS.prototype.ogvideo = function(video) {
    if (typeof video === 'string') {
        this.meta['og:video'] = video;
    } else {
        for (var prop in video) {
            if (video.hasOwnProperty(prop)) {
                this.meta[['og', 'video', prop].join(':')] = video[prop];
            }
        }

        if (video.url) {
            this.meta['og:video'] = video.url;
        }
    }
};

ShoebillJS.prototype.ogaudio = function(audio) {
    if (typeof audio === 'string') {
        this.meta['og:audio'] = audio;
    } else {
        for (var prop in audio) {
            if (audio.hasOwnProperty(prop)) {
                this.meta[['og', 'audio', prop].join(':')] = audio[prop];
            }
        }

        if (audio.url) {
            this.meta['og:audio'] = audio.url;
        }
    }
};

/**
 * add app link
 * @param {object} meta
 * @param {string} meta.url
 * @param {string} meta.app_name (ios)
 * @param {string} meta.app_store_id (ios)
 * @param {string} meta.package (android)
 * @param {string} type `android`, `ios`
 */
ShoebillJS.prototype.app = function(meta, type) {
    for (var prop in meta) {
        if (meta.hasOwnProperty(prop)) {
            this.meta[['al', type, prop].join(':')] = meta[prop];
        }
    }
};

ShoebillJS.prototype.toHTML = function(delimiter) {
    var html = [];
    for (var name in this.meta) {
        if (this.meta.hasOwnProperty(name)) {
            html.push('<meta property="' + name + '" content="' + entities.encode('' + this.meta[name]) + '">');
        }
    }

    return html.join(delimiter || "\n");
};

module.exports = ShoebillJS;
