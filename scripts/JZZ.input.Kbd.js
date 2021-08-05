/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/jzz-input-kbd@1.1.1/javascript/JZZ.input.Kbd.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e:"function"==typeof define&&define.amd?define("JZZ.input.Kbd",["JZZ"],e):e(JZZ)}(0,function(t){if(t){t.input||(t.input={});for(var e,i={" ":32,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,"+":61,"=":61,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,_:173,"-":173,"[":219,"{":219,"]":221,"}":221,"|":220,"\\":220,"`":192,"~":192,";":59,":":59,"'":222,'"':222,",":188,"<":188,".":190,">":190,"/":191,"?":191},s={a:10,b:11,c:12,d:13,e:14,f:15,A:10,B:11,C:12,D:13,E:14,F:15},n=0;n<16;n++)s[n]=n;a.prototype.channel=function(t){if(void 0===this.mpe){var e=s[t];void 0!==e&&(this.chan=e)}return this.chan},u.prototype._info=function(t){return{type:"html/javascript",name:r(t,"ASCII"),manufacturer:"virtual",version:"1.1.1"}},u.prototype._openIn=function(e,i){var s=new a(this._arg);s.mpe?(e._orig._mpe||(e._orig._mpe=t.MPE()),e._orig._mpe.setup(s.mpe[0],s.mpe[1]),s.noteOn=function(i){var s=t.MIDI(144+this.chan,i,127);s._mpe=i,e._receive(s)},s.noteOff=function(i){var s=t.MIDI(128+this.chan,i,127);s._mpe=i,e._receive(s)}):(s.noteOn=function(i){e._receive(t.MIDI(144+this.chan,i,127))},s.noteOff=function(i){e._receive(t.MIDI(128+this.chan,i,127))}),e._info=this._info(i),e._close=function(){s._close()},e.channel=function(t){return s.channel(t)},e._resume()},t.input.ASCII=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new u;return s._arg=i,t.lib.openMidiIn(e,s)},t.input.ASCII.register=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new u;return s._arg=i,t.lib.registerMidiIn(e,s)},k.prototype.channel=function(t){if(void 0===this.mpe){var e=s[t];if(void 0!==e&&e!=this.chan){for(var i in this.playing)f(this.keys[i],this.stl0[i]),f(this.keys[i],this.locs[i]);this.chan=e}}return this.chan},k.prototype._close=function(){for(var t in this.playing)"M"!=this.playing[t]&&"T"!=this.playing[t]||this.noteOff(t);this.resize&&window.removeEventListener("resize",this.resize),this.cleanup()},k.prototype.press=function(t){f(this.keys[t],this.stl1[t]),f(this.keys[t],this.locs[t]),this.noteOn(t)},k.prototype.release=function(t){f(this.keys[t],this.stl0[t]),f(this.keys[t],this.locs[t]),this.noteOff(t)},k.prototype.forward=function(t){var e=t[1],i=t.getChannel();if(i>=this.chan&&i<=(this.mpe?this.chan+this.mpe[1]:this.chan)){var s=t[0]>>4;if(t.isNoteOn())this.playing[e]="E",f(this.keys[e],this.stl1[e]),f(this.keys[e],this.locs[e]);else if(t.isNoteOff())this.playing[e]=void 0,f(this.keys[e],this.stl0[e]),f(this.keys[e],this.locs[e]);else if(11==s&&(120==e||123==e))for(var n in this.playing)this.playing[n]&&(this.playing[n]=void 0,f(this.keys[n],this.stl0[n]),f(this.keys[n],this.locs[n]))}this.emit(t)},k.prototype.findKey=function(t,e,i){for(var s in this.keys)for(var n=document.elementFromPoint(t,e);n;n=n.parentNode)if(this.keys[s]==n)return void(i[s]=!0)},k.prototype.create=function(){for(var t=0,e=0;e<this.bins.length&&this.bins[e]<=window.innerWidth;e++)t=this.bins[e];this.current=this.params[t],this.createCurrent()},k.prototype.createCurrent=function(){if(this.cleanup(),this.keys={},this.locs={},this.stl0={},this.stl1={},this.playing={},this.touches={},this.current.keys)this.createWithKeys(this.current.keys);else{"string"==typeof this.current.at&&(this.current.at=document.getElementById(this.current.at));try{this.createAt(this.current.at)}catch(t){this.bottom||(this.bottom=document.createElement("div"),document.body.appendChild(this.bottom)),this.createAt(this.bottom)}}},k.prototype.createWithKeys=function(e){for(var i in e){var s=t.MIDI.noteValue(e[i][1]),n=e[i][0];"string"==typeof n&&(n=document.getElementById(n)),this.keys[s]=n,this.locs[s]={},this.stl0[s]={},this.stl1[s]={}}this.current.onCreate&&this.current.onCreate.apply(this),this.setListeners()},k.prototype.createAt=function(t){t.innerHTML="";var e,i,s,n=this.current.pos.toUpperCase(),o=v(this.current.from),r=v(this.current.to,!0),h=r-o+1,a=h*this.current.ww+1,u=this.current.wl+1,p=this.current.ww-1,c=this.current.wl-1,l=this.current.bw-1,d=this.current.bl-1,y="N"!=n^!this.current.rev,g="E"!=n^!this.current.rev,b=document.createElement("span");b.style.display="inline-block",b.style.position="relative",b.style.margin="0px",b.style.padding="0px",b.style.borderStyle="none",b.style.userSelect="none",b.style.MozUserSelect="none",b.style.WebkitUserSelect="none",b.style.MsUserSelect="none",b.style.KhtmlUserSelect="none",b.style.cursor="default","E"==n||"W"==n?(b.style.width=u+"px",b.style.height=a+"px"):(b.style.width=a+"px",b.style.height=u+"px");for(var w=0;w<h;w++)e=m(w+o),i=document.createElement("span"),this.keys[e]=i,s={display:"inline-block",position:"absolute",margin:"0px",padding:"0px",borderStyle:"solid",borderWidth:"1px"},this.locs[e]=s,"E"==n||"W"==n?(s.width=c+"px",s.height=p+"px",s.left="0px",s[g?"top":"bottom"]=this.current.ww*w+"px"):(s.width=p+"px",s.height=c+"px",s.top="0px",s[y?"left":"right"]=this.current.ww*w+"px",s.verticalAlign="top"),this.stl0[e]={backgroundColor:"#fff",borderColor:"#000"},this.stl1[e]={backgroundColor:"#aaa",borderColor:"#000"},f(i,this.stl0[e]),f(i,s),b.appendChild(i);var k=Math.ceil(this.current.ww-3*this.current.bw/4);(k+this.current.ww)%2&&k--;var x=m(o)+1,I=m(r);for(e=x;e<I;e++){var M,E=e%12,_=Math.floor(e/12);if(1==E)M=Math.floor(this.current.ww*(7*_+1.5-o))-k/2-this.current.bw;else if(3==E)M=Math.floor(this.current.ww*(7*_+1.5-o)+k/2);else if(6==E)M=this.current.ww*(7*_+5-o)-Math.floor(this.current.bw/2)-k-this.current.bw;else if(8==E)M=this.current.ww*(7*_+5-o)-Math.floor(this.current.bw/2);else{if(10!=E)continue;M=this.current.ww*(7*_+5-o)-Math.floor(this.current.bw/2)+k+this.current.bw}i=document.createElement("span"),this.keys[e]=i,s={display:"inline-block",position:"absolute",margin:"0px",padding:"0px",borderStyle:"solid",borderWidth:"1px"},this.locs[e]=s,"E"==n||"W"==n?(s.width=d+"px",s.height=l+"px",s["E"==n?"right":"left"]="0px",s[g?"top":"bottom"]=M+"px"):(s.width=l+"px",s.height=d+"px",s["N"==n?"top":"bottom"]="0px",s[y?"left":"right"]=M+"px"),this.stl0[e]={backgroundColor:"#000",borderColor:"#000"},this.stl1[e]={backgroundColor:"#888",borderColor:"#000"},f(i,this.stl0[e]),f(i,s),b.appendChild(i)}this.current.onCreate&&this.current.onCreate.apply(this),t.appendChild(b),this.current.at=t,this.at=t,this.setListeners()},k.prototype.setListeners=function(){var t,i;if(void 0===this.current.active||this.current.active)for(t in this.watchButtons=function(t){e=t.buttons},this.mouseUpHandle=(i=this,function(t){l(t=p(t))&&(i.mouseDown=!1)}),window.addEventListener("mousedown",this.watchButtons),window.addEventListener("mousemove",this.watchButtons),window.addEventListener("mouseup",this.mouseUpHandle),this.touchHandle=function(t){return function(e){e.preventDefault();for(var i={},s=0;s<e.touches.length;s++)t.findKey(e.touches[s].clientX,e.touches[s].clientY,i);var n,o={};for(n in i)n in t.touches?o[n]=!0:void 0===t.playing[n]&&(t.playing[n]="T",t.press(n),o[n]=!0);for(n in t.touches)n in i||(t.playing[n]=void 0,t.release(n));t.touches=o}}(this),this.mouseDownH=[],this.mouseOverH=[],this.mouseOutH=[],this.mouseUpH=[],this.keys)this.mouseDownH[t]=y(this,t),this.mouseOverH[t]=g(this,t),this.mouseOutH[t]=b(this,t),this.mouseUpH[t]=w(this,t),this.keys[t].addEventListener("mousedown",this.mouseDownH[t]),this.keys[t].addEventListener("mouseover",this.mouseOverH[t]),this.keys[t].addEventListener("mouseout",this.mouseOutH[t]),this.keys[t].addEventListener("mouseup",this.mouseUpH[t]),this.keys[t].addEventListener("touchstart",this.touchHandle),this.keys[t].addEventListener("touchmove",this.touchHandle),this.keys[t].addEventListener("touchend",this.touchHandle);for(t in this.keys)this.keys[t].ondragstart=d,this.keys[t].onselectstart=d;if(!this.resize&&this.bins.length>1){var s=this;this.resize=function(){s.onResize()},window.addEventListener("resize",this.resize)}},k.prototype.cleanup=function(){for(var t in this.watchButtons&&(window.removeEventListener("mousedown",this.watchButtons),window.removeEventListener("mousemove",this.watchButtons),window.removeEventListener("mouseup",this.mouseUpHandle)),this.keys)this.mouseDownH[t]&&this.keys[t].removeEventListener("mousedown",this.mouseDownH[t]),this.mouseOverH[t]&&this.keys[t].removeEventListener("mouseover",this.mouseOverH[t]),this.mouseOutH[t]&&this.keys[t].removeEventListener("mouseout",this.mouseOutH[t]),this.mouseUpH[t]&&this.keys[t].removeEventListener("mouseup",this.mouseUpH[t]),this.touchHandle&&(this.keys[t].removeEventListener("touchstart",this.touchHandle),this.keys[t].removeEventListener("touchmove",this.touchHandle),this.keys[t].removeEventListener("touchend",this.touchHandle));this.at&&(this.at.innerHTML="")},k.prototype.settings=function(){return h(this.current)},k.prototype.onResize=function(){for(var t=0,e=0;e<this.bins.length&&this.bins[e]<=window.innerWidth;e++)t=this.bins[e];this.current!=this.params[t]&&(this.current=this.params[t],this.createCurrent())},k.prototype.getKey=function(e){var i=new x(this),s=t.MIDI.noteValue(e);return void 0!==this.keys[s]&&i.keys.push(s),i},k.prototype.getKeys=function(e,i){var s=new x(this),n=void 0===e?void 0:t.MIDI.noteValue(e),o=void 0===i?void 0:t.MIDI.noteValue(i);if(void 0!==n&&void 0!==o&&o<n){var r=n;n=o,o=r}for(var h in this.keys)void 0!==n&&h<n||void 0!==o&&h>o||s.keys.push(h);return s},k.prototype.getWhiteKeys=function(e,i){var s=new x(this),n=void 0===e?void 0:t.MIDI.noteValue(e),o=void 0===i?void 0:t.MIDI.noteValue(i);if(void 0!==n&&void 0!==o&&o<n){var r=n;n=o,o=r}for(var h in this.keys)if(!(void 0!==n&&h<n||void 0!==o&&h>o)){var a=h%12;1!=a&&3!=a&&6!=a&&8!=a&&10!=a&&s.keys.push(h)}return s},k.prototype.getBlackKeys=function(e,i){var s=new x(this),n=void 0===e?void 0:t.MIDI.noteValue(e),o=void 0===i?void 0:t.MIDI.noteValue(i);if(void 0!==n&&void 0!==o&&o<n){var r=n;n=o,o=r}for(var h in this.keys)if(!(void 0!==n&&h<n||void 0!==o&&h>o)){var a=h%12;1!=a&&3!=a&&6!=a&&8!=a&&10!=a||s.keys.push(h)}return s},x.prototype.setInnerHTML=function(t){for(var e in this.keys)this.piano.keys[this.keys[e]].innerHTML=t;return this},x.prototype.setStyle=function(t,e){var i,s,n;for(i in void 0===e&&(e=t),this.keys){for(s in n=this.keys[i],t)this.piano.stl0[n][s]=t[s];for(s in e)this.piano.stl1[n][s]=e[s];f(this.piano.keys[n],this.piano.playing[n]?this.piano.stl1[n]:this.piano.stl0[n]),f(this.piano.keys[n],this.piano.locs[n])}return this},I.prototype._info=function(t){return{type:"html/javascript",name:r(t,"Kbd"),manufacturer:"virtual",version:"1.1.1"}},I.prototype._openIn=function(e,i){var s=new k(this._arg);s.send=function(){e.send.apply(e,arguments)},s.connect=function(){e.connect.apply(e,arguments)},s.create(),s.mpe?(e._orig._mpe||(e._orig._mpe=t.MPE()),e._orig._mpe.setup(s.mpe[0],s.mpe[1]),s.noteOn=function(i){var s=t.MIDI(144+this.chan,i,127);s._mpe=i,e._emit(e._filter(s))},s.noteOff=function(i){var s=t.MIDI(128+this.chan,i,127);s._mpe=i,e._emit(e._filter(s))}):(s.noteOn=function(i){e._emit(t.MIDI(144+this.chan,i,127))},s.noteOff=function(i){e._emit(t.MIDI(128+this.chan,i,127))}),s.emit=function(t){e._emit(e._filter(t))},e._info=this._info(i),e._receive=function(t){s.forward(t)},e._close=function(){s._close()},e.settings=function(){return s.settings()},e.getKey=function(t){return s.getKey(t)},e.getKeys=function(t,e){return s.getKeys(t,e)},e.getWhiteKeys=function(t,e){return s.getWhiteKeys(t,e)},e.getBlackKeys=function(t,e){return s.getBlackKeys(t,e)},e.channel=function(t){return s.channel(t)},e._resume()},t.input.Kbd=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new I;return s._arg=i,t.lib.openMidiIn(e,s)},t.input.Kbd.version=function(){return"1.1.1"},t.input.Kbd.register=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new I;return s._arg=i,t.lib.registerMidiIn(e,s)};var o={margin:0,padding:0,width:"100%",height:"100%"};M.prototype.setBase=function(t){t=parseFloat(t),!isNaN(t)&&isFinite(t)&&t>=0&&t<=1&&(this.base=t)},M.prototype.setValue=function(t){if(t=parseFloat(t),!(isNaN(t)||!isFinite(t)||t<0||t>1||t==this.val))return this.val=t,this.num=Math.round(t*(this.lsb||!this.msb?16383:127)),!0},M.prototype.emit=function(t){this.msb?this.lsb?(t.emit([176+this.chan,this.msb,this.num>>7]),t.emit([176+this.chan,this.lsb,127&this.num])):t.emit([176+this.chan,this.msb,this.num]):t.emit([224+this.chan,127&this.num,this.num>>7])},M.prototype.read=function(t){if(!this.msb&&t[0]==224+this.chan&&t[1]==parseInt(t[1])&&t[2]==parseInt(t[2]))return this.num=t[2]<<7|127&t[1],this.val=this.num/16383,!0;if(this.msb&&t[0]==176+this.chan&&t[2]==parseInt(t[2])){if(t[1]==this.msb)return this.lsb?(this.num=t[2]<<7|127&this.num,this.val=this.num/16383):(this.num=127&t[2],this.val=this.num/127),!0;if(t[1]==this.lsb)return this.num=16256&this.num|127&t[2],this.val=this.num/16383,!0}},E.prototype.setInnerHTML=function(t){return this.inner.innerHTML=t,this},E.prototype.setStyle=function(t,e){var i;for(i in void 0===e&&(e=t),t)this.stl0[i]=t[i];for(i in e)this.stl1[i]=e[i];return f(this.span,this.ctrl.isSelected()?this.stl1:this.stl0),f(this.span,this.stl),this},_.prototype._close=function(){this.at&&(this.at.innerHTML=""),this.mouseUpHandler&&window.removeEventListener("mouseup",this.mouseUpHandler)},_.prototype.create=function(){for(var t=0,e=0;e<this.bins.length&&this.bins[e]<=window.innerWidth;e++)t=this.bins[e];this.current=this.params[t],this.createCurrent()},_.prototype.createCurrent=function(){this.at&&(this.at.innerHTML=""),"string"==typeof this.current.at&&(this.current.at=document.getElementById(this.current.at));try{this.createAt(this.current.at)}catch(t){this.bottom||(this.bottom=document.createElement("div"),document.body.appendChild(this.bottom)),this.createAt(this.bottom)}},_.prototype.onResize=function(){for(var t=0,e=0;e<this.bins.length&&this.bins[e]<=window.innerWidth;e++)t=this.bins[e];this.current!=this.params[t]&&(this.current=this.params[t],this.createCurrent())},_.prototype.settings=function(){return h(this.current)},_.prototype.isSelected=function(){return void 0!==this.dragX},_.prototype.restyle=function(){for(var t in this.spans)this.spans[t].setStyle()},_.prototype.onMouseDown=function(t){var i;void 0===this.dragX&&(this.dragX=t.clientX,this.dragY=t.clientY,this.mouseMove=(i=this,function(t){e=t.buttons,i.onMouseMove(t)}),this.mouseUp=function(t){return function(e){l(e=p(e))&&(window.removeEventListener("mousemove",t.mouseMove),window.removeEventListener("mouseup",t.mouseUp),t.dragX=void 0,t.restyle(),t.onMouseUp(e))}}(this),window.addEventListener("mousemove",this.mouseMove),window.addEventListener("mouseup",this.mouseUp),this.restyle())},_.prototype.onMouseMove=function(t){void 0!==this.dragX&&this.onMove(t.clientX,t.clientY)},_.prototype.onMouseUp=function(){},_.prototype.onTouchStart=function(t){t.preventDefault(),void 0===this.dragX&&(this.touch=t.targetTouches[0].identifier,this.dragX=t.targetTouches[0].clientX,this.dragY=t.targetTouches[0].clientY,this.restyle())},_.prototype.onTouchMove=function(t){if(t.preventDefault(),void 0!==this.dragX&&void 0!==this.touch)for(var e in t.targetTouches)if(t.targetTouches[0].identifier==this.touch)return void this.onMove(t.targetTouches[e].clientX,t.targetTouches[e].clientY)},_.prototype.onTouchEnd=function(t){t.preventDefault(),this.touch=void 0,this.dragX=void 0,this.restyle(),this.onMouseUp(t)},D.prototype=new _,D.prototype.channel=function(t){var e=s[t];return void 0!==e&&e!=this.chan&&(this.chan=e,this.data.chan=e,this.setValue(this.data.base)),this.chan},D.prototype.createAt=function(t){t.innerHTML="";var e=parseInt(this.current.bh),i=parseInt(this.current.bw),s=parseInt(this.current.rh);s||(s=128),this.rh=s;var n=parseInt(this.current.rw);n||(n=2);var r=parseInt(this.current.kh);r||(r=24);var h=parseInt(this.current.kw);h||(h=16);var a=this.current.pos.toUpperCase();this.pos=a,this.data||(this.data=new M(this.current.data),this.data.chan=this.chan,this.data.setBase(this.current.base),this.data.setValue(this.current.val)),this.dx=-h/2,this.dy=-(r/2+1),e||(e=r+s+2),i||(i=(h>n?h:n)+2),this.stlB={display:"inline-block",position:"relative",margin:"0",padding:"0",userSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",OUserSelect:"none",WebkitUserSelect:"none",cursor:"default"},this.stlB0={borderStyle:"none"},this.stlB1={borderStyle:"none"},this.stlR={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlR0={backgroundColor:"#aaa"},this.stlR1={backgroundColor:"#bbb"},this.stlK={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlK0={backgroundColor:"#ddd"},this.stlK1={backgroundColor:"#eee"},"E"==a||"W"==a?(this.stlB.width=e+"px",this.stlB.height=i+"px",this.stlR.width=s+"px",this.stlR.height=n+"px",this.stlR.left=(e-s)/2-1+"px",this.stlR.top=(i-n)/2-1+"px",this.stlK.width=r+"px",this.stlK.height=h+"px",this.stlK.top=this.dx+"px"):(this.stlB.width=i+"px",this.stlB.height=e+"px",this.stlR.width=n+"px",this.stlR.height=s+"px",this.stlR.top=(e-s)/2-1+"px",this.stlR.left=(i-n)/2-1+"px",this.stlK.width=h+"px",this.stlK.height=r+"px",this.stlK.left=this.dx+"px");var u=document.createElement("span");this.box=u;var p=document.createElement("span");f(p,o),this.boxSpan=new E(this,u,p,this.stlB,this.stlB0,this.stlB1);var c=document.createElement("span");this.range=c;var l=document.createElement("span");f(l,o),this.rangeSpan=new E(this,c,l,this.stlR,this.stlR0,this.stlR1);var v=document.createElement("span");if(this.knob=v,this.knobSpan=new E(this,v,v,this.stlK,this.stlK0,this.stlK1),this.spans=[this.boxSpan,this.rangeSpan,this.knobSpan],(void 0===this.current.active||this.current.active)&&(u.addEventListener("touchstart",B),v.addEventListener("mousedown",K(this)),v.addEventListener("touchstart",L(this)),v.addEventListener("touchmove",C(this)),v.addEventListener("touchend",X(this))),this.current.onCreate&&this.current.onCreate.apply(this),c.appendChild(l),c.appendChild(v),u.appendChild(p),u.appendChild(c),u.ondragstart=d,u.onselectstart=d,t.appendChild(u),!this.at&&this.bins.length>1){var m=this;this.resize=function(){m.onResize()},window.addEventListener("resize",this.resize)}this.current.at=t,this.at=t,this.setValue(),f(this.box,void 0===this.dragX?this.stlB0:this.stlB1),f(this.box,this.stlB),f(this.range,void 0===this.dragX?this.stlR0:this.stlR1),f(this.range,this.stlR),f(this.knob,void 0===this.dragX?this.stlK0:this.stlK1),f(this.knob,this.stlK)},D.prototype.getBox=function(){return this.boxSpan},D.prototype.getRange=function(){return this.rangeSpan},D.prototype.getKnob=function(){return this.knobSpan},D.prototype.setValue=function(t){if(void 0===t)t=this.data.val;else if(!this.data.setValue(t))return;t=this.data.val,"N"!=this.pos&&"W"!=this.pos||(t=1-t),t*=this.rh,this.coord=t,t+=this.dy,"N"==this.pos||"S"==this.pos?(this.stlK.top=t+"px",this.knob.style.top=t+"px"):(this.stlK.left=t+"px",this.knob.style.left=t+"px")},D.prototype.onMove=function(t,e){var i;(i="N"==this.pos||"S"==this.pos?this.coord+e-this.dragY:this.coord+t-this.dragX)<0&&(i=0),i>this.rh&&(i=this.rh),this.move(i)},D.prototype.move=function(t){if(this.coord!=t){"N"==this.pos||"S"==this.pos?(this.knob.style.top=t+this.dy+"px",this.stlK.top=this.knob.style.top,this.dragY+=t-this.coord):(this.knob.style.left=t+this.dy+"px",this.stlK.left=this.knob.style.left,this.dragX+=t-this.coord);var e=t/this.rh;"N"!=this.pos&&"W"!=this.pos||(e=1-e),this.data.setValue(e)&&this.data.emit(this),this.coord=t}},D.prototype.forward=function(t){this.emit(t),this.data.read(t)&&this.setValue()},H.prototype=new _,H.prototype.channel=function(t){var e=s[t];return void 0!==e&&e!=this.chan&&(this.chan=e,this.dataX.chan=e,this.dataY.chan=e,this.setValue(this.dataX.base,this.dataY.base)),this.chan},H.prototype.createAt=function(t){t.innerHTML="";var e=parseInt(this.current.bh),i=parseInt(this.current.bw),s=parseInt(this.current.rh);s||(s=128),this.rh=s;var n=parseInt(this.current.rw);n||(n=128),this.rw=n;var r=parseInt(this.current.kh);r||(r=24);var h=parseInt(this.current.kw);h||(h=16);var a=this.current.pos.toUpperCase();this.pos=a,this.dataX||(this.dataX=new M(this.current.dataX),this.dataY=new M(this.current.dataY),void 0!==this.current.dataX||void 0===this.current.dataY||this.dataY.msb||(this.dataX=new M("mod")),void 0!==this.current.dataY||this.dataX.msb||(this.dataY=new M("mod")),this.dataX.chan=this.chan,this.dataY.chan=this.chan,this.dataX.setBase(this.current.baseX),this.dataY.setBase(this.current.baseY),this.dataX.setValue(this.current.valX),this.dataY.setValue(this.current.valY)),this.dx=-(h/2+1),this.dy=-(r/2+1),e||(e=r+s+2),i||(i=h+n+2),this.stlB={display:"inline-block",position:"relative",margin:"0",padding:"0",userSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",OUserSelect:"none",WebkitUserSelect:"none",cursor:"default"},this.stlB0={borderStyle:"none"},this.stlB1={borderStyle:"none"},this.stlR={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlR0={backgroundColor:"#aaa"},this.stlR1={backgroundColor:"#bbb"},this.stlK={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlK0={backgroundColor:"#ddd"},this.stlK1={backgroundColor:"#eee"},"E"==a||"W"==a?(this.stlB.width=e+"px",this.stlB.height=i+"px",this.stlR.width=s+"px",this.stlR.height=n+"px",this.stlR.left=(e-s)/2-1+"px",this.stlR.top=(i-n)/2-1+"px",this.stlK.width=r+"px",this.stlK.height=h+"px",this.stlK.top=this.dx+"px"):(this.stlB.width=i+"px",this.stlB.height=e+"px",this.stlR.width=n+"px",this.stlR.height=s+"px",this.stlR.top=(e-s)/2-1+"px",this.stlR.left=(i-n)/2-1+"px",this.stlK.width=h+"px",this.stlK.height=r+"px",this.stlK.left=this.dx+"px");var u=document.createElement("span");this.box=u;var p=document.createElement("span");f(p,o),this.boxSpan=new E(this,u,p,this.stlB,this.stlB0,this.stlB1);var c=document.createElement("span");this.range=c;var l=document.createElement("span");f(l,o),this.rangeSpan=new E(this,c,l,this.stlR,this.stlR0,this.stlR1);var v=document.createElement("span");if(this.knob=v,this.knobSpan=new E(this,v,v,this.stlK,this.stlK0,this.stlK1),this.spans=[this.boxSpan,this.rangeSpan,this.knobSpan],(void 0===this.current.active||this.current.active)&&(u.addEventListener("touchstart",B),v.addEventListener("mousedown",K(this)),v.addEventListener("touchstart",L(this)),v.addEventListener("touchmove",C(this)),v.addEventListener("touchend",X(this))),this.current.onCreate&&this.current.onCreate.apply(this),c.appendChild(l),c.appendChild(v),u.appendChild(p),u.appendChild(c),u.ondragstart=d,u.onselectstart=d,t.appendChild(u),!this.at&&this.bins.length>1){var m=this;this.resize=function(){m.onResize()},window.addEventListener("resize",this.resize)}this.current.at=t,this.at=t,this.setValue(),f(this.box,void 0===this.dragX?this.stlB0:this.stlB1),f(this.box,this.stlB),f(this.range,void 0===this.dragX?this.stlR0:this.stlR1),f(this.range,this.stlR),f(this.knob,void 0===this.dragX?this.stlK0:this.stlK1),f(this.knob,this.stlK)},H.prototype.getBox=function(){return this.boxSpan},H.prototype.getRange=function(){return this.rangeSpan},H.prototype.getKnob=function(){return this.knobSpan},H.prototype.setValue=function(t,e){if(void 0===t)t=this.dataX.val,e=this.dataY.val;else if(!this.dataX.setValue(t)&&!this.dataY.setValue(e))return;t=this.dataX.val,e=this.dataY.val,"N"!=this.pos&&"W"!=this.pos||(e=1-e),"S"!=this.pos&&"W"!=this.pos||(t=1-t),t*=this.rw,e*=this.rh,"N"==this.pos||"S"==this.pos?(this.coordX=t,this.coordY=e):(this.coordX=e,this.coordY=t),t+=this.dx,e+=this.dy,"N"==this.pos||"S"==this.pos?(this.stlK.left=t+"px",this.stlK.top=e+"px"):(this.stlK.top=t+"px",this.stlK.left=e+"px"),this.knob.style.left=this.stlK.left,this.knob.style.top=this.stlK.top},H.prototype.onMove=function(t,e){(t=this.coordX+t-this.dragX)<0&&(t=0),(e=this.coordY+e-this.dragY)<0&&(e=0),"N"==this.pos||"S"==this.pos?(t>this.rw&&(t=this.rw),e>this.rh&&(e=this.rh),this.knob.style.left=t+this.dx+"px",this.knob.style.top=e+this.dy+"px"):(t>this.rh&&(t=this.rh),e>this.rw&&(e=this.rw),this.knob.style.left=t+this.dy+"px",this.knob.style.top=e+this.dx+"px"),this.stlK.left=this.knob.style.left,this.stlK.top=this.knob.style.top,this.dragX+=t-this.coordX,this.dragY+=e-this.coordY,this.coordX=t,this.coordY=e,"E"!=this.pos&&"W"!=this.pos||(t=this.coordY,e=this.coordX),t/=this.rw,e/=this.rh,"N"!=this.pos&&"W"!=this.pos||(e=1-e),"S"!=this.pos&&"W"!=this.pos||(t=1-t),this.dataX.setValue(t)&&this.dataX.emit(this),this.dataY.setValue(e)&&this.dataY.emit(this)},H.prototype.forward=function(t){this.emit(t),(this.dataX.read(t)||this.dataY.read(t))&&this.setValue()},R.prototype._info=function(t){return{type:"html/javascript",name:r(t,"Slider"),manufacturer:"virtual",version:"1.1.1"}},R.prototype._openIn=function(t,e){var i=new D(this._arg);i.connect=function(){t.connect.apply(t,arguments)},i.send=function(){t.send.apply(t,arguments)},i.create(),i.emit=function(e){t._emit(e)},t._info=this._info(e),t._receive=function(t){i.forward(t)},t._close=function(){i._close()},t.settings=function(){return i.settings()},t.getBox=function(){return i.boxSpan},t.getRange=function(){return i.rangeSpan},t.getKnob=function(){return i.knobSpan},t.setValue=function(t){i.setValue(t)},t.channel=function(t){return i.channel(t)},t._resume()},t.input.Slider=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new R;return s._arg=i,t.lib.openMidiIn(e,s)},t.input.Slider.register=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new R;return s._arg=i,t.lib.registerMidiIn(e,s)},V.prototype._info=function(t){return{type:"html/javascript",name:r(t,"Pad"),manufacturer:"virtual",version:"1.1.1"}},V.prototype._openIn=function(t,e){var i=new H(this._arg);i.connect=function(){t.connect.apply(t,arguments)},i.send=function(){t.send.apply(t,arguments)},i.create(),i.emit=function(e){t._emit(e)},t._info=this._info(e),t._receive=function(t){i.forward(t)},t._close=function(){i._close()},t.settings=function(){return i.settings()},t.getBox=function(){return i.boxSpan},t.getRange=function(){return i.rangeSpan},t.getKnob=function(){return i.knobSpan},t.setValue=function(t){i.setValue(t)},t.channel=function(t){return i.channel(t)},t._resume()},t.input.Pad=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new V;return s._arg=i,t.lib.openMidiIn(e,s)},t.input.Pad.register=function(){var e,i;1==arguments.length?"string"==typeof arguments[0]?e=arguments[0]:i=arguments[0]:(e=arguments[0],i=arguments[1]);var s=new V;return s._arg=i,t.lib.registerMidiIn(e,s)}}function r(t,e){return t||e}function h(t){var e={};for(var i in t)e[i]=t[i];return e}function a(e){for(var n in this.notes={},this.playing=[],void 0===e&&(e={}),void 0!==e.mpe?(t.MPE.validate(e.mpe),this.mpe=e.mpe,this.chan=e.mpe[0]):(this.chan=s[e.chan],void 0===this.chan&&(this.chan=0)),e){var o=i[n],r=t.MIDI.noteValue(e[n]);void 0!==o&&void 0!==r&&(this.notes[o]=r)}var h=this;this.keydown=function(t){var e=h.notes[t.keyCode];void 0!==e&&(t.preventDefault(),h.playing[e]||(h.playing[e]=!0,h.noteOn(e)))},this.keyup=function(t){var e=h.notes[t.keyCode];void 0!==e&&(t.preventDefault(),h.playing[e]&&(h.playing[e]=void 0,h.noteOff(e)))},"string"==typeof e.at&&(this.at=document.getElementById(e.at));try{this.at.addEventListener("keydown",this.keydown),this.at.addEventListener("keyup",this.keyup),(!this.at.tabIndex||this.at.tabIndex<0)&&(this.at.tabIndex=0)}catch(t){document.addEventListener("keydown",this.keydown),document.addEventListener("keyup",this.keyup),this.at=document}this._close=function(){for(var t in this.at.removeEventListener("keydown",this.keydown),this.at.removeEventListener("keyup",this.keyup),h.playing)h.noteOff(t)}}function u(){}function p(t){return void 0===t.buttons||t.buttons!=e?t:(t.stopPropagation(),0==t.button?{buttons:1^e}:1==t.button?{buttons:4^e}:2==t.button?{buttons:2^e}:void 0)}function c(t){return void 0===t.buttons?!t.button:1&t.buttons}function l(t){return void 0===t.buttons?!t.button:!(1&t.buttons)}function d(){return!1}function f(t,e){for(var i in e)t.style[i]=e[i]}function v(e,i){return(i?[0,1,1,2,2,3,4,4,5,5,6,6]:[0,0,1,1,2,3,3,4,4,5,5,6])[(e=t.MIDI.noteValue(e))%12]+7*Math.floor(e/12)}function m(t){return 12*Math.floor(t/7)+{0:0,1:2,2:4,3:5,4:7,5:9,6:11}[t%7]}function y(t,i){return function(s){c(s)&&!t.playing[i]&&(t.mouseDown=!0,t.playing[i]="M",t.press(i)),e=s.buttons}}function g(t,i){return function(s){t.mouseDown&&!t.playing[i]&&(t.playing[i]="M",t.press(i)),e=s.buttons}}function b(t,i){return function(s){t.mouseDown&&"M"==t.playing[i]&&!function(t,e){for(;t;t=t.parentNode)if(t==e)return!0;return!1}(s.relatedTarget,this)&&(t.playing[i]=void 0,t.release(i)),e=s.buttons}}function w(t,e){return function(i){l(i=p(i))&&t.mouseDown&&"M"==t.playing[e]&&(t.playing[e]=void 0,t.release(e),t.mouseDown=!1)}}function k(e){this.bins=[],this.params={0:{}};var i,n={from:"C4",to:"E6",ww:42,bw:24,wl:150,bl:100,pos:"N"};for(i in void 0===e&&(e={}),void 0!==e.mpe?(t.MPE.validate(e.mpe),this.mpe=e.mpe,this.chan=e.mpe[0]):(this.chan=s[e.chan],void 0===this.chan&&(this.chan=0)),e)if(i==parseInt(i))this.params[i]=h(e[i]);else{if("chan"==i)continue;if(("from"==i||"to"==i)&&void 0===t.MIDI.noteValue(e[i]))continue;n[i]=e[i]}for(i in this.params){for(var o in this.bins.push(i),n)"from"!=o&&"to"!=o||void 0!==this.params[i][o]&&void 0!==t.MIDI.noteValue(this.params[i][o])||(this.params[i][o]=n[o]),o in this.params[i]||(this.params[i][o]=n[o]);var r=this.params[i].from,a=this.params[i].to;t.MIDI.noteValue(r)>t.MIDI.noteValue(a)&&(this.params[i].from=a,this.params[i].to=r)}this.bins.sort(function(t,e){return t-e})}function x(t){this.piano=t,this.keys=[]}function I(){}function M(t){if(this.base=.5,this.val=.5,this.msb=0,this.lsb=0,this.chan=0,t instanceof Array){if(1!=t.length&&2!=t.length)return;if(2==t.length){if(t[1]!=parseInt(t[1])||t[1]<1||t[1]>127)return;this.msb=t[0],t[1]!=t[0]&&(this.lsb=t[1])}else this.msb=t[0]}else if(t==parseInt(t)){if(t<1||t>127)return;this.msb=t}else{var e={mod:[1,33],breath:[2,34],foot:[4,36],portamento:[5,37],volume:[7,39],balance:[8,40],pan:[10,42],expression:[11,43],effect1:[12,44],effect2:[13,45]}[t];e&&(this.msb=e[0],this.lsb=e[1])}this.msb&&7!=this.msb&&8!=this.msb&&10!=this.msb&&(this.base=0),this.val=-1,this.setValue(this.base)}function E(t,e,i,s,n,o){this.ctrl=t,this.span=e,this.inner=i,this.stl=s,this.stl0=n,this.stl1=o}function _(){}function S(t,e){var i;for(i in this.bins=[],this.params={0:{}},void 0===t&&(t={}),void 0===e&&(e={}),this.chan=s[t.chan],void 0===this.chan&&(this.chan=0),t)if(i==parseInt(i))this.params[i]=h(t[i]);else{if("chan"==i)continue;e[i]=t[i]}for(i in this.params)for(var n in this.bins.push(i),e)"from"!=n&&"to"!=n||void 0!==v(this.params[i][n])||(this.params[i][n]=e[n]),n in this.params[i]||(this.params[i][n]=e[n]);this.bins.sort(function(t,e){return t-e})}function K(t){return function(i){e=i.buttons,c(i)&&t.onMouseDown(i)}}function L(t){return function(e){t.onTouchStart(e)}}function C(t){return function(e){t.onTouchMove(e)}}function X(t){return function(e){t.onTouchEnd(e)}}function B(t){t.preventDefault()}function D(t){S.call(this,t,{pos:"N",rw:2,rh:128,kw:24,kh:16})}function H(t){S.call(this,t,{pos:"N",rw:128,rh:128,kw:24,kh:16})}function R(){}function V(){}});
//# sourceMappingURL=/sm/f7796c46d56e0474d68e090a17b4d331ec90b1469a42261164a7a3517dc21dcc.map