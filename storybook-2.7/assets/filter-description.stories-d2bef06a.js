import{j as u}from"./jsx-runtime-37c7fa45.js";import"./index-e67e0a49.js";import{O as i,d as m}from"./default-arg-types-07b56800.js";import"./_commonjsHelpers-de833af9.js";import"./index-6d18fafe.js";import"./index-9d475cdf.js";const d=[{componentType:"FilterDescription",label:{value:"I'm a filter description",type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},id:"desc"}],T=[],D={components:d,variables:T},E="3",y=[{componentType:"InputNumber",label:{value:'"How old are you?"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},max:"120",id:"q1",response:{name:"Q1"},page:"1"},{componentType:"FilterDescription",label:{value:`"If you are minor, you'll be redirected to page 3"`,type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},id:"desc",page:"1"},{componentType:"Input",label:{value:'"Fake Q2"',type:"VTL|MD"},conditionFilter:{value:"cast(Q1, number) < 18",type:"VTL"},id:"q2",response:{name:"Q2"},page:"2"},{componentType:"Input",label:{value:'"Fake Q3"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},id:"q3",response:{name:"Q3"},page:"3"}],L=[{variableType:"COLLECTED",name:"Q1",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"Q2",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"Q3",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],b={maxPage:E,components:y,variables:L},V={title:"Components/FilterDescription",component:i,argTypes:{...m,filterDescription:{table:{disable:!1},control:"boolean",defaultValue:!0}}},p=c=>u(i,{...c}),e=p.bind({});e.args={id:"filter-description",source:D};const t=p.bind({});t.args={id:"filter-description-options",source:b,filterDescription:!0};var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var n,l,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const F=["Default","Options"];export{e as Default,t as Options,F as __namedExportsOrder,V as default};
//# sourceMappingURL=filter-description.stories-d2bef06a.js.map
