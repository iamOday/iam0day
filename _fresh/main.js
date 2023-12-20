import{a as F,b as v,c as A,d as C,e as B,f as $}from"./chunk-H64NEOTD.js";typeof globalThis>"u"&&(window.globalThis=window);var Y="71645de3c7887e68c38748363eb4e8c4d2a4e4e2";var X="/_frsh",z="__frsh_c";function j(e){if(!e.startsWith("/")||e.startsWith("//"))return e;try{let t=new URL(e,"https://freshassetcache.local");return t.protocol!=="https:"||t.host!=="freshassetcache.local"||t.searchParams.has(z)?e:(t.searchParams.set(z,Y),t.pathname+t.search+t.hash)}catch(t){return console.warn(`Failed to create asset() URL, falling back to regular path ('${e}'):`,t),e}}function le(e){if(e.includes("("))return e;let t=e.split(","),r=[];for(let n of t){let o=n.trimStart(),a=n.length-o.length;if(o==="")return e;let s=o.indexOf(" ");s===-1&&(s=o.length);let i=n.substring(0,a),l=o.substring(0,s),d=o.substring(s);r.push(i+j(l)+d)}return r.join(",")}function G(e){if(e.type==="img"||e.type==="source"){let{props:t}=e;if(t["data-fresh-disable-lock"])return;typeof t.src=="string"&&(t.src=j(t.src)),typeof t.srcset=="string"&&(t.srcset=le(t.srcset))}}var J="fresh-partial",_="f-partial",L="f-loading",I="f-client-nav",O="data-fresh-key",E="data-current",x="data-ancestor";function W(e,t){let r=new URL(t,"http://localhost").pathname;return r!=="/"&&r.endsWith("/")&&(r=r.slice(0,-1)),e!=="/"&&e.endsWith("/")&&(e=e.slice(0,-1)),e===r?2:e.startsWith(r+"/")||r==="/"?1:0}function k(e,t){let r=e.props,n=r.href;if(typeof n=="string"&&n.startsWith("/")){let o=W(t,n);o===2?(r[E]="true",r["aria-current"]="page"):o===1&&(r[x]="true",r["aria-current"]="true")}}function ae(e,t,r){return e.__k={_frshRootFrag:!0,nodeType:1,parentNode:e,nextSibling:null,get firstChild(){let n=t.nextSibling;return n===r?null:n},get childNodes(){let n=[],o=t.nextSibling;for(;o!==null&&o!==r;)n.push(o),o=o.nextSibling;return n},insertBefore(n,o){e.insertBefore(n,o??r)},appendChild(n){e.insertBefore(n,r)},removeChild(n){e.removeChild(n)}}}function te(e){return e.nodeType===Node.COMMENT_NODE}function de(e){return e.nodeType===Node.TEXT_NODE}function ne(e){return e.nodeType===Node.ELEMENT_NODE&&!("_frshRootFrag"in e)}function we(e,t){let r=[];D(e,t,[],[A(C,null)],document.body,r);for(let n=0;n<r.length;n++){let{vnode:o,rootFragment:a}=r[n],s=()=>{$(o,a)};"scheduler"in window?scheduler.postTask(s):setTimeout(s,0)}}function re(e){return e.children}re.displayName="PreactServerComponent";function P(e,t){let r=e.props;r.children==null?r.children=t:Array.isArray(r.children)?r.children.push(t):r.children=[r.children,t]}var q=class extends B{componentDidMount(){oe.set(this.props.name,this)}render(){return this.props.children}};var Q=!1,oe=new Map;function K(e){let{startNode:t,endNode:r}=e,n=r.parentNode;if(!Q&&t!==null&&t.nodeType===Node.COMMENT_NODE){let o=new Text("");e.startNode=o,n.insertBefore(o,t),t.remove()}if(!Q&&r!==null&&r.nodeType===Node.COMMENT_NODE){let o=new Text("");e.endNode=o,n.insertBefore(o,r),r.remove()}}function Z(e,t,r,n,o,a){let[s,i]=o.slice(6).split(":"),l=`#frsh-slot-${s}-${i}-children`,d=document.querySelector(l);if(d!==null){r.push({kind:1,endNode:null,startNode:null,text:o.slice(1)});let c=d.content.cloneNode(!0);D(e,t,r,n,c,a),r.pop()}}function D(e,t,r,n,o,a){let s=o;for(;s!==null;){let i=r.length>0?r[r.length-1]:null;if(te(s)){let l=s.data;if(l.startsWith("!--")&&(l=l.slice(3,-2)),l.startsWith("frsh-slot"))r.push({startNode:s,text:l,endNode:null,kind:1}),n.push(A(re,{id:l}));else if(l.startsWith("frsh-partial")){let[d,c,p,N]=l.split(":");r.push({startNode:s,text:c,endNode:null,kind:2}),n.push(A(q,{name:c,key:N,mode:+p}))}else if(l.startsWith("frsh-key:")){let d=l.slice(9);n.push(A(C,{key:d}))}else if(l.startsWith("/frsh-key:")){let d=n.pop(),c=n[n.length-1];P(c,d),s=s.nextSibling;continue}else if(i!==null&&(l.startsWith("/frsh")||i.text===l)){if(i.endNode=s,r.pop(),i.kind===1){let d=n.pop(),c=n[n.length-1];c.props.children=d,K(i),s=i.endNode.nextSibling;continue}else if(i!==null&&(i.kind===0||i.kind===2))if(r.length===0){let d=n[n.length-1];d.props.children==null&&Z(e,t,r,n,l,a),n.pop();let c=s.parentNode;K(i);let p=ae(c,i.startNode,i.endNode);a.push({vnode:d,marker:i,rootFragment:p}),s=i.endNode.nextSibling;continue}else{let d=n[n.length-1];d&&d.props.children==null?(Z(e,t,r,n,l,a),d.props.children==null&&n.pop()):n.pop(),i.endNode=s,K(i);let c=n[n.length-1];P(c,d),s=i.endNode.nextSibling;continue}}else if(l.startsWith("frsh")){let[d,c,p]=l.slice(5).split(":"),N=t[Number(c)];r.push({startNode:s,endNode:null,text:l,kind:0});let h=A(e[d],N);p&&(h.key=p),n.push(h)}}else if(de(s)){let l=n[n.length-1];i!==null&&(i.kind===1||i.kind===2)&&P(l,s.data)}else{let l=n[n.length-1];if(ne(s))if(i!==null&&(i.kind===1||i.kind===2)){let c={children:s.childNodes.length<=1?null:[]},p=!1;for(let h=0;h<s.attributes.length;h++){let u=s.attributes[h];if(u.nodeName===O){p=!0,c.key=u.nodeValue;continue}else if(u.nodeName===L){let f=u.nodeValue,m=t[Number(f)][L].value;s._freshIndicator=m}c[u.nodeName]=typeof s[u.nodeName]=="boolean"?!0:u.nodeValue}p&&s.removeAttribute(O);let N=A(s.localName,c);P(l,N),n.push(N)}else{let d=s.getAttribute(L);if(d!==null){let c=t[Number(d)][L].value;s._freshIndicator=c}}s.firstChild&&s.nodeName!=="SCRIPT"&&D(e,t,r,n,s.firstChild,a),i!==null&&i.kind!==0&&n.pop()}s!==null&&(s=s.nextSibling)}}var ce="Unable to process partial response.";async function H(e,t={}){t.redirect="follow",e.searchParams.set(J,"true");let r=await fetch(e,t);await ue(r)}function se(e){document.querySelectorAll("a").forEach(t=>{let r=W(e.pathname,t.href);r===2?(t.setAttribute(E,"true"),t.setAttribute("aria-current","page"),t.removeAttribute(x)):r===1?(t.setAttribute(x,"true"),t.setAttribute("aria-current","true"),t.removeAttribute(E)):(t.removeAttribute(E),t.removeAttribute(x),t.removeAttribute("aria-current"))})}function ie(e,t,r,n){let o=null,a=n.firstChild,s=0;for(;a!==null;){if(te(a)){let i=a.data;if(i.startsWith("frsh-partial"))o=a,s++;else if(i.startsWith("/frsh-partial")){s--;let l={_frshRootFrag:!0,nodeType:1,nextSibling:null,firstChild:o,parentNode:n,get childNodes(){let d=[o],c=o;for(;(c=c.nextSibling)!==null;)d.push(c);return d}};D(t,r[0]??[],[],[A(C,null)],l,e)}}else s===0&&ne(a)&&ie(e,t,r,a);a=a.nextSibling}}var S=class extends Error{};async function ue(e){if(e.headers.get("Content-Type")!=="text/html; charset=utf-8")throw new Error(ce);let r=await e.text(),n=new DOMParser().parseFromString(r,"text/html"),o=[],a={},s=n.getElementById("__FRSH_PARTIAL_DATA"),i=null;s!==null&&(i=JSON.parse(s.textContent),o.push(...Array.from(Object.entries(i.islands)).map(async h=>{let u=await import(`${h[1].url}`);a[h[0]]=u[h[1].export]})));let l=n.getElementById("__FRSH_STATE")?.textContent,d=[[],[]],c;i!==null&&i.signals!==null&&o.push(import(i.signals).then(h=>{c=h.signal}));let p;l&&i&&i.deserializer!==null&&o.push(import(i.deserializer).then(h=>p=h.deserialize)),await Promise.all(o),l&&(d=p?p(l,c):JSON.parse(l)?.v);let N=[];if(ie(N,a,d,n.body),N.length===0)throw new S(`Found no partials in HTML response. Please make sure to render at least one partial. Requested url: ${e.url}`);document.title=n.title,Array.from(n.head.childNodes).forEach(h=>{let u=h;if(u.nodeName!=="TITLE"){if(u.nodeName==="META"){let f=u;if(f.hasAttribute("charset"))return;let m=f.name;if(m!==""){let y=document.head.querySelector(`meta[name="${m}"]`);y!==null?y.content!==f.content&&(y.content=f.content):document.head.appendChild(f)}else{let y=u.getAttribute("property"),g=document.head.querySelector(`meta[property="${y}"]`);g!==null?g.content!==f.content&&(g.content=f.content):document.head.appendChild(f)}}else if(u.nodeName==="LINK"){let f=u;if(f.rel==="modulepreload")return;f.rel==="stylesheet"&&Array.from(document.head.querySelectorAll("link")).find(y=>y.href===f.href)===void 0&&document.head.appendChild(f)}else if(u.nodeName==="SCRIPT"){if(u.src===`${X}/refresh.js`)return}else if(u.nodeName==="STYLE"){let f=u;f.id===""&&document.head.appendChild(f)}}});for(let h=0;h<N.length;h++){let{vnode:u,marker:f}=N[h],m=oe.get(f.text);if(!m)console.warn(`Partial "${f.text}" not found. Skipping...`);else{let y=u.props.mode,g=u.props.children;if(y===0)m.props.children=g;else{let U=m.props.children,R=Array.isArray(U)?U:[U];if(y===1)R.push(g);else{v(g)||(g=A(C,null,g)),g.key==null&&(g.key=R.length);let V=m.__v.__k;if(Array.isArray(V))for(let T=0;T<V.length;T++){let b=V[T];if(b.key==null)b.key=T;else break}for(let T=0;T<R.length;T++){let b=R[T];if(b.key==null)b.key=T;else break}R.unshift(g)}m.props.children=R}m.setState({})}}}var ee=F.vnode;F.vnode=e=>{G(e),e.type==="a"&&k(e,location.pathname),ee&&ee(e)};function w(e){if(e===null)return document.querySelector(`[${I}="true"]`)!==null;let t=e.closest(`[${I}]`);return t===null?!1:t.getAttribute(I)==="true"}var M=history.state?.index||0;if(!history.state){let e={index:M,scrollX,scrollY};history.replaceState(e,document.title)}document.addEventListener("click",async e=>{let t=e.target;if(t&&t instanceof HTMLElement){let r=t;if(t.nodeName!=="A"&&(t=t.closest("a")),t&&t instanceof HTMLAnchorElement&&t.href&&(!t.target||t.target==="_self")&&t.origin===location.origin&&e.button===0&&!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)&&!e.defaultPrevented){let n=t.getAttribute(_);if(t.getAttribute("href")?.startsWith("#")||!w(t))return;let o=t._freshIndicator;o!==void 0&&(o.value=!0),e.preventDefault();let a=new URL(t.href);try{if(t.href!==window.location.href){let i={index:M,scrollX:window.scrollX,scrollY:window.scrollY};history.replaceState({...i},"",location.href),M++,i.scrollX=0,i.scrollY=0,history.pushState(i,"",a.href)}let s=new URL(n||a.href,location.href);await H(s),se(a),scrollTo({left:0,top:0,behavior:"instant"})}finally{o!==void 0&&(o.value=!1)}}else{let n=r;if(n.nodeName!=="A"&&(n=n.closest("button")),n!==null&&n instanceof HTMLButtonElement&&(n.type!=="submit"||n.form===null)){let o=n.getAttribute(_);if(o===null||!w(n))return;let a=new URL(o,location.href);await H(a)}}}});addEventListener("popstate",async e=>{if(e.state===null){history.scrollRestoration&&(history.scrollRestoration="auto");return}let t=history.state;if(M=t.index??M+1,!w(null)){location.reload();return}history.scrollRestoration&&(history.scrollRestoration="manual");let n=new URL(location.href,location.origin);try{await H(n),se(n),scrollTo({left:t.scrollX??0,top:t.scrollY??0,behavior:"instant"})}catch(o){if(o instanceof S){location.reload();return}throw o}});document.addEventListener("submit",async e=>{let t=e.target;if(t!==null&&t instanceof HTMLFormElement&&!e.defaultPrevented){if(!w(t)||e.submitter!==null&&!w(e.submitter))return;let r=e.submitter?.getAttribute("formmethod")?.toLowerCase()??t.method.toLowerCase();if(r!=="get"&&r!=="post"&&r!=="dialog")return;let n=e.submitter?.getAttribute(_)??e.submitter?.getAttribute("formaction")??t.getAttribute(_)??t.action;if(n!==""){e.preventDefault();let o=new URL(n,location.href),a;r==="get"?new URLSearchParams(new FormData(t)).forEach((i,l)=>o.searchParams.set(l,i)):a={body:new FormData(t),method:r},await H(o,a)}}});export{ue as applyPartials,we as revive};
