'use strict';const _0x41b14f=_0x1d63;(function(_0x4bd8f5,_0x2a7efc){const _0x324280=_0x1d63,_0x122c38=_0x4bd8f5();while(!![]){try{const _0x1cd911=parseInt(_0x324280(0x102))/0x1+-parseInt(_0x324280(0xcc))/0x2+-parseInt(_0x324280(0xee))/0x3+parseInt(_0x324280(0xc5))/0x4+-parseInt(_0x324280(0xed))/0x5+parseInt(_0x324280(0x100))/0x6*(parseInt(_0x324280(0x112))/0x7)+parseInt(_0x324280(0x10b))/0x8;if(_0x1cd911===_0x2a7efc)break;else _0x122c38['push'](_0x122c38['shift']());}catch(_0x2009c6){_0x122c38['push'](_0x122c38['shift']());}}}(_0x4ed8,0x62800));function _0x1d63(_0x394849,_0x151aec){const _0x4ed8a7=_0x4ed8();return _0x1d63=function(_0x1d630f,_0x3366ad){_0x1d630f=_0x1d630f-0xbb;let _0x4c43bc=_0x4ed8a7[_0x1d630f];return _0x4c43bc;},_0x1d63(_0x394849,_0x151aec);}function _0x4ed8(){const _0x198df5=['child','image','Safari','catch','1146228cceHYU','anjing','./lib/color','[\x20WHATSAPP\x20BOT\x20]\x20\x20','@adiwajshing/baileys','./message/msg','\x20Reconnecting\x20WhatsApp\x20Bot','292384pvqCYo','lolcatjs','prefa','./config.json','statusCode','Module\x20','store','redBright','log','loggedOut','resolve','messages','greenBright','Wa\x20web\x20terlogout...','\x0a\x09\x09\x09\x09','&background=','3EB0','\x20sedang\x20diperhatikan\x20terhadap\x20perubahan','&username=MemberLeft&member=','fatal','sendMessage','stop','split','3.0','sessionName','bind','SEDATIVE-MD\x20BY\x20RAFLY','creds.update','\x0aSemoga\x20tenang\x20di\x20alam\x20sana\x0aLatom','&img2=','parse','multi','participants','3899300YKQNFa','105540WdIeIo','chalk','reply','pino','./lib/myfunc','https://telegra.ph/file/95d9a8daa4d4d3243e337.jpg','\x0a\x09\x09\x09\x09https://api.lolhuman.xyz/api/base/welcome?apikey=Rafly11&img1=','BAE5','key','full','subject','figlet','Server\x20Ready\x20✓','isBaileys','cyan','error','action','remove','6GpCjjE','Sayonara\x20@','502702gmjMIz','close','group-participants.update','clear','cyanBright','connection.update','\x20Preparing\x20After\x20Connect','fromString','output','3092056Tgytoa','------------------------------------------------','\x22\x20Telah\x20diupdate!','cache','startsWith','./message/help','\x0a\x0a@','1322454guoUfp','HH:mm:ss\x20DD/MM/YYYY','format','textSync','profilePictureUrl','RAFLY','https://telegra.ph/file/697858c5140630f089f6e.jpg'];_0x4ed8=function(){return _0x198df5;};return _0x4ed8();}const {default:makeWASocket,BufferJSON,initInMemoryKeyStore,DisconnectReason,AnyMessageContent,makeInMemoryStore,useSingleFileAuthState,delay}=require(_0x41b14f(0xc9)),figlet=require(_0x41b14f(0xf9)),lolcatjs=require(_0x41b14f(0xcd)),fs=require('fs'),moment=require('moment'),chalk=require(_0x41b14f(0xef)),logg=require(_0x41b14f(0xf1)),clui=require('clui'),{Spinner}=clui,{serialize,getBuffer}=require(_0x41b14f(0xf2)),{color,mylog,infolog}=require(_0x41b14f(0xc7)),{encode}=require('punycode'),time=moment(new Date())[_0x41b14f(0xbc)](_0x41b14f(0xbb));let setting=JSON[_0x41b14f(0xea)](fs['readFileSync'](_0x41b14f(0xcf))),session='./'+setting[_0x41b14f(0xe4)]+'.json';const {state,saveState}=useSingleFileAuthState(session);function title(){const _0x4b174e=_0x41b14f;console[_0x4b174e(0x105)](),console['log'](_0x4b174e(0x10c)),lolcatjs[_0x4b174e(0x109)](color(figlet[_0x4b174e(0xbd)](_0x4b174e(0xbf),{'horizontalLayout':_0x4b174e(0xf7)}))),console[_0x4b174e(0xd4)](_0x4b174e(0x10c)),lolcatjs[_0x4b174e(0x109)]('[SERVER]\x20Server\x20Started!'),console[_0x4b174e(0xd4)]('------------------------------------------------');}function nocache(_0xbb2a64,_0x21b8ba=()=>{}){const _0x4adc28=_0x41b14f;lolcatjs['fromString'](_0x4adc28(0xd1)+_0xbb2a64+_0x4adc28(0xdd)),fs['watchFile'](require[_0x4adc28(0xd6)](_0xbb2a64),async()=>{const _0x332786=_0x4adc28;await uncache(require[_0x332786(0xd6)](_0xbb2a64)),_0x21b8ba(_0xbb2a64);});}function uncache(_0x32b9ec='.'){return new Promise((_0x58aca6,_0x2aeb41)=>{const _0x4731e1=_0x1d63;try{delete require[_0x4731e1(0x10e)][require[_0x4731e1(0xd6)](_0x32b9ec)],_0x58aca6();}catch(_0x437091){_0x2aeb41(_0x437091);}});}const status=new Spinner(chalk[_0x41b14f(0xfc)]('\x20Booting\x20WhatsApp\x20Bot')),starting=new Spinner(chalk[_0x41b14f(0xfc)](_0x41b14f(0x108))),reconnect=new Spinner(chalk[_0x41b14f(0xd3)](_0x41b14f(0xcb))),store=makeInMemoryStore({'logger':logg()[_0x41b14f(0xc1)]({'level':_0x41b14f(0xdf),'stream':_0x41b14f(0xd2)})}),connectToWhatsApp=async()=>{const _0x373c86=_0x41b14f,_0x5c8615=makeWASocket({'printQRInTerminal':!![],'logger':logg({'level':_0x373c86(0xdf)}),'auth':state,'browser':[_0x373c86(0xe6),_0x373c86(0xc3),_0x373c86(0xe3)]});return title(),store[_0x373c86(0xe5)](_0x5c8615['ev']),require(_0x373c86(0x110)),require(_0x373c86(0xf2)),require(_0x373c86(0xca)),nocache(_0x373c86(0x110),_0x40b74c=>console['log'](chalk[_0x373c86(0xd8)](_0x373c86(0xc8))+time+chalk['cyanBright']('\x20\x22'+_0x40b74c+'\x22\x20Telah\x20diupdate!'))),nocache(_0x373c86(0xf2),_0x532795=>console[_0x373c86(0xd4)](chalk[_0x373c86(0xd8)](_0x373c86(0xc8))+time+chalk['cyanBright']('\x20\x22'+_0x532795+_0x373c86(0x10d)))),nocache(_0x373c86(0xca),_0x3df1d0=>console[_0x373c86(0xd4)](chalk[_0x373c86(0xd8)](_0x373c86(0xc8))+time+chalk[_0x373c86(0x106)]('\x20\x22'+_0x3df1d0+_0x373c86(0x10d)))),_0x5c8615[_0x373c86(0xeb)]=!![],_0x5c8615['nopref']=![],_0x5c8615[_0x373c86(0xce)]=_0x373c86(0xc6),_0x5c8615['ev']['on']('messages.upsert',async _0x65305e=>{const _0xa7f62e=_0x373c86;if(!_0x65305e[_0xa7f62e(0xd7)])return;var _0x3fe733=_0x65305e[_0xa7f62e(0xd7)][0x0];_0x3fe733=serialize(_0x5c8615,_0x3fe733),_0x3fe733[_0xa7f62e(0xfb)]=_0x3fe733[_0xa7f62e(0xf6)]['id'][_0xa7f62e(0x10f)](_0xa7f62e(0xf5))||_0x3fe733[_0xa7f62e(0xf6)]['id'][_0xa7f62e(0x10f)](_0xa7f62e(0xdc)),require(_0xa7f62e(0xca))(_0x5c8615,_0x3fe733,_0x65305e,setting,store);}),_0x5c8615['ev']['on'](_0x373c86(0x107),_0x488bc6=>{const _0x16391e=_0x373c86,{connection:_0x121338,lastDisconnect:_0x2c40e0}=_0x488bc6;_0x121338===_0x16391e(0x103)&&(status[_0x16391e(0xe1)](),reconnect[_0x16391e(0xe1)](),starting['stop'](),console[_0x16391e(0xd4)](mylog(_0x16391e(0xfa))),_0x2c40e0[_0x16391e(0xfd)]?.[_0x16391e(0x10a)]?.[_0x16391e(0xd0)]!==DisconnectReason[_0x16391e(0xd5)]?connectToWhatsApp():console['log'](mylog(_0x16391e(0xd9))));}),_0x5c8615['ev']['on'](_0x373c86(0xe7),()=>saveState),_0x5c8615['ev']['on'](_0x373c86(0x104),async _0x2c4ffc=>{const _0x1df4ea=_0x373c86;try{for(let _0x4d1548 of _0x2c4ffc[_0x1df4ea(0xec)]){try{var _0x163404=await _0x5c8615[_0x1df4ea(0xbe)](_0x4d1548,_0x1df4ea(0xc2));}catch{var _0x163404=_0x1df4ea(0xc0);}const _0xabd377=await _0x5c8615[_0x1df4ea(0xbe)](_0x2c4ffc['id'],'image'),_0x5ce32d=await _0x5c8615['groupMetadata'](_0x2c4ffc['id']),_0x5da308=_0x5ce32d[_0x1df4ea(0xf8)],_0x2c5fe4=_0x5ce32d[_0x1df4ea(0xec)]['length'],_0x56232c=_0x1df4ea(0xf3);if(_0x2c4ffc[_0x1df4ea(0xfe)]=='add'){var _0x453e95=await getBuffer(_0x1df4ea(0xf4)+_0x163404+_0x1df4ea(0xe9)+_0xabd377+'&background='+_0x56232c+'&username=NewMember&member='+_0x2c5fe4+'&groupname='+encodeURIComponent(_0x5da308)+_0x1df4ea(0xda));await _0x5c8615['sendMessage'](_0x2c4ffc['id'],{'image':_0x453e95,'caption':_0x5ce32d['desc']+_0x1df4ea(0x111)+_0x4d1548[_0x1df4ea(0xe2)]('@')[0x0],'mentions':[_0x4d1548]});}else{if(_0x2c4ffc[_0x1df4ea(0xfe)]==_0x1df4ea(0xff)){var _0x453e95=await getBuffer('\x0a\x09\x09\x09\x09https://api.lolhuman.xyz/api/base/leave?apikey=Rafly11&img1='+_0x163404+_0x1df4ea(0xe9)+_0xabd377+_0x1df4ea(0xdb)+_0x56232c+_0x1df4ea(0xde)+_0x2c5fe4+'&groupname='+encodeURIComponent(_0x5da308)+_0x1df4ea(0xda));_0x5c8615[_0x1df4ea(0xe0)](_0x2c4ffc['id'],{'image':_0x453e95,'caption':_0x1df4ea(0x101)+_0x4d1548[_0x1df4ea(0xe2)]('@')[0x0]+_0x1df4ea(0xe8),'mentions':[_0x4d1548]});}}}}catch(_0x3aa16d){console['log'](_0x3aa16d);}}),_0x5c8615[_0x373c86(0xf0)]=(_0x497b56,_0x4db5b5,_0x441be4)=>_0x5c8615[_0x373c86(0xe0)](_0x497b56,{'text':_0x4db5b5},{'quoted':_0x441be4}),_0x5c8615;};connectToWhatsApp()[_0x41b14f(0xc4)](_0x206b86=>console[_0x41b14f(0xd4)](_0x206b86));