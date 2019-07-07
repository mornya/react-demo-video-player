(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{46:function(t,e,i){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),(o=e.Helpers||(e.Helpers={})).loadScript=function(t,e){return new Promise(function(i,o){if(document.getElementById(t))i(!1);else{var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.id=t,r.src=e,r.async=!0,r.onload=function(){i(!0)},r.onerror=function(){return o(new Error("Loading script was failed."))},n.appendChild(r)}})},o.getUID=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},47:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(48);e.YouTube=o.YouTube;var n=i(49);e.Vimeo=n.Vimeo},48:function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a=s(i(0)),p=i(46),u=function(t){function e(e){var i=t.call(this,e)||this;return i.state={playerId:"youtube-player-frame-"+p.Helpers.getUID()+p.Helpers.getUID(),isPlayerReady:!1,isPlaying:!1,isFirstPlay:!1},i.oYouTube=null,i.refWrapper=null,i.refWrapper=a.createRef(),i.initialize=i.initialize.bind(i),i.getConfigure=i.getConfigure.bind(i),i.onResize=i.onResize.bind(i),i.onReady=i.onReady.bind(i),i.onStateChange=i.onStateChange.bind(i),i.onError=i.onError.bind(i),i}return n(e,t),e.prototype.initialize=function(){window.removeEventListener("youTubeIframeAPIReady",this.initialize),window.addEventListener("resize",this.onResize,!1),this.oYouTube=new window.YT.Player(this.state.playerId,this.getConfigure())},e.prototype.getConfigure=function(){var t=this,e=this.refWrapper.current.offsetWidth,i=this.refWrapper.current.offsetWidth/1.77;return{host:"https://www.youtube.com",origin:window.location.origin,widget_referrer:window.location.origin,videoId:this.props.videoId,width:e,height:i,playerVars:{autoplay:this.props.autoplay?1:0,controls:this.props.controls?1:0,fs:1,rel:0,wmode:"transparent"},events:{onReady:function(e){return t.onReady(e)},onStateChange:function(e){return t.onStateChange(e)},onError:function(e){return t.onError(e)}}}},e.prototype.destroy=function(){this.oYouTube&&(this.oYouTube.stopVideo(),this.oYouTube.destroy(),this.oYouTube=null),window.removeEventListener("resize",this.onResize)},e.prototype.onResize=function(){var t=this;this.resizeTID&&clearTimeout(this.resizeTID),this.resizeTID=setTimeout(function(){var e=t.refWrapper.current.offsetWidth,i=t.refWrapper.current.offsetWidth/1.77;t.oYouTube.setSize(e,i)},500)},e.prototype.onReady=function(t){this.props.onReady(t.target),this.setState({isPlayerReady:!0})},e.prototype.onStateChange=function(t){var e=window.YT.PlayerState;switch(t.data){case e.PLAYING:this.state.isPlaying||this.setState({isPlaying:!0}),this.props.onStateChange("PLAY",t.target);break;case e.PAUSED:case e.ENDED:this.state.isPlaying&&this.setState({isPlaying:!1}),this.props.onStateChange(t.data===e.PAUSED?"PAUSED":"ENDED",t.target)}},e.prototype.onError=function(t){this.props.onError(t)},e.prototype.componentDidMount=function(){window.YT&&window.YT.Player?this.initialize():(window.onYouTubeIframeAPIReady=function(){window.dispatchEvent(new CustomEvent("youTubeIframeAPIReady",{detail:!0}))},window.addEventListener("youTubeIframeAPIReady",this.initialize,!1),p.Helpers.loadScript("yt-jssdk","//www.youtube.com/player_api").finally())},e.prototype.componentDidUpdate=function(t,e){!e.isPlayerReady&&this.state.isPlayerReady&&this.setState({isFirstPlay:!0}),this.state.isFirstPlay&&!e.isPlaying&&this.state.isPlaying&&(this.props.onFinish(),this.setState({isFirstPlay:!1}))},e.prototype.componentWillUnmount=function(){this.destroy()},e.prototype.render=function(){return a.createElement("div",{ref:this.refWrapper,className:"mornya-lib youtube-player"+(this.props.className?" "+this.props.className:""),style:r({},this.props.style,{display:"inline-block",width:"100%",height:"100%",backgroundColor:"#000"})},a.createElement("div",{id:this.state.playerId}))},e.defaultProps={autoplay:!1,controls:!1,onReady:function(){},onStateChange:function(){},onFinish:function(){},onError:function(){}},e}(a.Component);e.YouTube=u},49:function(t,e,i){"use strict";var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a=s(i(0)),p=i(46),u=function(t){function e(e){var i=t.call(this,e)||this;return i.state={playerId:"vimeo-player-frame-"+p.Helpers.getUID()+p.Helpers.getUID(),isPlayerReady:!1,isPlaying:!1,isFirstPlay:!1},i.oVimeo=null,i.refWrapper=null,i.refWrapper=a.createRef(),i.initialize=i.initialize.bind(i),i.getConfigure=i.getConfigure.bind(i),i.destroy=i.destroy.bind(i),i.onResize=i.onResize.bind(i),i.onReady=i.onReady.bind(i),i.onStateChange=i.onStateChange.bind(i),i.onError=i.onError.bind(i),i}return n(e,t),e.prototype.initialize=function(){var t=this;window.removeEventListener("vimeoAPIReady",this.initialize),window.addEventListener("resize",this.onResize,!1),this.oVimeo=new window.Vimeo.Player(this.state.playerId,this.getConfigure()),this.oVimeo.on("play",function(){return t.onStateChange("PLAY")}),this.oVimeo.on("pause",function(){return t.onStateChange("PAUSED")}),this.oVimeo.on("ended",function(){return t.onStateChange("ENDED")}),this.oVimeo.ready().then(function(){t.onReady(),t.setState({isPlayerReady:!0})}).catch(this.onError)},e.prototype.getConfigure=function(){var t=this.refWrapper.current.offsetWidth,e=this.refWrapper.current.offsetWidth/1.77;return{id:this.props.videoId,width:t,height:e,autopause:!0,autoplay:this.props.autoplay,background:this.props.autoplay&&!this.props.controls,byline:!0,loop:!1,muted:!1,playsinline:!0,portrait:!0,speed:!1,title:!0,transparent:!0}},e.prototype.destroy=function(){this.oVimeo&&(this.oVimeo.destroy(),this.oVimeo=null),window.removeEventListener("resize",this.onResize)},e.prototype.onResize=function(){var t=this;this.resizeTID&&clearTimeout(this.resizeTID),this.resizeTID=setTimeout(function(){var e=t.refWrapper.current.offsetWidth,i=t.refWrapper.current.offsetWidth/1.77,o=document.querySelector("#"+t.state.playerId+" iframe");o.style.width=e+"px",o.style.height=i+"px"},500)},e.prototype.onReady=function(){this.props.onReady(this.oVimeo),this.setState({isPlayerReady:!0})},e.prototype.onStateChange=function(t){switch(t){case"PLAY":this.state.isPlaying||this.setState({isPlaying:!0}),this.props.onStateChange("PLAY",this.oVimeo);break;case"PAUSED":case"ENDED":this.state.isPlaying&&this.setState({isPlaying:!1}),this.props.onStateChange(t,this.oVimeo)}},e.prototype.onError=function(t){this.props.onError(t)},e.prototype.componentDidMount=function(){window.Vimeo&&window.Vimeo.Player?this.initialize():(p.Helpers.loadScript("vm-jssdk","//player.vimeo.com/api/player.js").then(function(t){t&&window.dispatchEvent(new CustomEvent("vimeoAPIReady",{detail:!0}))}),window.addEventListener("vimeoAPIReady",this.initialize,!1))},e.prototype.componentDidUpdate=function(t,e){!e.isPlayerReady&&this.state.isPlayerReady&&this.setState({isFirstPlay:!0}),this.state.isFirstPlay&&!e.isPlaying&&this.state.isPlaying&&(this.props.onFinish(),this.setState({isFirstPlay:!1}))},e.prototype.componentWillUnmount=function(){this.destroy()},e.prototype.render=function(){return a.createElement("div",{ref:this.refWrapper,className:"mornya-lib vimeo-player "+(this.props.className?" "+this.props.className:""),style:r({},this.props.style,{display:"inline-block",width:"100%",height:"100%",backgroundColor:"#000"})},a.createElement("div",{id:this.state.playerId}))},e.defaultProps={autoplay:!1,controls:!1,onReady:function(){},onStateChange:function(){},onFinish:function(){},onError:function(){}},e}(a.Component);e.Vimeo=u}}]);
//# sourceMappingURL=7-62393b72.js.map