(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={form:"ContactForm_form__1mXuZ",lable:"ContactForm_lable__2nUdp",input:"ContactForm_input__19m-P",button:"ContactForm_button__2lZDh"}},15:function(t,e,n){t.exports=n(23)},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(11),r=n.n(c),u=n(14),s=n(2),i=n(3),l=n(6),m=n(5),f=n(12),p=n(13),b=n(1),h=n.n(b),v=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.onInputSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,o=n.number;t.props.onAddContact(a,o),t.setState({name:"",number:""})},t.onInputChange=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(p.a)({},a,o))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return o.a.createElement("section",{className:h.a.section},o.a.createElement("form",{className:h.a.form,onSubmit:this.onInputSubmit},o.a.createElement("label",{className:h.a.lable},"Name",o.a.createElement("input",{className:h.a.input,type:"text",value:e,onChange:this.onInputChange,name:"name"}),"Number",o.a.createElement("input",{className:h.a.input,type:"number",value:n,onChange:this.onInputChange,name:"number"})),o.a.createElement("button",{className:h.a.button,type:"submit"},"Add contact")))}}]),n}(a.Component),C=n(4),d=n.n(C),_=function(t){var e=t.name,n=t.number,a=t.onRemove;return o.a.createElement("li",{className:d.a.listItem},"".concat(e,": ").concat(n),o.a.createElement("button",{type:"button",onClick:a},"Delete"))},g=function(t){var e=t.contacts,n=t.onRemoveContact;return o.a.createElement("ul",{className:d.a.list},e.map((function(t){var e=t.name,a=t.number,c=t.id;return o.a.createElement(_,{key:c,name:e,number:a,onRemove:function(){return n(c)}})})))},E=n(7),y=n.n(E),S=function(t){var e=t.onSearchFilter;return o.a.createElement("div",null,o.a.createElement("p",{className:y.a.text},"Find contacts by name"),o.a.createElement("input",{className:y.a.filterInput,type:"text",onChange:function(t){return e(t.target.value)}}))},O=(n(22),function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[],filter:""},t.addContact=function(e,n){var a=t.state.contacts,o={id:Object(f.v4)(),name:e,number:n};a.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is already exists!")):t.setState((function(t){return{contacts:[].concat(Object(u.a)(t.contacts),[o])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.searchFilter=function(e){t.setState({filter:e})},t.getContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");return t?this.setState({contacts:JSON.parse(t)}):[]}},{key:"componentDidUpdate",value:function(t,e){return e.contacts!==this.state.contacts?localStorage.setItem("contacts",JSON.stringify(this.state.contacts)):[]}},{key:"render",value:function(){var t=this.state.filter,e=this.getContacts();return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Phonebook"),o.a.createElement(v,{onAddContact:this.addContact}),o.a.createElement("h2",null,"Contacts"),o.a.createElement(S,{value:t,onSearchFilter:this.searchFilter}),e.length>0&&o.a.createElement(g,{contacts:e,onRemoveContact:this.removeContact}))}}]),n}(a.Component));r.a.render(o.a.createElement(O,null),document.querySelector("#root"))},4:function(t,e,n){t.exports={list:"ContactList_list__3QOYm",listItem:"ContactList_listItem__js_up"}},7:function(t,e,n){t.exports={filterInput:"Filter_filterInput__8OaVw",text:"Filter_text__1eun5"}}},[[15,1,2]]]);
//# sourceMappingURL=main.44b1fd25.chunk.js.map