import{j as i}from"./index-06cf7426.js";import"./index-e67e0a49.js";import{O as t,d as r}from"./default-arg-types-22241b86.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const u={ORIGIN:{CITY:'ORIGIN = "FR"'}},c=[{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTED:null,FORCED:null,PREVIOUS:null},name:"ORIGIN"},{variableType:"COLLECTED",values:{COLLECTED:null,EDITED:null,INPUTED:null,FORCED:null,PREVIOUS:null},name:"CITY"}],p=[{componentType:"Sequence",hierarchy:{sequence:{id:"ksyjs7vy",page:"1",label:{type:"VTL|MD",value:'"I - " || "S0"'}}},conditionFilter:{type:"VTL",value:"true"},id:"ksyjs7vy",page:"1",label:{type:"VTL|MD",value:'"I - " || "Test du cleaning"'}},{componentType:"Radio",id:"radio",controls:[],hierarchy:{sequence:{id:"ksyjs7vy",page:"1",label:{type:"VTL|MD",value:'"I - " || "S0"'}}},options:[{value:"US",label:{value:'"Etats unis"',type:"VTL|MD"}},{value:"FR",label:{value:'"France"',type:"VTL|MD"}}],conditionFilter:{type:"VTL",value:"true"},label:{type:"VTL|MD",value:'"➡ 1. " || "Origine"'},mandatory:!1,bindingDependencies:["ORIGIN"],response:{name:"ORIGIN"},page:"2"},{componentType:"Input",id:"input",controls:[],hierarchy:{sequence:{id:"ksyjs7vy",page:"1",label:{type:"VTL|MD",value:'"I - " || "S0"'}}},conditionFilter:{type:"VTL",value:'ORIGIN = "FR"'},label:{type:"VTL|MD",value:'"➡ 2. " || "Ville de france"'},mandatory:!1,bindingDependencies:["CITY"],response:{name:"CITY"},page:"3"},{componentType:"Sequence",conditionFilter:{type:"VTL",value:"true"},id:"ksyjs7vy",page:"4",label:{type:"VTL|MD",value:'"END"'}}],d="question",T="2.3.2-rc4",y="TESTSURSUM",g="2.4.1-pairwise",m="14-04-2023 09:00:09",b=!1,D="lb3ei722",v="4",o={cleaning:u,variables:c,components:p,pagination:d,lunaticModelVersion:T,modele:y,enoCoreVersion:g,generatingDate:m,missing:b,id:D,maxPage:v},O={title:"Behaviour/Cleaning",component:t,argTypes:{...r,missing:{table:{disable:!1},control:"boolean",defaultValue:!0},activeGoNextForMissing:{table:{disable:!1},control:"boolean",defaultValue:!0},management:{table:{disable:!1},control:"boolean",defaultValue:!1},activeControls:{control:"boolean",defaultValue:!0},source:{table:{disable:!1},control:{type:"object"},defaultValue:o},data:{table:{disable:!1},control:{type:"object"},defaultValue:{COLLECTED:{READY:{COLLECTED:!0}}}}}},E=s=>i(t,{...s}),e=E.bind({});e.args={id:"resizing-default",pagination:!0,source:o};var a,l,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const R=["Default"];export{e as Default,R as __namedExportsOrder,O as default};
//# sourceMappingURL=test.stories-ee3f2488.js.map
