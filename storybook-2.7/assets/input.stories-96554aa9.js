import{j as m}from"./jsx-runtime-855de6a5.js";import"./index-e67e0a49.js";import{O as i,d as T}from"./default-arg-types-e65710e4.js";import"./_commonjsHelpers-de833af9.js";import"./index-77e48807.js";import"./index-9d475cdf.js";const E=[{componentType:"Input",label:{value:`"Prénom de l'occupant principal."`,type:"VTL|MD"},disabled:{value:"DISABLED",type:"VTL"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,id:"name",response:{name:"PRENOM"},declarations:[{id:"kb9hi4j0-krnoclfe",declarationType:"INSTRUCTION",position:"BEFORE_QUESTION_TEXT",label:{value:`"Quel est le prénom de l'occupant principal du logement ?"`,type:"VTL|MD"}},{id:"kb9hi4j0-krnoclfe",declarationType:"HELP",position:"AFTER_QUESTION_TEXT",label:{value:'"For example, Marley."',type:"VTL|MD"}}]},{componentType:"Input",label:{value:`"Nom de l'occupant principal."`,type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,id:"surname",description:{value:'"For example, Bob."',type:"VTL|MD"},response:{name:"NOM"},declarations:[{id:"kb9hi4j0-krnoclfe",declarationType:"INSTRUCTION",position:"BEFORE_QUESTION_TEXT",label:{value:`"Quel est le nom de l'occupant principal ?"`,type:"VTL|MD"}}]}],d=[{variableType:"COLLECTED",name:"NOM",componentRef:"name",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"PRENOM",componentRef:"name",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"CALCULATED",name:"DISABLED",expression:{value:"true",type:"VTL"}}],D={components:E,variables:d},L=[{componentType:"QuestionInformation",label:{value:'"Question Information"',type:"VTL|MD"},description:{value:'"Question Information description"',type:"VTL|MD"},page:"1"},{componentType:"Input",label:{value:`"Prénom de l'occupant principal."`,type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,id:"name",response:{name:"PRENOM"},page:"1"},{componentType:"QuestionContext",label:{value:'"Question Context"',type:"VTL|MD"},description:{value:'"Question Context description"',type:"VTL|MD"},page:"1"},{componentType:"Input",label:{value:`"Nom de l'occupant principal."`,type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,id:"surname",description:{value:'"For example, Bob."',type:"VTL|MD"},response:{name:"NOM"},page:"1"}],y=[{variableType:"COLLECTED",name:"NOM",componentRef:"name",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"PRENOM",componentRef:"name",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],O={components:L,variables:y},s={},N={title:"Components/Input",component:i,argTypes:T},u=c=>m(i,{...c}),e=u.bind({});e.args={id:"input",source:D,data:s};const n=u.bind({});n.args={id:"input",source:O,data:s};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var l,p,r;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(r=(p=n.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};const R=["Default","WithQuestion"];export{e as Default,n as WithQuestion,R as __namedExportsOrder,N as default};
//# sourceMappingURL=input.stories-96554aa9.js.map
