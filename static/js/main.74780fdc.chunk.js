(this.webpackJsonpcrypto_app=this.webpackJsonpcrypto_app||[]).push([[0],{161:function(e,t,c){},187:function(e,t,c){},216:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(31),n=c.n(s),r=c(37),i=c(40),l=c(4),o=c(222),j=c(221),d=(c(161),c.p+"static/media/1_HTC1oMKYwC7a8vUBsiplhw.3abbe14a.gif"),h=c(6),b=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(o.a.Title,{className:"tite",children:"Explore the world of Crypto"}),Object(h.jsx)(j.a,{height:"100vh",width:"100vw",style:{overflow:"hidden",zIndex:"-1",position:"fixed",top:"0",left:"0"},src:d})]})},u=c(25),p=c(219),O=c(231),x=(c(187),c(224)),m=c(151),v=c(225),y=c(232),g=c(233),f=c(234),N=c(235),C=c(236),w=c.p+"static/media/cryptocurrency.1548aced.png",k=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(null),i=Object(l.a)(n,2),j=i[0],d=i[1],b=Object(a.useState)(0),u=Object(l.a)(b,2),p=u[0],O=u[1];return Object(a.useEffect)((function(){var e=function(){return d(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){s(!(j<768))}),[j,p]),Object(h.jsxs)("div",{className:"nav-container",children:[Object(h.jsxs)("div",{className:"logo-container",children:[Object(h.jsx)(x.a,{src:w,size:"large"}),Object(h.jsx)(o.a.Title,{level:2,className:"logo",children:Object(h.jsx)(r.b,{to:"/Cryptosphere",children:"Cryptosphere"})}),Object(h.jsx)(m.a,{className:"menu-control-container",onClick:function(){return s(!c)},children:Object(h.jsx)(y.a,{})})]}),c&&Object(h.jsxs)(v.a,{theme:"dark",children:[Object(h.jsx)(v.a.Item,{icon:Object(h.jsx)(g.a,{}),children:Object(h.jsx)(r.b,{onClick:function(){return O((function(e){return e+1}))},to:"/Cryptosphere",children:"Home"})}),Object(h.jsx)(v.a.Item,{icon:Object(h.jsx)(f.a,{}),children:Object(h.jsx)(r.b,{onClick:function(){return O((function(e){return e+1}))},to:"/Cryptosphere/cryptocurrencies",children:"Cryptocurrencies"})}),Object(h.jsx)(v.a.Item,{icon:Object(h.jsx)(N.a,{}),children:Object(h.jsx)(r.b,{onClick:function(){return O((function(e){return e+1}))},to:"/Cryptosphere/exchanges",children:"Exchanges"})}),Object(h.jsx)(v.a.Item,{icon:Object(h.jsx)(C.a,{}),children:Object(h.jsx)(r.b,{onClick:function(){return O((function(e){return e+1}))},to:"/Cryptosphere/news",children:"News"})})]})]})},S=c(36),T=c.n(S),P=c(227),E=c(229),A=c(220),F=c(230),I=c(78),_=c(44),q={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"ee116c5092msh79e40c6c9496bb1p128612jsn988c13148242"},M=function(e){return{url:e,headers:q}},H=Object(I.a)({reducerPath:"cryptoApi",baseQuery:Object(_.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return M("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return M("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var t=e.coinId,c=e.timePeriod;return M("/coin/".concat(t,"/history?timePeriod=").concat(c))}})}}}),U=H.useGetCryptosQuery,L=H.useGetCryptoDetailsQuery,V=H.useGetCryptoHistoryQuery,D=c(218),Q=function(){return Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)(D.a,{})})},$=function(e){var t=e.simplified,c=U(t?10:96),s=c.data,n=c.isFetching,i=Object(a.useState)([]),o=Object(l.a)(i,2),j=o[0],d=o[1],b=Object(a.useState)(""),u=Object(l.a)(b,2),p=u[0],O=u[1];return Object(a.useEffect)((function(){var e,t=null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())}));d(t)}),[s,p]),n?Object(h.jsx)(Q,{}):Object(h.jsxs)(h.Fragment,{children:[!t&&Object(h.jsx)("div",{className:"search-crypto",children:Object(h.jsx)(P.a,{placeholder:"Search Cryptocurrency",onChange:function(e){return O(e.target.value)}})}),Object(h.jsx)(E.a,{gutter:[32,32],className:"crypto-card-container",children:0==(null===j||void 0===j?void 0:j.length)?Object(h.jsx)(A.a,{className:"noresult",children:"No results to show at the moment"}):null===j||void 0===j?void 0:j.map((function(e){return Object(h.jsx)(F.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(h.jsx)(r.b,{to:"/Cryptosphere/crypto/".concat(e.uuid),children:Object(h.jsxs)(A.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(h.jsx)("img",{className:"crypto-image",src:e.iconUrl,alt:"coin"}),hoverable:!0,children:[Object(h.jsxs)("p",{children:["Price: ",T()(e.price)]}),Object(h.jsxs)("p",{children:["Market Cap: ",T()(e.marketCap)]}),Object(h.jsxs)("p",{children:["Daily Change: ",T()(e.change),"% "]})]})})},e.uuid)}))})]})},G=c(228),z=o.a.Title,R=function(){var e,t=U(10),c=t.data;if(t.isFetching)return Object(h.jsx)(Q,{});var a=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(z,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(h.jsxs)(E.a,{children:[Object(h.jsx)(F.a,{span:12,children:Object(h.jsx)(G.a,{title:"Total Cryptocurrenices",value:a.total})}),Object(h.jsx)(F.a,{span:12,children:Object(h.jsx)(G.a,{title:"Total Exchanges",value:T()(a.totalExchanges)})}),Object(h.jsx)(F.a,{span:12,children:Object(h.jsx)(G.a,{title:"Total Market Cap",value:T()(a.totalMarketCap)})}),Object(h.jsx)(F.a,{span:12,children:Object(h.jsx)(G.a,{title:"Total 24h Volume",value:T()(a.total24hVolume)})}),Object(h.jsx)(F.a,{span:12,children:Object(h.jsx)(G.a,{title:"Total Markets",value:T()(a.totalMarkets)})})]}),Object(h.jsxs)("div",{className:"home-heading-container",children:[Object(h.jsx)(z,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies in the world"}),Object(h.jsx)(z,{level:3,className:"show-more",children:Object(h.jsx)(r.b,{to:"/Cryptosphere/cryptocurrencies",children:"Show More"})})]}),Object(h.jsx)($,{simplified:!0}),Object(h.jsxs)("div",{className:"home-heading-container",children:[Object(h.jsx)(z,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(h.jsx)(z,{level:3,className:"show-more",children:Object(h.jsx)(r.b,{to:"/Cryptosphere/news",children:"Show More"})})]}),Object(h.jsx)(de,{simplified:!0})]})},K=c(226),W=c(120),B={"X-RapidAPI-Host":"coingecko.p.rapidapi.com","X-RapidAPI-Key":"fac9c967f1mshb0891bed0d223f5p1f977fjsnd9031551ed8e"},J=Object(I.a)({reducerPath:"exchangesApi",baseQuery:Object(_.d)({baseUrl:"https://coingecko.p.rapidapi.com"}),endpoints:function(e){return{getExchanges:e.query({query:function(){return{url:"/exchanges",headers:B}}})}}}),X=J.useGetExchangesQuery,Y=o.a.Text,Z=K.a.Panel,ee=function(){var e=X(),t=e.data;if(e.isFetching)return Object(h.jsx)(Q,{});var c=t;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(E.a,{children:[Object(h.jsx)(F.a,{span:6,children:"Exchanges"}),Object(h.jsx)(F.a,{span:6,children:"Year Established"}),Object(h.jsx)(F.a,{span:6,children:"24h Trade Volume"}),Object(h.jsx)(F.a,{span:6,children:"Trust Score"})]}),Object(h.jsx)(E.a,{children:c.map((function(e){return Object(h.jsx)(F.a,{span:24,children:Object(h.jsx)(K.a,{accordion:!0,children:Object(h.jsx)(Z,{showArrow:!1,header:Object(h.jsxs)(E.a,{children:[Object(h.jsxs)(F.a,{span:6,children:[Object(h.jsx)(Y,{children:Object(h.jsxs)("strong",{children:[e.trust_score_rank,"."]})}),Object(h.jsx)(x.a,{className:"exchange-image",src:e.image}),Object(h.jsx)(Y,{children:Object(h.jsx)("strong",{children:e.name})})]}),Object(h.jsx)(F.a,{span:7,children:e.year_established}),Object(h.jsx)(F.a,{span:6,children:T()(e.trade_volume_24h_btc)}),Object(h.jsx)(F.a,{span:5,children:e.trust_score})]}),children:(null===e||void 0===e?void 0:e.description)||"".concat(null===e||void 0===e?void 0:e.country," - ").concat(null===e||void 0===e?void 0:e.url)||""},e.id)})})}))})]})},te=c(223),ce=c(147),ae=c.n(ce),se={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com/news","x-rapidapi-key":"ee116c5092msh79e40c6c9496bb1p128612jsn988c13148242"},ne=Object(I.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(_.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com/news"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var t=e.newsCategory,c=e.count;return{url:"/search?q=".concat(t,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(c),headers:se}}})}}}),re=ne.useGetCryptoNewsQuery,ie=o.a.Text,le=o.a.Title,oe=te.a.Option,je="http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg",de=function(e){var t,c=e.simplified,s=Object(a.useState)("Cryptocurrency"),n=Object(l.a)(s,2),r=n[0],i=n[1],o=c?6:12,j=U(100).data,d=re({newsCategory:r,count:o}),b=d.data,u=d.isFetching,p=Object(a.useState)([]),O=Object(l.a)(p,2);O[0],O[1];return u?Object(h.jsx)(Q,{}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(E.a,{gutter:[24,24],children:[!c&&Object(h.jsx)(F.a,{span:24,children:Object(h.jsxs)(te.a,{showSearch:!0,className:"select-news",placeholder:"Select a new Crypto",optionFilterProp:"children",onChange:function(e){return i(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(h.jsx)(oe,{value:"Cryptocurrency",children:"Cryptocurrency"}),null===j||void 0===j||null===(t=j.data)||void 0===t?void 0:t.coins.map((function(e){return Object(h.jsx)(oe,{value:e.name,children:e.name})}))]})}),b.value.map((function(e,t){var c,a,s,n,r,i;return Object(h.jsx)(F.a,{xs:24,sm:12,lg:8,children:Object(h.jsx)(A.a,{hoverable:!0,className:"news-card",children:Object(h.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(h.jsxs)("div",{className:"news-image-container",children:[Object(h.jsx)(le,{className:"news-title",level:4,children:e.name}),Object(h.jsx)("img",{src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(a=c.thumbnail)||void 0===a?void 0:a.contentUrl)||je,alt:"news",style:{maxWidth:"200px",maxHeight:"100px"}})]}),Object(h.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(h.jsxs)("div",{className:"provider-container",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(x.a,{src:(null===(s=e.provider[0])||void 0===s||null===(n=s.image)||void 0===n||null===(r=n.thumbnail)||void 0===r?void 0:r.contentUrl)||je,alt:"news"}),Object(h.jsx)(ie,{className:"provider-name",children:null===(i=e.provider[0])||void 0===i?void 0:i.name})]}),Object(h.jsx)(ie,{children:ae()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]})})},he=c(237),be=c(238),ue=c(239),pe=c(240),Oe=c(109),xe=c(241),me=c(242),ve=c(149),ye=c(34);ye.d.register(ye.c,ye.i,ye.k,ye.h,ye.o,ye.p,ye.f);var ge,fe=function(e){var t,c=e.coinHistory,a=e.currentPrice,s=e.coinName,n=[],r=[];console.log(c);for(var i=(null===c||void 0===c||null===(l=c.data)||void 0===l||null===(j=l.history)||void 0===j?void 0:j.length)-1;i>=0;i-=1){var l,j,d,b;n.push(null===c||void 0===c||null===(d=c.data)||void 0===d?void 0:d.history[i].price),r.push(new Date(1e3*(null===c||void 0===c||null===(b=c.data)||void 0===b?void 0:b.history[i].timestamp)).toLocaleDateString("en-UK"))}var u={labels:r,datasets:[{label:"Price In USD",data:n,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(E.a,{className:"chart-header",children:[Object(h.jsxs)(o.a.Title,{level:2,className:"chart-title",children:[s," Price Chart"," "]}),Object(h.jsxs)(F.a,{className:"price-container",children:[Object(h.jsxs)(o.a.Title,{level:5,className:"price-change",children:["Change: ",null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.change,"%"]}),Object(h.jsxs)(o.a.Title,{level:5,className:"current-price",children:["Current ",s," Price: $ ",a]})]})]}),Object(h.jsx)(ve.a,{data:u,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},Ne=o.a.Title,Ce=o.a.Text,we=te.a.Option,ke=function(){var e,t=Object(u.h)().coinId,c=Object(a.useState)("24h"),s=Object(l.a)(c,2),n=s[0],r=s[1],i=L(t),o=i.data,j=i.isFetching,d=V({coinId:t,timePeriod:n}).data,b=null===o||void 0===o||null===(e=o.data)||void 0===e?void 0:e.coin;if(j)return Object(h.jsx)(Q,{});var p=[{title:"Price to USD",value:"$ ".concat(b.price&&T()(b.price)),icon:Object(h.jsx)(he.a,{})},{title:"Rank",value:b.rank,icon:Object(h.jsx)(be.a,{})},{title:"24h Volume",value:"$ ".concat(b["24hVolume"]&&T()(b["24hVolume"])),icon:Object(h.jsx)(ue.a,{})},{title:"Market Cap",value:"$ ".concat(b.marketCap&&T()(b.marketCap)),icon:Object(h.jsx)(he.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(T()(b.allTimeHigh.price)),icon:Object(h.jsx)(pe.a,{})}],O=[{title:"Number Of Markets",value:b.numberOfMarkets,icon:Object(h.jsx)(f.a,{})},{title:"Number Of Exchanges",value:b.numberOfExchanges,icon:Object(h.jsx)(N.a,{})},{title:"Aprroved Supply",value:b.supply.confirmed?Object(h.jsx)(Oe.a,{}):Object(h.jsx)(xe.a,{}),icon:Object(h.jsx)(me.a,{})},{title:"Total Supply",value:"$ ".concat(T()(b.supply.circulating)),icon:Object(h.jsx)(me.a,{})},{title:"Circulating Supply",value:"$ ".concat(T()(b.supply.circulating)),icon:Object(h.jsx)(me.a,{})}];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(F.a,{className:"coin-detail-container",children:[Object(h.jsxs)(F.a,{className:"coin-heading-container",children:[Object(h.jsxs)(Ne,{level:2,className:"coin-name",children:[b.name," (",b.symbol,") Price"]}),Object(h.jsxs)("p",{children:[b.name," live price in us dollars. View value statistics, market cap and supply."]})]}),Object(h.jsx)(te.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Time Period",onChange:function(e){return r(e)},children:["3h","24h","7d","30d","3m","1y","3y","5y"].map((function(e){return Object(h.jsx)(we,{children:e},e)}))}),Object(h.jsx)(fe,{coinHistory:d,currentPrice:T()(b.price),coinName:b.name}),Object(h.jsxs)(F.a,{className:"stats-container",children:[Object(h.jsxs)(F.a,{className:"coin-value-statistics",children:[Object(h.jsxs)(F.a,{className:"coin-value-statistics-heading",children:[Object(h.jsxs)(Ne,{level:3,className:"coin-detailes-heading",children:[b.name," Value Statistics"]}),Object(h.jsxs)("p",{children:["An overview of showing the stats of ",b.name]})]}),p.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(h.jsxs)(F.a,{className:"coin-stats",children:[Object(h.jsxs)(F.a,{className:"coin-stats-name",children:[Object(h.jsx)(Ce,{children:t}),Object(h.jsx)(Ce,{children:c})]}),Object(h.jsx)(Ce,{className:"stats",children:a})]})}))]}),Object(h.jsxs)(F.a,{className:"other-stats-info",children:[Object(h.jsxs)(F.a,{className:"coin-value-statistics-heading",children:[Object(h.jsx)(Ne,{level:3,className:"coin-detailes-heading",children:"Other Statistics"}),Object(h.jsx)("p",{children:"An overview showing the stats of all cryptocurrencies"})]}),O.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(h.jsxs)(F.a,{className:"coin-stats",children:[Object(h.jsxs)(F.a,{className:"coin-stats-name",children:[Object(h.jsx)(Ce,{children:t}),Object(h.jsx)(Ce,{children:c})]}),Object(h.jsx)(Ce,{className:"stats",children:a})]})}))]})]}),Object(h.jsxs)(F.a,{className:"coin-desc-link",children:[Object(h.jsx)(E.a,{className:"coin-desc",children:Object(h.jsxs)(Ne,{level:3,className:"coin-details-heading",children:["What is ",b.name,Object(W.a)(b.description)]})}),Object(h.jsxs)(F.a,{className:"coin-links",children:[Object(h.jsxs)(Ne,{level:3,className:"coin-details-heading",children:[b.name," Links"]}),b.links.map((function(e){return Object(h.jsxs)(E.a,{className:"coin-link",children:[Object(h.jsx)(Ne,{level:5,className:"link-name",children:e.type}),Object(h.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})})},Se=function(){return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)("div",{className:"navbar",children:Object(h.jsx)(k,{})}),Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)(p.a,{children:Object(h.jsx)("div",{className:"routes",children:Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{path:"/Cryptosphere",children:Object(h.jsx)(R,{})}),Object(h.jsx)(u.a,{path:"/Cryptosphere/exchanges",children:Object(h.jsx)(ee,{})}),Object(h.jsx)(u.a,{path:"/Cryptosphere/cryptocurrencies",children:Object(h.jsx)($,{})}),Object(h.jsx)(u.a,{path:"/Cryptosphere/crypto/:coinId",children:Object(h.jsx)(ke,{})}),Object(h.jsx)(u.a,{path:"/Cryptosphere/news",children:Object(h.jsx)(de,{})})]})})}),Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsxs)(o.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Cryptosphere ",Object(h.jsx)("br",{}),"All rights not reserved"]}),Object(h.jsxs)(O.b,{children:[Object(h.jsx)(r.b,{to:"/Cryptosphere",children:"Home"}),Object(h.jsx)(r.b,{to:"/Cryptosphere/exchanges",children:"Exchanges"}),Object(h.jsx)(r.b,{to:"/Cryptosphere/news",children:"News"})]})]})]})]})},Te=c(243),Pe=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),c=t[0],s=t[1];return c?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{}),Object(h.jsx)(m.a,{className:"but",onClick:function(){return s(!1)},children:Object(h.jsx)(Te.a,{})})]}):Object(h.jsx)(Se,{})},Ee=c(1),Ae=c(13),Fe=Object(Ae.b)({reducer:(ge={},Object(Ee.a)(ge,H.reducerPath,H.reducer),Object(Ee.a)(ge,ne.reducerPath,ne.reducer),Object(Ee.a)(ge,J.reducerPath,J.reducer),ge),middleware:function(e){return e().concat(H.middleware,ne.middleware,J.middleware)}});c(215);n.a.render(Object(h.jsx)(r.a,{basename:"/cryptosphere.github.io",children:Object(h.jsx)(i.a,{store:Fe,children:Object(h.jsx)(Pe,{})})}),document.getElementById("root"))}},[[216,1,2]]]);
//# sourceMappingURL=main.74780fdc.chunk.js.map