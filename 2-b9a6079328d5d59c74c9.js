(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{146:function(A,e,a){"use strict";a.d(e,"b",function(){return o});var t=a(0),n=a.n(t),i=a(4),c=a.n(i),s=a(33),r=a.n(s);a.d(e,"a",function(){return r.a});a(151);var l=n.a.createContext({}),o=function(A){return n.a.createElement(l.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(A,e,a){"use strict";a(75),a(76),a(77);var t=a(159),n=a(0),i=a.n(n),c=a(146),s=a(152),r=a.n(s);e.a=function(A){return i.a.createElement(c.b,{query:"1560689599",render:function(e){var a=e.images.edges.find(function(e){return e.node.relativePath.includes(A.filename)});if(!a)return null;var t=a.node.childImageSharp.sizes;return i.a.createElement(r.a,{alt:A.alt,sizes:t})},data:t})}},148:function(A,e,a){"use strict";var t=a(161),n=a(0),i=a.n(n),c=a(4),s=a.n(c),r=a(162),l=a.n(r);function o(A){var e=A.description,a=A.lang,n=A.meta,c=A.title,s=t.data.site,r=e||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:c},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:r}].concat(n)})}o.defaultProps={lang:"en",meta:[],description:""},o.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},e.a=o},149:function(A,e,a){"use strict";var t=a(155),n=a(0),i=a.n(n),c=a(4),s=a.n(c),r=a(146),l=(a(157),function(A){return i.a.createElement("div",{className:"mobile-nav__item--container"},i.a.createElement("li",{className:"mobile-nav__item",onClick:function(){return A.expandItem(A.index)}},A.item,i.a.createElement("span",{className:A.expand?"material-icons rotated":"material-icons"},"add")),i.a.createElement("div",{className:A.expand?"mobile-nav__item--list expand":"mobile-nav__item--list"},A.children))}),o=a(147),d=function(A){var e=Object(n.useState)([!1,!1]),a=e[0].slice(0),t=e[1];return i.a.createElement("div",{className:A.isOpen?"drawer open":"drawer"},i.a.createElement("div",{className:"mobile-nav__header"},i.a.createElement(o.a,{filename:"MrRiceLogo2Name.png"})),i.a.createElement("div",{className:"mobile-nav-container"},i.a.createElement("ul",null,i.a.createElement(l,{item:"Services",expand:a[0],expandItem:function(A){var e=a[A]?new Array(a.length).fill(!1):a.map(function(e,a){return a===A});t(e)},index:0},i.a.createElement("ul",null,i.a.createElement(r.a,null,i.a.createElement("li",null,"Lessons")),i.a.createElement(r.a,null,i.a.createElement("li",null,"Writing Correction")))),i.a.createElement(r.a,null,i.a.createElement("li",null,"Testimonials")),i.a.createElement(r.a,null,i.a.createElement("li",null,"Contact Me")))))},m=function(A){return i.a.createElement("div",{className:A.isOpen?"menu-btn close":"menu-btn",onClick:A.toggleDrawer},i.a.createElement("div",{className:"btn-line"}),i.a.createElement("div",{className:"btn-line"}),i.a.createElement("div",{className:"btn-line"}))},g=a(153),E=a(150),b=function(){return i.a.createElement(E.b.Provider,{value:{className:"social-icons",size:"1.5em"}},i.a.createElement("div",{className:"container__social-links"},i.a.createElement("div",{className:"social-icon"},i.a.createElement(g.b,null)),i.a.createElement("div",{className:"social-icon"},i.a.createElement(g.g,null)),i.a.createElement("div",{className:"social-icon"},i.a.createElement(g.f,null)),i.a.createElement("div",{className:"social-icon"},i.a.createElement(g.c,null))))},p=function(){return i.a.createElement("div",{className:"topbar"},i.a.createElement(b,null))},h=function(A){A.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("div",{style:{width:"150px",height:"150px",objectFit:"cover",objectPosition:"center"}},i.a.createElement(r.a,{to:"/",style:{color:"black",textDecoration:"none"}},i.a.createElement(o.a,{filename:"MrRiceLogo2Name.png"})))))};h.propTypes={siteTitle:s.a.string},h.defaultProps={siteTitle:""};var f=h,u=function(){return i.a.createElement("div",{className:"navbar"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("div",{className:"icon-box"},i.a.createElement("span",null,"Home"))),i.a.createElement("li",null,i.a.createElement("div",{className:"icon-box"},"Services",i.a.createElement("span",{className:"material-icons"},"arrow_drop_down")),i.a.createElement("ul",null,i.a.createElement(r.a,null,i.a.createElement("li",null,"1 to 1 Lessons")),i.a.createElement(r.a,null,i.a.createElement("li",null,"Writing Correction")),i.a.createElement(r.a,null,i.a.createElement("li",null,"Proofreading")))),i.a.createElement("li",null,i.a.createElement("div",{className:"icon-box"},"Contact")),i.a.createElement("li",null,i.a.createElement("div",{className:"icon-box"},"Testimonials"))))},B=(a(160),function(A){var e=A.children,a=Object(n.useState)(!1),c=a[0],s=a[1],l=function(){s(!c)};return i.a.createElement(r.b,{query:"755544856",render:function(A){return i.a.createElement("div",{className:"main-body"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"mobile-menu"},i.a.createElement(m,{isOpen:c,toggleDrawer:l})),i.a.createElement(p,null),i.a.createElement(f,{siteTitle:A.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",paddingTop:0}},i.a.createElement(u,null),i.a.createElement("main",null,e),i.a.createElement(d,{isOpen:c}),i.a.createElement("footer",null,i.a.createElement("div",{className:"footer-main"},i.a.createElement("div",{className:"footer-main__box"},i.a.createElement("h4",null,"Free Consultaion"),i.a.createElement("p",null,"Contact me to discuss what services you need. This is usually done over Skype but special arrangements can be made if necessary.")),i.a.createElement("div",{className:"footer-main__box"},i.a.createElement("h4",null,"Social Media"),i.a.createElement(b,null),i.a.createElement("p",null,"Follow me on social media for all my latest updates and great English learning content."))),i.a.createElement("div",{className:"footer-bottom"},"© ",(new Date).getFullYear()," Mr. Rice English")),c&&i.a.createElement("div",{className:"overlay",onClick:l}))))},data:t})});B.propTypes={children:s.a.node.isRequired};e.a=B},151:function(A,e,a){var t;A.exports=(t=a(156))&&t.default||t},155:function(A){A.exports={data:{site:{siteMetadata:{title:"Jon's Site"}}}}},156:function(A,e,a){"use strict";a.r(e);a(34);var t=a(0),n=a.n(t),i=a(4),c=a.n(i),s=a(69),r=a(2),l=function(A){var e=A.location,a=r.default.getResourcesForPathnameSync(e.pathname);return a?n.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json)):null};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=l},159:function(A){A.exports={data:{images:{edges:[{node:{relativePath:"gatsby-icon.png",name:"gatsby-icon",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=",aspectRatio:1,src:"/mrriceenglish/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png",srcSet:"/mrriceenglish/static/4a9773549091c227cd2eb82ccd9c5e3a/541bf/gatsby-icon.png 258w,\n/mrriceenglish/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png 512w",sizes:"(max-width: 512px) 100vw, 512px"}}}},{node:{relativePath:"MrRiceLogo2Name.png",name:"MrRiceLogo2Name",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAC30lEQVQ4y41U204aURSdv2jTj/HNN5MmTdQX+wV+RfvSBx98Kl5im6gJGCKgAWa4CYhci6mJqNGIpAKh3KEYYBgGVmef9OAM0sSdTM59zdprXwS80sbjMRv7/T42NjZwfn4+81x4LRh/UCqVIEkS0uk0KpUK6vU6BoPB5N6rAUejEZtnMhmEQiFEIhGIogibzQa73Y5CofB/hpwNZ0afqqpsLxAIMHYulws+n4/tmc1mtNvtl4DTQJwV2XA4ZGM4HIbD4YDH48H19TVSqRSSySQ7o58K02BkeqBGo4Fut8vmzWYTR0dHjCW5e3V1xdb6N8I0M+6aLMtIJBLY399nTEg3q9WKnZ0dxGIxNj84OEA+nzcC6sG4JeJxWLXLFE1utWqVLqHT6TDtbLbnQOgxBH1KqJpOgdNT/NRceRZ2duSJmdvtRq/XM+gucDHJJE2bmMYMxObxF/rKCN1hB3/kLFS5BSjdCf5AkVnqUF4aACeuaqAWvx/yp8/A2zcovf+AL5pH8cI3fM+8Q+7sI8YnW1BrPbi20riNVVEs5RGNRqEnJXAxb29u8HV7G82LC7QcdnQTKZBCKh6RHxxj1AgCvzPoV9uQzAmEXD8gSm6sr68b0k7gyJSoAY0haXh8cgKX5n5AdEIStdEThcd3Brc/CLckwh/0IhINs9Lzer24v7+fRHrCkPQoFosG4ZutlpaHddQbNdRqFS3SFQyVoeFOPBY3AnINc7kcS1Yy0oXy7enpibnx8PCAzc1NZLNZVnb6dHI6nYzpzLSxWCxsNJlMmJ+fx8rKCpaWlrC4uMjGhYUFLC8vY25ujlUPVc7h4eHLtOFuExPqHMSEapTYbGuBWl1dZdURDAYZe9q/u7vD3t4eA51ZKXzj8vISu7u7KJfLE7cURTHoRj8mMOqF+rcvK+VfxEnktbU1tuZdhp8TI2JN+urfGFzW9z0yKidqnJRK1E1IBvqobdGaGE4z42//Akp4tsAoSosYAAAAAElFTkSuQmCC",aspectRatio:1,src:"/mrriceenglish/static/5450ebbad1ca44a843ff40f27d0deccc/af144/MrRiceLogo2Name.png",srcSet:"/mrriceenglish/static/5450ebbad1ca44a843ff40f27d0deccc/541bf/MrRiceLogo2Name.png 258w,\n/mrriceenglish/static/5450ebbad1ca44a843ff40f27d0deccc/73d34/MrRiceLogo2Name.png 515w,\n/mrriceenglish/static/5450ebbad1ca44a843ff40f27d0deccc/af144/MrRiceLogo2Name.png 800w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{relativePath:"logo1.png",name:"logo1",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAqCAYAAACz+XvQAAAACXBIWXMAAAsSAAALEgHS3X78AAACTElEQVRIx+2Vy27aQBSGeb+WvkcfoRJCYoO6blbNIt2wJoJwEdgISLgEKEEhAQEOIlzCvYibITjA35lpbTlgg1JF6sZHGs1gjb8555/fBxPeOUwG0AAawPcCbrdbNmhsNhtlrX7+TxmqX5bBavibMqQAGuVyGf1+X/OQNwFprFYr+P1+5HI5iKLIxm7ppmOaqdeTyQShUAjRaBQ8zyMYDCrZ6gLVILlMOUajEbxeL1wuF1qtFhKJBJbLpTZQS2AakiRhOp2yNQXQkmOxGMLhMOr1unJBexruwrZkU7PRQCAQQLFYILrdMJjb7YbD4UA6nX4F0yxZ8RoZ6dtbxFPXmP/NbiWt2TwcDpHP59Htdl9VplkyjTWZgx4PBpkMsFiCKjR77mIjTbAm5dOoPdaQzWY1zb0HbJCT40R0fPqAwpev4ElifOMjusnPwNMDsv5HCLk+QhEO87m4p7kCXK//lETFpjeZIba4SaZQEiooPiRQr1yjlPsJ7zmHMHeFiws30baofykyMB6PM0uIxMSDX0O0mk3Uqg3cFUp46nSwfF5AellhsViwvbpA+SEVvNfrQahU8OPsDHf397i8usTJyTdiah6n30/ZPkEQDmco60CNSn0WiURgt9thsVhgNpvZbLPZYLVa0SGZchzHPKqrofqkdrsNn8/HLMJutVZT9gwGA3iIC8bj8eHmoO53NKiO1MC0AcxmMwagUjidTvZby9RHP71qtYpUKoVkMskG9Z4WTLdkrW/5WKM92g93u83uONT+jb9RA2gA/xvwNx61yjckCBYLAAAAAElFTkSuQmCC",aspectRatio:.47368421052631576,src:"/mrriceenglish/static/4474aaea3b1d347d74fca53e24b6c4da/ae5a4/logo1.png",srcSet:"/mrriceenglish/static/4474aaea3b1d347d74fca53e24b6c4da/541bf/logo1.png 258w,\n/mrriceenglish/static/4474aaea3b1d347d74fca53e24b6c4da/73d34/logo1.png 515w,\n/mrriceenglish/static/4474aaea3b1d347d74fca53e24b6c4da/ae5a4/logo1.png 1030w,\n/mrriceenglish/static/4474aaea3b1d347d74fca53e24b6c4da/728bb/logo1.png 1080w",sizes:"(max-width: 1030px) 100vw, 1030px"}}}},{node:{relativePath:"white1.jpg",name:"white1",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgAF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3QwKo//EABYQAQEBAAAAAAAAAAAAAAAAABEQAP/aAAgBAQABBQJzC//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABkQAQEBAAMAAAAAAAAAAAAAAAEAERAhYf/aAAgBAQABPyHxOm7k5Bx//9oADAMBAAIAAwAAABDo7//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABcQAQEBAQAAAAAAAAAAAAAAAAERACH/2gAIAQEAAT8QSlW6FjhjUJx3TChDf//Z",aspectRatio:1.6,src:"/mrriceenglish/static/221ef1af8b1ec2edbab3ab1a307fe363/b596b/white1.jpg",srcSet:"/mrriceenglish/static/221ef1af8b1ec2edbab3ab1a307fe363/298f9/white1.jpg 258w,\n/mrriceenglish/static/221ef1af8b1ec2edbab3ab1a307fe363/34d33/white1.jpg 515w,\n/mrriceenglish/static/221ef1af8b1ec2edbab3ab1a307fe363/b596b/white1.jpg 1030w,\n/mrriceenglish/static/221ef1af8b1ec2edbab3ab1a307fe363/ed6aa/white1.jpg 1545w,\n/mrriceenglish/static/221ef1af8b1ec2edbab3ab1a307fe363/14dee/white1.jpg 1920w",sizes:"(max-width: 1030px) 100vw, 1030px"}}}},{node:{relativePath:"icon.png",name:"icon",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAC30lEQVQ4y41U204aURSdv2jTj/HNN5MmTdQX+wV+RfvSBx98Kl5im6gJGCKgAWa4CYhci6mJqNGIpAKh3KEYYBgGVmef9OAM0sSdTM59zdprXwS80sbjMRv7/T42NjZwfn4+81x4LRh/UCqVIEkS0uk0KpUK6vU6BoPB5N6rAUejEZtnMhmEQiFEIhGIogibzQa73Y5CofB/hpwNZ0afqqpsLxAIMHYulws+n4/tmc1mtNvtl4DTQJwV2XA4ZGM4HIbD4YDH48H19TVSqRSSySQ7o58K02BkeqBGo4Fut8vmzWYTR0dHjCW5e3V1xdb6N8I0M+6aLMtIJBLY399nTEg3q9WKnZ0dxGIxNj84OEA+nzcC6sG4JeJxWLXLFE1utWqVLqHT6TDtbLbnQOgxBH1KqJpOgdNT/NRceRZ2duSJmdvtRq/XM+gucDHJJE2bmMYMxObxF/rKCN1hB3/kLFS5BSjdCf5AkVnqUF4aACeuaqAWvx/yp8/A2zcovf+AL5pH8cI3fM+8Q+7sI8YnW1BrPbi20riNVVEs5RGNRqEnJXAxb29u8HV7G82LC7QcdnQTKZBCKh6RHxxj1AgCvzPoV9uQzAmEXD8gSm6sr68b0k7gyJSoAY0haXh8cgKX5n5AdEIStdEThcd3Brc/CLckwh/0IhINs9Lzer24v7+fRHrCkPQoFosG4ZutlpaHddQbNdRqFS3SFQyVoeFOPBY3AnINc7kcS1Yy0oXy7enpibnx8PCAzc1NZLNZVnb6dHI6nYzpzLSxWCxsNJlMmJ+fx8rKCpaWlrC4uMjGhYUFLC8vY25ujlUPVc7h4eHLtOFuExPqHMSEapTYbGuBWl1dZdURDAYZe9q/u7vD3t4eA51ZKXzj8vISu7u7KJfLE7cURTHoRj8mMOqF+rcvK+VfxEnktbU1tuZdhp8TI2JN+urfGFzW9z0yKidqnJRK1E1IBvqobdGaGE4z42//Akp4tsAoSosYAAAAAElFTkSuQmCC",aspectRatio:1,src:"/mrriceenglish/static/5450ebbad1ca44a843ff40f27d0deccc/af144/icon.png",srcSet:"/mrriceenglish/static/5450ebbad1ca44a843ff40f27d0deccc/541bf/icon.png 258w,\n/mrriceenglish/static/5450ebbad1ca44a843ff40f27d0deccc/73d34/icon.png 515w,\n/mrriceenglish/static/5450ebbad1ca44a843ff40f27d0deccc/af144/icon.png 800w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{relativePath:"gatsby-astronaut.png",name:"gatsby-astronaut",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/mrriceenglish/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png",srcSet:"/mrriceenglish/static/6d91c86c0fde632ba4cd01062fd9ccfa/541bf/gatsby-astronaut.png 258w,\n/mrriceenglish/static/6d91c86c0fde632ba4cd01062fd9ccfa/73d34/gatsby-astronaut.png 515w,\n/mrriceenglish/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{relativePath:"carousel/neonbrand-618320-unsplash.jpg",name:"neonbrand-618320-unsplash",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAay64MyxP//EABoQAAMAAwEAAAAAAAAAAAAAAAABAhESIRP/2gAIAQEAAQUCueyjKQpRoeff/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAQUAAAAAAAAAAAAAAAAAABAhIjEy/9oACAEBAAY/AmJFro//xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhMVH/2gAIAQEAAT8h5z3N0qQlJpijpcZpxyLa3PRrv0u//9oADAMBAAIAAwAAABBMP//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAgBAwEBPxDIj//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/EEn/xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMUFxgfD/2gAIAQEAAT8QcpdFKXPUXMIQ260ZChhDWOxVegC8rFmkOzjxUWlotp+E/9k=",aspectRatio:1.5,src:"/mrriceenglish/static/2950728e62f3f211e5630f5a26adce96/b596b/neonbrand-618320-unsplash.jpg",srcSet:"/mrriceenglish/static/2950728e62f3f211e5630f5a26adce96/298f9/neonbrand-618320-unsplash.jpg 258w,\n/mrriceenglish/static/2950728e62f3f211e5630f5a26adce96/34d33/neonbrand-618320-unsplash.jpg 515w,\n/mrriceenglish/static/2950728e62f3f211e5630f5a26adce96/b596b/neonbrand-618320-unsplash.jpg 1030w,\n/mrriceenglish/static/2950728e62f3f211e5630f5a26adce96/ed6aa/neonbrand-618320-unsplash.jpg 1545w,\n/mrriceenglish/static/2950728e62f3f211e5630f5a26adce96/9ac6f/neonbrand-618320-unsplash.jpg 2060w,\n/mrriceenglish/static/2950728e62f3f211e5630f5a26adce96/2b7f3/neonbrand-618320-unsplash.jpg 3090w,\n/mrriceenglish/static/2950728e62f3f211e5630f5a26adce96/2728f/neonbrand-618320-unsplash.jpg 5184w",sizes:"(max-width: 1030px) 100vw, 1030px"}}}},{node:{relativePath:"carousel/writing.jpg",name:"writing",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAABrTVDSI//xAAcEAACAgIDAAAAAAAAAAAAAAABAgADBBMSIjL/2gAIAQEAAQUCroAnqzQpgflVir01JP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABwQAAICAgMAAAAAAAAAAAAAAAASARExcQJBof/aAAgBAQAGPwJm8IWk2Zkro5bMH//EABsQAQEBAQADAQAAAAAAAAAAAAERACExccHh/9oACAEBAAE/IS7KJexN5BmxceiPpy1hHJgAe/jKPypv/9oADAMBAAIAAwAAABDL/wD/xAAXEQEAAwAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/ENXL/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEh/9oACAECAQE/EMR//8QAHhABAAICAQUAAAAAAAAAAAAAAREhAEFhMVFxkbH/2gAIAQEAAT8QElZSAeRyphCeLG3piUCOqfmFBBo35xmIwb3y75Nlk6E9DGf/2Q==",aspectRatio:1.5,src:"/mrriceenglish/static/9bbbb4aee0e0217154e808f59880f8a1/b596b/writing.jpg",srcSet:"/mrriceenglish/static/9bbbb4aee0e0217154e808f59880f8a1/298f9/writing.jpg 258w,\n/mrriceenglish/static/9bbbb4aee0e0217154e808f59880f8a1/34d33/writing.jpg 515w,\n/mrriceenglish/static/9bbbb4aee0e0217154e808f59880f8a1/b596b/writing.jpg 1030w,\n/mrriceenglish/static/9bbbb4aee0e0217154e808f59880f8a1/ed6aa/writing.jpg 1545w,\n/mrriceenglish/static/9bbbb4aee0e0217154e808f59880f8a1/9ac6f/writing.jpg 2060w,\n/mrriceenglish/static/9bbbb4aee0e0217154e808f59880f8a1/2b7f3/writing.jpg 3090w,\n/mrriceenglish/static/9bbbb4aee0e0217154e808f59880f8a1/2728f/writing.jpg 5184w",sizes:"(max-width: 1030px) 100vw, 1030px"}}}},{node:{relativePath:"carousel/sharon-mccutcheon-532782-unsplash.jpg",name:"sharon-mccutcheon-532782-unsplash",childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB6ycTBGMCv//EABoQAAICAwAAAAAAAAAAAAAAAAECABEDEzH/2gAIAQEAAQUCWZ+MptTcdjsNz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAIDAQAAAAAAAAAAAAAAAAAxARARYf/aAAgBAQAGPwIjGOs4M//EABsQAAIDAAMAAAAAAAAAAAAAAAABESExQYGR/9oACAEBAAE/IcE2rmNZvRiIeWkIW1Do/9oADAMBAAIAAwAAABC8z//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPxCNf//EABcRAQADAAAAAAAAAAAAAAAAAAABETH/2gAIAQIBAT8QnFP/xAAZEAEBAQEBAQAAAAAAAAAAAAABEQAhUUH/2gAIAQEAAT8QmZk3FKHpO4DjfKw7ZO5k0hiX6ZV4vDP/2Q==",aspectRatio:1.5,src:"/mrriceenglish/static/abe5ed556fd329af181a4b9c6a140eb1/b596b/sharon-mccutcheon-532782-unsplash.jpg",srcSet:"/mrriceenglish/static/abe5ed556fd329af181a4b9c6a140eb1/298f9/sharon-mccutcheon-532782-unsplash.jpg 258w,\n/mrriceenglish/static/abe5ed556fd329af181a4b9c6a140eb1/34d33/sharon-mccutcheon-532782-unsplash.jpg 515w,\n/mrriceenglish/static/abe5ed556fd329af181a4b9c6a140eb1/b596b/sharon-mccutcheon-532782-unsplash.jpg 1030w,\n/mrriceenglish/static/abe5ed556fd329af181a4b9c6a140eb1/ed6aa/sharon-mccutcheon-532782-unsplash.jpg 1545w,\n/mrriceenglish/static/abe5ed556fd329af181a4b9c6a140eb1/9ac6f/sharon-mccutcheon-532782-unsplash.jpg 2060w,\n/mrriceenglish/static/abe5ed556fd329af181a4b9c6a140eb1/2b7f3/sharon-mccutcheon-532782-unsplash.jpg 3090w,\n/mrriceenglish/static/abe5ed556fd329af181a4b9c6a140eb1/879d4/sharon-mccutcheon-532782-unsplash.jpg 5616w",sizes:"(max-width: 1030px) 100vw, 1030px"}}}},{node:{relativePath:"Headshot.png",name:"Headshot",childImageSharp:{sizes:{base64:"data:image/png;base64,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",aspectRatio:.5364004044489383,src:"/mrriceenglish/static/dd8085434faeea5e3de812249f871eef/ae5a4/Headshot.png",srcSet:"/mrriceenglish/static/dd8085434faeea5e3de812249f871eef/541bf/Headshot.png 258w,\n/mrriceenglish/static/dd8085434faeea5e3de812249f871eef/73d34/Headshot.png 515w,\n/mrriceenglish/static/dd8085434faeea5e3de812249f871eef/ae5a4/Headshot.png 1030w,\n/mrriceenglish/static/dd8085434faeea5e3de812249f871eef/0cec7/Headshot.png 1061w",sizes:"(max-width: 1030px) 100vw, 1030px"}}}}]}}}},161:function(A){A.exports={data:{site:{siteMetadata:{title:"Jon's Site",description:"A site for jon",author:"Oliver Lennon"}}}}}}]);
//# sourceMappingURL=2-b9a6079328d5d59c74c9.js.map