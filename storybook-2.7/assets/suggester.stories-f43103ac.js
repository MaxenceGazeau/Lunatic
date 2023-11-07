import{j as E}from"./jsx-runtime-4d536fe7.js";import"./index-e67e0a49.js";import{O as d,d as L}from"./default-arg-types-932971a0.js";import{g as o}from"./referentiel-844c1130.js";import"./_commonjsHelpers-de833af9.js";import"./index-ddaf4bc4.js";import"./index-9d475cdf.js";const y="5",v=[{name:"naf-rev2",fields:[{name:"label",rules:["[\\w]+"],language:"French",min:2},{name:"id"}],queryParser:{type:"tokenized",params:{language:"French",pattern:"[\\w.]+"}},version:"1"},{name:"cog-communes",fields:[{name:"id",rules:"soft"}],queryParser:{type:"soft"},version:"1"},{name:"in-error",fields:[{name:"id",rules:"soft"}],queryParser:{type:"soft"},version:"1"}],O=[{id:"suggestions-naf",componentType:"Suggester",mandatory:!1,label:{value:'"Code ou terme des libellés de la Naf-rev2"',type:"VTL|MD"},description:{value:"Exemple: 01 ou tabac",type:"VTL|MD"},storeName:"naf-rev2",conditionFilter:{value:"true",type:"VTL"},readOnly:{value:"true",type:"VTL"},controls:[{id:"age-controls",criticality:"ERROR",typeOfControl:"FORMAT",control:{value:"not(isnull(HELLO))",type:"VTL"},errorMessage:{value:'"Veuillez selectionner quelquechose"',type:"VTL"}}],response:{name:"HELLO"},missingResponse:{name:"HELLO_MISSING"},page:"1"},{id:"suggestions-cog",componentType:"Suggester",mandatory:!1,label:'"Hello!"',storeName:"cog-communes",conditionFilter:{value:"true",type:"VTL"},response:{name:"HELLO"},missingResponse:{name:"HELLO_MISSING"},page:"2"},{id:"suggestions-inconnu",componentType:"Suggester",mandatory:!1,label:'"Hello!"',storeName:"inconnu-au-bataillon",conditionFilter:{value:"true",type:"VTL"},response:{name:"HELLO"},missingResponse:{name:"HELLO_MISSING"},page:"3"},{id:"suggestions-in-error",componentType:"Suggester",mandatory:!1,label:'"Hello!"',storeName:"in-error",conditionFilter:{value:"true",type:"VTL"},missingResponse:{name:"HELLO_MISSING"},response:{name:"HELLO"},page:"4"},{id:"bye!",componentType:"Sequence",page:"5",declarations:[{id:"kb9hi4j0-krnoclfe",declarationType:"INSTRUCTION",position:"BEFORE_QUESTION_TEXT",label:{value:'"Merci beaucoup."',type:"VTL|MD"}}]}],D=[{variableType:"COLLECTED",name:"HELLO",componentRef:"nn",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"HELLO_MISSING",componentRef:"nn",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],f={maxPage:y,suggesters:v,components:O,variables:D},N="4",b=[{name:"naf-rev2",fields:[{name:"label",rules:["[\\w]+"],language:"French",min:2},{name:"id"}],queryParser:{type:"tokenized",params:{language:"French",pattern:"[\\w.]+"}},version:"1"},{name:"naf-rev2-stop",fields:[{name:"label",rules:["[\\w]+"],language:"French",min:2},{name:"id"}],queryParser:{type:"tokenized",params:{language:"French",pattern:"[\\w.]+"}},version:"1"},{name:"cog-communes",fields:[{name:"label",rules:"soft"},{name:"nccenr",rules:"soft"},{name:"id",rules:"soft"}],queryParser:{type:"soft"},version:"1"}],C=[{id:"nn",componentType:"InputNumber",mandatory:!1,min:1,max:4,decimals:0,label:{value:'"Number of inhabitants"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},response:{name:"NUM"},page:"1"},{id:"idLoop",label:{value:'"Boucle individu"',type:"VTL|MD"},componentType:"Loop",iterations:{value:"cast(NUM, integer)",type:"VTL"},paginatedLoop:!1,conditionFilter:{value:"true",type:"VTL"},loopDependencies:["NUM"],page:"2",components:[{id:"k3ym6x16",label:{value:'"Prénom :"',type:"VTL|MD"},componentType:"Input",conditionFilter:{value:"true",type:"VTL"},mandatory:!1,response:{name:"PRENOM"},page:"2"}]},{id:"idLoopInd",label:{value:'"Boucle individu"',type:"VTL|MD"},componentType:"Loop",iterations:{value:"count(PRENOM)",type:"VTL"},paginatedLoop:!0,conditionFilter:{value:"true",type:"VTL"},loopDependencies:["PRENOM"],page:"3",maxPage:"3",components:[{id:"k3ym61vfzzzzzzzzzzzz",componentType:"Sequence",label:{value:'"Questionnaire de : " || PRENOM',type:"VTL|MD"},conditionFilter:{value:"not(isnull(PRENOM))",type:"VTL"},page:"3.1"},{id:"sugg1",componentType:"Suggester",mandatory:!1,label:{value:`PRENOM || " what's your favorite NAF code? (default stop words)"`,type:"VTL|MD"},storeName:"naf-rev2",conditionFilter:{value:"not(isnull(PRENOM))",type:"VTL"},response:{name:"NAF"},page:"3.2"},{id:"sugg2",componentType:"Suggester",mandatory:!1,label:`PRENOM || " what's your favorite NAF code? (without stop words)"`,storeName:"naf-rev2-stop",conditionFilter:{value:"not(isnull(PRENOM))",type:"VTL"},response:{name:"NAF_STOP"},page:"3.2",declarations:[{id:"kb9hi4j0-krnoclfe",declarationType:"INSTRUCTION",position:"BEFORE_QUESTION_TEXT",label:{value:'"Test declaration before"',type:"VTL|MD"}},{id:"kb9hi4j0-krnoclfe",declarationType:"HELP",position:"AFTER_QUESTION_TEXT",label:{value:'"Test description from declaration"',type:"VTL|MD"}}]},{id:"sugg-communes",componentType:"Suggester",mandatory:!1,label:{value:`PRENOM || " what's your favorite city?"`,type:"VTL|MD"},storeName:"cog-communes",conditionFilter:{value:"not(isnull(PRENOM))",type:"VTL"},response:{name:"CITY"},page:"3.3"}]},{id:"kk",componentType:"Sequence",label:{value:'"END"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"4"}],S=[{variableType:"COLLECTED",name:"NUM",componentRef:"nn",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}},{variableType:"COLLECTED",name:"PRENOM",componentRef:"idLoop",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"NAF",componentRef:"idLoopInd",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"NAF_STOP",componentRef:"idLoopInd",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"CITY",componentRef:"idLoopInd",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}}],I={maxPage:N,suggesters:b,components:C,variables:S},R="1",P=[{name:"naf-rev2",fields:[{name:"label",rules:["[\\w]+"],language:"French",min:2},{name:"id"}],queryParser:{type:"tokenized",params:{language:"French",pattern:"[\\w.]+"}},version:"1"}],V=[{id:"lfwg2ny2",componentType:"ComponentSet",page:"1",className:"ComponentSet",conditionFilter:{value:"true",type:"VTL"},label:{value:'"Chercher votre activité principale."',type:"VTL"},components:[{id:"communes-2023",componentType:"Suggester",label:{value:'"NAF"',type:"VTL"},description:'"industrie"',storeName:"naf-rev2",conditionFilter:{value:"true",type:"VTL"},response:{name:"ACT"}}]}],F=[{variableType:"COLLECTED",name:"ACT",values:{PREVIOUS:null,COLLECTED:null,FORCED:null,EDITED:null,INPUTED:null}}],M={maxPage:R,suggesters:P,components:V,variables:F},x={title:"Components/Suggester",component:d,argTypes:L},t=T=>E(d,{...T}),e=t.bind({});e.args={id:"suggester",source:I,autoSuggesterLoading:!0,getReferentiel:o,pagination:!0};const n=t.bind({});n.args={source:f,getReferentiel:o,autoSuggesterLoading:!0,missing:{table:{disable:!1},control:"boolean",defaultValue:!0}};const a=t.bind({});a.args={source:M,getReferentiel:o,autoSuggesterLoading:!0};var l,s,r;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var i,u,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,c,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(g=(c=a.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const q=["Default","Simple","ComponentSet"];export{a as ComponentSet,e as Default,n as Simple,q as __namedExportsOrder,x as default};
//# sourceMappingURL=suggester.stories-f43103ac.js.map
