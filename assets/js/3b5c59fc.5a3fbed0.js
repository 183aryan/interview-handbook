"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9640],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7178:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"interval",title:"Interval"},s=void 0,c={unversionedId:"algorithms/interval",id:"algorithms/interval",title:"Interval",description:"Notes",source:"@site/../contents/algorithms/interval.md",sourceDirName:"algorithms",slug:"/algorithms/interval",permalink:"/algorithms/interval",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/interval.md",tags:[],version:"current",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,formattedLastUpdatedAt:"9/26/2019",frontMatter:{id:"interval",title:"Interval"},sidebar:"docs",previous:{title:"Heap",permalink:"/algorithms/heap"},next:{title:"Linked List",permalink:"/algorithms/linked-list"}},p=[{value:"Notes",id:"notes",children:[],level:2},{value:"Corner cases",id:"corner-cases",children:[],level:2},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Interval questions are questions where you are given an array of two-element arrays (an interval) and the two values represent a start and an end value. Interval questions are considered part of the array family but they involve some common techniques hence they are extracted out to this special section of their own."),(0,o.kt)("p",null,"An example interval array: ",(0,o.kt)("inlineCode",{parentName:"p"},"[[1, 2], [4, 7]]"),"."),(0,o.kt)("p",null,"Interval questions can be tricky to those who have not tried them before because of the sheer number of cases to consider when they overlap."),(0,o.kt)("p",null,"Do clarify with the interviewer whether ",(0,o.kt)("inlineCode",{parentName:"p"},"[1, 2]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"[2, 3]")," are considered overlapping intervals as it affects how you will write your equality checks."),(0,o.kt)("p",null,"A common routine for interval questions is to sort the array of intervals by each interval's starting value."),(0,o.kt)("p",null,"Be familiar with writing code to check if two intervals overlap and merging two overlapping intervals:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"def is_overlap(a, b):\n  return a[0] < b[1] and b[0] < a[1]\n\ndef merge_overlapping_intervals(a, b):\n  return [min(a[0], b[0]), max(a[1], b[1])]\n")),(0,o.kt)("h2",{id:"corner-cases"},"Corner cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Single interval"),(0,o.kt)("li",{parentName:"ul"},"Non-overlapping intervals"),(0,o.kt)("li",{parentName:"ul"},"An interval totally consumed within another interval"),(0,o.kt)("li",{parentName:"ul"},"Duplicate intervals")),(0,o.kt)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/insert-interval/"},"Insert Interval")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/merge-intervals/"},"Merge Intervals")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/non-overlapping-intervals/"},"Non-overlapping Intervals")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/meeting-rooms/"},"Meeting Rooms (LeetCode Premium)")," and ",(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/meeting-rooms-ii/"},"Meeting Rooms II (LeetCode Premium)"))))}m.isMDXComponent=!0}}]);