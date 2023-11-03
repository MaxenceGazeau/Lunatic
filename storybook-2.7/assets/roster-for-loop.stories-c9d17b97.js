import{j as L}from"./jsx-runtime-4d536fe7.js";import"./index-e67e0a49.js";import{O as T,d as v}from"./default-arg-types-a7a853a9.js";import{p as b,s as O}from"./e2e-8d2cb453.js";import"./_commonjsHelpers-de833af9.js";import"./index-263f1c17.js";import"./index-9d475cdf.js";import"./index-356e4a49.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";const R="3",D=[{id:"seq",componentType:"Sequence",label:{value:'"Description des individus de votre logement"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"1"},{id:"loop-prenom",componentType:"RosterForLoop",label:{value:'"Ajouter un individu"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["PRENOM"],lines:{min:{value:1,type:"VTL"},max:{value:10,type:"VTL"}},page:"1",components:[{componentType:"Input",label:{value:'"Prénom"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,bindingDependencies:["PRENOM"],id:"prenom",response:{name:"PRENOM"}}]},{id:"loop",componentType:"Loop",loopDependencies:["PRENOM"],iterations:{value:"count(PRENOM)",type:"VTL"},page:"2",maxPage:"1",depth:1,paginatedLoop:!0,conditionFilter:{value:"true",type:"VTL"},components:[{id:"age",label:{value:'PRENOM || ", quel est vôtre âge ?"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},page:"2.1",componentType:"InputNumber",min:0,max:120,decimals:0,response:{name:"AGE"}}]},{id:"seq-end",componentType:"Sequence",label:{value:'"End"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"3"}],P={PRENOM:{size:"count(PRENOM)",variables:["AGE"]}},V=[{variableType:"COLLECTED",name:"PRENOM",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"AGE",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}}],r={maxPage:R,components:D,resizing:P,variables:V},S={title:"Components/Loop/RosterForLoop",component:T,argTypes:v},n=l=>L(T,{...l}),o=n.bind({}),a=n.bind({});o.args={id:"roster-for-loop",source:r};a.args={id:"roster-for-loop",source:r,readOnly:!0};const t=n.bind({});t.args={id:"roster-for-loop",source:r};t.play=async({args:l,canvasElement:E})=>{const e=b(E);await O(100),await e.getByRole("button",{name:"Ajouter un individu"}).click(),await e.getByLabel("Prénom",{index:0}).fill("John"),await e.getByLabel("Prénom",{index:1}).fill("Jane"),await e.getByRole("button",{name:"Next"}).click(),await e.getByLabel("John, quel est vôtre âge ?").fill("18"),await e.getByRole("button",{name:"Next"}).click(),await e.getByLabel("Jane, quel est vôtre âge ?").fill("21"),await e.getByLabel(/Page/).fill("2.1#1"),await e.getByRole("button",{name:/Go to page/}).click(),await e.getByRole("button",{name:"Next"}).click(),await e.getByRole("button",{name:"Next"}).click(),await e.getByText("End").shouldBeVisible()};var i,s,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,u,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,g,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const k=["Default","ReadOnly","Filled"];export{o as Default,t as Filled,a as ReadOnly,k as __namedExportsOrder,S as default};
//# sourceMappingURL=roster-for-loop.stories-c9d17b97.js.map
