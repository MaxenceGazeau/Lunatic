"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2534],{39428:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var l=s(85893),i=s(11151),a=s(55094);const t=JSON.parse('{"maxPage":"5","components":[{"id":"seq","componentType":"Sequence","label":{"value":"\\"Description des individus de votre logement\\"","type":"VTL|MD"},"conditionFilter":{"value":"true","type":"VTL"},"page":"1"},{"id":"loop-prenom","componentType":"RosterForLoop","label":{"value":"\\"Ajouter un individu\\"","type":"VTL|MD"},"conditionFilter":{"value":"true","type":"VTL"},"bindingDependencies":["PRENOM"],"lines":{"min":{"value":1,"type":"VTL"},"max":{"value":"10","type":"VTL"}},"page":"1","components":[{"componentType":"Input","label":{"value":"\\"Pr\xe9nom\\"","type":"VTL|MD"},"conditionFilter":{"value":"true","type":"VTL"},"maxLength":30,"bindingDependencies":["PRENOM"],"id":"prenom","response":{"name":"PRENOM"}}]},{"id":"age-loop","componentType":"Loop","paginatedLoop":true,"iterations":{"value":"count(PRENOM)","type":"VTL"},"page":"2","maxPage":"1","conditionFilter":{"value":"true","type":"VTL"},"loopDependencies":["PRENOM"],"components":[{"id":"age-quest","label":{"value":"\\"\xc2ge de \\" || PRENOM","type":"VTL|MD"},"conditionFilter":{"type":"VTL","value":"true"},"componentType":"InputNumber","page":"2.1","response":{"name":"AGE"}}]},{"id":"pairwise-links","componentType":"PairwiseLinks","conditionFilter":{"value":"true"},"xAxisIterations":{"value":"count(PRENOM)","type":"VTL"},"yAxisIterations":{"value":"count(PRENOM)","type":"VTL"},"page":"3","symLinks":{"LINKS":{"1":"1","2":"3","3":"2","4":"4","5":"6","6":"5","7":"8","8":"7","9":"10","10":"9","11":"13","12":"12","13":"11","14":null,"15":"15","16":"16","17":"17","18":"18"}},"components":[{"componentType":"Dropdown","id":"dropdown-1","conditionFilter":{"value":"xAxis <> yAxis","type":"VTL"},"label":{"value":"\\"Qui est \\" || yAxis || \\" pour \\" || xAxis || \\" ?\\"","type":"VTL|MD"},"response":{"name":"LINKS"},"options":[{"value":"1","label":"\\"Son conjoint, sa conjointe\\""},{"value":"2","label":"\\"Sa m\xe8re, son p\xe8re\\""},{"value":"3","label":"\\"Sa fille, son fils\\""},{"value":"4","label":"\\"Sa soeur, son fr\xe8re (y compris demi et quasi)\\""},{"value":"5","label":"\\"Sa belle-m\xe8re, son beau-p\xe8re (conjoint.e d\'un des parents)\\""},{"value":"6","label":"\\"L\'enfant du conjoint (belle-fille, beau-fils)\\""},{"value":"7","label":"\\"Sa belle-m\xe8re, son beau-p\xe8re (parent du conjoint)\\""},{"value":"8","label":"\\"Sa belle-fille, son beau-fils (conjoint.e d\'un enfant)\\""},{"value":"9","label":"\\"Sa grand-m\xe8re, son grand-p\xe8re\\""},{"value":"10","label":"\\"Sa petite-fille, petit-fils\\""},{"value":"11","label":"\\"Sa tante, son oncle\\""},{"value":"12","label":"\\"Sa cousine, son cousin\\""},{"value":"13","label":"\\"Sa ni\xe8ce, son neveu\\""},{"value":"14","label":"\\"Un enfant plac\xe9 en famille d\'accueil\\""},{"value":"15","label":"\\"Sa belle-soeur, son beau-fr\xe8re\\""},{"value":"16","label":"\\"Un autre lien familial\\""},{"value":"17","label":"\\"Un colocataire, sous-locataire\\""},{"value":"18","label":"\\"Autre lien (employ\xe9 de maison, salari\xe9 log\xe9, jeune au pair \u2026)\\""}]},{"componentType":"Textarea","label":{"value":"\\"Pouvez-vous d\xe9crire le lien entre \\" || xAxis || \\" et \\" || yAxis || \\" ?\\"","type":"VTL|MD"},"conditionFilter":{"value":"LINKS = \\"17\\"","type":"VTL"},"id":"other","response":{"name":"OTHER"}}]},{"id":"pariwise-block","componentType":"Loop","paginatedLoop":true,"iterations":{"value":"count(PRENOM)","type":"VTL"},"page":"4","maxPage":"1","conditionFilter":{"value":"true","type":"VTL"},"loopDependencies":["PRENOM"],"components":[{"componentType":"Textarea","page":"4.1","label":{"value":"PRENOM || \\", why do you live without your parents?\\"","type":"VTL|MD"},"conditionFilter":{"value":"\\"3\\" not_in LINKS and AGE < 18","type":"VTL"},"id":"why","response":{"name":"WHY"}}]},{"componentType":"Sequence","label":"\\"END\\"","page":5}],"variables":[{"variableType":"COLLECTED","name":"PRENOM","values":{"PREVIOUS":[null],"COLLECTED":[null],"FORCED":[null],"EDITED":[null],"INPUTED":[null]}},{"variableType":"COLLECTED","name":"AGE","values":{"PREVIOUS":[null],"COLLECTED":[null],"FORCED":[null],"EDITED":[null],"INPUTED":[null]}},{"variableType":"COLLECTED","name":"LINKS","values":{"PREVIOUS":[[null]],"COLLECTED":[[null]],"FORCED":[[null]],"EDITED":[[null]],"INPUTED":[[null]]}},{"variableType":"COLLECTED","name":"OTHER","values":{"PREVIOUS":[[null]],"COLLECTED":[[null]],"FORCED":[[null]],"EDITED":[[null]],"INPUTED":[[null]]}},{"variableType":"COLLECTED","name":"WHY","values":{"PREVIOUS":[null],"COLLECTED":[null],"FORCED":[null],"EDITED":[null],"INPUTED":[null]}},{"variableType":"CALCULATED","name":"xAxis","expression":{"value":"PRENOM","type":"VTL"},"bindingDependencies":["PRENOM"]},{"variableType":"CALCULATED","name":"yAxis","expression":{"value":"PRENOM","type":"VTL"},"bindingDependencies":["PRENOM"]}],"resizing":{"PRENOM":{"sizeForLinksVariables":["count(PRENOM)","count(PRENOM)"],"linksVariables":["LINKS"]}}}'),r={},o="PairwiseLinks",d={id:"components/aggregators/pairwise",title:"PairwiseLinks",description:"Le composant lien 2 \xe0 2 permet de d\xe9finir des relations bidirectionnelles entre les donn\xe9es.",source:"@site/docs/components/aggregators/pairwise.mdx",sourceDirName:"components/aggregators",slug:"/components/aggregators/pairwise",permalink:"/Lunatic/docs/components/aggregators/pairwise",draft:!1,unlisted:!1,editUrl:"https://github.com/InseeFr/Lunatic/tree/2.7/docs/docs/components/aggregators/pairwise.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Roundabout",permalink:"/Lunatic/docs/components/aggregators/roundabout"},next:{title:"VTL",permalink:"/Lunatic/docs/vtl"}},u={},c=[{value:"symLinks",id:"symlinks",level:2},{value:"xAxis et yAxis",id:"xaxis-et-yaxis",level:2},{value:"Format des donn\xe9es",id:"format-des-donn\xe9es",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"pairwiselinks",children:"PairwiseLinks"}),"\n",(0,l.jsxs)(n.p,{children:["Le composant ",(0,l.jsx)(n.strong,{children:"lien 2 \xe0 2"})," permet de d\xe9finir des relations bidirectionnelles entre les donn\xe9es."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"xAxisIterations"}),", nombre d'\xe9l\xe9ments sur le premier axe"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"yAxisIterations"}),", nombre d'\xe9l\xe9ments sur le second axe"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"components"}),", liste des questions \xe0 poser pour chaque combinaison possible"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"symLinks"}),", d\xe9finit la relation bidirectionnelle entre les donn\xe9es"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"symlinks",children:"symLinks"}),"\n",(0,l.jsx)(n.p,{children:"L'option symLinks va permettre d'indiquer la valeur inverse \xe0 une valeur s\xe9lectionn\xe9e. Si on prend l'exemple d'un s\xe9lect avec 3 valeurs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "symLinks": {\n        "LINKS": {\n            "\xe9poux": "\xe9poux",\n            "fils": "parent",\n            "parent": "fils"\n        }\n    }\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["De cette mani\xe8re lorsqu'on indiquera que ",(0,l.jsx)(n.strong,{children:"X"})," est ",(0,l.jsx)(n.strong,{children:'"fils"'})," de ",(0,l.jsx)(n.strong,{children:"Y"}),", le syst\xe8me changera aussi la relation inverse pour indiquer que ",(0,l.jsx)(n.strong,{children:"Y"})," est ",(0,l.jsx)(n.strong,{children:'"parent"'})," de ",(0,l.jsx)(n.strong,{children:"X"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"xaxis-et-yaxis",children:"xAxis et yAxis"}),"\n",(0,l.jsxs)(n.p,{children:["Lorsque le pairwise est utilis\xe9, 2 variables calcul\xe9es vont agir de mani\xe8re sp\xe9ciale afin de pouvoir renvoyer les bonnes indications \xe0 l'utilisateur : ",(0,l.jsx)(n.strong,{children:"xAxis"})," et ",(0,l.jsx)(n.strong,{children:"yAxis"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "variableType": "CALCULATED",\n        "name": "xAxis",\n        "expression": { "value": "PRENOM", "type": "VTL" },\n        "bindingDependencies": ["PRENOM"]\n    },\n    {\n        "variableType": "CALCULATED",\n        "name": "yAxis",\n        "expression": { "value": "PRENOM", "type": "VTL" },\n        "bindingDependencies": ["PRENOM"]\n    }\n]\n'})}),"\n",(0,l.jsx)(n.p,{children:"Si ces variables sont utilis\xe9es dans une expression d'un composant du pairwise, le syst\xe8me de calcul ira piocher l'\xe9l\xe9ment au bon index."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "label": {\n        "value": "\\"Qui est \\" || yAxis || \\" pour \\" || xAxis || \\" ?\\"",\n        "type": "VTL|MD"\n    }\n}\n'})}),"\n","\n","\n",(0,l.jsx)(a.U,{source:t,data:{COLLECTED:{PRENOM:{COLLECTED:["Maman","Papa","Fils"]},AGE:{COLLECTED:[30,29,5]},LINKS:{COLLECTED:[[null]]},OTHER:{COLLECTED:[[null]]}}},options:{initialPage:"3"}}),"\n",(0,l.jsx)(n.h2,{id:"format-des-donn\xe9es",children:"Format des donn\xe9es"}),"\n",(0,l.jsx)(n.p,{children:"Les donn\xe9es sont sauvegard\xe9es sous forme d'un tableau \xe0 2 dimensions"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"x \\ y"}),(0,l.jsx)(n.th,{children:"Maman"}),(0,l.jsx)(n.th,{children:"Papa"}),(0,l.jsx)(n.th,{children:"Fils"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Maman"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Papa"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Fils"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{})]})]})]}),"\n",(0,l.jsx)(n.p,{children:'Si on souhaite indiquer la r\xe9lation Parent (valeur "2") et enfant (valeur "3").\nEn suivant la question "qui est Y pour X ?" le tableau sera compl\xe9t\xe9 de la mani\xe8re suivante.'}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"x \\ y"}),(0,l.jsx)(n.th,{children:"Maman"}),(0,l.jsx)(n.th,{children:"Papa"}),(0,l.jsx)(n.th,{children:"Fils"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Maman"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"3"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Papa"}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{}),(0,l.jsx)(n.td,{children:"3"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Fils"}),(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"Ce qui donnera ce tableau en JavaScript"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'[\n    [null, null, "3" ],\n    [null, null, "3" ],\n    ["2",  "2",  null]\n]\n'})})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}}}]);