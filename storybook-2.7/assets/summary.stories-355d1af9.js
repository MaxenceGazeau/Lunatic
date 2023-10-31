import{j as u}from"./jsx-runtime-855de6a5.js";import"./index-e67e0a49.js";import{O as t,d as i}from"./default-arg-types-1b9d3217.js";import"./_commonjsHelpers-de833af9.js";import"./index-853b9fa5.js";import"./index-9d475cdf.js";const s="5",p=[{id:"seq",componentType:"Sequence",label:{value:'"Description des individus de votre logement"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"1"},{id:"how",componentType:"InputNumber",mandatory:!1,page:"2",min:1,max:10,decimals:0,label:{value:'"Combien de personnes vivent habituellement à votre adresse ?"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"NB_HAB"}},{id:"hoew",componentType:"InputNumber",mandatory:!1,page:"2",min:42,max:42,decimals:0,label:{value:`"Qu'est-ce que zéro divisé par zéro ?"`,type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"ZERO"}},{id:"loop",componentType:"Loop",page:"3",depth:1,paginatedLoop:!1,conditionFilter:{value:"true",type:"VTL"},loopDependencies:["NHAB"],lines:{min:{value:"NB_HAB",type:"VTL"},max:{value:"NB_HAB",type:"VTL"}},components:[{id:"prenom",componentType:"Input",mandatory:!1,maxLength:20,label:{value:'"Prénom"))',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"PRENOMS"}},{id:"age",componentType:"InputNumber",maxLength:3,label:{value:'"Age"))',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"AGE"}}]},{id:"roundabout",componentType:"Roundabout",page:"4",conditionFilter:{value:"true",type:"VTL"},iterations:{value:"NB_HAB",type:"VTL"},label:{value:'"Libellé du rondpoint"',type:"VTL"},locked:!0,expressions:{unnecessary:{value:"AGE < 13",type:"VTL"},complete:{value:"not(isnull(KNOWREC)) and not(isnull(SEXE)) and not(isnull(SOMETHING))",type:"VTL"},partial:{value:"not(isnull(KNOWREC)) or not(isnull(SEXE)) or not(isnull(SOMETHING))",type:"VTL"},label:{value:'"Série de question pour " || PRENOMS',type:"VTL"}},controls:[{id:"roundabout-Carefull",criticality:"WARN",control:{value:"not(isnull(KNOWREC)) and not(isnull(SEXE)) and not(isnull(SOMETHING))",type:"VTL"},type:"roundabout",iterations:{value:"NB_HAB",type:"VTL"},errorMessage:{value:`"Le formulaire n'est pas complet pour " || PRENOMS`,type:"VTL|MD"}}],components:[{id:"radio",componentType:"Radio",mandatory:!1,page:"4.1",label:{value:'"Connaissez-vous le recensement de la population ?"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},options:[{value:"1",label:{value:'"oui"',type:"VTL|MD"}},{value:"2",label:{value:'"non"',type:"VTL|MD"}}],response:{name:"KNOWREC"}},{id:"jsygk7m7",componentType:"Subsequence",page:"4.2",label:{value:'"Deuxième page de questions pour "|| PRENOMS',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"}},{id:"sexe",componentType:"Radio",page:"4.2",label:{value:'"Sexe"',type:"VTL"},conditionFilter:{value:"true",type:"VTL"},options:[{value:"1",label:{value:'"Homme"',type:"VTL|MD"}},{value:"2",label:{value:'"Femme"',type:"VTL|MD"}}],response:{name:"SEXE"}},{id:"jsygk7m7",componentType:"Subsequence",page:"4.3",label:{value:'"Troisième page de questions " || PRENOMS',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"}},{id:"kmno1n7m",componentType:"Input",maxLength:30,page:"4.3",label:{value:'"Dites quelque chose."))',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"SOMETHING"}}]},{id:"Summary",componentType:"Summary",label:{value:'"## Vos réponses."',type:"VTL|MD"},sections:[{id:"summary-section-0",iterations:{value:"NB_HAB",type:"VTL"},title:{value:'"### Le bulletin individuel de " || PRENOMS',type:"VTL|MD"},responses:[{id:"summary-section-0-response-0",label:{value:`"L'age de " || PRENOMS`,type:"VTL"},value:{value:'cast(AGE,string) || " ans"',type:"VTL"}},{id:"summary-section-0-response-1",label:{value:'"Le sexe de " || PRENOMS',type:"VTL"},value:{value:'if(SEXE = "1") then "Masculin" else "Féminin"',type:"VTL"}}]},{id:"summary-section-1",title:{value:'"### La feuille logement"',type:"VTL|MD"},responses:[{id:"summary-section-1-response-0",label:{value:'"Zéro divisé par zéro "',type:"VTL"},value:{value:'cast(ZERO,string) || ", mais ça tu savais déjà !"',type:"VTL"}},{id:"summary-section-1-response-1",label:{value:`"Nombre d'habitants "`,type:"VTL"},value:{value:'cast(NB_HAB,string) || " personnes"',type:"VTL"}}]}],conditionFilter:{value:"true",type:"VTL"},page:"5"}],r=[{variableType:"COLLECTED",name:"NB_HAB",values:{PREVIOUS:null,COLLECTED:2,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"ZERO",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"SOMETHING",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"AGE",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"SEXE",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"PRENOMS",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"KNOWREC",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"CALCULATED",name:"PRENOMREF",expression:{value:"first_value(PRENOMS over())",type:"VTL"},bindingDependencies:["PRENOMS"],inFilter:"true"}],E={NB_HAB:{size:"NB_HAB",variables:["PRENOMS","AGE","SEXE","SOMETHING","DATNAIS"]}},T={maxPage:s,components:p,variables:r,resizing:E},m={NB_HAB:{EDITED:null,FORCED:null,INPUTED:null,PREVIOUS:null,COLLECTED:2},PRENOMS:{EDITED:[null],FORCED:[null],INPUTED:[null],PREVIOUS:[null],COLLECTED:["Matt","Julia"]},AGE:{EDITED:[null],FORCED:[null],INPUTED:[null],PREVIOUS:[null],COLLECTED:[26,31]},SEXE:{EDITED:[null],FORCED:[null],INPUTED:[null],PREVIOUS:[null],COLLECTED:["1","2"]}},L={COLLECTED:m},C={title:"Components/Summary",component:t,argTypes:i},y=o=>u(t,{...o}),e=y.bind({});e.args={id:"Summary",source:T,data:L,pagination:!0};var l,n,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const N=["Default"];export{e as Default,N as __namedExportsOrder,C as default};
//# sourceMappingURL=summary.stories-355d1af9.js.map
