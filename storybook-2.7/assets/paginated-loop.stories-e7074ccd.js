import{j as i}from"./jsx-runtime-855de6a5.js";import"./index-e67e0a49.js";import{O as t,d as r}from"./default-arg-types-e65710e4.js";import"./_commonjsHelpers-de833af9.js";import"./index-77e48807.js";import"./index-9d475cdf.js";const p="3",s=[{id:"kb9hi4j0",componentType:"Sequence",page:"1",label:{value:'"Sequence"',type:"VTL|MD"},declarations:[{id:"kb9hi4j0-krnoclfe",declarationType:"HELP",position:"AFTER_QUESTION_TEXT",label:{value:'"Bonjour!"',type:"VTL"}}],conditionFilter:{value:"true",type:"VTL"}},{id:"kmw4iq4w",componentType:"Loop",page:"2",maxPage:"2",depth:1,paginatedLoop:!0,conditionFilter:{value:"true",type:"VTL"},loopDependencies:["3"],iterations:{value:"3",type:"VTL"},components:[{id:"kmno1n7m",componentType:"Input",mandatory:!1,page:"2.1",maxLength:20,label:{value:'"Questions 1, Itération : " || GLOBAL_ITERATION_INDEX',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},response:{name:"PAGE1"}},{id:"kmno1n7m",componentType:"Input",mandatory:!1,page:"2.2",maxLength:20,label:{value:'"Vous avez mis en question 1, itération  " || GLOBAL_ITERATION_INDEX || " : " || LIBELLE',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},response:{name:"PAGE2"}}]},{id:"kb9hi4j0",componentType:"Sequence",page:"3",label:{value:'"Sequence"',type:"VTL"},declarations:[{id:"kb9hi4j0-krnoclfe",declarationType:"HELP",position:"AFTER_QUESTION_TEXT",label:{value:'"Au revoir!"',type:"VTL"}}],conditionFilter:{value:"true",type:"VTL"}}],u={},T=[{variableType:"EXTERNAL",name:"NUMBER",value:"3"},{variableType:"COLLECTED",name:"PAGE1",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"PAGE2",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"CALCULATED",name:"LIBELLE",expression:{value:"PAGE1",type:"VTL"},bindingDependencies:["PAGE1"],inFilter:"false",shapeFrom:"PAGE1"}],E={maxPage:p,components:s,resizing:u,variables:T},D={title:"Components/Loop/PaginatedLoop",component:t,argTypes:r},c=l=>i(t,{...l}),e=c.bind({});e.args={id:"paginated-loop",source:E};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,D as default};
//# sourceMappingURL=paginated-loop.stories-e7074ccd.js.map
