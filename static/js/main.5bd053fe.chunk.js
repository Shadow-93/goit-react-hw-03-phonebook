(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={form:"ContactForm_form__3TGFE",lable:"ContactForm_lable__23W4I",input:"ContactForm_input__1Ss00",button:"ContactForm_button__H-K_3"}},14:function(t,e,n){t.exports={title:"Notification_title__T2fB7"}},16:function(t,e,n){t.exports=n(24)},23:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(11),r=n.n(o),i=n(15),s=n(2),u=n(3),l=n(6),m=n(5),f=n(12),p=n(13),b=n(1),h=n.n(b),v=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onInputSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onAddContact(a,c),t.setState({name:"",number:""})},t.onInputChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("section",{className:h.a.section},c.a.createElement("form",{className:h.a.form,onSubmit:this.onInputSubmit},c.a.createElement("label",{className:h.a.lable},"Name",c.a.createElement("input",{className:h.a.input,type:"text",value:e,onChange:this.onInputChange,name:"name"}),"Number",c.a.createElement("input",{className:h.a.input,type:"number",value:n,onChange:this.onInputChange,name:"number"})),c.a.createElement("button",{className:h.a.button,type:"submit"},"Add contact")))}}]),n}(a.Component),C=n(4),_=n.n(C),d=function(t){var e=t.name,n=t.number,a=t.onRemove;return c.a.createElement("li",{className:_.a.listItem},"".concat(e,": ").concat(n),c.a.createElement("button",{type:"button",onClick:a},"Delete"))},E=function(t){var e=t.contacts,n=t.onRemoveContact;return c.a.createElement("ul",{className:_.a.list},e.map((function(t){var e=t.name,a=t.number,o=t.id;return c.a.createElement(d,{key:o,name:e,number:a,onRemove:function(){return n(o)}})})))},g=n(7),y=n.n(g),S=function(t){var e=t.onSearchFilter;return c.a.createElement("div",null,c.a.createElement("p",{className:y.a.text},"Find contacts by name"),c.a.createElement("input",{className:y.a.filterInput,type:"text",onChange:function(t){return e(t.target.value)}}))},N=n(14),I=n.n(N),F=function(t){var e=t.title;return c.a.createElement("h2",{className:I.a.title},e)},O=(n(23),function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){if(t.state.contacts.some((function(t){return t.name.toLowerCase()===e.toLowerCase()})))alert("".concat(e," is already exists!"));else{var a={id:Object(f.v4)(),name:e,number:n};t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[a])}}))}},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.searchFilter=function(e){t.setState({filter:e})},t.getContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");if(t)return this.setState({contacts:JSON.parse(t)})||[]}},{key:"componentDidUpdate",value:function(t,e){if(e.contacts!==this.state.contacts)return localStorage.setItem("contacts",JSON.stringify(this.state.contacts)||[])}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=this.getContacts();return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(v,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),n.length>0?c.a.createElement(S,{value:e,onSearchFilter:this.searchFilter}):c.a.createElement(F,{title:"Please add contact"}),c.a.createElement(E,{contacts:a,onRemoveContact:this.removeContact}))}}]),n}(a.Component));r.a.render(c.a.createElement(O,null),document.querySelector("#root"))},4:function(t,e,n){t.exports={list:"ContactList_list__Yiya5",listItem:"ContactList_listItem__1bU2T"}},7:function(t,e,n){t.exports={filterInput:"Filter_filterInput__2azeX",text:"Filter_text__38a7E"}}},[[16,1,2]]]);
//# sourceMappingURL=main.5bd053fe.chunk.js.map