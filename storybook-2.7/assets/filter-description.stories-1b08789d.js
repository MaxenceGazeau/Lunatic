import{j as u}from"./index-06cf7426.js";import"./index-e67e0a49.js";import{O as i,d as m}from"./default-arg-types-22241b86.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const d="1",T=[{componentType:"FilterDescription",label:{value:"I'm a filter description",type:"VTL|MD"},id:"desc",page:"1"}],D=[],E={maxPage:d,components:T,variables:D},y="3",L=[{componentType:"InputNumber",label:{value:'"How old are you?"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},max:"120",id:"q1",response:{name:"Q1"},page:"1"},{componentType:"FilterDescription",label:{value:`"If you are minor, you'll be redirected to page 3"`,type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},id:"desc",page:"1"},{componentType:"Input",label:{value:'"Fake Q2"',type:"VTL|MD"},conditionFilter:{value:"cast(Q1, number) < 18",type:"VTL"},id:"q2",response:{name:"Q2"},page:"2"},{componentType:"Input",label:{value:'"Fake Q3"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},id:"q3",response:{name:"Q3"},page:"3"}],b=[{variableType:"COLLECTED",name:"Q1",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"Q2",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"Q3",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],g={maxPage:y,components:L,variables:b},V={title:"Components/FilterDescription",component:i,argTypes:{...m,filterDescription:{table:{disable:!1},control:"boolean",defaultValue:!0}}},p=c=>u(i,{...c}),e=p.bind({});e.args={id:"filter-description",source:E};const t=p.bind({});t.args={id:"filter-description-options",source:g,filterDescription:!0};var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var n,l,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const F=["Default","Options"];export{e as Default,t as Options,F as __namedExportsOrder,V as default};
//# sourceMappingURL=filter-description.stories-1b08789d.js.map
