"use strict";(self.webpackChunktransatlantic=self.webpackChunktransatlantic||[]).push([[203],{2952:function(e,t,i){i.d(t,{Z:function(){return o}});var n=i(1694),r=i.n(n),a={button:"button_button__Q-x72",button__blue:"button_button__blue__qY5Dp",button__case:"button_button__case__kyDbu"},s=i(184),_=function(e){var t=e.text,i=e.onClick,n=e.color,_=e.type,o=e.disabled;return(0,s.jsx)("button",{type:_,className:r()(a.button,a["button__".concat(n)]),onClick:i,disabled:o,children:t})};_.defaultProps={text:"",type:"",color:"",onClick:function(){}};var o=_},4518:function(e,t,i){i.d(t,{Z:function(){return B}});var n=i(4942),r=i(7689),a=i(9439),s=i(2791),_=i(5705),o=function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="\u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"):t.email="\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435",e.name?/^[\u0410-\u042f\u0430-\u044f]+$/i.test(e.name)?e.name.length<3?t.name="\u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0442\u0440\u0435\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":e.name.length>=30&&(t.name="\u043d\u0435 \u0431\u043e\u043b\u0435\u0435 \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):t.name="\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0438\u043c\u044f":t.name="\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",e.tel?/^((8|\+7)[ - ]?)?(\(?\d{3,4}\)?[ - ]?)?[\d\- ]{6,11}$/i.test(e.tel)?e.tel.length>11&&(t.tel="\u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"):t.tel="\u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430":t.tel="\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435",t},c=i(2952),l=i(1694),f=i.n(l),m={modal:"modal_modal__UTOVg",active:"modal_active__AQPZJ"},d=i(184),h=function(e){var t=e.active,i=e.setActive,r=e.children;return(0,d.jsx)("div",{className:f()(m.modal,(0,n.Z)({},m.active,t)),onClick:function(){return i(!1)},children:(0,d.jsx)("div",{className:m.modal__content,onClick:function(e){return e.stopPropagation()},children:r})})},u={form__wrapper:"form_form__wrapper__ykay7",form:"form_form__zw-14",input__wrapper:"form_input__wrapper__mMWZB",form__input:"form_form__input__kFIAP",form__policy:"form_form__policy__1+Et2",input__errors:"form_input__errors__oJM-I","form__input--light":"form_form__input--light__ky6TV",errors__text:"form_errors__text__iqoIf"},p=i(6399);var x=i.p+"static/media/done.ea69a819ddf07e64af48d7d49646ac92.svg",j="formContent_form-content__UkXmt",b="formContent_form-content__svg__2Db4W",v="formContent_form-content__title__Xk95+",N="formContent_form-content__text__+2nsN",g=function(){return(0,d.jsxs)("div",{className:j,children:[(0,d.jsx)(p.HandySvg,{src:x,width:"66",height:"66",className:b}),(0,d.jsx)("h5",{className:v,children:"\u0417\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430"}),(0,d.jsx)("p",{className:N,children:"\u041c\u044b \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0447\u0430\u0441\u043e\u0432"})]})},k=function(){var e,t,i,l=(0,s.useState)(!1),m=(0,a.Z)(l,2),p=m[0],x=m[1],j=(0,r.TH)().pathname,b="/contacts"==="".concat(j)||"/containers"==="".concat(j)||"/park"==="".concat(j),v=(0,_.TA)({initialValues:{name:"",tel:"",email:""},validate:o,onSubmit:function(e){var t=JSON.stringify(e,null,2);console.log(t),alert(JSON.stringify(e,null,2)),v.resetForm()}});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:u.form__wrapper,children:[(0,d.jsxs)("form",{className:u.form,autoComplete:"off",onSubmit:v.handleSubmit,action:"https://formsubmit.co/21c9abb204327e5a95f8c622c29508b2",method:"POST",children:[(0,d.jsxs)("div",{className:u.input__wrapper,children:[(0,d.jsx)("input",{placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",name:"name",value:v.values.name,className:f()(u.form__input,(e={},(0,n.Z)(e,u.input__errors,v.errors.name&&v.touched.name),(0,n.Z)(e,u["form__input--light"],b),e)),onChange:v.handleChange,onBlur:v.handleBlur}),v.touched.name&&v.errors.name?(0,d.jsx)("div",{className:u.errors__text,children:v.errors.name}):null]}),(0,d.jsxs)("div",{className:u.input__wrapper,children:[(0,d.jsx)("input",{placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430*",name:"tel",value:v.values.tel,className:f()(u.form__input,(t={},(0,n.Z)(t,u.input__errors,v.errors.tel&&v.touched.tel),(0,n.Z)(t,u["form__input--light"],b),t)),onChange:v.handleChange,onBlur:v.handleBlur}),v.touched.tel&&v.errors.tel?(0,d.jsx)("div",{className:u.errors__text,children:v.errors.tel}):null]}),(0,d.jsxs)("div",{className:u.input__wrapper,children:[(0,d.jsx)("input",{type:"text",placeholder:"\u0412\u0430\u0448 email",name:"email",value:v.values.email,onBlur:v.handleBlur,className:f()(u.form__input,(i={},(0,n.Z)(i,u.input__errors,v.errors.email&&v.touched.email),(0,n.Z)(i,u["form__input--light"],b),i)),onChange:v.handleChange}),v.touched.email&&v.errors.email?(0,d.jsx)("div",{className:u.errors__text,children:v.errors.email}):null]}),(0,d.jsx)("input",{type:"hidden",name:"_captcha",value:"false"}),(0,d.jsx)("input",{type:"hidden",id:"_send_form_next_page",name:"_next",value:"https://transatlantic-dev.digitalburo.tech/"}),(0,d.jsx)("div",{className:u.form__button,children:(0,d.jsx)(c.Z,{text:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443",color:"blue",type:"submit",onClick:function(){x(!0);var e=setTimeout((function(){x(!1)}),3e3);return function(){return clearTimeout(e)}},disabled:!(v.isValid&&v.dirty)})})]}),(0,d.jsx)("p",{className:u.form__policy,children:"\u041d\u0430\u0436\u0438\u043c\u0430\u044f \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443, \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441 \xab\u041f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f\xbb \u0438 \xab\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438\xbb"})]}),(0,d.jsx)(h,{active:p,setActive:x,children:(0,d.jsx)(g,{})})]})},y="brief_brief__8CQGv",C="brief_brief__container__DNkPJ",Z="brief_brief__title__+iP0l",w="brief_brief__descr__2EcXG",A="brief_brief__info__C3pYP",T="brief_brief--blue__YtgLf",P="brief_brief__title--dark__hSZQ3",S="brief_brief__descr--dark__hl3CL",B=function(){var e=(0,r.TH)().pathname,t="/contacts"==="".concat(e)||"/containers"==="".concat(e)||"/park"==="".concat(e);return(0,d.jsx)("section",{className:f()(y,(0,n.Z)({},T,t)),id:"brief",children:(0,d.jsxs)("div",{className:C,children:[(0,d.jsxs)("div",{className:A,children:[(0,d.jsx)("h2",{className:f()(Z,(0,n.Z)({},P,t)),children:"\u0414\u043e\u0441\u0442\u0430\u0432\u0438\u043c \u0432\u0430\u0448 \u0433\u0440\u0443\u0437"}),(0,d.jsx)("p",{className:f()(w,(0,n.Z)({},S,t)),children:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u044f\u0432\u043a\u0443, \u043c\u044b \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0438 \u043e\u0431\u0441\u0443\u0434\u0438\u043c \u0434\u0435\u0442\u0430\u043b\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0433\u0440\u0443\u0437\u0430"})]}),(0,d.jsx)(k,{})]})})}},8203:function(e,t,i){i.r(t),i.d(t,{default:function(){return y}});var n=i(2791),r=i(6907),a=i(5667),s=i(4942),_=i(1694),o=i.n(_),c={office__title:"office_office__title__tnGXv",office__list:"office_office__list__j0Zbv",office__item:"office_office__item__HhVrv",office__info:"office_office__info__X34YG",office__img:"office_office__img__+Tarp","office__img--msk":"office_office__img--msk__NWCAe","office__img--ekb":"office_office__img--ekb__NGnCf"},l=i(184),f=function(e){var t=e.tel,i=e.mail,n=e.address,r=e.name,a=e.type,_=e.title,f=e.id;return(0,l.jsxs)("div",{className:c.office,id:"".concat(f),children:[(0,l.jsx)("h3",{className:c.office__title,children:_}),(0,l.jsxs)("ul",{className:c.office__list,children:[(0,l.jsxs)("li",{className:c.office__item,children:[(0,l.jsx)("span",{className:c.office__heading,children:"\u041e\u0444\u0438\u0441-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440:"}),(0,l.jsx)("span",{className:c.office__info,children:r})]}),(0,l.jsxs)("li",{className:c.office__item,children:[(0,l.jsx)("span",{className:c.office__heading,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:"}),(0,l.jsx)("a",{className:c.office__info,href:"tel:".concat(t),children:t})]}),(0,l.jsxs)("li",{className:c.office__item,children:[(0,l.jsx)("span",{className:c.office__heading,children:"Email:"}),(0,l.jsx)("a",{className:c.office__info,href:"mailto:".concat(i),children:i})]}),(0,l.jsx)("li",{className:c.office__item,children:(0,l.jsxs)("address",{className:c.office__info,children:["\u0410\u0434\u0440\u0435\u0441: ",n]})})]}),(0,l.jsx)("div",{className:o()(c.office__img,(0,s.Z)({},c["office__img--ekb"],"ekb"==="".concat(a)),(0,s.Z)({},c["office__img--msk"],"msk"==="".concat(a)))})]})};f.defaultProps={address:"",tel:"",mail:"",name:"",type:"",title:"",id:""};var m=f,d="hero_hero__rQr-3",h="hero_hero__container__NjHAI",u="hero_hero__wrapper__0H537",p="hero_hero__top__+6xUk",x="hero_hero__title__aAv7+",j="hero_hero__heading__il1i6",b="hero_hero__button__wrapper__Yguvt",v="hero_hero__button__36AkQ",N="hero_hero__bottom__thLns",g=function(){return(0,l.jsx)("section",{className:d,children:(0,l.jsxs)("div",{className:h,children:[(0,l.jsx)("h2",{className:x,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,l.jsxs)("div",{className:u,children:[(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("h3",{className:j,children:"\u0424\u0438\u043b\u0438\u0430\u043b\u044b"}),(0,l.jsxs)("div",{className:b,children:[(0,l.jsx)(a.rU,{to:"ekb",smooth:!0,offset:-150,duration:500,className:v,children:"\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433"}),(0,l.jsx)(a.rU,{to:"msk",smooth:!0,offset:-150,duration:500,className:v,children:"\u041c\u043e\u0441\u043a\u0432\u0430"}),(0,l.jsx)(a.rU,{to:"brief",smooth:!0,offset:-150,duration:500,className:v,children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"})]})]}),(0,l.jsxs)("div",{className:N,children:[(0,l.jsx)(m,{id:"ekb",tel:"+7 343 287-94-14",mail:"office@transatlantic.pro",address:"620014, \u0433. \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433, \u0443\u043b. \u0411\u043e\u0440\u0438\u0441\u0430 \u0415\u043b\u044c\u0446\u0438\u043d\u0430 1\u0410, \u043e\u0444. 11.3 (\u0411\u0426 \xab\u041f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\xbb)",name:"\u0422\u0440\u044b\u0441\u043a\u043e\u0432\u0430 \u041b\u0438\u043b\u0438\u044f",type:"ekb",title:"\u041e\u0444\u0438\u0441 \u0432 \u0433. \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433"}),(0,l.jsx)(m,{id:"msk",tel:"+7 495 445-45-92",mail:"koledad@transatlantic.pro",address:"129343, \u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u043f\u0440-\u0434 \u0421\u0435\u0440\u0435\u0431\u0440\u044f\u043a\u043e\u0432\u0430, 14, \u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 10, \u043e\u0444\u0438\u0441 10204",name:"\u0422\u0440\u044b\u0441\u043a\u043e\u0432\u0430 \u041b\u0438\u043b\u0438\u044f",type:"msk",title:"\u041e\u0444\u0438\u0441 \u0432 \u0433. \u041c\u043e\u0441\u043a\u0432\u0430 "})]})]})]})})},k=i(4518),y=function(){return(0,n.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Fragment,{children:(0,l.jsxs)(r.ql,{children:[(0,l.jsx)("title",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0422\u0440\u0430\u043d\u0441\u0430\u0442\u043b\u0430\u043d\u0442\u0438\u043a"}),(0,l.jsx)("meta",{name:"description",content:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0422\u0440\u0430\u043d\u0441\u0430\u0442\u043b\u0430\u043d\u0442\u0438\u043a"}),(0,l.jsx)("meta",{property:"og:type",content:"webapp"}),(0,l.jsx)("meta",{property:"og:title",content:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0422\u0440\u0430\u043d\u0441\u0430\u0442\u043b\u0430\u043d\u0442\u0438\u043a"}),(0,l.jsx)("meta",{property:"og:description",content:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0422\u0440\u0430\u043d\u0441\u0430\u0442\u043b\u0430\u043d\u0442\u0438\u043a"}),(0,l.jsx)("meta",{property:"og:image",content:"assets/favicon-32x32.png"})]})}),(0,l.jsx)(g,{}),(0,l.jsx)(k.Z,{})]})}}}]);
//# sourceMappingURL=203.9bff621a.chunk.js.map