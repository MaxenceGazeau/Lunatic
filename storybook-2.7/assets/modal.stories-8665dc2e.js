import{j as r}from"./jsx-runtime-52da5b2b.js";import"./index-e67e0a49.js";import{O as l,d as i}from"./default-arg-types-067d3c45.js";import"./_commonjsHelpers-de833af9.js";import"./index-ac8c84ba.js";import"./index-9d475cdf.js";const p="4",s=[{id:"kze792d8",componentType:"InputNumber",mandatory:!1,page:"1",min:0,max:10,decimals:0,label:{value:'"➡ 1. " || "In put for Number "',type:"VTL|MD"},description:{value:'"Description"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"NB"}},{id:"modaltoto",componentType:"ConfirmationModal",conditionFilter:{value:"true",type:"VTL"},page:"2",label:{value:'"### Est-ce correcte ? "',type:"VTL|MD"},description:{value:'"Vous avez renseigné : " || cast(NB, string) || "."',type:"VTL|MD"},declarations:[{id:"kb9hi4j0-krnoclfe",declarationType:"INSTRUCTION",position:"BEFORE_QUESTION_TEXT",label:{value:'"Déclaration Before"',type:"VTL|MD"}},{id:"kb9hi4j0-krnoclfe",declarationType:"INSTRUCTION",position:"AFTER_QUESTION_TEXT",label:{value:'"Déclaration AFTER"',type:"VTL|MD"}},{id:"kb9hi4j0-krnoclfe",declarationType:"HELP",position:"DETACHABLE",label:{value:'"Declaration Detachable"',type:"VTL|MD"}}]},{id:"modaltoto",componentType:"Sequence",conditionFilter:{value:"false",type:"VTL"},page:"3",label:{value:"toto to skip",type:"VTL"}},{id:"modaltoto",componentType:"Sequence",conditionFilter:{value:"true",type:"VTL"},page:"4",label:{value:"toto to not skip",type:"VTL"}}],c=[{variableType:"COLLECTED",name:"NB",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],T={maxPage:p,components:s,variables:c},v={title:"Components/Modal",component:l,argTypes:i},m=n=>r(l,{...n}),e=m.bind({});e.args={id:"modal",source:T};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,v as default};
//# sourceMappingURL=modal.stories-8665dc2e.js.map
