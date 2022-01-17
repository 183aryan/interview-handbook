"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3633],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3419:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={id:"study-and-practice",title:"Study and Practice"},c=void 0,l={unversionedId:"study-and-practice",id:"study-and-practice",title:"Study and Practice",description:"Recap CS fundamentals",source:"@site/../contents/study-and-practice.md",sourceDirName:".",slug:"/study-and-practice",permalink:"/study-and-practice",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/study-and-practice.md",tags:[],version:"current",lastUpdatedBy:"Yangshun",lastUpdatedAt:1630517439,formattedLastUpdatedAt:"9/1/2021",frontMatter:{id:"study-and-practice",title:"Study and Practice"},sidebar:"docs",previous:{title:"Picking a Language",permalink:"/picking-a-language"},next:{title:"Best Practice Questions",permalink:"/best-practice-questions"}},u=[{value:"Recap CS fundamentals",id:"recap-cs-fundamentals",children:[],level:2},{value:"Mastery through practice",id:"mastery-through-practice",children:[{value:"Practice coding questions",id:"practice-coding-questions",children:[],level:3},{value:"Space/time complexities",id:"spacetime-complexities",children:[],level:3},{value:"Practice good coding style",id:"practice-good-coding-style",children:[],level:3},{value:"Internalize the pitfalls",id:"internalize-the-pitfalls",children:[],level:3},{value:"Broaden exposure",id:"broaden-exposure",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"recap-cs-fundamentals"},"Recap CS fundamentals"),(0,i.kt)("p",null,"If you have been out of college for a while, it is highly advisable to review CS fundamentals\u200a\u2014\u200aAlgorithms and Data Structures. Personally, I prefer to review as I practice, so I scan through my college notes and review the various algorithms as I work on algorithm problems from LeetCode and Cracking the Coding Interview."),(0,i.kt)("p",null,"This ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kdn251/interviews"},"interviews repository")," by Kevin Naughton Jr. served as a quick refresher for me."),(0,i.kt)("p",null,"The Medium publication ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/basecs"},"basecs")," by ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@vaidehijoshi"},"Vaidehi Joshi")," is also a great and light-hearted resource to recap on the various data structures and algorithms."),(0,i.kt)("p",null,"You can also find implementations of common data structures and algorithms using various popular languages at ",(0,i.kt)("a",{parentName:"p",href:"https://thealgorithms.github.io/"},"TheAlgorithms"),"."),(0,i.kt)("h2",{id:"mastery-through-practice"},"Mastery through practice"),(0,i.kt)("p",null,"Next, gain familiarity and mastery of the algorithms and data structures in your chosen programming language."),(0,i.kt)("h3",{id:"practice-coding-questions"},"Practice coding questions"),(0,i.kt)("p",null,"Practice coding algorithms using your chosen language. While ",(0,i.kt)("a",{parentName:"p",href:"http://www.crackingthecodinginterview.com/"},"Cracking the Coding Interview")," is a good resource for practice, I prefer being able to type code, run it and get instant feedback. There are various Online Judges such as ",(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/"},"LeetCode"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.hackerrank.com/"},"HackerRank")," and ",(0,i.kt)("a",{parentName:"p",href:"http://codeforces.com/"},"CodeForces")," for you to practice questions online and get used to the language. From experience, LeetCode questions are the most similar to the kind of questions being asked in interviews whereas HackerRank and CodeForces questions resemble competitive programming questions. If you practice enough LeetCode questions, there is a good chance that you would have seen/done your actual interview question (or some variant) on LeetCode before. If you are more of a visual person, ",(0,i.kt)("a",{parentName:"p",href:"https://www.educative.io/collection/5642554087309312/5679846214598656"},"Coderust")," explains the common algorithm questions through step-by-step visualizations which makes understanding the solutions much easier."),(0,i.kt)("h3",{id:"spacetime-complexities"},"Space/time complexities"),(0,i.kt)("p",null,"Learn and understand the time and space complexities of the common operations in your chosen language. For Python, this ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.python.org/moin/TimeComplexity"},"page")," will come in handy. Also find out the underlying sorting algorithm that is being used in the language's ",(0,i.kt)("inlineCode",{parentName:"p"},"sort()")," function and its time and space complexity (in Python its Timsort which is a hybrid sort). After completing a question on LeetCode, I usually add the time and space complexities of the written code as comments above the function body to remind myself to analyze the algorithm after I am done with the implementation."),(0,i.kt)("h3",{id:"practice-good-coding-style"},"Practice good coding style"),(0,i.kt)("p",null,"Read up on the recommended coding style for your language and stick to it. If you have chosen Python, refer to the PEP 8 Style Guide. If you have chosen Java, refer to Google's Java Style Guide."),(0,i.kt)("h3",{id:"internalize-the-pitfalls"},"Internalize the pitfalls"),(0,i.kt)("p",null,"Find out and be familiar with the common pitfalls and caveats of the language. If you point them out during the interview and intelligently avoid falling into them, you will usually impress the interviewer and that results in bonus points for your feedback, regardless of whether the interviewer is familiar with the language or not."),(0,i.kt)("h3",{id:"broaden-exposure"},"Broaden exposure"),(0,i.kt)("p",null,"Gain a broad exposure to questions from various topics. In the second half of the article I mention algorithm topics and practice questions for each topic. If you can spare the time, do around 100\u2013200 LeetCode questions of varying topics and you should be good."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Practice, practice and more practice!")))}p.isMDXComponent=!0}}]);