(()=>{"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};chrome.runtime.sendMessage({msg:window.location.pathname},(function(e){})),chrome.runtime.onMessage.addListener((function(n,t,i){if("sesskey"==n.type){var o=document.cookie.split("=")[1];console.log("Session ID: ".concat(n.key," & Cookie : ").concat(o)),i({cookie:o}),function(){var e,n;if(!document.querySelector("aside#block-region-side-post")){var t=document.createElement("aside");t.setAttribute("id","block-region-side-post"),t.setAttribute("class","col-3 d-print-none block-region"),null===(e=document.querySelector("#region-main"))||void 0===e||e.setAttribute("class","col-9"),null===(n=document.querySelector("#page-content"))||void 0===n||n.appendChild(t)}var i=document.querySelector("aside#block-region-side-post");console.log("container",i);var o=document.querySelector("section.block_calendar_month"),s=document.createElement("div");s.innerHTML='<div id="timeline" class="block_html block mb-3" style="position: relative;">\n  <div class="header">\n    <div class="title">\n      <h2 class="d-inline">Timeline Widget</h2>\n    </div>\n  </div>\n  <div class="content" style="position: relative; margin-top: 1.3rem; padding: 0 !important;">\n    <span class="overlay-icon-container" data-region="overlay-icon-container">\n      <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading"\n          aria-label="Loading"></i></span>\n    </span>\n  </div>\n\n</div>',null==i||i.insertBefore(s,o||document.querySelector("aside#block-region-side-post a:first-child"))}()}else{var s=n.timeline[0];if(console.log(s),s.error)console.log("Fetching Error Occured");else!function(n){var t=document.querySelector("#timeline .content"),i=e(e({},n),{weeks:n.weeks.map((function(n){return e(e({},n),{days:n.days.map((function(n){return e(e({},n),{events:n.events.filter((function(e){if(n.timestamp+86400>=Date.now()/1e3&&!["attendance","open","expectcompletionon"].includes(e.eventtype)){var t=function(e){var n=new XMLHttpRequest;for(n.open("GET",e,!1),n.send();4!==n.readyState;)if(4===n.readyState)return n.responseText;return n.responseText}(e.url).match("completed|submitted|Submitted|Finished|Completed");return console.log(null==t?void 0:t.length,e.name),!((null==t?void 0:t.length)>0)}}))})}))})}))});t&&(t.innerHTML=function(e){var n,t="";Array.prototype.join,t+='<div style="padding-left: 10px;">\n  ';for(var i=0;i<e.timeline.weeks.length;i++){t+="\n    ";for(var o=0;o<e.timeline.weeks[i].days.length;o++){t+="\n      <h5>\n        ",e.timeline.weeks[i].days[o].events.length>0&&(t+="\n          "+(null==(n=e.timeline.weeks[i].days[o].viewdaylinktitle?.replace("events",""))?"":n)+"\n            "),t+="\n      </h5>\n      ";for(var s=0;s<e.timeline.weeks[i].days[o].events.length;s++)t+='\n        <div class=" eventElement mt-2">\n          <div style=" display: flex; gap: 1rem">\n            <div class="eventIcon">\n              <img src="https://courses.nu.edu.eg/theme/image.php/adaptable/assign/1628408864/icon" width="25"\n                height="25" style="max-width: fit-content;" />\n            </div>\n            <div class="eventDetails text-truncate">\n              <h5 class="text-truncate" style="margin: 0;"> <a href="'+(null==(n=e.timeline.weeks[i].days[o].events[s].url)?"":n)+'"\n                  style="color: #4a4a4a;">\n                  <span class="text-truncate">\n                    '+(null==(n=e.timeline.weeks[i].days[o].events[s].popupname)?"":n)+'\n                  </span>\n                </a></h5>\n              <q style="margin-bottom: 0.42rem; display: block;" class="text-muted muted text-truncate">\n                '+(null==(n=e.timeline.weeks[i].days[o].events[s].name)?"":n)+'\n              </q>\n              <a class="d-block" href="'+(null==(n=e.timeline.weeks[i].days[o].events[s].url)?"":n)+'"\n                style="padding-left: -.4rem;"> Go to event</a>\n\n            </div>\n          </div>\n        </div>\n        ';t+="\n          "}t+="\n            "}return t+"\n              </p>\n</div>"}({timeline:i}))}(s.data)}return!0}))})();