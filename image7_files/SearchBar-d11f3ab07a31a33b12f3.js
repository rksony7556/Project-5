"use strict";(self.webpackChunk_unisporkal_search_bar=self.webpackChunk_unisporkal_search_bar||[]).push([[1660],{4074:function(e,i,a){a.d(i,{u:function(){return r}});class t{constructor(e){this.intersectionOptionsDefault={root:null,rootMargin:"0px",threshold:.85},this.canSeeElement=e=>null!=window.combinedGtmTracking&&!this.isViewed&&e.isIntersecting,this.sendSeenTracking=()=>{window.combinedGtmTracking.gtmPushTracking(this.interactionName,this.interactionDetails),this.isViewed=!0},this.callbackFunction=e=>{const[i]=e;this.canSeeElement(i)&&this.sendSeenTracking()};const{interactionName:i,interactionDetails:a,intersectionOptions:t}=e;this.interactionName=i,this.interactionDetails=a,this.intersectionOptions=this.intersectionOptionsDefault,null!=t&&(this.intersectionOptions=t),this.savedTarget=null}sendTracking(e){if(this.isViewed||!e.current||"undefined"==typeof window||!window.combinedGtmTracking)return()=>"";const i=new IntersectionObserver(this.callbackFunction,this.intersectionOptions);return i.observe(e.current),this.savedTarget=null==e?void 0:e.current,()=>{this.savedTarget&&i.unobserve(this.savedTarget)}}}var s=a(5112);const r=()=>({prepareEvent:(e,i)=>function(e,i){if("undefined"!=typeof window&&window.giLocalStorage){window.giLocalStorage.setItem("tracking-data.event",e);for(let e in i)window.giLocalStorage.setItem(`tracking-data.${e.replace(/_/g,"-")}`,i[e])}}(e,i),trackEvent:(e,i)=>function(e,i){"undefined"!=typeof window&&window.combinedGtmTracking&&window.combinedGtmTracking.gtmPushTracking(e,i)}(e,i),trackSearch:()=>{"undefined"!=typeof window&&window.combinedGtmTracking&&window.combinedGtmTracking.gtmSearchResultsChanged()},trackGa4Event:e=>function(e){"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(e))}(e),trackAbTestVariation:e=>function(e){if("undefined"!=typeof window&&"string"==typeof e){let i=window.tracking_data.ab_test_variation;window.tracking_data.ab_test_variation=i?`${i}|${e}`:e}}(e),trackViewed:e=>new t(e),fetchTrackingData:s.t})},684:function(e,i,a){a.r(i),a.d(i,{default:function(){return O}});var t=a(2747),s=a(6327),r=a(9022),n=a(90),o=a(7648);var c=e=>{const i=window.tracking_data;if(!i)return;const a=i.ecommerce_test_variation;a.includes(e)||(i.ecommerce_test_variation=a?`${a}|${e}`:e)},l=a(5699),d=a(1932),m={container:"rkdOwLBpz6VDItZ8ArRU",holder:"SdUlYQV4BghrZH4vmNWA",overlay:"SoiPq0Dh6ToPdm08F30f"},h=a(5893);const _={searchbyimage:"search_box.search_bar_similar_images_placeholder",searchbyasset:"search_box.search_bar_similar_images_placeholder",morelikethis:"search_box.search_bar_similar_images_placeholder",image:"search_box.search_all_images","image.creative":"search_box.search_creative_photos_and_images","image.creative.photography":"search_box.search_creative_photos_and_images","image.creative.illustration":"search_box.search_creative_photos_and_images","image.creative.illustration.eps":"search_box.search_creative_photos_and_images","image.editorial":"search_box.search_editorial_photos",imagefilm:"search_box.search_creative_image_and_film",film:"search_box.search_all_videos","film.creative":"search_box.search_creative_footage_and_video","film.editorial":"search_box.search_editorial_footage_and_video"};var p=()=>{const e=(0,t.useRef)(null);(0,l.pN)(e);const i=(0,l.MO)(),a=(0,n.b)(),s=(0,o.aF)(),{inTest:r,inExperience:p}=s.imageFilmGrid;(0,t.useEffect)((()=>{if(r){c(`gi_srp_imagefilm_grid-${p?"expA":"control"}`)}}),[]);const g={endpoint:"https://as.gettyservices.com:443/GettyImages.Autocomplete.KeywordService.Service/KeywordService1/Suggestedkeywords",siteLocale:i.locale||a,searchAssetType:i.searchParameters.assettype||"image",searchAssetFamily:i.searchParameters.family||"any"};return(0,h.jsx)(d.E1,{children:(0,h.jsxs)(h.Fragment,{children:[(!(!i.options.overlayOnFocus||!i.inFocus)||!(!i.options.overlayOnFocusAndDocked||!i.inFocus||"docked"!==i.peekyScrollMode))&&(0,h.jsx)("div",{className:m.overlay}),(0,h.jsxs)("div",{className:m.container,ref:e,children:[(0,h.jsxs)("div",{className:m.holder,children:[(0,h.jsx)(d.Rj,{placeholders:_}),(0,h.jsx)(k,{}),(0,h.jsx)(d.Fz,{})]}),i.options.mobileMediaFilter&&i.inFocus&&(0,h.jsx)("div",{className:m.mediaFilter,children:(0,h.jsx)(S,{})}),(0,h.jsx)(d.J,{options:g})]})]})})},g={container:"K1SqZyKEYvLb_2tVus4g",containerSearchbarRefresh:"kLRNotKjlkvmvEexzO2k",iconClosed:"yN0W__RQwt8CrKOZ7s_w",iconOpen:"tmGgQ_633jdRwDLjFK9k",mediaOptions:"Vd2VvUl3qgDV1ToNCrBF",open:"TCqykY_x129FLD1Q3iGN",options:"FVJUo7TzF6ZIBn5mIPzw",option:"V8L0tRYFS9z9GGehXGVy",holder:"w1KxLpGwIQwwdDxNoon8",iconCheckmark:"B4FnD574T0hsIY_EvGKX",headerOption:"Ekb6j6DvvOlpF3eIO2ed",mainLabel:"qkcSYQOHC60fz5eW9K75"},v=a(8130),u=a(4074),f=a(8137),w=a(8942);const b=({styles:e={}})=>{const i=["imagesAll","imagesCreative","imagesEditorial","videoAll","videoCreative","videoEditorial"],a={imagesAll:{assettype:"image",family:null,mainLabel:"images",label:"images",isMain:!0},imagesCreative:{assettype:"image",family:"creative",mainLabel:"creative_images",label:"creative"},imagesEditorial:{assettype:"image",family:"editorial",mainLabel:"editorial_images",label:"editorial"},videoAll:{assettype:"film",family:null,mainLabel:"video",label:"video",isMain:!0},videoCreative:{assettype:"film",family:"creative",mainLabel:"search_box.creative_video",label:"creative_video_filetype_dropdown"},videoEditorial:{assettype:"film",family:"editorial",mainLabel:"search_box.editorial_video",label:"editorial_video_filetype_dropdown"}},s=(0,v.T)(),r=(0,l.MO)(),[n,c]=(0,t.useState)(!0),d=(0,u.u)(),m=(0,o.aF)(),{inExperience:_}=m.imageFilmGrid;_&&(i.unshift("imagesAndFilm"),a.imagesAndFilm={assettype:"image,film",family:"creative",mainLabel:"creative_images_video",label:"creative_images_video",isMain:!0}),Object.keys(a).forEach((e=>{a[e].testId=e}));const p=()=>_&&r.imageAndFilmSearch()&&r.creativeSearch()?"imagesAndFilm":r.imageSearch()&&r.creativeSearch()?"imagesCreative":r.imageSearch()&&r.editorialSearch()?"imagesEditorial":r.imageSearch()?"imagesAll":r.filmSearch()&&r.creativeSearch()?"videoCreative":r.filmSearch()&&r.editorialSearch()?"videoEditorial":r.filmSearch()?"videoAll":"imagesAll",[g,b]=(0,t.useState)(p());(0,t.useEffect)((()=>{b(p())}),[r.updateSearchBarSearchParameters]);const y=()=>{c(!n)},k=e=>{y(),b(e),r.updateSearchBar({inFocus:!1}),r.updateSearchBarSearchParameters({assettype:a[e].assettype,family:a[e].family,mediatype:null}),r.options.performSearch||r.setStatusToUpdated(),(e=>{d.trackEvent("selectDropdownOption",{ui_element_location:"search_bar",dropdown_option_selected:e,dropdown_type:"asset_family_search_options"})})(e)};return(0,h.jsxs)("section",{className:e.container,onMouseLeave:()=>{n||c(!0)},"data-testid":"section-media-filter",children:[(0,h.jsxs)("button",{"data-testid":"media-filter-toggle",className:e.mainLabel,onClick:y,type:"button",children:[(0,h.jsx)("span",{children:s(a[g].mainLabel)}),(0,h.jsx)(w.Z,{className:`${n?e.iconClosed:e.iconOpen}`})]}),(0,h.jsx)("div",{"data-testid":"media-filter-dropdown-container",className:`${e.mediaOptions} ${n?"":e.open}`,children:(0,h.jsx)("ul",{className:e.options,children:i.map((i=>{let t=e.option;return a[i].isMain&&(t=e.headerOption),(0,h.jsx)("li",{"aria-label":i,className:t,children:(0,h.jsxs)("div",{"data-testid":"media-filter-option",className:e.holder,onClick:()=>k(i),onKeyDown:()=>k(i),role:"button",tabIndex:0,children:[p()===i&&(0,h.jsx)(f.Z,{className:e.iconCheckmark,viewBox:"0 0 100 100"}),(0,h.jsx)("label",{children:s(`${a[i].label}`)})]})},i)}))})})]})};b.defaultProps={styles:{}};var y=b;var k=()=>(0,h.jsx)(y,{styles:g}),x={container:"TdNZaYpD9yz5FW1wjIw7",iconClosed:"rs3VTff3CDBo03BE22nE",iconOpen:"QEfRG0ZJIej3XHFfWqDw",mediaOptions:"sMs4QQCmuztjTWZ_VoKY",open:"Y3LEKUop6y97WbiakSax",options:"eEyiV40vPXqN1tMK8FOL",option:"vfhuU2eNezF7oCOuK5Yw",holder:"UZkaNLzq6oYoROT0E0EW",iconCheckmark:"i8lp1q7GCCwA6W664YHv",headerOption:"f14U7FV1cd_jk5ucTAzn",mainLabel:"e1OrXk82lkWGUSeBzCwa"};var S=()=>(0,h.jsx)(y,{styles:x}),j=a(2696),F=a(4606),T=a(9437),O=(0,s.Z)(T.i,T.K.SEARCH_BAR,(()=>{const e=e=>{const i="getty"===e.siteName?p:j.aT,a=(0,F.Z)(e.siteName,e.user,e.config),s=()=>(0,h.jsx)(r.Cl,{config:a,experiences:e.experiences,locale:e.locale,siteName:e.siteName,user:e.user,children:(0,h.jsx)(i,{})});return e.useSuspense?(0,h.jsx)(t.Suspense,{children:s()}):s()};return{client:e,server:e}}))}}]);
//# sourceMappingURL=SearchBar-d11f3ab07a31a33b12f3.js.map