(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(6),s=a(2),c=(a(13),a(1)),o=a(8),l=a.n(o),d=a(0),u=function(e){var t=e.user,a=t.name,n=t.email;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},m=function(e){var t=e.id,a=e.title,n=e.completed,i=e.user;return Object(d.jsxs)("article",{"data-id":t,className:l()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:a}),Object(d.jsx)(u,{user:i})]})},j=function(e){var t=e.todos,a=e.users;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){var t=e.id,n=e.title,i=e.completed,r=e.userId,s=a.find((function(e){return e.id===r}))||a[0];return Object(d.jsx)(m,{id:t,title:n,completed:i,user:s},t)}))})},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],O=function(){var e=Object(c.useState)(h),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(""),o=Object(s.a)(i,2),l=o[0],u=o[1],m=Object(c.useState)(0),O=Object(s.a)(m,2),p=O[0],f=O[1],x=Object(c.useState)(!1),v=Object(s.a)(x,2),y=v[0],S=v[1],N=Object(c.useState)(!1),I=Object(s.a)(N,2),g=I[0],C=I[1],_=function(e){var t,a=(null===(t=e.match(/^[a-zA-Z0-9\u0404\u0406\u0407\u0490\u0491\u0454\u0456\u0457\s]+/gi))||void 0===t?void 0:t.join("").trim())||"";return""===a&&C(!0),a};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),u(_(l)),S(!p),C(!l),_(l)&&p&&!g&&!y){var t={title:l,completed:!1,id:Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))))+1,userId:p};n((function(e){return[].concat(Object(r.a)(e),[t])})),u(""),f(0),S(!1)}},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{children:["Title: ",Object(d.jsx)("input",{value:l,type:"text","data-cy":"titleInput",onChange:function(e){u(e.target.value),C(!1)},placeholder:"Enter a title"})]}),g&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{children:["User: ",Object(d.jsxs)("select",{"data-cy":"userSelect",value:p,onChange:function(e){f(+e.target.value),S(!1)},children:[Object(d.jsx)("option",{value:0,disabled:!0,children:"Choose a user"}),b.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),y&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(j,{todos:a,users:b})]})};i.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.db264c76.chunk.js.map