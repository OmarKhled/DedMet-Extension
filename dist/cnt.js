(()=>{"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},e.apply(this,arguments)};chrome.runtime.sendMessage({msg:window.location.pathname},(function(e){return!0})),chrome.runtime.onMessage.addListener((function(n,t,r){if("sesskey"==n.type){var i=document.cookie.split("=")[1];console.log("Session ID: ".concat(n.key," & Cookie : ").concat(i)),r({cookie:i}),function(){var e,n;if(!document.querySelector("aside#block-region-side-post")){var t=document.createElement("aside");t.setAttribute("id","block-region-side-post"),t.setAttribute("class","col-3 d-print-none block-region"),null===(e=document.querySelector("#region-main"))||void 0===e||e.setAttribute("class","col-9"),null===(n=document.querySelector("#page-content"))||void 0===n||n.appendChild(t)}var r=document.querySelector("aside#block-region-side-post");console.log("container",r);var i=document.querySelector("section.block_calendar_month"),o=document.createElement("div");o.innerHTML='<div id="timeline" class="block_html block mb-3" style="position: relative;">\r\n  <div class="header">\r\n    <div class="title">\r\n      <h2 class="d-inline">Timeline Widget</h2>\r\n    </div>\r\n  </div>\r\n  <div class="content" style="position: relative; margin-top: 1.3rem; padding: 0 !important;">\r\n    <span class="overlay-icon-container" id="timeline-spinner" data-region="overlay-icon-container">\r\n      <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw " title="Loading"\r\n          aria-label="Loading"></i></span>\r\n    </span>\r\n  </div>\r\n\r\n</div>',null==r||r.insertBefore(o,i||document.querySelector("aside#block-region-side-post a:first-child"))}()}else{var o=n.timeline;o.forEach((function(n){(console.log(o),n.error)?console.log("Fetching Error Occured"):function(n){var t,r=document.querySelector("#timeline .content"),i=e(e({},n),{weeks:n.weeks.map((function(n){return e(e({},n),{days:n.days.map((function(n){return e(e({},n),{events:n.events.filter((function(e){if(n.timestamp+86400>=Date.now()/1e3&&!["attendance","open","expectcompletionon"].includes(e.eventtype)){var t=function(e){var n=new XMLHttpRequest;for(n.open("GET",e,!1),n.send();4!==n.readyState;)if(4===n.readyState)return n.responseText;return n.responseText}(e.url).match("completed|submitted|Submitted|Finished|Completed");return console.log(null==t?void 0:t.length,e.name),!((null==t?void 0:t.length)>0)}}))})}))})}))});null===(t=document.getElementById("timeline-spinner"))||void 0===t||t.remove(),r&&(r.innerHTML+=function(e){var n,t="";Array.prototype.join,t+='<div style="padding-left: 10px;">\r\n  ';for(var r=0;r<e.timeline.weeks.length;r++){t+="\r\n    ";for(var i=0;i<e.timeline.weeks[r].days.length;i++){t+="\r\n      <h5>\r\n        ",e.timeline.weeks[r].days[i].events.length>0&&(t+="\r\n          "+(null==(n=e.timeline.weeks[r].days[i].viewdaylinktitle?.replace("events",""))?"":n)+"\r\n            "),t+="\r\n      </h5>\r\n      ";for(var o=0;o<e.timeline.weeks[r].days[i].events.length;o++)t+='\r\n        <div class=" eventElement mt-2">\r\n          <div style=" display: flex; gap: 1rem">\r\n            <div class="eventIcon">\r\n              <img src="https://courses.nu.edu.eg/theme/image.php/adaptable/assign/1628408864/icon" width="25"\r\n                height="25" style="max-width: fit-content;" />\r\n            </div>\r\n            <div class="eventDetails text-truncate">\r\n              <h5 class="text-truncate" style="margin: 0;"> <a href="'+(null==(n=e.timeline.weeks[r].days[i].events[o].url)?"":n)+'"\r\n                  style="color: #4a4a4a;">\r\n                  <span class="text-truncate">\r\n                    '+(null==(n=e.timeline.weeks[r].days[i].events[o].popupname)?"":n)+'\r\n                  </span>\r\n                </a></h5>\r\n              <q style="margin-bottom: 0.42rem; display: block;" class="text-muted muted text-truncate">\r\n                '+(null==(n=e.timeline.weeks[r].days[i].events[o].name)?"":n)+'\r\n              </q>\r\n              <a class="d-block" href="'+(null==(n=e.timeline.weeks[r].days[i].events[o].url)?"":n)+'"\r\n                style="padding-left: -.4rem;"> Go to event</a>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        ';t+="\r\n          "}t+="\r\n            "}return t+"\r\n              </p>\r\n</div>"}({timeline:i}))}(n.data)}))}return!0}))})();