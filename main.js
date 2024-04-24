(()=>{"use strict";function t(t){if(t.ok)return t.json()}function e(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var o="https://mesto.nomoreparties.co/v1/wff-cohort-11",r={authorization:"d655b118-8b88-4edf-be5c-c170c9e072d0",contentType:"application/json"},i=document.querySelector("#card-template").content;function c(t,e,n,o,r){var c=i.querySelector(".card").cloneNode(!0),u=c.querySelector(".card__image"),a=c.querySelector(".card__title"),l=c.querySelector(".count_like"),s=c.querySelector(".card__like-button");u.src=t.link,u.alt=t.name,a.textContent=t.name,t.likes.some((function(t){return t._id===r}))&&s.classList.add("card__like-button_is-active"),l.textContent=t.likes.length;var p=c.querySelector(".card__delete-button");return t.owner._id===r?p.addEventListener("click",(function(){return e(c,t._id)})):p.remove(),s.addEventListener("click",(function(){return n(s,t._id,l)})),u.addEventListener("click",(function(){o(t)})),c}function u(e,n,i){e.classList.contains("card__like-button_is-active")?function(e){return fetch(o+"/cards/likes/"+e,{method:"DELETE",headers:{authorization:r.authorization}}).then(t)}(n).then((function(t){i.textContent=t.likes.length,e.classList.toggle("card__like-button_is-active")})).catch((function(t){console.log(t)})):function(e){return fetch(o+"/cards/likes/"+e,{method:"PUT",headers:{authorization:r.authorization}}).then(t)}(n).then((function(t){i.textContent=t.likes.length,e.classList.toggle("card__like-button_is-active")})).catch((function(t){console.log(t)}))}function a(e,n){(function(e){return fetch(o+"/cards/"+e,{method:"DELETE",headers:{authorization:r.authorization}}).then(t)})(n).then((function(t){e.remove()})).catch((function(t){console.log(t)}))}function l(t){t.classList.add("popup_is-opened"),t.querySelector(".popup__close").addEventListener("click",d),document.addEventListener("keydown",p),t.addEventListener("click",s)}function s(t){t.target.classList.contains("popup_is-opened")&&d()}function p(t){"Escape"===t.key&&d()}function d(){var t=document.querySelector(".popup_is-opened"),e=t.querySelector(".popup__close");t.classList.remove("popup_is-opened"),e.removeEventListener("click",d),document.removeEventListener("keydown",p),t.removeEventListener("click",s)}var f=function(t,e,n){_(t)?(e.disabled=!0,e.classList.add(n.inactiveButtonClass)):(e.disabled=!1,e.classList.remove(n.inactiveButtonClass))},_=function(t){return t.some((function(t){return!t.validity.valid}))},m=function(t,e){Array.from(t.querySelectorAll(e.inputSelector)).forEach((function(t){t.classList.remove(e.inputErrorClass)})),Array.from(t.querySelectorAll(e.formImputError)).forEach((function(t){t.textContent="",t.classList.remove(e.inputErrorActive)}));var n=t.querySelector(e.submitButtonSelector);n.disabled=!0,n.classList.add(e.inactiveButtonClass)},y=(document.querySelector("#card-template").content,document.querySelector(".places__list")),v=document.querySelector(".profile__edit-button"),h=document.querySelector(".profile__add-button"),S=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup_type_new-card"),b=document.querySelector(".popup_type_image"),E=S.querySelector(".popup__form"),C=q.querySelector(".popup__form"),L=E.querySelector(".popup__input_type_name"),g=E.querySelector(".popup__input_type_description"),k=document.querySelector(".profile__title"),x=document.querySelector(".profile__description"),A=document.querySelector(".popup__input_type_card-name"),z=document.querySelector(".popup__input_type_url"),T=document.querySelector(".popup__image"),j=document.querySelector(".popup__caption"),w=document.querySelector(".profile__image");q.classList.add("popup_is-animated"),S.classList.add("popup_is-animated"),b.classList.add("popup_is-animated");var D=document.querySelector(".profile__image"),O=E.querySelector(".popup__button"),B=C.querySelector(".popup__button"),P=document.querySelector(".popup_type_foto"),I=P.querySelector(".popup__button"),M=P.querySelector(".popup__form"),N=P.querySelector(".popup__input_avatar"),J=w.querySelector(".profile__image"),H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"form__input_type_error",errorClass:"popup__error_visible",inputErrorActive:"form__input-error_active",formImputError:".form__input-error"},U="";function V(t){l(b),T.src=t.link,T.alt=t.name,j.textContent=t.name}function $(t,e){m(e,H),l(t)}!function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){!function(t,e){var n=Array.from(t.querySelectorAll(e.inputSelector)),o=t.querySelector(e.submitButtonSelector);f(n,o,e),n.forEach((function(r){r.addEventListener("input",(function(){!function(t,e,n){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?function(t,e,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(n.inputErrorClass),o.classList.remove(n.inputErrorActive),o.textContent=""}(t,e,n):function(t,e,n,o){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.inputErrorActive)}(t,e,e.validationMessage,n)}(t,r,e),f(n,o,e)}))}))}(e,t)}))}(H),D.addEventListener("click",(function(){$(P,M)})),v.addEventListener("click",(function(){var t;t=S,L.value=k.textContent,g.value=x.textContent,m(E,H),l(t)})),h.addEventListener("click",(function(){$(q,C)})),E.addEventListener("submit",(function(e){var n,i;O.textContent="Сохраниение...",e.preventDefault(),(n=L.value,i=g.value,fetch(o+"/users/me",{method:"PATCH",headers:{authorization:r.authorization,"Content-Type":r.contentType},body:JSON.stringify({name:n,about:i})}).then(t)).then((function(t){k.textContent=t.name,x.textContent=t.about,d()})).catch((function(t){console.log(t)})).finally((function(t){O.textContent="Сохранить"}))})),C.addEventListener("submit",(function(e){B.textContent="Сохраниение...",e.preventDefault(),function(e,n){return fetch(o+"/cards",{method:"POST",headers:{authorization:r.authorization,"Content-Type":r.contentType},body:JSON.stringify({name:e,link:n})}).then(t)}(A.value,z.value).then((function(t){y.prepend(c(t,a,u,V,U)),d(),C.reset()})).catch((function(t){console.log(t)})).finally((function(t){B.textContent="Сохранить"}))})),M.addEventListener("submit",(function(e){var n;I.textContent="Сохраниение...",e.preventDefault(),(n=N.value,fetch(o+"/users/me/avatar",{method:"PATCH",headers:{authorization:r.authorization,"Content-Type":r.contentType},body:JSON.stringify({avatar:n})}).then(t)).then((function(t){J.src=t.avatar,d(),M.reset()})).catch((function(t){console.log(t)})).finally((function(t){I.textContent="Сохранить"}))}));var F=document.querySelector(".profile__title"),G=document.querySelector(".profile__description");Promise.all([fetch(o+"/users/me",{headers:{authorization:r.authorization}}).then(e),fetch(o+"/cards",{headers:{authorization:r.authorization}}).then(e)]).then((function(t){var e,o,r=(o=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i,c,u=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(o=i.call(n)).done)&&(u.push(o.value),u.length!==e);a=!0);}catch(t){l=!0,r=t}finally{try{if(!a&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw r}}return u}}(e,o)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(t,e):void 0}}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return{userData:r[0],cardsData:r[1]}})).then((function(t){var e=t.userData,n=t.cardsData;F.textContent=e.name,G.textContent=e.about,J.src=e.avatar,U=e._id,n.forEach((function(t){y.append(c(t,a,u,V,U))}))})).catch((function(t){return console.log(t)}))})();