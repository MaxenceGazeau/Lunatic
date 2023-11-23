import{j as p}from"./index-06cf7426.js";import"./index-e67e0a49.js";import{O as t,d as i}from"./default-arg-types-22241b86.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const u="5",T=[{componentType:"Input",page:"1",label:{value:`"Nom de l'occupant principal."`,type:"VTL|MD"},readOnly:{value:"DISABLED_NOM",type:"VTL"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,id:"name",response:{name:"NOM"},declarations:[{id:"kb9hi4j0-krnoclfe",declarationType:"INSTRUCTION",position:"BEFORE_QUESTION_TEXT",label:{value:`"Quel est le prénom de l'occupant principal du logement ?"`,type:"VTL|MD"}},{id:"kb9hi4j0-krnoclfe",declarationType:"HELP",position:"AFTER_QUESTION_TEXT",label:{value:'"For example, Marley."',type:"VTL|MD"}}]},{id:"radio",componentType:"Radio",mandatory:!1,page:"1",label:{value:'"Disabled or enabled!"',type:"VTL|MD"},description:{value:'"Select whether you would like the above component to be disabled. "',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},options:[{value:!0,description:{value:'"with VTL"',type:"VTL|MD"},label:{value:'"Disabled"',type:"VTL|MD"}},{value:!1,description:{value:'"with VTL"',type:"VTL|MD"},label:{value:'"Enabled"',type:"VTL|MD"}}],response:{name:"DISABLED_NOM"}},{id:"radio1",componentType:"Radio",mandatory:!1,page:"2",readOnly:{value:"DISABLED_SEXE",type:"VTL"},label:{value:'"Quel est votre sexe ?"',type:"VTL|MD"},description:{value:'"Ceci est un exemple pour tester le comportement pour rendre les composants en mode readOnly"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},options:[{value:"1",description:{value:'"Test"',type:"VTL|MD"},label:{value:'"masculin"',type:"VTL|MD"}},{value:"2",description:{value:'"Test 2"',type:"VTL|MD"},label:{value:'"féminin"',type:"VTL|MD"}}],response:{name:"SEXE"}},{id:"radio3",componentType:"Radio",mandatory:!1,page:"2",label:{value:'"Disabled or enabled!"',type:"VTL|MD"},description:{value:'"Select whether you would like the above component to be disabled. "',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},options:[{value:!0,description:{value:'"with VTL"',type:"VTL|MD"},label:{value:'"Disabled"',type:"VTL|MD"}},{value:!1,description:{value:'"with VTL"',type:"VTL|MD"},label:{value:'"Enabled"',type:"VTL|MD"}}],response:{name:"DISABLED_SEXE"}},{id:"component-set",componentType:"ComponentSet",page:"3",conditionFilter:{value:"true",type:"VTL"},label:{value:'"## Who are you?"',type:"VTL|MD"},description:{value:'"This is your opportunity to tell me about yourself!"',type:"VTL|MD"},components:[{componentType:"Input",label:{value:`"Nom de l'occupant principal."`,type:"VTL|MD"},readOnly:{value:"DISABLED_NOM_COMPSET",type:"VTL"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,id:"name",response:{name:"NOM_COMPSET"},declarations:[{id:"kb9hi4j0-krnoclfe",declarationType:"INSTRUCTION",position:"BEFORE_QUESTION_TEXT",label:{value:`"Quel est le prénom de l'occupant principal du logement ?"`,type:"VTL|MD"}},{id:"kb9hi4j0-krnoclfe",declarationType:"HELP",position:"AFTER_QUESTION_TEXT",label:{value:'"For example, Marley."',type:"VTL|MD"}}]}]},{id:"radio",componentType:"Radio",mandatory:!1,page:"3",label:{value:'"Disabled or enabled!"',type:"VTL|MD"},description:{value:'"Select whether you would like the above component to be disabled. "',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},options:[{value:!0,description:{value:'"with VTL"',type:"VTL|MD"},label:{value:'"Disabled"',type:"VTL|MD"}},{value:!1,description:{value:'"with VTL"',type:"VTL|MD"},label:{value:'"Enabled"',type:"VTL|MD"}}],response:{name:"DISABLED_NOM_COMPSET"}},{componentType:"Input",page:"4",label:{value:`"Nom de l'occupant principal."`,type:"VTL|MD"},readOnly:{value:"DISABLED_NOM",type:"VTL"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,id:"name",response:{name:"NOM"},declarations:[{id:"kb9hi4j0-krnoclfe",declarationType:"INSTRUCTION",position:"BEFORE_QUESTION_TEXT",label:{value:`"Quel est le prénom de l'occupant principal du logement ?"`,type:"VTL|MD"}},{id:"kb9hi4j0-krnoclfe",declarationType:"HELP",position:"AFTER_QUESTION_TEXT",label:{value:'"For example, Marley."',type:"VTL|MD"}}]},{id:"radio",componentType:"Radio",mandatory:!1,page:"4",label:{value:'"Disabled or enabled!"',type:"VTL|MD"},description:{value:'"Select whether you would like the above component to be disabled. "',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},options:[{value:!0,description:{value:'"with VTL"',type:"VTL|MD"},label:{value:'"Disabled"',type:"VTL|MD"}},{value:!1,description:{value:'"with VTL"',type:"VTL|MD"},label:{value:'"Enabled"',type:"VTL|MD"}}],response:{name:"DISABLED_PAIRWISE"}}],E=[{variableType:"COLLECTED",name:"NOM",componentRef:"name",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"DISABLED_NOM",componentRef:"name",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"SEXE",componentRef:"sexe",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"DISABLED_SEXE",componentRef:"sexe",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"NOM_COMPSET",componentRef:"nomcompset",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"DISABLED_NOM_COMPSET",componentRef:"nomcompset",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"DISABLED_PAIRWISE",componentRef:"nomcompset",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],r={maxPage:u,components:T,variables:E},D={NOM:{EDITED:null,FORCED:null,INPUTED:null,PREVIOUS:null,COLLECTED:"Renaud"},DISABLED_NOM:{EDITED:null,FORCED:null,INPUTED:null,PREVIOUS:null,COLLECTED:!0},SEXE:{EDITED:null,FORCED:null,INPUTED:null,PREVIOUS:null,COLLECTED:"2"},DISABLED_SEXE:{EDITED:null,FORCED:null,INPUTED:null,PREVIOUS:null,COLLECTED:!0}},s={COLLECTED:D},O={title:"Components/Disabled-component",component:t,argTypes:i},d=o=>p(t,{...o}),e=d.bind({});e.args={id:"input",source:r,data:s};var l,a,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const b=["Disabled"];export{e as Disabled,b as __namedExportsOrder,O as default};
//# sourceMappingURL=disabled.stories-aee95723.js.map
