import{j as s}from"./jsx-runtime-37c7fa45.js";import"./index-e67e0a49.js";import{O as a,d as r}from"./default-arg-types-4d214947.js";import{g as p}from"./referentiel-844c1130.js";import"./_commonjsHelpers-de833af9.js";import"./index-3b783ea6.js";import"./index-9d475cdf.js";const i="2.4.1",u="2.3.1",m="question",c="4",d={value:'"Test Sympa"',type:"VTL|MD"},T=[{name:"cog-communes",fields:[{name:"label",rules:"soft"},{name:"nccenr",rules:"soft"},{name:"id",rules:"soft"}],queryParser:{type:"soft"},version:"1"}],L=[{id:"nn",componentType:"InputNumber",mandatory:!1,min:1,max:4,decimals:0,label:{value:'"Number of inhabitants"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"NUM"},page:"1"},{id:"idLoop",label:{value:'"Boucle individu"',type:"VTL|MD"},componentType:"Loop",iterations:{value:"cast(NUM, integer)",type:"VTL"},paginatedLoop:!1,conditionFilter:{value:"true",type:"VTL"},loopDependencies:["NUM"],page:"2",components:[{id:"k3ym6x16",label:{value:'"Prénom :"',type:"VTL|MD"},componentType:"Input",conditionFilter:{value:"true",type:"VTL"},mandatory:!1,response:{name:"PRENOM"},page:"2"}]},{id:"idLoopInd",label:{value:'"Boucle individu"',type:"VTL|MD"},componentType:"Loop",iterations:{value:"count(PRENOM)",type:"VTL"},paginatedLoop:!0,conditionFilter:{value:"true",type:"VTL"},loopDependencies:["PRENOM"],page:"3",maxPage:"1",depth:1,components:[{id:"sugg-communes",componentType:"Suggester",mandatory:!1,label:{value:`PRENOM || " what's your favorite city?"`,type:"VTL|MD"},storeName:"cog-communes",conditionFilter:{value:"not(isnull(PRENOM))",type:"VTL"},response:{name:"CITY"},page:"3.1"}]},{id:"kk",componentType:"Sequence",label:{value:'"END"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"4"}],g=[{variableType:"COLLECTED",name:"NUM",componentRef:"nn",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"PRENOM",componentRef:"idLoop",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"CITY",componentRef:"idLoopInd",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}}],y={enoCoreVersion:i,lunaticModelVersion:u,pagination:m,maxPage:c,label:d,suggesters:T,components:L,variables:g},b={title:"Components/Loop/NotPaginatedLoop",component:a,argTypes:r},E=l=>s(a,{...l}),e=E.bind({});e.args={id:"not-paginated-loop",source:y,getReferentiel:p,autoSuggesterLoading:!0};var o,n,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const N=["Default"];export{e as Default,N as __namedExportsOrder,b as default};
//# sourceMappingURL=not-paginated-loop.stories-3d0ffc43.js.map
