import{j as L}from"./jsx-runtime-855de6a5.js";import"./index-e67e0a49.js";import{O as m,d as g}from"./default-arg-types-1b9d3217.js";import"./_commonjsHelpers-de833af9.js";import"./index-853b9fa5.js";import"./index-9d475cdf.js";const v="3",y=[{id:"seq",componentType:"Sequence",label:{value:'"Description des individus de votre logement"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"1"},{id:"loop-prenom",componentType:"Loop",label:{value:'"Ajouter un individu"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["PRENOM"],lines:{min:{value:1,type:"VTL"},max:{value:10,type:"VTL"}},page:"1",components:[{componentType:"Input",label:{value:'"Prénom"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,bindingDependencies:["PRENOM"],id:"prenom",response:{name:"PRENOM"}}]},{id:"loop",componentType:"Loop",loopDependencies:["PRENOM"],iterations:{value:"count(PRENOM)",type:"VTL"},page:"2",maxPage:"1",depth:1,paginatedLoop:!0,conditionFilter:{value:"true",type:"VTL"},components:[{id:"age",label:{value:'PRENOM || ", quel est vôtre âge ?"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"2.1",componentType:"InputNumber",min:0,max:120,decimals:0,response:{name:"AGE"}}]},{id:"seq-end",componentType:"Sequence",label:{value:'"End"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"3"}],O={PRENOM:{size:"count(PRENOM)",variables:["AGE"]}},D=[{variableType:"COLLECTED",name:"PRENOM",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"AGE",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}}],E={maxPage:v,components:y,resizing:O,variables:D},b="3",P=[{id:"seq",componentType:"Sequence",label:{value:'"Description des individus de votre logement"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"1"},{id:"loop-prenom",componentType:"RosterForLoop",headers:[{headerCell:!0,label:"Prénom"},{headerCell:!0,label:"Age"}],label:{value:'"Ajouter un individu"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["PRENOM","AGE"],lines:{min:{value:1,type:"VTL"},max:{value:10,type:"VTL"}},page:"1",components:[{componentType:"Input",conditionFilter:{value:"true",type:"VTL"},maxLength:30,bindingDependencies:["PRENOM"],id:"prenom",response:{name:"PRENOM"}},{componentType:"Input",conditionFilter:{value:"true",type:"VTL"},maxLength:30,bindingDependencies:["AGE"],id:"age",response:{name:"AGE"}}]},{id:"loop",componentType:"Loop",loopDependencies:["PRENOM"],iterations:{value:"count(PRENOM)",type:"VTL"},page:"2",maxPage:"1",depth:1,paginatedLoop:!0,conditionFilter:{value:"true",type:"VTL"},components:[{id:"age",label:{value:'PRENOM || ", quel est vôtre âge ?"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"2.1",componentType:"InputNumber",min:0,max:120,decimals:0,response:{name:"AGE"}}]},{id:"seq-end",componentType:"Sequence",label:{value:'"End"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"3"}],V={PRENOM:{size:"count(PRENOM)",variables:["AGE"]}},R=[{variableType:"COLLECTED",name:"PRENOM",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"AGE",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}}],M={maxPage:b,components:P,resizing:V,variables:R},A={title:"Components/Loop/BlockForLoop",component:m,argTypes:g},t=T=>L(m,{...T}),e=t.bind({});e.args={id:"bloc-for-loop",source:E};const n=t.bind({});n.args={id:"bloc-for-loop-headers",source:M};const o=t.bind({});o.args={id:"bloc-for-loop",source:E,readOnly:!0};var a,r,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var p,i,s;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var u,c,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const S=["Default","WithHeader","ReadOnly"];export{e as Default,o as ReadOnly,n as WithHeader,S as __namedExportsOrder,A as default};
//# sourceMappingURL=block-for-loop.stories-e61a9c2c.js.map
