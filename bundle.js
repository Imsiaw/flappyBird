(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var i=t.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var r=i.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"assesst/jumpingBird.png",i=t.p+"assesst/fallingBird.png";function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=new Image;s.src=i;var a=new Image;a.src=e;var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.sizeX=34,this.sizeY=24,this.x=70,this.y=200,this.fallStatus=!0,this.isFirstToSaveLength=!0,this.jumpHeightLength=0,this.gravity=1.1,this.images={fall:s,jump:a},this.live=!1,this.rotation=0}var e,i,n;return e=t,(i=[{key:"draw",value:function(){this.fallStatus?(this.rotation<.12&&(this.rotation+=.01),this.ctx.save(),this.ctx.translate(this.x,this.y),this.ctx.rotate(Math.PI*this.rotation),this.ctx.drawImage(this.images.fall,-17,-12,this.sizeX,this.sizeY),this.ctx.restore()):(this.rotation>-.19&&(this.rotation-=.07),this.ctx.save(),this.ctx.translate(this.x,this.y),this.ctx.rotate(Math.PI*this.rotation),this.ctx.drawImage(this.images.jump,-17,-12,this.sizeX,this.sizeY),this.ctx.restore())}},{key:"fall",value:function(){this.y+=.9*this.gravity,this.gravity+=.05}},{key:"jump",value:function(){this.isFirstToSaveLength&&(this.gravity=1,this.jumpHeightLength=this.y,this.isFirstToSaveLength=!1),this.y>this.jumpHeightLength-65?this.y-=3.5:(this.isFirstToSaveLength=!0,this.fallStatus=!0)}},{key:"gameover",value:function(){this.x-=1}}])&&r(e.prototype,i),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const h=t.p+"assesst/pipe-green.png",o=t.p+"assesst/pipe-green-rev.png";function c(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=new Image;u.src=h;var l=new Image;l.src=o;var f=function(){function t(e,i,r,s,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.barrierHeight=380,this.barrierWidth=52,this.corridorHeight=120,this.canvasHeight=i,this.canvasWidth=r,this.status=this.chance(),this.gameSpeed=1,this.ctx=e,this.x=s,this.id=a,this.images={toUp:u,toDown:l}}var e,i,r;return e=t,(i=[{key:"draw",value:function(){"upBarrier"==this.status.mode?this.ctx.drawImage(this.images.toDown,this.x,this.status.y,this.barrierWidth,this.barrierHeight):"downBarrier"==this.status.mode?this.ctx.drawImage(this.images.toUp,this.x,this.status.y,this.barrierWidth,this.barrierHeight):(this.ctx.drawImage(this.images.toDown,this.x,this.status.y,this.barrierWidth,this.barrierHeight),this.ctx.drawImage(this.images.toUp,this.x,this.status.y2,this.barrierWidth,this.barrierHeight))}},{key:"move",value:function(){this.x-=this.gameSpeed}},{key:"chance",value:function(){if(1==Math.floor(2*Math.random())){var t=this.canvasHeight-this.corridorHeight,e=Math.floor(Math.random()*t),i=this.canvasHeight-(t-e);return{y:-(this.barrierHeight-e),y2:i,mode:"2barrier"}}return 1==Math.floor(2*Math.random())?{y:this.canvasHeight-this.barrierHeight,mode:"downBarrier"}:{y:this.barrierHeight-(this.canvasHeight-this.corridorHeight),mode:"upBarrier"}}}])&&c(e.prototype,i),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();const g=t.p+"assesst/background.png";function d(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=new Image;v.src=g;var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.size=0,this.ctx=e,this.x=0,this.y=0,this.src=v,this.speedGame=1}var e,i,r;return e=t,(i=[{key:"draw",value:function(){this.ctx.drawImage(this.src,0,0,1682,500,this.x,0,1682,500)}},{key:"move",value:function(){-561==this.x&&(this.x=0,console.log("s")),this.x-=this.speedGame}}])&&d(e.prototype,i),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();const w=t.p+"assesst/gameover.png",y=t.p+"assesst/restart.png";function m(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var b=new Image;b.src=w;var x=new Image;x.src=y;var H=function(){function t(e,i,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.status=!1,this.canvasHeight=i,this.canvasWidth=r,this.restartBtnSizeX=45,this.restartBtnSizeY=44,this.restartBtnX=this.canvasWidth/2-70,this.restartBtnY=this.canvasHeight/2+45}var e,i,r;return e=t,(i=[{key:"draw",value:function(t){t>60&&(this.ctx.drawImage(b,(this.canvasWidth-290)/2,this.canvasHeight/2,192,42),this.ctx.drawImage(x,this.restartBtnX,this.restartBtnY,this.restartBtnSizeX,this.restartBtnSizeY))}}])&&m(e.prototype,i),r&&m(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();const S=t.p+"assesst/menu.png";function j(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var k=new Image;k.src=S;var B=function(){function t(e,i,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.x=0,this.y=0,this.canvasWidth=i,this.canvasHeight=r}var e,i,r;return e=t,(i=[{key:"draw",value:function(){this.ctx.drawImage(k,this.canvasWidth/2-92,this.canvasHeight/2-133.5,184,267)}}])&&j(e.prototype,i),r&&j(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var P,W,z,E,L,O,T,X,Y,F,M=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.score=0}var e,i,r;return e=t,(i=[{key:"draw",value:function(t){this.score=null==t?0:t,this.ctx.fillStyle="white",this.ctx.font="30px font1",this.ctx.fillText("Score:".concat(this.score),20,25)}},{key:"addScore",value:function(){this.score+=1}}])&&I(e.prototype,i),r&&I(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),C=document.querySelector("#canvas"),A=C.getContext("2d");Y=[],F={},C.width=420,C.height=500,X=0,L=!0,window.addEventListener("resize",(function(){cancelAnimationFrame(E),J(),L=!0,U()})),window.addEventListener("DOMContentLoaded",(function(t){J(),U()})),window.addEventListener("keydown",(function(t){P.live&&"Space"==t.code&&(P.fallStatus=!1)})),window.addEventListener("touchstart",(function(t){P.fallStatus=!1})),C.addEventListener("touchstart",(function(t){z.status?D(t):L&&(P.live=!0,L=!1)})),C.addEventListener("click",(function(t){z.status?D(t):L&&(P.live=!0,L=!1)}),!0);var D=function(t){t.offsetX>z.restartBtnX&&t.offsetX<z.restartBtnX+z.restartBtnSizeX&&t.offsetY>z.restartBtnY&&t.offsetY<z.restartBtnSizeY+z.restartBtnY&&(cancelAnimationFrame(E),U(),P.live=!0,X=0)},U=function(){X=0,T=new M(A),O=new B(A,C.width,C.height),W=new p(A),P=new n(A),z=new H(A,C.width,C.height),Y=[],$()},$=function t(){A.clearRect(0,0,C.width,C.height),R(),G(),q(),L||z.status||T.draw(Object.keys(F).length),L&&O.draw(),z.status&&K(),E=requestAnimationFrame(t)},q=function(){(P.y>=C.height||P.y<-20)&&(cancelAnimationFrame(E),z.status=!0),P.live&&(P.fallStatus?P.fall():P.jump()),P.draw()},G=function(){!function(){if(Y.length<3)for(var t=Y.length;t<3;t++)if(null==Y[0])Y.push(new f(A,C.height,C.width,C.width,0));else{var e=Y[Y.length-1].x+200;X++,Y.push(new f(A,C.height,C.width,e,X))}}();for(var t=0;t<Y.length;t++)Y[t].x+52<P.x&&(F[Y[t].id]=Y[t].id),Y[t].x<-60&&Y.splice(t,1),P.live&&Y[t].move(),Y[t].draw(),N(t)},N=function(t){var e=Y[t];null==e.status.y2?P.x>e.x&&P.x<e.x+e.barrierWidth&&P.y>e.status.y&&P.y<e.status.y+e.barrierHeight&&(z.status=!0):P.x>e.x&&P.x<e.x+e.barrierWidth&&(P.y>e.status.y&&P.y<e.status.y+e.barrierHeight||P.y>e.status.y2&&P.y<e.status.y2+e.barrierHeight)&&(z.status=!0)},R=function(){P.live&&W.move(),W.draw()},J=function(){(window.innerWidth<420||C.height<500)&&(C.width=window.innerWidth,C.height=500)},K=function(){P.live=!1,z.draw(P.x,P.y)}})();