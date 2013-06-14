if(typeof define==="function"){define("com.erades.app.simon",["puremvc"],function(c){var a;(function(e){(function(f){(function(i){(function(k){var j=(function(){function l(){}l.STARTUP="startup";l.KN_CLICK="KeyNoteClick";l.KN_BLOCK="KeyNoteBlock";l.KN_ACTIVATE="KeyNoteActivate";l.START_BTN_CLICK="startBtnClick";l.START_GAME="startGame";l.SOUNDS_LOADED="soundsLoaded";l.GAME_OVER="gameOver";l.NEXT_ROUND="nextRound";l.START_OVER_BTN_CLICK="startOverBtnClick";return l})();k.NotificationNames=j})(i.simon||(i.simon={}));
var h=i.simon})(f.app||(f.app={}));var g=f.app})(e.erades||(e.erades={}));var d=e.erades})(a||(a={}));var a;(function(e){(function(f){(function(i){(function(k){var j=(function(){function l(){}l.GAME_PROXY="gameProxy";l.SOUND_PROXY="soundPorxy";return l})();k.ProxyNames=j})(i.simon||(i.simon={}));var h=i.simon})(f.app||(f.app={}));var g=f.app})(e.erades||(e.erades={}));var d=e.erades})(a||(a={}));var b=this.__extends||function(g,e){function f(){this.constructor=g}f.prototype=e.prototype;g.prototype=new f()
};var a;(function(e){(function(f){(function(i){(function(k){var j=(function(m){b(l,m);function l(o,n){m.call(this,o,n);this._computerNotes=new Array();this._userNotes=new Array();this._currentCompNote=0;this._currentUserNote=0;this._inputActive=true;this._numItems=n.length}l.prototype.resetUserNotes=function(){this._userNotes.length=0;this._currentUserNote=0};l.prototype.resetCompNotes=function(){this._computerNotes.length=0;this._currentCompNote=0};l.prototype.reset=function(){this.resetCompNotes();
this.resetUserNotes()};l.prototype.start=function(){this.reset();this.playSequence()};l.prototype.CheckSequence=function(n){if(this._inputActive){if(this._computerNotes[this._currentUserNote]==n){if(this._computerNotes.length>this._currentUserNote+1){this._currentUserNote++}else{this.playSequence()}}else{this.sendNotification(k.NotificationNames.GAME_OVER,this._computerNotes.length-1)}}};l.prototype.playSequence=function(){var n=this;this._inputActive=false;this.sendNotification(k.NotificationNames.KN_BLOCK);
this.sendNotification(k.NotificationNames.NEXT_ROUND,this._computerNotes.length+1);this._currentCompNote=0;setTimeout(function(){n.continueSequence()},2000)};l.prototype.continueSequence=function(){var n=this;if(this._computerNotes.length>this._currentCompNote){this.sendNotification(k.NotificationNames.KN_CLICK,this._computerNotes[this._currentCompNote]);this._currentCompNote++;setTimeout(function(){n.continueSequence()},500)}else{this.addNote()}};l.prototype.addNote=function(){var n=this.getRandomId();
this._computerNotes.push(n);this.sendNotification(k.NotificationNames.KN_CLICK,n);this.sendNotification(k.NotificationNames.KN_ACTIVATE);this._inputActive=true;this.resetUserNotes()};l.prototype.getIds=function(){return this.data};l.prototype.getRandomId=function(){var n=Math.round(Math.random()*(this._numItems-1));return this.data[n]};return l})(c.Proxy);k.GameProxy=j})(i.simon||(i.simon={}));var h=i.simon})(f.app||(f.app={}));var g=f.app})(e.erades||(e.erades={}));var d=e.erades})(a||(a={}));var a;
(function(e){(function(f){(function(i){(function(k){var j=(function(m){b(l,m);function l(o,n){m.call(this,o,n);this.numSoundLoaded=1;this.init()}l.prototype.init=function(){createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this));createjs.Sound.registerManifest(this.data)};l.prototype.soundLoaded=function(n){if(this.data.length==this.numSoundLoaded){this.sendNotification(k.NotificationNames.SOUNDS_LOADED)}else{this.numSoundLoaded++}};l.prototype.playSound=function(n){createjs.Sound.play(n,createjs.Sound.INTERRUPT_EARLY,0,0,false,1)
};return l})(c.Proxy);k.SoundProxy=j})(i.simon||(i.simon={}));var h=i.simon})(f.app||(f.app={}));var g=f.app})(e.erades||(e.erades={}));var d=e.erades})(a||(a={}));var a;(function(e){(function(f){(function(i){(function(j){var k=(function(){function l(){}l.SIMON_ID="#simon";l.ID_ARRAY=["1","2","3","4","5","6","7"];l.SOUND_ARRAY=[{src:"lib/sound/C4.mp3|lib/sound/C4.ogg",id:1},{src:"lib/sound/D4.mp3|lib/sound/D4.ogg",id:2},{src:"lib/sound/E4.mp3|lib/sound/E4.ogg",id:3},{src:"lib/sound/F4.mp3|lib/sound/F4.ogg",id:4},{src:"lib/sound/G4.mp3|lib/sound/G4.ogg",id:5},{src:"lib/sound/A4.mp3|lib/sound/A4.ogg",id:6},{src:"lib/sound/B4.mp3|lib/sound/B4.ogg",id:7},];
return l})();j.UINames=k})(i.simon||(i.simon={}));var h=i.simon})(f.app||(f.app={}));var g=f.app})(e.erades||(e.erades={}));var d=e.erades})(a||(a={}));var a;(function(e){(function(f){(function(i){(function(j){var k=(function(l){b(m,l);function m(){l.apply(this,arguments)}m.prototype.execute=function(o){console.info("SIMON SAYS :: loadding proxies");var n=new j.GameProxy(j.ProxyNames.GAME_PROXY,j.UINames.ID_ARRAY);var p=new j.SoundProxy(j.ProxyNames.SOUND_PROXY,j.UINames.SOUND_ARRAY);this.facade.registerProxy(n);
this.facade.registerProxy(p)};return m})(c.SimpleCommand);j.PrepModelCommand=k})(i.simon||(i.simon={}));var h=i.simon})(f.app||(f.app={}));var g=f.app})(e.erades||(e.erades={}));var d=e.erades})(a||(a={}));var a;(function(e){(function(f){(function(i){(function(k){var j=(function(){function l(){}Object.defineProperty(l.prototype,"id",{get:function(){return this._id},set:function(m){this._id=m},enumerable:true,configurable:true});return l})();k.KeyNoteVO=j})(i.simon||(i.simon={}));var h=i.simon})(f.app||(f.app={}));
var g=f.app})(e.erades||(e.erades={}));var d=e.erades})(a||(a={}));var a;(function(e){(function(f){(function(i){(function(k){var j=(function(){function l(m){this.KNList=null;this.keyNotes=new Array();this.KNList=m;this.initializeChildren()}l.prototype.initializeChildren=function(){var m=this;this.KNList.children("ul").children("li").each(function(o,p){var n=new k.KeyNoteVO();n.id=$(p).attr("id");m.keyNotes.push(n)})};Object.defineProperty(l.prototype,"KeyNotes",{get:function(){return this.keyNotes
},enumerable:true,configurable:true});l.prototype.fadeInOut=function(m){TweenMax.to("#"+m,0.1,{opacity:1,yoyo:true,repeat:1,ease:Power3.easeOut})};return l})();k.KeyNoteList=j})(i.simon||(i.simon={}));var h=i.simon})(f.app||(f.app={}));var g=f.app})(e.erades||(e.erades={}));var d=e.erades})(a||(a={}));var a;(function(e){(function(f){(function(i){(function(j){var k=(function(){function l(){}l.KEY_NOTE="keyNoteMediator";l.CONTROLS="ControlsMediator";return l})();j.MediatorNames=k})(i.simon||(i.simon={}));
var h=i.simon})(f.app||(f.app={}));var g=f.app})(e.erades||(e.erades={}));var d=e.erades})(a||(a={}));var a;(function(e){(function(f){(function(i){(function(k){var j=(function(m){b(l,m);function l(o,n){m.call(this,o,n);this.registerListeners()}l.prototype.registerListeners=function(){var o=this;var n=this.getKeyNoteList();n.KeyNotes.forEach(function(p){$("#"+p.id).on("click",function(){o.sendNotification(k.NotificationNames.KN_CLICK,p.id)})})};l.prototype.listNotificationInterests=function(){return[k.NotificationNames.KN_CLICK]
};l.prototype.handleNotification=function(o){switch(o.getName()){case k.NotificationNames.KN_CLICK:this.getKeyNoteList().fadeInOut(o.getBody());var p=this.facade.retrieveProxy(k.ProxyNames.SOUND_PROXY);p.playSound(o.getBody());var n=this.facade.retrieveProxy(k.ProxyNames.GAME_PROXY);n.CheckSequence(o.getBody());break}};l.prototype.getKeyNoteList=function(){return this.viewComponent};return l})(c.Mediator);k.KeyNoteMediator=j})(i.simon||(i.simon={}));var h=i.simon})(f.app||(f.app={}));var g=f.app})(e.erades||(e.erades={}));
var d=e.erades})(a||(a={}));var a;(function(e){(function(f){(function(i){(function(j){var k=(function(l){b(m,l);function m(o,n){l.call(this,o,n);this.registerListeners()}m.prototype.registerListeners=function(){var n=this;$("#startBtn").on("click",function(){n.sendNotification(j.NotificationNames.START_BTN_CLICK,null)});$("#countdown").on("click",function(){n.sendNotification(j.NotificationNames.START_OVER_BTN_CLICK,null)})};Object.defineProperty(m.prototype,"viewComponent",{get:function(){return this.viewComponent
},enumerable:true,configurable:true});m.prototype.listNotificationInterests=function(){return[j.NotificationNames.START_BTN_CLICK,j.NotificationNames.NEXT_ROUND,j.NotificationNames.GAME_OVER,j.NotificationNames.START_OVER_BTN_CLICK]};m.prototype.handleNotification=function(n){switch(n.getName()){case j.NotificationNames.START_BTN_CLICK:this.initGame();break;case j.NotificationNames.NEXT_ROUND:this.showRoundNumber(n.getBody());break;case j.NotificationNames.GAME_OVER:this.showGameOver(n.getBody());
break;case j.NotificationNames.START_OVER_BTN_CLICK:this.restart();break}};m.prototype.initGame=function(){$("#intro").css("display","none");this.sendNotification(j.NotificationNames.START_GAME);var n=this.facade.retrieveProxy(j.ProxyNames.GAME_PROXY);n.start()};m.prototype.showRoundNumber=function(n){$("#countdown").html(n);$("#countdown").css({opacity:"0","font-size":"5000%",display:"none"});TweenMax.to("#countdown",0.5,{display:"block",fontSize:"400%",ease:Power4.easeOut,opacity:1,yoyo:true,repeat:1,delay:0.5})
};m.prototype.showGameOver=function(o){$("#countdown").html("<p>GAME OVER</p><div id='score'>score: "+o+"</div> <div id='start-over'><a href='#'>Play again?</a></div>");TweenMax.to("#score",0,{display:"none",rotationX:270,transformOrigin:"left top",transformPerspective:600});TweenMax.to("#start-over",0,{display:"none",rotationX:90,transformOrigin:"left top",transformPerspective:600});$("#countdown").css({opacity:"0","font-size":"2000%",display:"none"});TweenMax.to("#countdown",0.5,{display:"block",fontSize:"400%",ease:Power4.easeOut,opacity:1,delay:0.5,onComplete:n});
function n(){TweenMax.to("#score",1.3,{delay:0.5,display:"block",rotationX:360,transformOrigin:"50% top",transformPerspective:600,ease:Elastic.easeOut});TweenMax.to("#start-over",1,{delay:1.5,display:"block",rotationX:0,transformOrigin:"50% top",transformPerspective:600,ease:Elastic.easeOut})}};m.prototype.restart=function(){var n=this.facade.retrieveProxy(j.ProxyNames.GAME_PROXY);TweenMax.to("#countdown",0.8,{opacity:0,ease:Power4.easeOut,top:"40%",scale:0.8,onComplete:this.restoreDefault,onCompleteParams:[n]})
};m.prototype.restoreDefault=function(n){$("#countdown").css({display:"none",top:"50%"});n.start()};return m})(c.Mediator);j.ControlsMediator=k})(i.simon||(i.simon={}));var h=i.simon})(f.app||(f.app={}));var g=f.app})(e.erades||(e.erades={}));var d=e.erades})(a||(a={}));var a;(function(e){(function(f){(function(i){(function(j){var k=(function(l){b(m,l);function m(){l.apply(this,arguments)}m.prototype.execute=function(n){console.info("SIMON SAYS :: loadding mediators");var p=n.getBody();var q=new j.KeyNoteList(p.find(j.UINames.SIMON_ID));
var r=new j.KeyNoteMediator(j.MediatorNames.KEY_NOTE,q);var o=new j.ControlsMediator(j.MediatorNames.CONTROLS,null);this.facade.registerMediator(r);this.facade.registerMediator(o)};return m})(c.SimpleCommand);j.PrepViewCommand=k})(i.simon||(i.simon={}));var h=i.simon})(f.app||(f.app={}));var g=f.app})(e.erades||(e.erades={}));var d=e.erades})(a||(a={}));var a;(function(e){(function(f){(function(i){(function(k){var j=(function(m){b(l,m);function l(){m.apply(this,arguments)}l.prototype.initializeMacroCommand=function(){this.addSubCommand(k.PrepModelCommand);
this.addSubCommand(k.PrepViewCommand)};return l})(c.MacroCommand);k.StartupCommand=j})(i.simon||(i.simon={}));var h=i.simon})(f.app||(f.app={}));var g=f.app})(e.erades||(e.erades={}));var d=e.erades})(a||(a={}));var a;(function(e){(function(f){(function(i){(function(j){var k=(function(m){b(n,m);function n(){m.apply(this,arguments)}n.prototype.startup=function(o){this.sendNotification(j.NotificationNames.STARTUP,o)};n.prototype.initializeController=function(){m.prototype.initializeController.call(this);
console.info("SIMON SAYS:: INIT APP");this.registerCommand(j.NotificationNames.STARTUP,j.StartupCommand)};n.getInstance=function l(){if(!c.Facade.instance){c.Facade.instance=new n()}return c.Facade.instance};return n})(c.Facade);j.ApplicationFacade=k})(i.simon||(i.simon={}));var h=i.simon})(f.app||(f.app={}));var g=f.app})(e.erades||(e.erades={}));var d=e.erades})(a||(a={}));return a.erades.app.simon})};