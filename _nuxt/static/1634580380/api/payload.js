__NUXT_JSONP__("/api", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo){return {data:[{document:{slug:"api",description:"",title:"API Reference",position:201,category:"API",toc:[{id:ax,depth:ae,text:ay},{id:az,depth:L,text:aA},{id:aB,depth:L,text:aC},{id:aD,depth:ae,text:aE},{id:aF,depth:L,text:aG},{id:aH,depth:L,text:aI},{id:aJ,depth:ae,text:aK},{id:aL,depth:L,text:aM},{id:aN,depth:ae,text:aO},{id:aP,depth:L,text:aQ},{id:aR,depth:L,text:aS}],body:{type:"root",children:[{type:b,tag:af,props:{id:ax},children:[{type:b,tag:t,props:{href:"#async-query",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:b,tag:h,props:{},children:[{type:a,value:ay}]}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"Query the Plone REST-API."}]},{type:a,value:e},{type:b,tag:E,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:F,props:{},children:[{type:a,value:ag}]},{type:a,value:ah},{type:b,tag:E,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:ab}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:j}]},{type:a,value:aT}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:H}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:G}]},{type:a,value:at}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:ai}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:G}]},{type:a,value:aj}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:F,props:{},children:[{type:a,value:ak}]},{type:a,value:al},{type:b,tag:h,props:{},children:[{type:a,value:j}]},{type:a,value:aU}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"This is the base for all requests to the Plone REST-API.\nWe do some URL normalization and then call the api."}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"You can use the "},{type:b,tag:h,props:{},children:[{type:a,value:H}]},{type:a,value:" method to access all available endpoints (also your custom ones) from the Plone API."}]},{type:a,value:e},{type:b,tag:aV,props:{type:aW},children:[{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"More information about reading resources is available at the "},{type:b,tag:t,props:{href:"https:\u002F\u002Fplonerestapi.readthedocs.io\u002Fen\u002Flatest\u002Fcontent.html#reading-a-resource-with-get",rel:[am,an,ao],target:ap},children:[{type:a,value:"plone.restapi content manipulation documentation"}]},{type:a,value:x}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:M,props:{id:az},children:[{type:b,tag:t,props:{href:"#example-get-one-content-item",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:aA}]},{type:a,value:e},{type:b,tag:N,props:{className:[O]},children:[{type:b,tag:P,props:{className:[Q,R]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i,u]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,T]},children:[{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:v}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,u]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:aX},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'my\u002Fpath\u002Fto\u002Fcontent'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:aY},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ac}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'breadcrumbs,navigation,translations'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:" item "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,I]},children:[{type:a,value:$}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,J,K,D]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:a_},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:M,props:{id:aB},children:[{type:b,tag:t,props:{href:"#example-query-a-custom-endpoint",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:aC}]},{type:a,value:e},{type:b,tag:N,props:{className:[O]},children:[{type:b,tag:P,props:{className:[Q,R]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i,u]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,T]},children:[{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:v}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,u]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:aX},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'my\u002Fpath\u002Fto\u002Fcontent\u002F@my-service'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:" serviceInfo "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,I]},children:[{type:a,value:$}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,J,K,D]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:af,props:{id:aD},children:[{type:b,tag:t,props:{href:"#async-search",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:b,tag:h,props:{},children:[{type:a,value:aE}]}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"Search for content using the built-in "},{type:b,tag:h,props:{},children:[{type:a,value:aq}]},{type:a,value:" endpoint."}]},{type:a,value:e},{type:b,tag:E,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:F,props:{},children:[{type:a,value:ag}]},{type:a,value:ah},{type:b,tag:E,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:ab}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:j}]},{type:a,value:aT}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:H}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:G}]},{type:a,value:at}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:ai}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:G}]},{type:a,value:aj}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:F,props:{},children:[{type:a,value:ak}]},{type:a,value:al},{type:b,tag:h,props:{},children:[{type:a,value:j}]},{type:a,value:aU}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:aV,props:{type:aW},children:[{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"More information about the "},{type:b,tag:h,props:{},children:[{type:a,value:aq}]},{type:a,value:" endpoint is available at the "},{type:b,tag:t,props:{href:"https:\u002F\u002Fplonerestapi.readthedocs.io\u002Fen\u002Flatest\u002Fsearching.html",rel:[am,an,ao],target:ap},children:[{type:a,value:"plone.restapi search documentation"}]},{type:a,value:x}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:M,props:{id:aF},children:[{type:b,tag:t,props:{href:"#example-search-for-all-content",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:aG}]},{type:a,value:e},{type:b,tag:N,props:{className:[O]},children:[{type:b,tag:P,props:{className:[Q,R]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i,u]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,T]},children:[{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:v}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,u]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:a$},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,I]},children:[{type:a,value:$}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,J,K,D]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:M,props:{id:aH},children:[{type:b,tag:t,props:{href:"#example-get-the-5-recent-news-items",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:aI}]},{type:a,value:e},{type:b,tag:N,props:{className:[O]},children:[{type:b,tag:P,props:{className:[Q,R]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i,u]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,T]},children:[{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:v}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,u]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:" query "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ac}]},{type:a,value:"\n  b_size"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"5"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:bb}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:"\n  portal_type"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'News Item'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:bc},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:bb}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:bd},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'descending'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:a$},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,I]},children:[{type:a,value:$}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,J,K,D]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:" query"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:" newsItems "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:" result"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:af,props:{id:aJ},children:[{type:b,tag:t,props:{href:"#async-fetchitems",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:b,tag:h,props:{},children:[{type:a,value:aK}]}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"Get all available Plone content."}]},{type:a,value:e},{type:b,tag:E,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:F,props:{},children:[{type:a,value:ag}]},{type:a,value:ah},{type:b,tag:E,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:ab}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:j}]},{type:a,value:") The relative path to the API endpoint to use as base."}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:H}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:G}]},{type:a,value:") Optional REST-API and query params for the search."}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"batch"}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:G}]},{type:a,value:") Optional batch information."}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:ai}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:G}]},{type:a,value:aj}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:F,props:{},children:[{type:a,value:ak}]},{type:a,value:al},{type:b,tag:h,props:{},children:[{type:a,value:be}]},{type:a,value:bf}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:M,props:{id:aL},children:[{type:b,tag:t,props:{href:"#example-get-all-plone-content-with-full-metadata",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:aM}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"Each item in the "},{type:b,tag:h,props:{},children:[{type:a,value:"ploneRoutes"}]},{type:a,value:" list contains the full metadata information.\nThis can be usefull when generating static pages and you don’t want to query the API for every page again and again."}]},{type:a,value:e},{type:b,tag:N,props:{className:[O]},children:[{type:b,tag:P,props:{className:[Q,R]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i,u]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,T]},children:[{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:v}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,u]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:aY},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ac}]},{type:a,value:bc},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'path'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:bd},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'ascending'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'breadcrumbs,translations,contentinfo'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:"\n  fullobjects"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'1'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:" ploneRoutes "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,I]},children:[{type:a,value:$}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,J,K,D]},children:[{type:a,value:"fetchItems"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:a_},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:" mappedRoutes "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:" ploneRoutes"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,J,K,D]},children:[{type:a,value:"map"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"item"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"arrow",k]},children:[{type:a,value:"=\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ac}]},{type:a,value:bg},{type:b,tag:c,props:{className:[d,i,I]},children:[{type:a,value:"return"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ac}]},{type:a,value:"\n    url"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:bh},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'@id'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:"\n    payload"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:bh},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:bg},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:af,props:{id:aN},children:[{type:b,tag:t,props:{href:"#async-fetchcollection",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:b,tag:h,props:{},children:[{type:a,value:aO}]}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"Get a collection with all it’s dynamic items."}]},{type:a,value:e},{type:b,tag:E,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:F,props:{},children:[{type:a,value:ag}]},{type:a,value:ah},{type:b,tag:E,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:ab}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:j}]},{type:a,value:") The relative path to the collection item."}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:H}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:G}]},{type:a,value:at}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:ai}]},{type:a,value:w},{type:b,tag:h,props:{},children:[{type:a,value:G}]},{type:a,value:aj}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:F,props:{},children:[{type:a,value:ak}]},{type:a,value:al},{type:b,tag:h,props:{},children:[{type:a,value:be}]},{type:a,value:bf}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"A Plone collection (or any content implementing the collection behavior) is a content item in Plone which provides the results of a pre-defined search."}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"Plone provides various settings for the visual representation of the search results.\nBut those all refer to the Plone backend and have no effect on the Restful-API."}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"The Restful-API automatically batches the returned results (see "},{type:b,tag:t,props:{href:"https:\u002F\u002Fplonerestapi.readthedocs.io\u002Fen\u002Flatest\u002Fbatching.html",rel:[am,an,ao],target:ap},children:[{type:a,value:"“Batching” in the plone.restapi documentation"}]},{type:a,value:bi}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"In order to be able to provide a custom batched representation in your application this method gets "},{type:b,tag:F,props:{},children:[{type:a,value:"all"}]},{type:a,value:" items and resolves the Plone batching.\nYou can customize the returned metadata with the "},{type:b,tag:h,props:{},children:[{type:a,value:H}]},{type:a,value:" option (see "},{type:b,tag:t,props:{href:"https:\u002F\u002Fplonerestapi.readthedocs.io\u002Fen\u002Flatest\u002Fsearching.html#retrieving-additional-metadata",rel:[am,an,ao],target:ap},children:[{type:a,value:"“Retrieving additional metadata” in the plone.restapi documentation"}]},{type:a,value:bi}]},{type:a,value:e},{type:b,tag:M,props:{id:aP},children:[{type:b,tag:t,props:{href:"#example-get-all-items-for-a-collection",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:aQ}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"By default each item in the results contains the summary information.\nThose are currenly:"}]},{type:a,value:e},{type:b,tag:E,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"@id"}]}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"@type"}]}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"description"}]}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"review_state"}]}]},{type:a,value:e},{type:b,tag:m,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"title"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:N,props:{className:[O]},children:[{type:b,tag:P,props:{className:[Q,R]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i,u]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,T]},children:[{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:v}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,u]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:bj},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,I]},children:[{type:a,value:$}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,J,K,D]},children:[{type:a,value:bk}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:bl}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:bm},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:bn},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:M,props:{id:aR},children:[{type:b,tag:t,props:{href:"#example-get-all-items-for-a-collection-with-all-metadata",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:aS}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"By providing a custom query we can adjust the collection results."}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"In this example we return all available metadata for the items.\nYou could also return the full objects including all components (by providing "},{type:b,tag:h,props:{},children:[{type:a,value:"fullobjects: 1"}]},{type:a,value:" in the query).\nPlease note that this would be significantly slower, as this requires more processing on the backend and might not be neccessary in most cases."}]},{type:a,value:e},{type:b,tag:N,props:{className:[O]},children:[{type:b,tag:P,props:{className:[Q,R]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i,u]},children:[{type:a,value:S}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,T]},children:[{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:v}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,u]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:bj},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,I]},children:[{type:a,value:$}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,J,K,D]},children:[{type:a,value:bk}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:bl}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ac}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'_all'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:n}]},{type:a,value:bm},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:bn},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e}]}]}]}]},dir:"\u002Fen",path:"\u002Fen\u002Fapi",extension:".md",createdAt:bo,updatedAt:bo,to:"\u002Fapi"},prev:{title:"Configuration",path:"\u002Fen\u002Fconfiguration",to:"\u002Fconfiguration"},next:null}],fetch:{},mutations:[]}}("text","element","span","token","\n","punctuation"," ","code","keyword","string","operator",";","li","const","=",",","p","(",")","a","module","PloneClient"," (type: ",".",":","true",-1,"icon","icon-link","property-access","ul","strong","object","query","control-flow","method","function",3,"h3","div","nuxt-content-highlight","pre","language-js","line-numbers","import","imports","maybe-class-name","from","'@cusy\u002Fplone-js'"," client ","new","class-name","'http:\u002F\u002Flocalhost:8080\u002FPlone'","await"," client","path","{","}",2,"h2","Arguments",":\n","options",") Additional axios options for the request.","Returns",": ","nofollow","noopener","noreferrer","_blank","search","[","]",") API query options.","'\u002F'","\n\n","items","async-query","async query()","example-get-one-content-item","Example: Get one content item","example-query-a-custom-endpoint","Example: Query a custom endpoint","async-search","async search()","example-search-for-all-content","Example: Search for all content","example-get-the-5-recent-news-items","Example: Get the 5 recent news items","async-fetchitems","async fetchItems()","example-get-all-plone-content-with-full-metadata","Example: Get all Plone content with full metadata","async-fetchcollection","async fetchCollection()","example-get-all-items-for-a-collection","Example: Get all items for a collection","example-get-all-items-for-a-collection-with-all-metadata","Example: Get all items for a collection with all metadata",") The relative path to search within."," The raw API response in JSON format.","alert","info"," path "," queryOptions ","\n  expand"," queryOptions"," results ","\n  metadata_fields","'effective'","\n  sort_on","\n  sort_order","array"," List of items.","\n  "," item",")."," collection ","fetchCollection","'\u002Fpath\u002Fto\u002Fcollection'"," collectioResults "," collection","2021-10-18T18:05:22.404Z")));