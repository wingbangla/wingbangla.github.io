"use strict";function isElInView(t,e){var o=t.getBoundingClientRect().top,i=t.getBoundingClientRect().bottom,s=window.innerHeight;return e?0<=o&&i<=s:o<=s}function getPageHeight(){var t=document.body,e=document.documentElement;return Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight)}function getScrollPos(){var t=document.body,e=document.documentElement;return{yPos:window.pageYOffset||e.scrollTop||t.scrollTop||0,xPos:window.pageXOffset||e.scrollLeft||t.scrollLeft||0}}function stickyCTA(){var n={},c={};function o(){document.body;n.enter<=getScrollPos().yPos+window.innerHeight&&(c.stickyCTA.classList.contains("is-visible")||c.stickyCTA.classList.add("is-visible")),(n.exit<getScrollPos().yPos||getScrollPos().yPos+window.innerHeight<n.enter)&&c.stickyCTA.classList.contains("is-visible")&&c.stickyCTA.classList.remove("is-visible");var t,e,o,i,s=c.bottomCTA||c.footer;s&&(isElInView(s)?(e=c.stickyCTA,o=s.offsetTop,i=Math.max(e.clientHeight,e.offsetHeight,e.scrollHeight),e.classList.remove("is-sticky"),e.classList.add("is-stuck"),e.style.setProperty("top",o-i+1+"px")):((t=c.stickyCTA).classList.remove("is-stuck"),t.classList.add("is-sticky"),t.style.setProperty("top","")))}return{init:function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{enter:0,exit:1};t=e,c.footer=document.querySelector(".footer-upper"),c.footer&&(c.footerPos=getPageHeight()-c.footer.getBoundingClientRect().height),c.bottomCTA=document.querySelector(".main-footer"),c.bottomCTA&&(c.bottomCTAPos=getPageHeight()-(c.footer.getBoundingClientRect().height+c.bottomCTA.getBoundingClientRect().height)-67+"px"),c.stickyCTA=document.querySelector(".js-sticky-cta"),c.stickyCTABCR=c.stickyCTA.getBoundingClientRect(),n.enter=getPageHeight()*t.enter,n.exit=getPageHeight()*t.exit,(c.bottomCTA||c.footer)&&(c.bottomCTAPos||c.footerPos)<n.exit&&(c.bottomCTA?c.bottomCTA.style.marginTop=c.stickyCTABCR.height-1+"px":c.footer.style.marginTop=c.stickyCTABCR.height-1+"px",n.exit+=c.stickyCTABCR.height),o(),window.addEventListener("scroll",o,!1)}}}NodeList.prototype.forEach=Array.prototype.forEach,window.sticky=stickyCTA();