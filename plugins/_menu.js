import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  'downloader':'‎قسم التحميلات',
  'applications':'‎قسم التطبيقات‎',
  'ai':'‎الذكاء الاصطناعي‎ قسم',
  'morocco':'قسم للمغاربة',
  'drawing':'‎توليد الصور‎ قسم' ,
  'anime':'‎قسم عن  الأنيم',
  'islam':'‎الدين هو الاسلام‎',
  'owner':'‎قسم مطور البوت',
  'search':'‎قسم البحث',
  'group':'قسم المجموعات',
  'audio-changer':'‎تعديل الصوتيات‎',
  'sticker':'‎قسم الملصقات',
  'image-edit':'‎الصور والتعديل',
  'maker':'قسم اللوغو',
  'uploader':'‎‎رفع الملفات‎',
  'tools':'قسم الأداوات',
}
function _0x1ae6(){const _0x512681=['customPrefix','format','DateTimeFormat','premium','keys','register','long','command','catch','disabled','trimStart','name','padStart','╭┉┉┉≻\x20*%category*\x20≺┉┉┉','trim','(Ⓛ)','description','136ZAqQfF','before','[unknown\x20github\x20url]','sort','join','5090GIvzxM','prefix','╰┉┉┉≻\x09\x20_©\x20','fromCharCode','multiplier','isArray','floor','\x0a>\x20J\x20I\x20T\x20O\x20S\x20S\x20A\x20-\x20B\x20O\x20T\x0a\x0a┌\x20\x20➦\x20w9t\x20lbot\x20:\x20*_%uptime\x20!_*\x0a│\x20\x20➦\x20lyoum\x20:\x20\x20*_%week_*\x0a│\x20\x20➦\x20lw9t\x20:\x20*_%time_*\x0a│\x20\x20➦\x20tari5\x20:\x20*_%date_*\x0a│\x20\x20➦\x20total\x20user\x20:\x20_*%totalreg*_\x0a└\x20\x20➦\x20Prefix\x20Used\x20:\x20*[\x20%p\x20]*\x0a\x0a%readmore\x0a','filter','إضغط\x20على\x20الصورة\x20للدخول\x20للمجمعة','533043MHABzP','Wage','reply','help','diamond','toString','message','homepage','toLocaleTimeString','chat','1349013oDdkeW','┆\x20\x09\x20➦\x20_%cmd_','toLocaleDateString','uptime','25421mQlWXe','repeat','Legi','replace','Kliwon','includes','length','قائمة','version','55PiDdRj','Pahing','-TN-u-ca-islamic','footer','allmenu','numeric','user','plugins','data','1265428TNZHNA','getName','header','map','https://chat.whatsapp.com/L283DFlWlgVKWH40TOrUnP','menu','body','_\x20\x09','string','url','owner','158538pcAxrp','jid','Pon','readFile','after','tags','610571XtGiTN','send','sender','users','12RDhHsL','11328842EpaDsx','❎\x20هناك\x20خطأ\x20في\x20لائحة\x20الاوامر'];_0x1ae6=function(){return _0x512681;};return _0x1ae6();}const _0x579bb6=_0x2dbb;function _0x2dbb(_0x3c9923,_0x19e806){const _0x1ae699=_0x1ae6();return _0x2dbb=function(_0x2dbb66,_0x3244d2){_0x2dbb66=_0x2dbb66-0x13a;let _0x2fe5df=_0x1ae699[_0x2dbb66];return _0x2fe5df;},_0x2dbb(_0x3c9923,_0x19e806);}(function(_0x5233f0,_0x410145){const _0x26e652=_0x2dbb,_0x2a64e4=_0x5233f0();while(!![]){try{const _0xe6c982=-parseInt(_0x26e652(0x149))/0x1+-parseInt(_0x26e652(0x190))/0x2+parseInt(_0x26e652(0x17a))/0x3*(-parseInt(_0x26e652(0x14d))/0x4)+-parseInt(_0x26e652(0x187))/0x5*(parseInt(_0x26e652(0x143))/0x6)+parseInt(_0x26e652(0x14e))/0x7+parseInt(_0x26e652(0x161))/0x8*(parseInt(_0x26e652(0x170))/0x9)+parseInt(_0x26e652(0x166))/0xa*(parseInt(_0x26e652(0x17e))/0xb);if(_0xe6c982===_0x410145)break;else _0x2a64e4['push'](_0x2a64e4['shift']());}catch(_0x25b458){_0x2a64e4['push'](_0x2a64e4['shift']());}}}(_0x1ae6,0xe0455));const defaultMenu={'before':_0x579bb6(0x16d)[_0x579bb6(0x15a)](),'header':_0x579bb6(0x15d),'body':_0x579bb6(0x17b),'footer':'','after':_0x579bb6(0x168)+conn[_0x579bb6(0x18d)][_0x579bb6(0x15b)]+_0x579bb6(0x13f)};let handler=async(_0x4cecc2,{conn:_0x2185c3,usedPrefix:_0x54c217,__dirname:_0x3b97c2})=>{const _0x1c3f99=_0x579bb6;try{let _0x3ef960=JSON['parse'](await promises[_0x1c3f99(0x146)](join(_0x3b97c2,'../package.json'))[_0x1c3f99(0x158)](_0x592387=>({})))||{},{exp:_0x168aed,diamond:_0x36e082,level:_0x57fbaf,role:_0x4cde2d}=global['db'][_0x1c3f99(0x18f)][_0x1c3f99(0x14c)][_0x4cecc2['sender']],{min:_0x5226bd,xp:_0x41003e,max:_0x5d27d2}=xpRange(_0x57fbaf,global[_0x1c3f99(0x16a)]),_0x331f2d=await _0x2185c3[_0x1c3f99(0x191)](_0x4cecc2[_0x1c3f99(0x14b)]),_0x1f1d51=new Date(new Date()+0x36ee80),_0x29c1f3='ar',_0x328742=[_0x1c3f99(0x188),_0x1c3f99(0x145),_0x1c3f99(0x171),_0x1c3f99(0x182),_0x1c3f99(0x180)][Math[_0x1c3f99(0x16c)](_0x1f1d51/0x50ae4c0)%0x5],_0x261940=_0x1f1d51[_0x1c3f99(0x17c)](_0x29c1f3,{'weekday':'long'}),_0x499059=_0x1f1d51['toLocaleDateString'](_0x29c1f3,{'day':'numeric','month':_0x1c3f99(0x156),'year':_0x1c3f99(0x18c)}),_0x5b0cc6=Intl[_0x1c3f99(0x152)](_0x29c1f3+_0x1c3f99(0x189),{'day':'numeric','month':_0x1c3f99(0x156),'year':_0x1c3f99(0x18c)})[_0x1c3f99(0x151)](_0x1f1d51),_0x4ba2dd=_0x1f1d51[_0x1c3f99(0x178)](_0x29c1f3,{'hour':'numeric','minute':'numeric','second':'numeric'}),_0x19845e=process[_0x1c3f99(0x17d)]()*0x3e8,_0xc86718;process[_0x1c3f99(0x14a)]&&(process[_0x1c3f99(0x14a)](_0x1c3f99(0x17d)),_0xc86718=await new Promise(_0x23f90d=>{const _0xa1e008=_0x1c3f99;process['once'](_0xa1e008(0x176),_0x23f90d),setTimeout(_0x23f90d,0x3e8);})*0x3e8);let _0x5ad6ca=clockString(_0xc86718),_0x120123=clockString(_0x19845e),_0x2e5c70=Object[_0x1c3f99(0x154)](global['db']['data'][_0x1c3f99(0x14c)])['length'],_0x3c2de3=Object['values'](global['db']['data']['users'])[_0x1c3f99(0x16e)](_0x4e2378=>_0x4e2378['registered']==!![])['length'],_0x4500db=Object['values'](global[_0x1c3f99(0x18e)])['filter'](_0x700950=>!_0x700950[_0x1c3f99(0x159)])['map'](_0x21eb36=>{const _0x3042e7=_0x1c3f99;return{'help':Array[_0x3042e7(0x16b)](_0x21eb36['tags'])?_0x21eb36[_0x3042e7(0x173)]:[_0x21eb36[_0x3042e7(0x173)]],'tags':Array[_0x3042e7(0x16b)](_0x21eb36['tags'])?_0x21eb36[_0x3042e7(0x148)]:[_0x21eb36[_0x3042e7(0x148)]],'prefix':_0x3042e7(0x150)in _0x21eb36,'diamond':_0x21eb36['diamond'],'premium':_0x21eb36[_0x3042e7(0x153)],'enabled':!_0x21eb36[_0x3042e7(0x159)]};});for(let _0x51f60e of _0x4500db)if(_0x51f60e&&'tags'in _0x51f60e){for(let _0x26d960 of _0x51f60e[_0x1c3f99(0x148)])if(!(_0x26d960 in tags)&&_0x26d960)tags[_0x26d960]=_0x26d960;}_0x2185c3[_0x1c3f99(0x13d)]=_0x2185c3[_0x1c3f99(0x13d)]?_0x2185c3[_0x1c3f99(0x13d)]:{};let _0x4014b6=_0x2185c3['menu']['before']||defaultMenu[_0x1c3f99(0x162)],_0x5d44b6=_0x2185c3[_0x1c3f99(0x13d)][_0x1c3f99(0x13a)]||defaultMenu[_0x1c3f99(0x13a)],_0x1235fb=_0x2185c3[_0x1c3f99(0x13d)][_0x1c3f99(0x13e)]||defaultMenu['body'],_0x16b5ec=_0x2185c3[_0x1c3f99(0x13d)]['footer']||defaultMenu[_0x1c3f99(0x18a)],_0x2fc3be=_0x2185c3['menu'][_0x1c3f99(0x147)]||(_0x2185c3[_0x1c3f99(0x18d)]['jid']==_0x2185c3[_0x1c3f99(0x18d)][_0x1c3f99(0x144)]?'':'Powered\x20by\x20https://wa.me/'+_0x2185c3[_0x1c3f99(0x18d)]['jid']['split']`@`[0x0])+defaultMenu[_0x1c3f99(0x147)],_0x30a060=[_0x4014b6,...Object[_0x1c3f99(0x154)](tags)['map'](_0x3b8f4e=>{const _0x4e8bd0=_0x1c3f99;return _0x5d44b6[_0x4e8bd0(0x181)](/%category/g,tags[_0x3b8f4e])+'\x0a'+[..._0x4500db[_0x4e8bd0(0x16e)](_0x5ca291=>_0x5ca291[_0x4e8bd0(0x148)]&&_0x5ca291[_0x4e8bd0(0x148)][_0x4e8bd0(0x183)](_0x3b8f4e)&&_0x5ca291[_0x4e8bd0(0x173)])['map'](_0x203f97=>{const _0x28be64=_0x4e8bd0;return _0x203f97[_0x28be64(0x173)]['map'](_0x37cec4=>{const _0x545944=_0x28be64;return _0x1235fb['replace'](/%cmd/g,_0x203f97[_0x545944(0x167)]?_0x37cec4:'%p'+_0x37cec4)[_0x545944(0x181)](/%isdiamond/g,_0x203f97[_0x545944(0x174)]?_0x545944(0x15f):'')['replace'](/%isPremium/g,_0x203f97[_0x545944(0x153)]?'(Ⓟ)':'')[_0x545944(0x15e)]();})[_0x28be64(0x165)]('\x0a');}),_0x16b5ec][_0x4e8bd0(0x165)]('\x0a');}),_0x2fc3be][_0x1c3f99(0x165)]('\x0a'),_0x2164d9=typeof _0x2185c3['menu']==_0x1c3f99(0x140)?_0x2185c3[_0x1c3f99(0x13d)]:typeof _0x2185c3[_0x1c3f99(0x13d)]=='object'?_0x30a060:'',_0x52db22={'%':'%','p':_0x54c217,'uptime':_0x120123,'muptime':_0x5ad6ca,'me':_0x2185c3['getName'](_0x2185c3[_0x1c3f99(0x18d)][_0x1c3f99(0x144)]),'npmname':_0x3ef960[_0x1c3f99(0x15b)],'npmdesc':_0x3ef960[_0x1c3f99(0x160)],'version':_0x3ef960[_0x1c3f99(0x186)],'exp':_0x168aed-_0x5226bd,'maxexp':_0x41003e,'totalexp':_0x168aed,'xp4levelup':_0x5d27d2-_0x168aed,'github':_0x3ef960[_0x1c3f99(0x177)]?_0x3ef960[_0x1c3f99(0x177)][_0x1c3f99(0x141)]||_0x3ef960[_0x1c3f99(0x177)]:_0x1c3f99(0x163),'level':_0x57fbaf,'diamond':_0x36e082,'name':_0x331f2d,'weton':_0x328742,'week':_0x261940,'date':_0x499059,'dateIslamic':_0x5b0cc6,'time':_0x4ba2dd,'totalreg':_0x2e5c70,'rtotalreg':_0x3c2de3,'role':_0x4cde2d,'readmore':readMore};_0x2164d9=_0x2164d9[_0x1c3f99(0x181)](new RegExp('%('+Object['keys'](_0x52db22)[_0x1c3f99(0x164)]((_0x54ecb9,_0x303171)=>_0x303171[_0x1c3f99(0x184)]-_0x54ecb9[_0x1c3f99(0x184)])[_0x1c3f99(0x165)]`|`+')','g'),(_0x4c0a90,_0x17e7f4)=>''+_0x52db22[_0x17e7f4]),_0x2185c3['sendMessage'](_0x4cecc2[_0x1c3f99(0x179)],{'text':_0x2164d9,'contextInfo':{'externalAdReply':{'title':'JITOSSA','body':_0x1c3f99(0x16f),'thumbnailUrl':'https://telegra.ph/file/51a76af5ac51cc5bd73b2.jpg','sourceUrl':_0x1c3f99(0x13c),'mediaType':0x1,'renderLargerThumbnail':!![]}}},{'quoted':_0x4cecc2});}catch(_0x2949e6){_0x2185c3[_0x1c3f99(0x172)](_0x4cecc2[_0x1c3f99(0x179)],_0x1c3f99(0x14f),_0x4cecc2);throw _0x2949e6;}};handler[_0x579bb6(0x173)]=[_0x579bb6(0x13d)],handler[_0x579bb6(0x148)]=[_0x579bb6(0x142)],handler[_0x579bb6(0x157)]=[_0x579bb6(0x13d),'j','list',_0x579bb6(0x18b),_0x579bb6(0x185)],handler[_0x579bb6(0x155)]=![];export default handler;const more=String[_0x579bb6(0x169)](0x200e),readMore=more[_0x579bb6(0x17f)](0xfa1);function clockString(_0x23a49a){const _0x4fc145=_0x579bb6;let _0x262ff6=isNaN(_0x23a49a)?'--':Math[_0x4fc145(0x16c)](_0x23a49a/0x5265c00),_0x1bb03c=isNaN(_0x23a49a)?'--':Math['floor'](_0x23a49a/0x36ee80)%0x18,_0x22c535=isNaN(_0x23a49a)?'--':Math['floor'](_0x23a49a/0xea60)%0x3c,_0x28e16e=isNaN(_0x23a49a)?'--':Math[_0x4fc145(0x16c)](_0x23a49a/0x3e8)%0x3c;return[_0x262ff6,'d\x20',_0x1bb03c,'h\x20',_0x22c535,'m\x20'][_0x4fc145(0x13b)](_0x3c322b=>_0x3c322b[_0x4fc145(0x175)]()[_0x4fc145(0x15c)](0x2,0x0))[_0x4fc145(0x165)]('');}