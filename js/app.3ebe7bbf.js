(function(e){function t(t){for(var r,a,o=t[0],s=t[1],l=t[2],v=0,p=[];v<o.length;v++)a=o[v],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/test-task-client-form/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("ClientForm")],1)},u=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.isFormSubmited?n("div",{staticClass:"submitted-form"},[n("h2",[e._v("Форма отправлена!")]),n("p",[e._v("Данные пользователя:")]),e._l(e.info,(function(t,r,i){return n("table",{key:i},[n("caption",[e._v(e._s(t.name))]),n("tbody",e._l(t.atributes,(function(t,r,i){return n("tr",{key:i},[n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.value))])])})),0)])})),n("br")],2):n("form",[n("div",{staticClass:"form-card"},[n("h2",{staticClass:"form-card__title"},[e._v(e._s(e.currentInfo.name))]),e._l(e.currentInfo.atributes,(function(t,r,i){return n("div",{key:i,staticClass:"form-card__atribute"},[n("label",{attrs:{for:"infoAtribute"}},[e._v(" "+e._s(t.name)+" "),void 0!==e.$v.info[e.currentInfoKey].atributes[r].value.required?n("span",[e._v("*")]):e._e(),e._v(": ")]),"select"==t.inputType?n("div",{staticClass:"form-card__input-select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.$v.info[e.currentInfoKey].atributes[r].value.$model,expression:"$v.info[currentInfoKey].atributes[k].value.$model"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.info[e.currentInfoKey].atributes[r].value,"$model",t.target.multiple?n:n[0])}}},e._l(e.info[e.currentInfoKey].atributes[r].options,(function(t,r){return n("option",{key:r},[e._v(e._s(t))])})),0)]):"checkbox"==t.inputType?n("div",{staticClass:"form-card__input-chechboxes"},e._l(e.$v.info[e.currentInfoKey].atributes[r].$model.items,(function(t,i){return n("span",{key:i},[n("label",[e._v(e._s(t))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.info[e.currentInfoKey].atributes[r].value.$model,expression:"$v.info[currentInfoKey].atributes[k].value.$model"}],attrs:{type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.$v.info[e.currentInfoKey].atributes[r].value.$model)?e._i(e.$v.info[e.currentInfoKey].atributes[r].value.$model,t)>-1:e.$v.info[e.currentInfoKey].atributes[r].value.$model},on:{change:function(n){var i=e.$v.info[e.currentInfoKey].atributes[r].value.$model,u=n.target,a=!!u.checked;if(Array.isArray(i)){var o=t,s=e._i(i,o);u.checked?s<0&&e.$set(e.$v.info[e.currentInfoKey].atributes[r].value,"$model",i.concat([o])):s>-1&&e.$set(e.$v.info[e.currentInfoKey].atributes[r].value,"$model",i.slice(0,s).concat(i.slice(s+1)))}else e.$set(e.$v.info[e.currentInfoKey].atributes[r].value,"$model",a)}}})])})),0):n("div",{staticClass:"form-card__input-text"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.info[e.currentInfoKey].atributes[r].value.$model,expression:"$v.info[currentInfoKey].atributes[k].value.$model"}],attrs:{type:"text",name:"infoAtribute"},domProps:{value:e.$v.info[e.currentInfoKey].atributes[r].value.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.info[e.currentInfoKey].atributes[r].value,"$model",t.target.value)}}})]),e.$v.info[e.currentInfoKey].atributes[r].value.$error?n("div",[!1===e.$v.info[e.currentInfoKey].atributes[r].value.required?n("div",{staticClass:"error"},[e._v("Поле "+e._s(t.name)+" обязательно.")]):!1===e.$v.info[e.currentInfoKey].atributes[r].value.numeric?n("div",{staticClass:"error"},[e._v("Только цифры!.")]):!1===e.$v.info[e.currentInfoKey].atributes[r].value.phoneValidation?n("div",{staticClass:"error"},[e._v("Ровно "+e._s(e.phoneNumberLength)+" цифр!")]):e._e()]):e._e()])})),n("small",{staticClass:"form-card__required-fields-info"},[e._v("* - обязательные поля")])],2),n("div",{staticStyle:{"text-align":"center","margin-top":"40px"}},e._l(e.steps,(function(t){return n("span",{key:t.id,staticClass:"step",class:{active:e.currentStep==t.id,finish:t.isValid}})})),0),n("div",{staticClass:"btns-nav"},[n("button",{attrs:{disabled:1==e.currentStep,type:"button",id:"prevBtn"},on:{click:function(t){return t.preventDefault(),e.prev()}}},[e._v("Назад")]),n("button",{attrs:{type:"button",id:"nextBtn"},on:{click:function(t){return t.preventDefault(),e.next()}}},[e._v("Далее")])])])])},o=[],s=(n("13d5"),n("a9e3"),n("b64b"),n("b5ae")),l={name:"ClientForm",watch:{info:{handler:function(){this.steps[this.currentStep-1].isValid=this.isCurrentInfoValid},deep:!0}},computed:{currentInfoKey:function(){return Object.keys(this.info)[this.currentStep-1]},currentInfo:function(){return this.info[this.currentInfoKey]},isCurrentInfoValid:function(){var e=this;console.log("!1");var t=Object.keys(this.currentInfo.atributes),n=t.reduce((function(t,n){return e.$v.info[e.currentInfoKey].atributes[n].value.$error&&(t+=1),t}),0);return 0==n}},validations:{info:{personal:{atributes:{firstName:{value:{required:s["required"]}},lastName:{value:{required:s["required"]}},midleName:{value:{}},birthDate:{value:{required:s["required"]}},phone:{value:{numeric:s["numeric"],phoneValidation:function(e){return console.log("value",e[0]),1==e.length&&7===Number(e[0])||11==e.length}}},sex:{value:{}},clientGroup:{value:{required:s["required"],minLength:Object(s["minLength"])(1)}},theropist:{value:{}},sendSms:{value:{}}}},adress:{atributes:{index:{value:{}},country:{value:{}},district:{value:{}},city:{value:{required:s["required"]}},street:{value:{}},house:{value:{}}}},pasport:{atributes:{type:{value:{required:s["required"]}},series:{value:{}},number:{value:{}},givenBy:{value:{}},givenDate:{value:{required:s["required"]}}}}}},data:function(){return{currentStep:1,stepsN:3,phoneNumberLength:11,isFormSubmited:!1,steps:[{id:1,isValid:!1},{id:2,isValid:!1},{id:3,isValid:!1}],info:{personal:{name:"Персональная информация",atributes:{firstName:{name:"Имя",value:"",inputType:"text"},lastName:{name:"Фамилия",value:"",inputType:"text"},midleName:{name:"Отчество",value:"",inputType:"text"},birthDate:{name:"Дата рождения",value:"",inputType:"text"},phone:{name:"Номер телефона",value:"7",inputType:"text"},sex:{name:"Пол",value:"",inputType:"text"},clientGroup:{name:"Группа клиентов",value:[],inputType:"checkbox",items:["VIP","Проблемные","ОМС"]},theropist:{name:"Лечащий врач",value:"Иванов",options:["Иванов","Захаров","Чернышева"],inputType:"select"},sendSms:{name:"Не отправлять смс",value:!1,items:[""],inputType:"checkbox"}}},adress:{name:"Адрес",atributes:{index:{name:"Индекс",value:"",inputType:"text"},country:{name:"Страна",value:"",inputType:"text"},district:{name:"Область",value:"",inputType:"text"},city:{name:"Город",value:"",inputType:"text"},street:{name:"Улица",value:"",inputType:"text"},house:{name:"Дом",value:"",inputType:"text"}}},pasport:{name:"Паспорт",atributes:{type:{name:"Тип документа",value:"Паспорт",options:["Паспорт","Свидетельство о рождении","Вод. удостоверение"],inputType:"select"},series:{name:"Серия",value:"",inputType:"text"},number:{name:"Номер",value:"",inputType:"text"},givenBy:{name:"Кем выдан",value:"",inputType:"text"},givenDate:{name:"Дата выдачи",value:"",inputType:"text"}}}}}},methods:{prev:function(){this.currentStep--},next:function(){this.$v.$touch(),this.steps[this.currentStep-1].isValid=this.isCurrentInfoValid,this.isCurrentInfoValid&&(this.currentStep!==this.stepsN?(this.$v.$reset(),this.currentStep++):this.isFormSubmited=!0)}}},c=l,v=(n("b26e"),n("2877")),p=Object(v["a"])(c,a,o,!1,null,null,null),f=p.exports,d={name:"App",components:{ClientForm:f}},m=d,y=(n("034f"),Object(v["a"])(m,i,u,!1,null,null,null)),b=y.exports,h=n("1dce"),_=n.n(h);r["a"].use(_.a),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,n){},b26e:function(e,t,n){"use strict";var r=n("d8a1"),i=n.n(r);i.a},d8a1:function(e,t,n){}});
//# sourceMappingURL=app.3ebe7bbf.js.map