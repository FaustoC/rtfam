"use strict";(self.webpackChunkrtfam=self.webpackChunkrtfam||[]).push([[2711],{9331:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});t(6540);var a=t(8774),s=t(1312),i=t(9024),n=t(9201),c=t(1107),l=t(4848);function h(e){let{year:r,posts:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.A,{as:"h3",id:r,children:r}),(0,l.jsx)("ul",{children:t.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(a.A,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:r}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(h,{...e})},r)))})})})}function o(e){let{archive:r}=e;const t=(0,s.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,s.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const r=e.reduce(((e,r)=>{const t=r.metadata.date.split("-")[0],a=e.get(t)??[];return e.set(t,[r,...a])}),new Map);return Array.from(r,(e=>{let[r,t]=e;return{year:r,posts:t}}))}(r.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.be,{title:t,description:a}),(0,l.jsxs)(n.A,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(c.A,{as:"h1",className:"hero__title",children:t}),(0,l.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,l.jsx)("main",{children:h.length>0&&(0,l.jsx)(d,{years:h})})]})]})}}}]);