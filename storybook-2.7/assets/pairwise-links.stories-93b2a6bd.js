import{j as v}from"./jsx-runtime-827383a6.js";import"./index-e67e0a49.js";import{O as L,d as b}from"./default-arg-types-c9be8e6f.js";import{p as D,s as O}from"./e2e-e62d3b46.js";import"./_commonjsHelpers-de833af9.js";import"./index-3aac86b4.js";import"./index-9d475cdf.js";import"./index-356e4a49.js";import"./_baseIsEqual-976d9d82.js";import"./index-03bbf7d1.js";import"./uniq-9fca3600.js";const g="5",P=[{id:"seq",componentType:"Sequence",label:{value:'"Description des individus de votre logement"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"1"},{id:"loop-prenom",componentType:"RosterForLoop",label:{value:'"Ajouter un individu"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["PRENOM"],lines:{min:{value:1,type:"VTL"},max:{value:"10",type:"VTL"}},page:"1",components:[{componentType:"Input",label:{value:'"Prénom"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,bindingDependencies:["PRENOM"],id:"prenom",response:{name:"PRENOM"}}]},{id:"age-loop",componentType:"Loop",paginatedLoop:!0,iterations:{value:"count(PRENOM)",type:"VTL"},page:"2",maxPage:"1",conditionFilter:{value:"true",type:"VTL"},loopDependencies:["PRENOM"],components:[{id:"age-quest",label:{value:'"Âge de " || PRENOM',type:"VTL|MD"},conditionFilter:{type:"VTL",value:"true"},componentType:"InputNumber",page:"2.1",response:{name:"AGE"}}]},{id:"pairwise-links",componentType:"PairwiseLinks",conditionFilter:{value:"true"},xAxisIterations:{value:"count(PRENOM)",type:"VTL"},yAxisIterations:{value:"count(PRENOM)",type:"VTL"},page:"3",symLinks:{LINKS:{1:"1",2:"3",3:"2",4:"4",5:"6",6:"5",7:"8",8:"7",9:"10",10:"9",11:"13",12:"12",13:"11",14:null,15:"15",16:"16",17:"17",18:"18"}},components:[{componentType:"Dropdown",id:"dropdown-1",conditionFilter:{value:"xAxis <> yAxis",type:"VTL"},label:{value:'"Qui est " || yAxis || " pour " || xAxis || " ?"',type:"VTL|MD"},response:{name:"LINKS"},options:[{value:"1",label:'"Son conjoint, sa conjointe"'},{value:"2",label:'"Sa mère, son père"'},{value:"3",label:'"Sa fille, son fils"'},{value:"4",label:'"Sa soeur, son frère (y compris demi et quasi)"'},{value:"5",label:`"Sa belle-mère, son beau-père (conjoint.e d'un des parents)"`},{value:"6",label:`"L'enfant du conjoint (belle-fille, beau-fils)"`},{value:"7",label:'"Sa belle-mère, son beau-père (parent du conjoint)"'},{value:"8",label:`"Sa belle-fille, son beau-fils (conjoint.e d'un enfant)"`},{value:"9",label:'"Sa grand-mère, son grand-père"'},{value:"10",label:'"Sa petite-fille, petit-fils"'},{value:"11",label:'"Sa tante, son oncle"'},{value:"12",label:'"Sa cousine, son cousin"'},{value:"13",label:'"Sa nièce, son neveu"'},{value:"14",label:`"Un enfant placé en famille d'accueil"`},{value:"15",label:'"Sa belle-soeur, son beau-frère"'},{value:"16",label:'"Un autre lien familial"'},{value:"17",label:'"Un colocataire, sous-locataire"'},{value:"18",label:'"Autre lien (employé de maison, salarié logé, jeune au pair …)"'}]},{componentType:"Textarea",label:{value:'"Pouvez-vous décrire le lien entre " || xAxis || " et " || yAxis || " ?"',type:"VTL|MD"},conditionFilter:{value:'LINKS = "17"',type:"VTL"},id:"other",response:{name:"OTHER"}}]},{id:"pariwise-block",componentType:"Loop",paginatedLoop:!0,iterations:{value:"count(PRENOM)",type:"VTL"},page:"4",maxPage:"1",conditionFilter:{value:"true",type:"VTL"},loopDependencies:["PRENOM"],components:[{componentType:"Textarea",page:"4.1",label:{value:'PRENOM || ", why do you live without your parents?"',type:"VTL|MD"},conditionFilter:{value:'"3" not_in LINKS and AGE < 18',type:"VTL"},id:"why",response:{name:"WHY"}}]},{componentType:"Sequence",label:'"END"',page:5}],N=[{variableType:"COLLECTED",name:"PRENOM",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"AGE",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"LINKS",values:{PREVIOUS:[[null]],COLLECTED:[[null]],FORCED:[[null]],EDITED:[[null]],INPUTED:[[null]]}},{variableType:"COLLECTED",name:"OTHER",values:{PREVIOUS:[[null]],COLLECTED:[[null]],FORCED:[[null]],EDITED:[[null]],INPUTED:[[null]]}},{variableType:"COLLECTED",name:"WHY",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"CALCULATED",name:"xAxis",expression:{value:"PRENOM",type:"VTL"},bindingDependencies:["PRENOM"],shapeFrom:"PRENOM",inFilter:"false"},{variableType:"CALCULATED",name:"yAxis",expression:{value:"PRENOM",type:"VTL"},bindingDependencies:["PRENOM"],shapeFrom:"PRENOM",inFilter:"false"}],R={PRENOM:{sizeForLinksVariables:["count(PRENOM)","count(PRENOM)"],linksVariables:["LINKS"]}},C={maxPage:g,components:P,variables:N,resizing:R},x={PRENOM:{COLLECTED:["Dad","Mom","Unknow"]},AGE:{COLLECTED:[30,29,5]},LINKS:{COLLECTED:[[null]]},OTHER:{COLLECTED:[[null]]}},d={COLLECTED:x},V="5",S=[{id:"seq",componentType:"Sequence",label:{value:'"Description des individus de votre logement"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},page:"1"},{id:"loop-prenom",componentType:"RosterForLoop",label:{value:'"Ajouter un individu"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},bindingDependencies:["PRENOM"],lines:{min:{value:1,type:"VTL"},max:{value:"10",type:"VTL"}},page:"1",components:[{componentType:"Input",label:{value:'"Prénom"',type:"VTL|MD"},conditionFilter:{value:"true",type:"VTL"},maxLength:30,bindingDependencies:["PRENOM"],id:"prenom",response:{name:"PRENOM"}}]},{id:"age-loop",componentType:"Loop",paginatedLoop:!0,iterations:{value:"count(PRENOM)",type:"VTL"},page:"2",maxPage:"1",conditionFilter:{value:"true",type:"VTL"},loopDependencies:["PRENOM"],components:[{id:"age-quest",label:{value:'"Âge de " || PRENOM',type:"VTL|MD"},conditionFilter:{type:"VTL",value:"true"},componentType:"InputNumber",page:"2.1",response:{name:"AGE"}}]},{id:"component-set",componentType:"ComponentSet",page:"3",conditionFilter:{value:"true",type:"VTL"},label:{value:'"## Who are you?"',type:"VTL|MD"},description:{value:'"This is your opportunity to tell me about yourself!"',type:"VTL|MD"},components:[{id:"pairwise-links",componentType:"PairwiseLinks",conditionFilter:{value:"true"},xAxisIterations:{value:"count(PRENOM)",type:"VTL"},yAxisIterations:{value:"count(PRENOM)",type:"VTL"},symLinks:{LINKS:{1:"1",2:"3",3:"2",4:"4",5:"6",6:"5",7:"8",8:"7",9:"10",10:"9",11:"13",12:"12",13:"11",14:null,15:"15",16:"16",17:"17",18:"18"}},components:[{componentType:"Dropdown",id:"dropdown-1",conditionFilter:{value:"xAxis <> yAxis",type:"VTL"},label:{value:'"Qui est " || yAxis || " pour " || xAxis || " ?"',type:"VTL|MD"},response:{name:"LINKS"},options:[{value:"1",label:'"Son conjoint, sa conjointe"'},{value:"2",label:'"Sa mère, son père"'},{value:"3",label:'"Sa fille, son fils"'},{value:"4",label:'"Sa soeur, son frère (y compris demi et quasi)"'},{value:"5",label:`"Sa belle-mère, son beau-père (conjoint.e d'un des parents)"`},{value:"6",label:`"L'enfant du conjoint (belle-fille, beau-fils)"`},{value:"7",label:'"Sa belle-mère, son beau-père (parent du conjoint)"'},{value:"8",label:`"Sa belle-fille, son beau-fils (conjoint.e d'un enfant)"`},{value:"9",label:'"Sa grand-mère, son grand-père"'},{value:"10",label:'"Sa petite-fille, petit-fils"'},{value:"11",label:'"Sa tante, son oncle"'},{value:"12",label:'"Sa cousine, son cousin"'},{value:"13",label:'"Sa nièce, son neveu"'},{value:"14",label:`"Un enfant placé en famille d'accueil"`},{value:"15",label:'"Sa belle-soeur, son beau-frère"'},{value:"16",label:'"Un autre lien familial"'},{value:"17",label:'"Un colocataire, sous-locataire"'},{value:"18",label:'"Autre lien (employé de maison, salarié logé, jeune au pair …)"'}]},{componentType:"Textarea",label:{value:'"Pouvez-vous décrire le lien entre " || xAxis || " et " || yAxis || " ?"',type:"VTL|MD"},conditionFilter:{value:'not(nvl(cast(LINKS, string), "") = "") and cast(LINKS, string) = "17"',type:"VTL"},id:"other",response:{name:"OTHER"}}]}]},{id:"pariwise-block",componentType:"Loop",paginatedLoop:!0,iterations:{value:"count(PRENOM)",type:"VTL"},page:"4",maxPage:"1",conditionFilter:{value:"true",type:"VTL"},loopDependencies:["PRENOM"],components:[{componentType:"Textarea",page:"4.1",label:{value:'PRENOM || ", why do you live without your parents?"',type:"VTL|MD"},conditionFilter:{value:'"3" not_in LINKS and AGE < 18',type:"VTL"},id:"why",response:{name:"WHY"}}]},{componentType:"Sequence",label:'"END"',page:5}],M=[{variableType:"COLLECTED",name:"PRENOM",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"AGE",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"COLLECTED",name:"LINKS",values:{PREVIOUS:[[null]],COLLECTED:[[null]],FORCED:[[null]],EDITED:[[null]],INPUTED:[[null]]}},{variableType:"COLLECTED",name:"OTHER",values:{PREVIOUS:[[null]],COLLECTED:[[null]],FORCED:[[null]],EDITED:[[null]],INPUTED:[[null]]}},{variableType:"COLLECTED",name:"WHY",values:{PREVIOUS:[null],COLLECTED:[null],FORCED:[null],EDITED:[null],INPUTED:[null]}},{variableType:"CALCULATED",name:"xAxis",expression:{value:"PRENOM",type:"VTL"},bindingDependencies:["PRENOM"],shapeFrom:"PRENOM",inFilter:"false"},{variableType:"CALCULATED",name:"yAxis",expression:{value:"PRENOM",type:"VTL"},bindingDependencies:["PRENOM"],shapeFrom:"PRENOM",inFilter:"false"}],I={PRENOM:{sizeForLinksVariables:["count(PRENOM)","count(PRENOM)"],linksVariables:["LINKS"]}},f={maxPage:V,components:S,variables:M,resizing:I},H={title:"Components/PairwiseLinks",component:L,argTypes:b},o=t=>v(L,{...t}),n=o.bind({});n.args={id:"links",source:C,pagination:!0,data:d};const a=o.bind({});a.args={id:"links-componentset",source:f,pagination:!0,data:d};const l=o.bind({});l.args={...n.args,id:"links-filled"};l.play=async({args:t,canvasElement:y})=>{const e=D(y);await O(100),await e.getByLabel("Prénom",{index:2}).fill("Marc"),await e.getByRole("button",{name:"Ajouter un individu"}).click(),await e.getByLabel("Prénom",{index:3}).fill("Jane"),await e.getByRole("button",{name:"Next"}).click(),await e.getByRole("button",{name:"Next"}).click(),await e.getByRole("button",{name:"Next"}).click(),await e.getByRole("button",{name:"Next"}).click(),await e.getByLabel("Âge de Jane").click(),await e.getByLabel("Âge de Jane").fill("20"),await e.getByRole("button",{name:"Next"}).click(),await e.getByText("Commencez votre saisie...",{index:0}).click(),await e.getByText("Sa mère, son père").click(),await e.getByText("Sa fille, son fils").shouldBeVisible(),await e.getByRole("button",{name:"Next"}).click(),await e.getByRole("button",{name:"Next"}).click(),await e.getByText("END").shouldBeVisible()};var i,s,r;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var u,p,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var E,m,T;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:"args => <Orchestrator {...args} />",...(T=(m=l.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};const G=["Default","PairwiseInComponentSet","Filled"];export{n as Default,l as Filled,a as PairwiseInComponentSet,G as __namedExportsOrder,H as default};
//# sourceMappingURL=pairwise-links.stories-93b2a6bd.js.map
