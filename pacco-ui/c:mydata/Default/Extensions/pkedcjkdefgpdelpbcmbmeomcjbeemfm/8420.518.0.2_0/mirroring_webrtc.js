'use strict';var Mla={TAB:0,tl:1,cq:2},Y$=function(a){vb("MediaRouter.WebRtc.Start.Success",a,Mla)};var Z$=function(a,b){Dj.call(this,b);this.G=a;this.l=new Ab;this.g=Sw(b.id);this.w=new Ab;this.C=!1;this.o=null;this.D=!1;this.s=this.m=null;Nla(this);Ola(this);this.g.sendMessage(new Jj("GET_TURN_CREDENTIALS"))};u(Z$,Dj);
Z$.prototype.start=function(a){var b=this;return this.l.g.then(function(c){if(c.g)return Promise.reject(new Ji("Mirroring already started"));if(b.o)return Promise.reject(new Ji("Session permanently stopped"));b.m=new lb("MediaRouter.WebRtc.Session.Launch");c.ga.addStream(a);c.start();return b.w.g})};
Z$.prototype.stop=function(){var a=this;this.w.reject(new Ji("Session stop requested."));this.s&&(this.s.end(),this.s=null);if(this.o)return this.o;this.D=this.C=!1;this.m=null;return this.o=this.l.g.then(function(b){b.stop()}).then(function(){return a.g.dispose()}).catch(function(b){a.g.dispose();throw b;})};
var Nla=function(a){a.g.onMessage=function(b){if(!b.type)throw Error("Message has no type.");switch(b.type){case "TURN_CREDENTIALS":a.l.resolve(new Pj(a.h.id,b.data.credentials));break;case "ANSWER":a.l.g.then(function(c){Xj(c,b.data)});break;case "KNOCK_ANSWER":a.D=!0;a.l.g.then(function(c){Xj(c,b.data)});break;case "STOP":a.w.reject(new Ji("Stop signal received"));a.stop();break;default:throw new Ji("Unknown message type: "+b.type);}}},Ola=function(a){a.l.g.then(function(b){Tj(b,function(c){a.g.sendMessage(new Jj("OFFER",
new Lj(c,a.G,Nj)))});Uj(b,function(c){c=Kj(c);a.g.sendMessage(c)});Qj(b,function(){a.C=!0;a.g.sendMessage(new Jj("SESSION_START_SUCCESS"));!a.D&&a.m&&a.m.end();a.m=null;a.s=new rb("MediaRouter.WebRtc.Session.Length");a.w.resolve(a)});Sj(b,function(){a.g.sendMessage(new Jj("SESSION_END"))});Rj(b,function(c){a.C||a.w.reject(c);a.g.sendMessage(new Jj("SESSION_FAILURE"))})})};var $$=function(){rj.call(this,"webrtc")};u($$,rj);k=$$.prototype;k.zh=function(a,b){return new Z$(a,b)};k.Wg=function(){Y$(0)};k.Tg=function(){Y$(1)};k.di=function(){Y$(2)};k.Ug=function(){ub("MediaRouter.WebRtc.Session.End")};k.Ff=function(a){vb("MediaRouter.WebRtc.Start.Failure",a,Ii)};k.Vg=function(){ub("MediaRouter.WebRtc.Stream.End")};var Pla=new $$;ij("mr.mirror.webrtc.WebRtcService",Pla);