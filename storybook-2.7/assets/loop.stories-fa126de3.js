import{j as L}from"./index-06cf7426.js";import"./index-e67e0a49.js";import{O as m,d as g}from"./default-arg-types-22241b86.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const v="3",y=[{id:"seq",componentType:"Sequence",label:{value:'"Description des individus de votre logement"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"1"},{id:"loop-prenom",componentType:"Loop",label:{value:'"Ajouter un individu"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["PRENOM"],lines:{min:{value:"1",type:"VTL"},max:{value:"10",type:"VTL"}},page:"1",components:[{componentType:"Input",label:{value:'"Prénom"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,bindingDependencies:["PRENOM"],id:"prenom",response:{name:"PRENOM"}},{componentType:"InputNumber",label:{value:'"Age"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,bindingDependencies:["AGE"],id:"Age",response:{name:"AGE"}}]},{id:"seq-end",componentType:"Sequence",label:{value:'"End"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"2"}],D=[{variableType:"COLLECTED",name:"PRENOM",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"AGE",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}}],T={maxPage:v,components:y,variables:D},O="3",P=[{id:"seq",componentType:"Sequence",label:{value:'"Description des individus de votre logement"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"1"},{id:"loop-prenom",componentType:"Loop",label:{value:'"Ajouter un individu"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["PRENOM"],lines:{min:{value:"1",type:"VTL"},max:{value:"10",type:"VTL"}},page:"1",components:[{componentType:"Input",label:{value:'"Prénom"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,bindingDependencies:["PRENOM"],id:"prenom",response:{name:"PRENOM"}}]},{id:"loop",componentType:"Loop",loopDependencies:["PRENOM"],iterations:{value:"count(PRENOM)",type:"VTL"},page:"2",maxPage:"1",depth:1,paginatedLoop:!0,conditionFilter:{value:"true",type:"VTL"},components:[{id:"age",label:{value:'PRENOM || ", quel est vôtre âge ?"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"2.1",componentType:"InputNumber",min:0,max:120,decimals:0,response:{name:"AGE"}}]},{id:"seq-end",componentType:"Sequence",label:{value:'"End"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"3"}],b={PRENOM:{size:"count(PRENOM)",variables:["AGE"]}},V=[{variableType:"COLLECTED",name:"PRENOM",values:{PREVIOUS:null,COLLECTED:["John","Jane"],FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"AGE",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],R={maxPage:O,components:P,resizing:b,variables:V},x={title:"Components/Loop/Loop",component:m,argTypes:g},a=E=>L(m,{...E}),e=a.bind({});e.args={id:"loop",source:T};const n=a.bind({});n.args={id:"loop-paginated",source:R,initialPage:"1",data:{}};const o=a.bind({});o.args={id:"bloc-for-loop",source:T,readOnly:!0};var t,l,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var p,i,s;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var u,c,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const A=["Default","Paginated","ReadOnly"];export{e as Default,n as Paginated,o as ReadOnly,A as __namedExportsOrder,x as default};
//# sourceMappingURL=loop.stories-fa126de3.js.map
