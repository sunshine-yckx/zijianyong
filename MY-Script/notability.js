/*

# 驾照一点通vip

QX1.0.
https://notability.com/subscriptions url script-response-body https://raw.githubusercontent.com/zgaoliang520/zijianyong/master/MY-Script/notability.js

Surge4.0:

Notability = type=http-request,pattern=https://notability.com/subscriptions,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/zgaoliang520/zijianyong/master/MY-Script/notability.js

MITM = notability.com

*/

;var encode_version = 'jsjiami.com.v5', gxnxm = '__0xd0d57',  __0xd0d57=['wpTDh0cGwo3CnsO0','w7BkGA==','N8K2IsOTc8KdLmhj','54uq5p6M5YyY772vw4bDmOS+ouWtseadneW/vueqgO+9t+i/t+iusOaVuuaPhuaLv+S5kueZjeW1g+S8mg==','5Yqj6ZqI54uR5pyF5YyH77+7cjrkvYzlrYLmnK7lvI7nqKI=','w4NBDVTDow==','w6vCgMOuTsKf','NcOUw60LWQ==','fGbCpMKSMw==','w5LCpMKfPcOr','w4DCkcOnMcKI','L33Cn8OW','MMOgUMOyX8Kaw64ewq7DmyYdwqPDhBQcdMKl','w5RmHHPDosKJw7QUF8OUw7jDq002ECLDjMK/UcKv','PCTCmyw+w5U=','P2kqw7vCrsOWw5dgVsKDw4bDg8OewoPDr0Z6d8OFYcKFwqhGw58=','b3fDnXxlwoHDsGnCnMKbHcK4IcOzbcK6NW/Cl8KTW3xjGQ==','wp/CnMO0SEE6fHgIScK2wpTClj/CinN8wqbDtDBpakfDgMO1En7DvkQVMi1fAHzCoEPDucOeTcKvByExwoxO'];(function(_0x57dc54,_0x1095f2){var _0x2ab643=function(_0x100166){while(--_0x100166){_0x57dc54['push'](_0x57dc54['shift']());}};_0x2ab643(++_0x1095f2);}(__0xd0d57,0x12a));var _0xa087=function(_0x2f4d9d,_0x3da254){_0x2f4d9d=_0x2f4d9d-0x0;var _0x16957b=__0xd0d57[_0x2f4d9d];if(_0xa087['initialized']===undefined){(function(){var _0x4e3e46=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1c2f3b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4e3e46['atob']||(_0x4e3e46['atob']=function(_0xf4e470){var _0x5186d2=String(_0xf4e470)['replace'](/=+$/,'');for(var _0x2836be=0x0,_0x5a5827,_0x28cf5b,_0x18b220=0x0,_0x6aa43a='';_0x28cf5b=_0x5186d2['charAt'](_0x18b220++);~_0x28cf5b&&(_0x5a5827=_0x2836be%0x4?_0x5a5827*0x40+_0x28cf5b:_0x28cf5b,_0x2836be++%0x4)?_0x6aa43a+=String['fromCharCode'](0xff&_0x5a5827>>(-0x2*_0x2836be&0x6)):0x0){_0x28cf5b=_0x1c2f3b['indexOf'](_0x28cf5b);}return _0x6aa43a;});}());var _0x25bcd2=function(_0x13ca2b,_0x3abbea){var _0x1a9a7d=[],_0xf03acf=0x0,_0x445811,_0x4cf1c7='',_0x476b7a='';_0x13ca2b=atob(_0x13ca2b);for(var _0x25a37a=0x0,_0x235a42=_0x13ca2b['length'];_0x25a37a<_0x235a42;_0x25a37a++){_0x476b7a+='%'+('00'+_0x13ca2b['charCodeAt'](_0x25a37a)['toString'](0x10))['slice'](-0x2);}_0x13ca2b=decodeURIComponent(_0x476b7a);for(var _0x3c9bb7=0x0;_0x3c9bb7<0x100;_0x3c9bb7++){_0x1a9a7d[_0x3c9bb7]=_0x3c9bb7;}for(_0x3c9bb7=0x0;_0x3c9bb7<0x100;_0x3c9bb7++){_0xf03acf=(_0xf03acf+_0x1a9a7d[_0x3c9bb7]+_0x3abbea['charCodeAt'](_0x3c9bb7%_0x3abbea['length']))%0x100;_0x445811=_0x1a9a7d[_0x3c9bb7];_0x1a9a7d[_0x3c9bb7]=_0x1a9a7d[_0xf03acf];_0x1a9a7d[_0xf03acf]=_0x445811;}_0x3c9bb7=0x0;_0xf03acf=0x0;for(var _0x124463=0x0;_0x124463<_0x13ca2b['length'];_0x124463++){_0x3c9bb7=(_0x3c9bb7+0x1)%0x100;_0xf03acf=(_0xf03acf+_0x1a9a7d[_0x3c9bb7])%0x100;_0x445811=_0x1a9a7d[_0x3c9bb7];_0x1a9a7d[_0x3c9bb7]=_0x1a9a7d[_0xf03acf];_0x1a9a7d[_0xf03acf]=_0x445811;_0x4cf1c7+=String['fromCharCode'](_0x13ca2b['charCodeAt'](_0x124463)^_0x1a9a7d[(_0x1a9a7d[_0x3c9bb7]+_0x1a9a7d[_0xf03acf])%0x100]);}return _0x4cf1c7;};_0xa087['rc4']=_0x25bcd2;_0xa087['data']={};_0xa087['initialized']=!![];}var _0x211204=_0xa087['data'][_0x2f4d9d];if(_0x211204===undefined){if(_0xa087['once']===undefined){_0xa087['once']=!![];}_0x16957b=_0xa087['rc4'](_0x16957b,_0x3da254);_0xa087['data'][_0x2f4d9d]=_0x16957b;}else{_0x16957b=_0x211204;}return _0x16957b;};let obj=JSON[_0xa087('0x0','Won1')]($response[_0xa087('0x1','&EZ2')]);obj={'data':{'processAppleReceipt':{'__typename':_0xa087('0x2','cK2v'),'error':0x0,'subscription':{'__typename':_0xa087('0x3','Zy]k'),'status':_0xa087('0x4','c3US'),'originalPurchaseDate':_0xa087('0x5','hFt0'),'originalTransactionId':'1','expirationDate':_0xa087('0x6','c3US'),'productId':_0xa087('0x7',']io5'),'tier':_0xa087('0x8','%tPd'),'refundedDate':null,'refundedReason':null,'user':null}}}};$done({'body':JSON['stringify'](obj)});;(function(_0x221624,_0x4ee02e,_0x448d5c){var _0x56f2da={'CEAQT':_0xa087('0x9','Zy]k'),'VWatu':function _0x1b59f9(_0x491db4,_0x518d47){return _0x491db4!==_0x518d47;},'lYPuD':_0xa087('0xa','nYPw'),'hlwgo':'jsjiami.com.v5','SmbtW':function _0x359ad4(_0x37dde7,_0x2f653f){return _0x37dde7+_0x2f653f;},'DYaHh':_0xa087('0xb','vpO6'),'QSwtv':_0xa087('0xc','5&yT')};_0x448d5c='al';try{_0x448d5c+=_0x56f2da['CEAQT'];_0x4ee02e=encode_version;if(!(_0x56f2da[_0xa087('0xd','Zy]k')](typeof _0x4ee02e,_0x56f2da['lYPuD'])&&_0x4ee02e===_0x56f2da[_0xa087('0xe','5&yT')])){_0x221624[_0x448d5c](_0x56f2da[_0xa087('0xf','Csa&')]('删除',_0x56f2da[_0xa087('0x10','70ur')]));}}catch(_0x56943c){_0x221624[_0x448d5c](_0x56f2da[_0xa087('0x11','L5Y*')]);}}(window));;encode_version = 'jsjiami.com.v5';
