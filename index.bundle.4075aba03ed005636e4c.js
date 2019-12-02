!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=10)}([function(t,e,r){t.exports=r(7)},function(t,e){function r(t,e,r,n,a,i,A){try{var o=t[i](A),s=o.value}catch(t){return void r(t)}o.done?e(s):Promise.resolve(s).then(n,a)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var A=t.apply(e,n);function o(t){r(A,a,i,o,s,"next",t)}function s(t){r(A,a,i,o,s,"throw",t)}o(void 0)})}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"d",function(){return a}),r.d(e,"b",function(){return i}),r.d(e,"c",function(){return A});var n="https://habitica.com/api/v3",a={DONE:"done",DOING:"doing"},i={ASSIGNED_TO_ME:"me",NONE:"none"},A={TRELLO_LOGO:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAACmAAAApgHdff84AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACRQTFRFAGbMA3a9A3e8Ane9A3e9GYPCR5rMa63Ud7PXvNfm4Onu7O/xNljIFwAAAAN0Uk5TBWHLjO1H6wAAAGRJREFUGNNjYFQ2hgIjAQZhYzgwZFBGcIwYjM1X794ZbDp7965iYwZjq927dxebA4nFQI41kG62ABKbacMxAxKTYRyTjI72YBgH4jiiOZZATjKMY1rR0eYM4yABVG+jBAhyUAEAulltP7yEQqgAAAAASUVORK5CYII=",HABITICA_LOGO:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAC0UExURUdwTAAAAEEjdUEjdUIzeDQvaQAA/0EidUEjdVMiiEQndkEjdUAidUEjdUIidkEjdUEidUAidUEidEEjdUEidUEjdkAjdUMic0EjdUEjdUEjdUEidUEjdUEjdUAjdUIkdEEidEAjdUEjdUEjdUAidUMidEEjd0EidUEidUEjdUEjdUIidkEkdUEjdEEjdT4ndkEjdUIidEIjdkEjdUQlekUlfEMkeEYnfUcngEopg0UnfEwqh08GzoYAAAAzdFJOUwABn9ADBQH9/gIKwq/7QJbLj1VD33ZwD/iKslvZ9UkvUL25pE0iKoPw5Zo2HHFnGMZ8ps6c3PwAAAF2SURBVBgZZcBVluMwEEDR57hsyaCQw8zQMFSSA73/fY3TZ/7mEvEBKf8T3npIxj/SSDKAhOFjCAkQiaR8ywChqn0HMskAqs5o3nkng5R8UIe4DYzbq5m/Bf/oQgTC8L709bYfUTxuxjkXBgkpJBHF3TgfFhWbQe100j+mQArkf5yvbR36FMGpHkgjoL8GqtF5oeqqrndWw5QM2PXyjHIQT9TVZqJWjb0dEBI6BWzu3lk1qlZVXZghJJz9DobeG+eM1YapY4GE3telt2bVre83tapq1bTJEOaxfh2A9Xx6UauqJvxAQDheL2WUkJ9nS7Wq6kKJAJGM096I8eIR1GrDPd8QXoTPIb/vS2O1Ya2vEICEapuzDU5VXcNPyQCE9+4HaeyNWhPCU+s2AqTkv9YIsTdW/W4zWoYVAgibFrlQBOd8D+jfViQRZJy6Y2Drl3rlZTDnW8bnotXpPkO4+SLejafhWhY/ASKOo86+9VLOWqf9fl+Wp78TOCsCfttvbQAAAABJRU5ErkJggg==",TRIVIAL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAANlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAR2LVAAAAEXRSTlMAFKIxCKvcF5kPOYV7ziAEc3trLr0AAACgSURBVBgZ7cFZisMwFEXBq1nykOTsf7ONMaE7E9hPkJ9WlYZhGL5mUp9GU5eZWT0iENVhBhbZRTZRZgubRVaRXZTRjd1NNhfuLjIoiV+p6KTieeSdTnCeV9XpoFZ5rzYdca18Uq86pFXeqU2HOc8z73RKSfyVik4ribtUZLKyW2UU2AVZZTZZZoFNkF0GsjpMQFCPTFaXiUl9Vg3DMPwbP7XEEQha8GZ+AAAAAElFTkSuQmCC",EASY:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAARVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADZo62CAAAAFnRSTlMAr8sx0UTtxksKeVG4ciDmKls5bOMQ1FHhSgAAAOJJREFUWMPtlcsSgjAQBEEgEMS39v9/qgexRElmrPJkVfq6PVubB6SqCoVCIcn4o3Lm7PJamZhcA6k0QKPzWpmA2g0glAbcCFqpwY0glSMPjvm8Vuq5WrsBMsqJJ6dcXinblhftkIorZdjwzmbVQindZw2g75ZxpXQ9aV4tpLLPFaHfP/JOyfRfrsEpw3qFn7volKF9q6XO0SmLU2636XvklMNcPOSvslYuc/WSb6CVGAAI4ms2yg6AnfofaCUGIMTKjZBXRjeAU2IwA1hlxD5NWonX6BoY5ebfxi+UQqFQ+FPuW6MsGdDOH+AAAAAASUVORK5CYII=",MEDIUM:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAKlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHrpZrAAAADXRSTlMAIKDgYEC/gBDwkM9Qsgnf8QAAAVxJREFUWMPdldkWgyAMBcWExC78/++2ttiDLBchb/W5mY6omWX5+8t7I0DEKBCCTUFCEKOATUF2gBgFLAryBYhRYFrBPQ7Aw82MryG5VmcaH0aU40OI+vgAojn/JtgUBo6hhhh8EDlidaYXYXVTr6Ie8zr5LWy37/xtm/2a1CZwKMwLRAU1rLRdwSLwUbAI7Ao2gbfCoEDxxm1b9yfpxRcWsKAVS/0F7NGW5wsNELTlqd8Aj0LDFzIkKDTUz5BHreMLJRTUOuqX8KilAAGoIO3cphuQuHGP1NyS+Q6uIdLxDFGrQI7IxxNEq0MpojZ+ILRdQoqSjtq/0TY9uclmr6NlFXE+5ioiuckCUbasQGTHfELUU3hCVB70PT+7CuL3L3dQwsBw44BaxgdKC9x5oJZRgeHWhbnWrkBUUBRjxgCGudauwEdBUYy5B2CYa6V+mQjVcnv2AU9jrv/wegGERSd0TQVf/QAAAABJRU5ErkJggg==",HARD:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAIVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAt9G3DAAAACnRSTlMAEPBAwIB/IKJwAyvMcQAAAYdJREFUWMPtV8uWhSAME1oE+/8fPL5wUGnKub2LWQzb0CRHoaTT1K6wTOZaAgBTDFZ9iAmBkiyCJEAkiVgWVg1dZAMtC6uGLrKBhoVdQxM5QGxh19BEDhBaODX6IhVEFk6NrkgoUlHS6qlqSHkyhPnC1sVdCuJmS5yDWt6nuJXfKd7lb4pX+S9Fv/xO0S2vFItWvzLkoz6zuiWu1zekaBhQLcR0fIYexfMrdihqeY+i9x8fFG35k4KVk9RQPMt3+Dpl+lG+GAihWSeoIozQgq4zAwMVzYiAgIETLbilMTBwoBkTEDCwo8Vq6wwMbGi2CAgYWNFiP21MsG3bBHn6X399ZecWYudBYiHXUSYRdl0mFrEswOtMIqYF2FBYxLIAWxqJmBZgU2URywJs69fDwh89LG1MGHna5gAi0tjj2lD0QsrI835SaBlnJGBsFO6IoyWcsZC1x4Q+xUjMu1LGm2IkaN5Cyp1iJOq+Mo4zbH8h7vsHDv/I4x66/GOfe/D0j77u4fuT8f8HqE0oB/XJcWkAAAAASUVORK5CYII=",CHECKED:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjBR4BLB+R2WA8AAACvklEQVRo3u2Yv09TURTHP632vTJojSZ1gKSUSIwO6mSMRhsXjcgkgwwEdyf9AyRgCaQGHFj4MWAcjXGRCGliYmICYWgEHdiMUBSQHwE1WITS61CEdx8FWuAdBt9ZX+79fN9955zvPQ/ccMON/z08B8D0cpKLlLLMCP2HDwBfShV3OcMSA2Tk8WU8YgyFQvGHl7J4DyHqSK7hFatMyuJLqLfgFWmGJPFBony14DPM8kBOQIBmJjT8PF34pPAmLUxZ8IoFujGl8H7amdPwM7RhyOE7mSFjwU/RSkAWv2rBfyNGUKoHm7Tb8OM0USKD9xCghTnt8JM0EpbCB2m2Zf4YUU5J4YuJanWvGOMx5TJ4LyHqGdfwSaKU45XBhzXLyaZeo9Th64b7r/CapFLPS3gTfoqYXOGFqLPhZ2iVajseim1+n2GBNgJydR/VMj/DPN1ylpPL75/JGe4e/N7Lfd7zgRind/2t/HTY/H6ap/nedh4yxwppUvQR2ZUEP13MapYzwROO5rt8hPTashRxbhTcLPfs99MW7Yu84WZBp2DSYcMniRbWdl6xbFn+kx5u5bncw7FNfj9KA6HCPuRlhjQJP3hNRR5bZP3+u5Z6X6inrNA88nGHBEtaAfVwe4dcyO33DbtzPINqBklpp9BLxTYS9t3vDWoY4Ldlu1/0bVkRjvi9SS39moRF4lzPIcExvze5Z5OQ4i1XbNs66vcmtQxoubDCOy6w8RfFcb83qWFQqwhFnPNrliri9wbVJLS+oIhzDkPO7w2qGF73hw0JJ3L4vUMDtkElI5oARS+9tq43T6dztx0fET7ZJChb6jk83/u5to0Ekfm+iKtbSBCa7z0U5TwFwfke/EQsNybh+T4bPioZXu8LDsz3h3Z4nmGUSY5wHMVHnvOCz6j9FJDP2xhc4iwGoySY3F+8G2644Qb8BSHeLEPgAmSrAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA1LTI5VDIzOjQ0OjMxKzAyOjAwhLix6wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNS0yOVQyMzo0NDozMSswMjowMPXlCVcAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC",NOTIFICATIONS:{BLACK:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHr/7WAAAAE3RSTlMA8KDPPzBgQMC/EJBwgLDgIFB/TeX9tgAAAQ9JREFUWMPtl1GzgiAYRBcIIUCt9v//1x6kshIHPm8vdziP6h7BWQYEADht2IzRDgthopApAEAwFGMCgIkHiIDjIRw0SdIn10jyeQiGJD0EeJI0IEkmiSCRJJFnIsB1waYgniuIOwJfUz7/vwXRVxB7E38r6E38A4Gt2RFsb+KuwJ4qsL2JvxX0Jh4QDBLBsAgUSWqJQJPknI/Kt9AaD7flwJ4H8n2GLrzxkwGYC9e3D6YfzACsqjJsjlRZ1Bp28kAYVflmOa/G1ZdfbwhX9WXIeXXd2B6KFVsZHpO0bR1bfqlW+aG1pdkgyL8ZRHlgzEVJKedH0VJ5oYWL7UD+zSDKP79DYXHWcImGNPGy98wd4OV99UW+D+wAAAAASUVORK5CYII=",WHITE:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEVHcEz///+flKJDAAAAAXRSTlMAQObYZgAAAH1JREFUKM/N0bENwyAUBuGzKFwyAqMwGh7NozACJQXiUoDkIlVSRHnV190vPaKqNvLCoCzMB+57MAAgf4tTtX6KP0n8YPwbXBAdkJXihLLeBDrJeh06SHoH7QStp95AarEDEHtqAJwjVwDCLDcAh167s3uUuZH3FFLfiA14AVTO7CnEdrzkAAAAAElFTkSuQmCC"},GOLD:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFcUExURUdwTPujIv+mIv+mI/+AAP+nAP2kIv+nI/+aIv+nI/+mIvmjIv+mIv+mIv+hG/+mIv+pIvehIf+mI/+mIv+mIP+lIv+kIv+nI/+mI/+mIv+mIv+lI/+mI/+lIP+dJ/+kIv+mI/+iH/+lIv+nI/+lJP+mI/ehIf+mIv+nI/+mI/+kI/+mIv+mI//Tkd6RH//Ukv+nI/+oI/6lI/+wJeWWH/+qJP/SkN2RH/+tJP7Rjv+nI/WfIfegIe6bIf+zJt2MAN+TJP/WlO2aIOOUHv/Ylt6OAN6SIt+SH+CTH96QGd6PEdyQHuCUIdOKG82HGdOYQP7Qi/O6bf/Ukc6SNOSZLPGdIf+mJv+jAM2FDPS9cOuZIP+9ZP+8Ys2OLO2mQ+WcNu2vWv2jFdWUNs6UOcmKI+SwZM6HHduhTuusVeOvYvG0Yf+nHu+rTd2QH9WMHNWcSduVLu69du6+dvG0ZaaQZ4IAAAAsdFJOUwD9lfICAf/7A/ru/uoeCc8O/oiQH8o+Tdv25eGCGAY49xSzJEfH/cKzoHNyipTLOAAAApZJREFUOMtVU2dz4jAUFBB6CyUQSO/JnZGrYnuMIbaxqckRIL0nF3JpV///zEk2dYfxB3afnt7TLgA2vAEAZrN78YVcbiG+l50FIOAFE5jxgqVkHvESYlkk8SifXALemTGPy7+GeMT4XQlFSbj8DOJDX+y/h/zaOo/8YVVoHWC0BDXsR/z62lARAJk873fpLaveKGM06lZNd/n5fMZRBEA0JAWLhlU3e7f/jo/fbntm3TKKQSmUJgoviM1JQQVa5t1Fu6NVKlqnfdEzIVSC0lwM0wGQLAWL8MC8b2t0YR+jQGvtj4YFi8HSIjki7WF9hmW+afR+YQBZ69w2LMPHeqL4Dm7er1vmvVYY8YUCff2uQlH38268vwgKtxp3Mqmnadr+0NdnFCfAWhhFZkEWMaplXmikXpZl+3N9dsoxChRVBmVJB6Hea5NS+Vf3udN5fnp8OKUoijNEgfTYklyt8g+aNJa/fX+tVF7PDznMU8xls+aStsA8ShyUjyv7tuDm5c/fF0fAMSfNagLNgxyrjAXd7s3Ref/QZ59wIkKFzQHPlODppt+fEnimW3R/q2rzyBaMWuxMXdJAyDganGBfcgekJsZ8PBcoyuj/tKdwxkyBzcGi5IJ29cBhivM5QziL2hyvmr46O2WoEUardh6rfK9hfkxTjD58LBAlzw3hxzvFjarxjBAOnjsAFolhqg2VYwhFfgynw+rQMF6w7FgOCgrH2OAUATqWW8Y0MW2EmFbEh16eYFzihiIxbSQ6tPUKtrVPr4li81MUP5uiWNN92NQr42Ck4yWGBKdWhbBaE1QcrlI8PRmtmHvVjt62omzb0Vt1x8a8ncKNVJ7leYllJZ5nF1IbYJJ34h/LJHfjHk98N5mJjeP/H2u0q0e5TrInAAAAAElFTkSuQmCC",EXP:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAD8UExURUdwTP+lHv+/QP+mI/+mIv+mI/+mI/+pAP/yAP+mIv+mIf+mIP+mIv+mIv+mI/+kG/+jDv+mIv+lE/+mIv+lHv+kF/+mI/+nIv+sJP+uJf+rJP+9Wv+sJf+4Tv+sNf+mJP+8WP/UlP/Tkf/Rjf/cqe6cJvekK//ox//erP+qMeCTIv+/Yv+kFP+6U//Hev+uJ/+2TP++XvujIfWfIP/Da//itv/CafymKv20S//Tlv/Wmu+cIP+yRt2PGPfIh//fsffOkO6hLf+uPP+zTP+xRv/HeOObOe6aFuiXIueWHeq4dvGkOu6YAPDJjvbQmO/JkN6MAPvWn/S/d+CWKhATkNUAAAAYdFJOUwD9BL1Kv/0CAUj9/8rBRv79w/xq/P3GaXKR1V0AAAGcSURBVDjLhZPpUsIwFIVTaVNatoJVm6RLTMu+i+DKDu677/8upliUAQL3R2Yy58x3k7sAsBoqkGV+iCMOkkl+CEMFaYzTOxBxELOsmBgRAiDcgYgDBZkmEiJUoNlHs0lGiOCAZm5OcyLEAZBtY+q3yxLW+GWLDlJNo8HaLRMpYMOhcughNqbMJ9TN4BOeUF2T5Sz2ag122qOO7uGsvGJZyCkbSbVb5nevHHKR8JCVWlpCWVO4bLoOOb8ulnqFfOcMQoQVLbKkFYwyuXKLUqcaFIeD8cv9TefM1BGOpbksJ7EFzQltt0nvqlTqfo5GX883+XzhAkILJ7XIMJv7zD/tFovDt1LAqnVCL8t6aJDDFDGMjnLTBmP+dRC8D3p1ShxXX6aIHtk0DG45rwav32PSck0J2X+PjL7ZNGq3pM6ePiqFRIbLG5XI2l7NIdW7/kNirVD/pZZcUq/0O95GqZfNQqZDK49wW7OidksurXTg9nb/Tpx+mQ+7HReNHNbLBZ0DVPHQ6lA8tAvEzrHfuzj7Vy9c3uOd283Xfx3wA4kALaPyZ1lJAAAAAElFTkSuQmCC"}},function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(2),a=r.n(n),i=r(3),A=r.n(i),o=function(){function t(e){a()(this,t),this.t=e}return A()(t,[{key:"getAll",value:function(){return this.t.getAll()}},{key:"removeAll",value:function(){return Promise.all([this.t.remove("board","private","lists"),this.t.remove("board","private","settings"),this.t.remove("board","private","user")])}},{key:"getUser",value:function(){return this.t.get("board","private","user",{})}},{key:"setUser",value:function(t){var e=this;return this.t.get("board","private","user",{}).then(function(r){return e.t.set("board","private","user",Object.assign({},r,t))})}},{key:"removeUser",value:function(){return this.t.remove("board","private","user")}},{key:"getTask",value:function(){return this.t.get("card","private","task",{})}},{key:"setTask",value:function(t){var e=this;return this.t.get("card","private","task",{}).then(function(r){return e.t.set("card","private","task",Object.assign({},r,t))})}},{key:"removeTask",value:function(){return this.t.remove("card","private","task")}},{key:"getSettings",value:function(){var t={scope:"me",priority:1,prependIcon:!0,showBadges:!0,showStats:!0,showStatsNotifications:!0};return this.t.get("board","private","settings",{}).then(function(e){return Object.assign({},t,e)})}},{key:"setSettings",value:function(t){var e=this;return this.t.get("board","private","settings",{}).then(function(r){return e.t.set("board","private","settings",Object.assign({},r,t))})}},{key:"getLists",value:function(){return this.t.get("board","private","lists",{})}},{key:"setLists",value:function(t){return this.t.set("board","private","lists",t)}}]),t}()},function(t,e,r){"use strict";r.d(e,"a",function(){return l});var n=r(0),a=r.n(n),i=r(1),A=r.n(i),o=r(2),s=r.n(o),u=r(3),c=r.n(u),h=r(4),f=r(5),l=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new f.a(e);s()(this,t),this.t=e,this.storage=r}return c()(t,[{key:"request",value:function(){var t=A()(a.a.mark(function t(e){var r,n,i,A,o=this,s=arguments;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},n=h.a+e,t.next=4,this.authHeaders();case 4:return t.t0=t.sent,i={headers:t.t0},A=Object.assign({},i,r),t.abrupt("return",fetch(n,A).then(function(t){return o.handleResponse(t)}));case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"authHeaders",value:function(){var t=A()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.t.loadSecret("userId");case 2:return t.t0=t.sent,t.next=5,this.t.loadSecret("apiToken");case 5:return t.t1=t.sent,t.abrupt("return",{"x-api-user":t.t0,"x-api-key":t.t1,"Content-Type":"application/json"});case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"handleResponse",value:function(t){return t.ok?t.json():this.handleError(t)}},{key:"handleError",value:function(){var t=A()(a.a.mark(function t(e){var r=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(401!==e.status){t.next=5;break}return t.next=3,this.storage.removeUser().then(function(){return r.notify("Wrong User ID or API Token. Try to login again.","error")});case 3:t.next=8;break;case 5:if(404!==e.status){t.next=8;break}return t.next=8,this.storage.removeTask();case 8:return t.abrupt("return",e);case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"addTask",value:function(t){return this.request("/tasks/user",{method:"POST",body:JSON.stringify(t)})}},{key:"updateTask",value:function(t,e){return this.request("/tasks/".concat(t),{method:"PUT",body:JSON.stringify(e)})}},{key:"doTask",value:function(t){return this.request("/tasks/".concat(t,"/score/up"),{method:"POST"})}},{key:"undoTask",value:function(t){return this.request("/tasks/".concat(t,"/score/down"),{method:"POST"})}},{key:"removeTask",value:function(t){return this.request("/tasks/".concat(t),{method:"DELETE"})}},{key:"getUserProfile",value:function(){return this.request("/user?userFields=profile",{method:"GET"})}},{key:"getUserStats",value:function(){return this.request("/user?userFields=stats",{method:"GET"})}},{key:"notify",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";this.t.alert({message:t,display:e,duration:10})}}]),t}()},function(t,e,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(8),a)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},A=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"==typeof t,c=e.regeneratorRuntime;if(c)u&&(t.exports=c);else{(c=e.regeneratorRuntime=u?t.exports:{}).wrap=y;var h="suspendedStart",f="suspendedYield",l="executing",d="completed",p={},v={};v[A]=function(){return this};var g=Object.getPrototypeOf,k=g&&g(g(S([])));k&&k!==n&&a.call(k,A)&&(v=k);var m=I.prototype=E.prototype=Object.create(v);x.prototype=m.constructor=I,I.constructor=x,I[s]=x.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,I):(t.__proto__=I,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(m),t},c.awrap=function(t){return{__await:t}},b(U.prototype),U.prototype[o]=function(){return this},c.AsyncIterator=U,c.async=function(t,e,r,n){var a=new U(y(t,e,r,n));return c.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},b(m),m[s]="Generator",m[A]=function(){return this},m.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},c.values=S,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return o.type="throw",o.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var A=this.tryEntries[i],o=A.completion;if("root"===A.tryLoc)return n("end");if(A.tryLoc<=this.prev){var s=a.call(A,"catchLoc"),u=a.call(A,"finallyLoc");if(s&&u){if(this.prev<A.catchLoc)return n(A.catchLoc,!0);if(this.prev<A.finallyLoc)return n(A.finallyLoc)}else if(s){if(this.prev<A.catchLoc)return n(A.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<A.finallyLoc)return n(A.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var A=i?i.completion:{};return A.type=t,A.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(A)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),p}}}function y(t,e,r,n){var a=e&&e.prototype instanceof E?e:E,i=Object.create(a.prototype),A=new B(n||[]);return i._invoke=function(t,e,r){var n=h;return function(a,i){if(n===l)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw i;return P()}for(r.method=a,r.arg=i;;){var A=r.delegate;if(A){var o=T(A,r);if(o){if(o===p)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=l;var s=w(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,A),i}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function E(){}function x(){}function I(){}function b(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function U(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,A){var o=w(t[r],t,n);if("throw"!==o.type){var s=o.arg,u=s.value;return u&&"object"==typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,A)},function(t){e("throw",t,i,A)}):Promise.resolve(u).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,A)})}A(o.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function T(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,T(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=w(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[A];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t,e,r){"use strict";var n=r(0),a=r.n(n),i=r(1),A=r.n(i),o=r(2),s=r.n(o),u=r(3),c=r.n(u),h=r(4),f=r(5),l=r(6),d=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new f.a(e);s()(this,t),this.t=e,this.storage=r}return c()(t,[{key:"calculateExpToNextLevel",value:function(){var t=A()(a.a.mark(function t(e){var r,n,i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.getUser();case 2:if((r=t.sent).lvl!==e||!r.expToNextLevel){t.next=5;break}return t.abrupt("return",r.expToNextLevel);case 5:return n=.25*Math.pow(e,2)+10*e+139.75,i=n%10,t.abrupt("return",n-i+10*Math.round(i/10));case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"updateStats",value:function(){var t=A()(a.a.mark(function t(e){var r,n,i,A,o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.gp,n=e.exp,i=e.lvl,A=r,this.notifyAboutStats({gold:A,exp:n}),t.next=5,this.calculateExpToNextLevel(i);case 5:return o=t.sent,t.abrupt("return",this.storage.setUser({lvl:i,gold:A,exp:n,expToNextLevel:o}));case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"notifyAboutStats",value:function(){var t=A()(a.a.mark(function t(e){var r,n,i,A,o,s,u;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.exp,n=e.gold,t.next=3,this.storage.getSettings();case 3:if(t.sent.showStatsNotifications){t.next=6;break}return t.abrupt("return",void 0);case 6:return t.next=8,this.storage.getUser();case 8:return i=t.sent,A=i.exp?r-i.exp:r,o=i.gold?n-i.gold:n,s=o>0?"gained":"lost",u=o>0?"success":"error",t.abrupt("return",this.t.alert({message:"You ".concat(s," ").concat(A," exp and ").concat(o.toFixed(2)," gold."),display:u,duration:5}));case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}();r.d(e,"a",function(){return p});var p=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new f.a(e),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new l.a(e,r),a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new d(e,r);s()(this,t),this.t=e,this.storage=r,this.API=n,this.currentUser=a}return c()(t,[{key:"getTemplate",value:function(){var t=A()(a.a.mark(function t(e){var r,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://trello.com/c/".concat(e.shortLink),t.next=3,this.storage.getSettings();case 3:return n=t.sent,n.prependIcon?"![](".concat(h.c.TRELLO_LOGO,")&ensp;"):"",t.abrupt("return",{type:"todo",priority:n.priority,text:"".concat(e.name),notes:"[Open in Trello](".concat(r,")")});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"handleAdd",value:function(){var t=A()(a.a.mark(function t(){var e,r,n=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.t.card("name","shortLink");case 2:return e=t.sent,t.next=5,this.getTemplate(e);case 5:return r=t.sent,t.abrupt("return",this.API.addTask(r).then(function(t){return n.storage.setTask({id:t.data.id,text:t.data.text,notes:t.data.notes,priority:t.data.priority})}));case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"handleRemove",value:function(){var t=A()(a.a.mark(function t(){var e,r=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.getTask();case 2:return e=t.sent,t.abrupt("return",this.API.removeTask(e.id).then(function(){return r.storage.removeTask()}));case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"handleDo",value:function(){var t=A()(a.a.mark(function t(){var e,r=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.getTask();case 2:return e=t.sent,t.abrupt("return",this.API.doTask(e.id).then(function(t){return r.storage.setTask({done:!0}).then(function(){return r.currentUser.updateStats(t.data)})}));case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"handleUndo",value:function(){var t=A()(a.a.mark(function t(){var e,r=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.getTask();case 2:return e=t.sent,t.abrupt("return",this.API.undoTask(e.id).then(function(t){return r.storage.setTask({done:!1}).then(function(){return r.currentUser.updateStats(t.data)})}));case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"handleUpdate",value:function(){var t=A()(a.a.mark(function t(e){var r,n,i=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.priority,t.next=3,this.storage.getTask();case 3:return n=t.sent,t.abrupt("return",this.API.updateTask(n.id,{priority:r}).then(function(t){return i.storage.setTask({priority:t.data.priority})}));case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}()},function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),i=r(1),A=r.n(i),o=r(4),s=r(5),u=r(2),c=r.n(u),h=r(3),f=r.n(h),l=r(9),d=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new s.a(e);c()(this,t),this.t=e,this.storage=r,this.task=void 0}return f()(t,[{key:"currentTask",value:function(){return this.task=this.task||new l.a(this.t,this.storage),this.task}},{key:"start",value:function(){var t=A()(a.a.mark(function t(){var e,r,n,i,A,s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.t.card("id","idList","members");case 2:return e=t.sent,t.next=5,this.storage.getSettings();case 5:return r=t.sent,t.next=8,this.storage.getTask();case 8:if(n=t.sent,r.scope!==o.b.ASSIGNED_TO_ME){t.next=13;break}if(i=this.t.getContext().member,e.members.some(function(t){return t.id===i})){t.next=13;break}return t.abrupt("return",this.handleScoped(n));case 13:return t.next=15,this.storage.getLists();case 15:return A=t.sent,s=A[e.idList],t.abrupt("return",this.handle(n,s));case 18:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"handleScoped",value:function(t){var e=this;if(t.id)return t.done?this.currentTask().handleUndo().then(function(){return e.currentTask().handleRemove()}):this.currentTask().handleRemove()}},{key:"handle",value:function(t,e){var r=this;if(e===o.d.DOING){if(!t.id)return this.currentTask().handleAdd();if(t.done)return this.currentTask().handleUndo()}else if(e===o.d.DONE){if(!t.id)return this.currentTask().handleAdd().then(function(){return r.currentTask().handleDo()});if(!t.done)return this.currentTask().handleDo()}else if(t.id)return t.done?this.currentTask().handleUndo().then(function(){return r.currentTask().handleRemove()}):this.currentTask().handleRemove()}}]),t}(),p=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new s.a(e);c()(this,t),this.t=e,this.storage=r}return f()(t,[{key:"markAsDone",value:function(){return this.mark(o.d.DONE)}},{key:"markAsDoing",value:function(){return this.mark(o.d.DOING)}},{key:"mark",value:function(){var t=A()(a.a.mark(function t(e){var r,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.getLists();case 2:return r=t.sent,t.next=5,this.t.list("id","name");case 5:return n=t.sent,r[n.id]=e,this.t.closePopup(),this.notify('List "'.concat(n.name,'" was successfully marked'),"success"),t.abrupt("return",this.storage.setLists(r));case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"unmark",value:function(){var t=A()(a.a.mark(function t(){var e,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.getLists();case 2:return e=t.sent,t.next=5,this.t.list("id","name");case 5:return r=t.sent,delete e[r.id],this.t.closePopup(),this.notify('List "'.concat(r.name,'" was successfully unmarked'),"success"),t.abrupt("return",this.storage.setLists(e));case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"notify",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";this.t.alert({message:t,display:e,duration:5})}}]),t}(),v={},g=function(){var t=A()(a.a.mark(function t(e){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.getContext().card,!v[r]){t.next=3;break}return t.abrupt("return",v[r]);case 3:return v[r]=new d(e).start().then(function(){return setTimeout(function(){return delete v[r]},1e3)}),t.abrupt("return",v[r]);case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),k={.1:o.c.TRIVIAL,1:o.c.EASY,1.5:o.c.MEDIUM,2:o.c.HARD};TrelloPowerUp.initialize({"board-buttons":function(){var t=A()(a.a.mark(function t(e){var r,n,i,A;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=new s.a(e),t.next=3,n.getUser();case 3:return i=t.sent,t.next=6,n.getSettings();case 6:return A=t.sent,i.loggedIn?(r=[{condition:"always",icon:{dark:o.c.HABITICA_LOGO,light:o.c.HABITICA_LOGO},text:i.name,callback:function(t){return t.popup({title:"Settings",url:"./settings.html",height:270})}}],A.showStats&&r.unshift({condition:"always",icon:{dark:o.c.EXP,light:o.c.EXP},text:i.exp?"".concat(i.exp," / ").concat(i.expToNextLevel):"?"},{condition:"always",icon:{dark:o.c.GOLD,light:o.c.GOLD},text:i.gold?i.gold.toFixed(2):"?"})):r=[{condition:"always",icon:{dark:o.c.HABITICA_LOGO,light:o.c.HABITICA_LOGO},text:"Login",callback:function(t){return t.popup({title:"Log in Habitica",url:"./login.html",height:340})}}],t.abrupt("return",r);case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),"card-badges":function(){var t=A()(a.a.mark(function t(e){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=new s.a(e),t.next=3,r.getUser();case 3:if(t.sent.loggedIn){t.next=6;break}return t.abrupt("return",[]);case 6:return t.abrupt("return",g(e).then(A()(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getSettings();case 2:if(t.sent.showBadges){t.next=5;break}return t.abrupt("return",[]);case 5:return t.next=7,r.getTask();case 7:return e=t.sent,t.abrupt("return",[{icon:e.id?k[e.priority]:null},{icon:e.done?o.c.CHECKED:null}]);case 9:case"end":return t.stop()}},t)}))));case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),"card-detail-badges":function(){var t=A()(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new s.a(e).getTask();case 2:if(t.sent.id){t.next=5;break}return t.abrupt("return",[]);case 5:return t.abrupt("return",[{title:"To-Do",text:"Edit",callback:function(t){return t.popup({title:"Edit To-Do",url:"./edit-task.html",height:240})}}]);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),"list-actions":function(){var t=A()(a.a.mark(function t(e){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=new s.a(e),t.next=3,r.getUser();case 3:if(t.sent.loggedIn){t.next=6;break}return t.abrupt("return",[]);case 6:return t.abrupt("return",r.getLists().then(function(t){return e.list("id").then(function(e){switch(t[e.id]){case o.d.DOING:return[{text:'Unmark list as "Doing"',callback:function(t){return new p(t).unmark()}}];case o.d.DONE:return[{text:'Unmark list as "Done"',callback:function(t){return new p(t).unmark()}}];default:return[{text:'Mark list as "Doing"',callback:function(t){return new p(t).markAsDoing()}},{text:'Mark list as "Done"',callback:function(t){return new p(t).markAsDone()}}]}})}));case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()})}]);