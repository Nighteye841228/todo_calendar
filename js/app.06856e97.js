(function(t){function n(n){for(var a,l,o=n[0],r=n[1],c=n[2],d=0,b=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&b.push(s[l][0]),s[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(n);while(b.length)b.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],a=!0,o=1;o<e.length;o++){var r=e[o];0!==s[r]&&(a=!1)}a&&(i.splice(n--,1),t=l(l.s=e[0]))}return t}var a={},s={app:0},i=[];function l(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=a,l.d=function(t,n,e){l.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,n){if(1&n&&(t=l(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)l.d(e,a,function(n){return t[n]}.bind(null,a));return e},l.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(n,"a",n),n},l.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},l.p="/todo_calendar/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=n,o=o.slice();for(var c=0;c<o.length;c++)n(o[c]);var u=r;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},4275:function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),s=e("289d"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("section",[e("div",{staticClass:"box",staticStyle:{"justify-content":"space-around"}},[e("nav",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("b-collapse",{attrs:{open:t.isAddLabel,"aria-id":"forNewLabel"},on:{"update:open":function(n){t.isAddLabel=n}},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("b-button",{attrs:{outlined:"",label:"新標籤",type:"is-primary","aria-controls":"forNewLabel"}})]},proxy:!0}])},[e("div",{staticClass:"notification"},[e("section",{staticClass:"section"},[e("b-field",{attrs:{label:"標籤名稱"}},[e("b-input",{model:{value:t.labelName,callback:function(n){t.labelName=n},expression:"labelName"}})],1),e("b-field",{attrs:{label:"標籤icon"}},[e("b-input",{model:{value:t.labelIcon,callback:function(n){t.labelIcon=n},expression:"labelIcon"}})],1),e("b-field",{attrs:{label:"標籤顏色"}},[e("v-input-colorpicker",{model:{value:t.labelColor,callback:function(n){t.labelColor=n},expression:"labelColor"}})],1),e("b-field",[e("b-button",{attrs:{outlined:""},on:{click:t.addLabel}},[t._v("確認")])],1)],1)])])],1),e("div",{staticClass:"level-item"},[e("b-collapse",{attrs:{open:t.isAddTask,"aria-id":"forNewTask"},on:{"update:open":function(n){t.isAddTask=n}},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("b-button",{attrs:{outlined:"",label:"新工作",type:"is-primary","aria-controls":"forNewTask"}})]},proxy:!0}])},[e("div",{staticClass:"notification"},[e("section",{staticClass:"section"},[e("b-field",{attrs:{label:"標籤"}},[e("b-select",{attrs:{placeholder:"選擇種類",expanded:"",required:""},model:{value:t.taskLabel,callback:function(n){t.taskLabel=n},expression:"taskLabel"}},t._l(t.labels,(function(n){return e("option",{key:n.name,domProps:{value:n}},[t._v(" "+t._s(n.name)+" ")])})),0)],1),e("b-field",{attrs:{label:"工作標題"}},[e("b-input",{model:{value:t.taskTitle,callback:function(n){t.taskTitle=n},expression:"taskTitle"}})],1),e("b-field",{attrs:{label:"工作說明"}},[e("b-input",{model:{value:t.taskExplanation,callback:function(n){t.taskExplanation=n},expression:"taskExplanation"}})],1),e("b-field",{attrs:{label:"工作日期"}},[e("b-select",{attrs:{placeholder:"選擇日期",expanded:""},model:{value:t.taskDay,callback:function(n){t.taskDay=t._n(n)},expression:"taskDay"}},t._l(t.numberOfDays,(function(n,a){return e("option",{key:a,domProps:{value:a}},[t._v(" "+t._s(a+1)+" ")])})),0)],1),e("b-field",[e("b-button",{attrs:{outlined:""},on:{click:t.addTask}},[t._v("確認")])],1)],1)])])],1),e("div",{staticClass:"level-item"},[e("b-button",{attrs:{type:"is-text",disabled:""}})],1),e("div",{staticClass:"level-item"},[e("b-button",{attrs:{outlined:"",label:"存檔",type:"is-primary"},on:{click:t.saveWork}})],1),e("div",{staticClass:"level-item"},[e("b-button",{attrs:{outlined:"",label:"分析",type:"is-primary"},on:{click:t.analyzeMonth}})],1),e("div",{staticClass:"level-item"},[e("b-button",{attrs:{outlined:"",label:"下載",type:"is-primary"},on:{click:t.compressJson}})],1),e("div",{staticClass:"level-item"},[e("b-field",{staticClass:"file is-primary",class:{"has-name":!!t.file}},[e("b-upload",{staticClass:"file-label",on:{input:t.uploadJson},model:{value:t.file,callback:function(n){t.file=n},expression:"file"}},[e("span",{staticClass:"file-cta"},[e("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),e("span",{staticClass:"file-label"},[t._v("上傳記錄")])],1),t.file?e("span",{staticClass:"file-name"},[t._v(" "+t._s(t.file.name)+" ")]):t._e()])],1)],1)]),e("div",{staticClass:"level-right"},[t._e(),t._e(),e("div",{staticClass:"level-item"},[e("b-collapse",{attrs:{open:t.isDeleteLabel,"aria-id":"forNewTask"},on:{"update:open":function(n){t.isDeleteLabel=n}},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("b-button",{attrs:{outlined:"",label:"刪除標籤",type:"is-danger","aria-controls":"forNewTask"}})]},proxy:!0}])},[e("div",{staticClass:"notification"},[e("section",{staticClass:"section"},[e("b-field",{attrs:{label:"標籤"}},[e("b-select",{attrs:{placeholder:"選擇種類",expanded:""},model:{value:t.taskLabel,callback:function(n){t.taskLabel=n},expression:"taskLabel"}},t._l(t.labels,(function(n){return e("option",{key:n.name,domProps:{value:n}},[t._v(" "+t._s(n.name)+" ")])})),0)],1),e("b-field",[e("b-button",{attrs:{outlined:""},on:{click:t.deleteLabel}},[t._v("確認")])],1)],1)])])],1),e("div",{staticClass:"level-item"},[e("b-button",{attrs:{type:"is-danger",outlined:""},on:{click:t.deleteCookie}},[t._v("刪除記錄")])],1)])])]),e("div",{staticClass:"box"},[e("div",{staticClass:"columns"},t._l(t.date,(function(n,a){return e("div",{key:a,staticClass:"column has-text-centered blank"},[e("p",{staticClass:"heading"},[t._v(" "+t._s(n)+" ")])])})),0),e("div",{staticClass:"columns is-multiline has-text-centered is-variable is-2"},[t._l(t.firstDay-1,(function(n,a){return e("div",{key:a+"day",staticClass:"column is-1 seven-col blank"},[t._m(0,!0)])})),t._l(t.numberOfDays,(function(n,a){return e("div",{key:a,staticClass:"column is-1 seven-col"},[e("div",{staticClass:"box",staticStyle:{padding:"1.5rem 0.5rem"}},[e("div",{staticClass:"has-text-centered content",on:{dblclick:function(n){return t.setRed(a)}}},[e("p",{ref:"dateTitle",refInFor:!0,staticClass:"title"},[t._v(t._s(a+1))])]),e("child-task",{key:t.componentKey,ref:"task",refInFor:!0,attrs:{date:a,labels:t.labels,numberOfDays:t.numberOfDays,inheritTask:t.allTasks[a]},on:{handleTransTask:t.handleTransTask}})],1)])}))],2)])]),t._e()],1)},l=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"box",staticStyle:{height:"27.85rem",overflow:"auto"}},[e("div",{staticClass:"has-text-centered content"},[e("p",{staticClass:"title"})])])}],o=e("1da1"),r=(e("96cf"),e("ac1f"),e("1276"),e("4de4"),e("b0c0"),e("d81d"),e("99af"),e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("159b"),e("7db0"),e("a15b"),e("79e8")),c=e.n(r),u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticStyle:{height:"20em"}},[e("draggable",t._b({attrs:{tag:"div"},on:{start:function(n){t.drag=!0},end:function(n){t.drag=!1}},model:{value:t.tasks,callback:function(n){t.tasks=n},expression:"tasks"}},"draggable",t.dragOptions,!1),[e("transition-group",{staticClass:"columns is-multiline",attrs:{tag:"div",type:"transition",name:t.drag?null:"flip-list"}},t._l(t.tasks,(function(n){return e("div",{key:n.unique,staticClass:"column is-12"},[n.explanation.length?e("b-tooltip",{staticClass:"tooltip-own",staticStyle:{width:"100%","overflow-wrap":"break-word"},attrs:{position:"is-top",size:"is-medium",multilined:"",type:"is-primary",triggers:["hover"]},scopedSlots:t._u([{key:"content",fn:function(){return[e("p",[t._v(t._s(n.explanation))])]},proxy:!0}],null,!0)},[e("b-button",{attrs:{expanded:""},on:{click:function(e){return t.changeIcon(n)}}},[e("span",{style:{color:n.label.color}},[t._v(t._s(n.label.icon))]),t._v(" "+t._s(n.title)+" ")])],1):t._e(),n.explanation.length?t._e():e("b-button",{attrs:{expanded:""},on:{click:function(e){return t.changeIcon(n)}}},[e("span",{style:{color:n.label.color}},[t._v(t._s(n.label.icon))]),t._v(" "+t._s(n.title)+" ")])],1)})),0)],1)],1),e("b-collapse",{attrs:{open:t.isEditTask,"aria-id":"contentIdForA11y1"},on:{"update:open":function(n){t.isEditTask=n}},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("div",{staticClass:"container is-fullwidth"},[e("b-button",{attrs:{type:"is-primary",size:"is-small","aria-controls":"contentIdForA11y1",outlined:""}},[e("b-icon",{attrs:{icon:"pen",pack:"fas"}})],1)],1)]},proxy:!0}])},[e("hr"),e("div",{staticClass:"container is-fullwidth"},[e("b-field",{attrs:{label:"標籤"}},[e("b-select",{attrs:{placeholder:"種類",expanded:""},model:{value:t.taskLabel,callback:function(n){t.taskLabel=n},expression:"taskLabel"}},t._l(t.labels,(function(n){return e("option",{key:n.name,domProps:{value:n}},[t._v(" "+t._s(n.name)+" ")])})),0)],1),e("b-field",{attrs:{label:"工作標題"}},[e("b-input",{model:{value:t.taskTitle,callback:function(n){t.taskTitle=n},expression:"taskTitle"}})],1),e("b-field",{attrs:{label:"工作說明"}},[e("b-input",{model:{value:t.taskExplanation,callback:function(n){t.taskExplanation=n},expression:"taskExplanation"}})],1),e("b-field",{attrs:{label:"工作日期"}},[e("b-select",{attrs:{placeholder:"選擇日期",expanded:""},model:{value:t.taskDay,callback:function(n){t.taskDay=t._n(n)},expression:"taskDay"}},t._l(t.numberOfDays,(function(n,a){return e("option",{key:a,domProps:{value:a}},[t._v(" "+t._s(a+1)+" ")])})),0)],1),e("hr"),e("b-field",[e("div",{staticClass:"buttons",staticStyle:{"justify-content":"space-around"}},[e("b-button",{attrs:{type:"is-primary",outlined:""},on:{click:t.confirmEdit}},[t._v("確認")]),e("b-button",{attrs:{type:"is-danger",outlined:""},on:{click:t.deleteTask}},[t._v("刪除")])],1)])],1)])],1)},d=[],b=e("b76a"),f=e.n(b);function p(t){return 10*Math.floor(Math.random()*t)}var k={name:"Task",props:["date","labels","numberOfDays","inheritTask"],components:{draggable:f.a},computed:{dragOptions:function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}}},data:function(){return{drag:!1,isEditTask:!1,taskLabel:void 0,taskTitle:"",taskExplanation:"",taskDay:0,taskUnique:void 0,tasks:this.inheritTask||[]}},methods:{changeIcon:function(t){"靈感"===t.label.name?t.label=this.labels.find((function(t){var n=t.name;return"寫作"===n})):"寫作"===t.label.name&&(t.label=this.labels.find((function(t){var n=t.name;return"靈感"===n}))),this.setTask(t)},setTask:function(t){this.taskTitle=t.title||"",this.taskExplanation=t.explanation||"",this.taskDay=this.date,this.taskLabel=t.label,this.taskUnique=t.unique||""},confirmEdit:function(){var t=this,n=this.tasks.find((function(n){var e=n.unique;return e===t.taskUnique}));if(this.taskDay!==this.date)return this.tasks=this.tasks.filter((function(n){var e=n.unique;return e!==t.taskUnique})),this.$emit("handleTransTask",{date:this.taskDay,title:this.taskTitle||"",explanation:this.taskExplanation||"",label:this.taskLabel,unique:this.taskUnique}),void(this.isEditTask=!1);n.title=this.taskTitle||"",n.explanation=this.taskExplanation||"",n.label=this.taskLabel,this.isEditTask=!1},confirmAdd:function(){var t={title:this.taskTitle||"",explanation:this.taskExplanation||"",label:this.taskLabel,unique:this.taskUnique||this.taskTitle+p(1e4)};this.tasks.push(t)},deleteTask:function(){var t=this;this.taskUnique&&(this.tasks=this.tasks.filter((function(n){var e=n.unique;return e!==t.taskUnique})),this.isEditTask=!1)}}},h=k,m=(e("c22a"),e("6042"),e("2877")),v=Object(m["a"])(h,u,d,!1,null,"e2a1956a",null),y=v.exports,g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("b-field",[e("b-numberinput",{attrs:{min:"0",max:t.contentLen},model:{value:t.getBlahNum,callback:function(n){t.getBlahNum=t._n(n)},expression:"getBlahNum"}})],1),e("div",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"box"},[e("div",{staticClass:"content contest",staticStyle:{"white-space":"pre-wrap"}},[e("p",{domProps:{innerHTML:t._s(t.cutContest[t.current-1])}})])])]),e("b-pagination",{attrs:{total:t.cutContest.length,"per-page":1,"icon-next":t.nextIcon,"icon-prev":t.prevIcon,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},model:{value:t.current,callback:function(n){t.current=n},expression:"current"}})],1)],1)},x=[],_=(e("5319"),e("466d"),["　　春雷來了，鱉的嘴仍然咬著        讓鱉鬆口的雷是悶是響，我好想知道\n　　\n　　這裡很吵，吵到連硬幣掉下去撞擊，都安安靜靜。心中默數一枚、兩枚、直至五枚，五枚硬幣多送一張彩券。推耙不斷推，推不到前方硬幣掉落洞口，那些硬幣都在邊緣，我必須投更多，讓一切一毫米一釐米地落下。\n　　落下的，都可以換成彩券，彩券換了什麼沒那麼重要。\n　　\n　　我總坐在兌幣機旁；我不玩釣魚機、也不玩保齡球，我只玩往前推錢幣的機台。一如往常，一天的工資一千五，就拿一千換成一籃代幣。一千有時可玩一下午；有時一個小時就結束。\n　　「一千就這樣投喔。」他說，邊說邊搖著旁邊的機台，幾十枚硬幣落洞裡，洞知道掉了幾枚硬幣，沒出彩券發出尖銳的叫聲。\n　　這裡很吵，仍有聲音可以劃開。他笑，工作人員過來勸戒，他說：「啊就撞到啊。對不起喔。」工作人員打開了機台，關掉了警鈴聲。裡頭一疊疊的彩券，每次看到都想問這麼多大概有幾張。\n　　「裡頭四五千張吧？」他問。工作人員笑著說：「投投看就知道呀。」\n　　\n　　「借我十枚代幣。等等還妳。」他在側玻璃看呀，甚至將雙手用成照相姿勢瞄準，我借他了。他的第一枚代幣投向不可能將其他硬幣前推的地方，發出吱的聲響；第二枚也是；到了第十枚時，他親了硬幣，以為這樣比較帥，一點也不，他投入唯一有可能讓最前方的錢幣要掉入深淵的硬幣孔。\n　　什麼也沒。\n　　「這就賭博啊。玩那麼久有什麼好玩啦。」我邊聽，連續投五枚，前方的錢幣掉落了不知幾枚，換成一張張彩券吐出，變成紛亂的膠捲，一直以為這些彩券會帶來一些快樂，喜悅什麼的都會印成一格格的，想說看這那些彩券被計算，就可以將這一天玩推幣機得到的歡愉變成實質的數字。只有第一次去換大娃娃時，覺得有趣。後來就麻痺了。\n　　「喂喂，也太強了吧妳。但玩這有什麼屁用。」他說，他叫順生，他走向了釣魚機。\n　　我仍看玻璃內的銀色錢幣閃閃發亮，等待前方的金色錢幣掉入深深的暗。\n　　\n　　依舊那麼安靜，他的叫聲劃開那般的吵。\n　　\n　　「大中大中了。」釣魚機上方的燈箱閃起我從沒看過的顏色。他釣起了一尾從沒人釣過的魚，總躲在螢幕最側，不時跑出來吞食被收線的大魚，是一尾醜得要死的魚，很肥，深咖啡色不吸引最愛玩這種釣魚遊戲的孩子。\n　　\n　　釣魚機不斷地吐出彩券，整齊地呈現一排一排上疊，就像是釣魚的滾輪收線，當我回到我的機台繼續投幣時，還吐個不停，直到工作人員補了一次彩券，他掏空那台機器，釣起那台機器最隱密的魚。\n　　他踢著疊起的彩券籃，「妳覺得有多少？要不要跟我一起去釣魚？」他說。那天，我跟他走了，那堆彩券，一萬多張，大概三千。\n　　\n　　「我真的會釣魚喔，剛釣到的是盧麻。」順生對我說的話，都像是對個少女說。我不像少女，幻想的少女提可愛的蕾絲花籃、現實的少女是可愛的包包、貴重的包包、無趣的書包，我提著塑膠籃放著代幣、塑膠推車放彩券。\n　　\n　　當他中大魚時， 高興也只是換了三千，怎麼想都很廉價。「要換什麼？妳選。」他露出牙齦自信地笑。我選了一台兩人小電鍋，轉賣還能賣個一千多。「買了，就要煮喔。」他在我家門前說。\n　　\n　　隔天又遇到順生。他沒釣上昨日那尾大魚，拿了幾千元換了少少的彩券，「要換什麼？妳選。」\n　　「你欠什麼，我就選什麼。」我說。我知道他會說我欠你之類的話。「我去你家吧，那些彩券給我。」\n　　「不要來我家，我這裡彩券都給你，你找一天陪我釣魚，好不好？」\n　　在我投硬幣的機台，他投了他的銀幣，不斷地不斷地。我慢慢地投，他沒多久就把手上的投完直說等一下我去換。他多出來的硬幣，推呀推。我前方所積累的銀幣與那些機台原有金幣、彩券、甚至兩顆寶石（寶石是一千張）都推過邊緣，掉入深淵，變成希望。\n　　他還繼續投。「都破台了，沒有額外贈品了。投也沒用了。」我說。\n　　「投給妳啊。」我去了他的房間，只有床、枕頭、揉團的衛生紙，我們什麼也都沒做。\n　　他只約我去釣魚。「妳有工作嗎？」我沒有回，他沒有再問。順生真的帶我去釣魚。\n　　\n　　「你房間什麼都沒有耶。」將聲音放細，裝得熱情一點，就算臉不像是那樣的聲調，這是我的策略。\n　　「要不把小電鍋搬過來。」他說。\n　　\n　　我一直以為男人是一樣的。沒見面時，聽聲音就能得到高潮；見面之後，就看斤看兩，說什麼龍、說我肥到都不能當魚。做愛時，仍將肉體推向我，像是要把自己最醜惡的模樣塞入我身體內，我只能撐住，如果倒了，就什麼關愛也得不到了。我一直是那麼想的，也那麼做的。\n　　\n　　「為什麼？」「妳選兩人小電鍋不就在暗示我？」我只想這男人真以為自己聰明，聰明到無話可聊，做起他綁鉤的工作，將鉤插在保麗龍上，一排一排綁繩，我幫了他，我聞到他身上的味道，跟這房間潮濕的泥土味不同，是遊藝場幾千張彩券換取的男性香水（那款換來也難以轉賣），噴在我家廁所的味道。久了就習慣他身上的味道，反而，房間的臭更加明顯，他的車也有一種魚乾的腥。腥味來自於後車廂乾掉的魚血。\n　　\n　　那晚什麼也沒做，我幫他用鉗將鉤用得內彎，他就只在那裏綁鉤。\n　　\n　　「後天有空吧，釣魚。」他將更多魚鉤插在孔洞多到近爛的保麗龍上。\n　　\n　　拿起魚鉤，他兩指銜住菸盒大小的鱉，鱉的四肢在空中畫圓，我覺得很可愛，在那笑說很可愛耶。他將魚鉤鉤入鱉的殼與臟器之間。\n　　「我等等試給你看，這釣龍膽有多好用。」鱉頭伸了一點進去，又隨即突出，伸進去會痛吧。他拿了一隻小鱉給我穿，「好噁心喔，不敢啦。」我說。我的手也是拿起鉤來，他在一旁說像穿針，將鉤的前端插入，插入軟軟的皮肉，針過了兩個倒鉤，穿過了殼與內臟間的膜。他要帶我的手，要將鉤的圓弧卡在鱉的身體中央，只是，我將魚鉤穿過了過頭，戳入內臟又出，從鱉的嘴出鉤。鱉手伸得好長好長，奮力揮舞。沒幾下，就不動了。\n　　\n　　他笑得抖動，「你把牠搞死了。」他說要將這隻死鱉取下，卻拉也拉不出來，從穿入的傷口流出了鱉血與汙綠色的汁液，這麼小隻血也只有一點點，我拿起一旁剪殘魚線的剪刀，從鱉殼剪下，取出那隻鉤。\n　　剪刀撥開那些臟器，心臟小得看不到。\n　　\n　　他再拿一隻鱉，穿好的鱉頭伸得頗長，嘴張得很開，鉤好之後，他拿在那裏晃，用鱉的嘴咬我的手，細細的牙齒磨起來不痛很癢。「鱉咬到，打雷才會開。」他說，我便咬了他的手，齒痕很深，沒多久就消失。我沒去想何時打雷，何時他就會離開我。我笑，他也跟著笑，我拿給他兩隻小鱉，「要活活穿過，不讓牠死，會動才有用。」\n　　\n　　「知不知道？」拿了裝鱉的桶與鉤給我。我穿了第二隻鱉，這次穿得很好，垂在緄繩。穿鱉就變成我的工作，鱉手腳伸出縮入，頭卻只能伸長，殼也進不去，鉤卡死死的，縮進去很痛吧。\n　　「這些鱉好像鑰匙圈喔，你看。」他甩竿。\n　　他這一輩子不知鉤了多少的鱉 ，我想到鑰匙圈的玩笑，他一定覺得不好笑吧。本來想跟他說，我不想鉤這些鱉，很殘忍，不過我長這樣，又能裝什麼害怕。\n　　「鉤這些鱉，你不覺得殘忍喔？」他問。\n　　「有什麼好殘忍，看你釣魚，你釣魚也很殘忍，啊，沒在怕啦。」\n　　「也是，沒什麼好殘忍，一樣換一樣，鱉換龍膽，龍膽換錢，錢換……」\n　　「錢換什麼？」我問。\n　　「破麻。」我自問自答，順生忙著拉魚，電捲很吵他沒聽到。錢能換到的東西太多，換得到代幣、換得到我，換得到沒日沒夜都得釣的魚。又鉤起一隻鱉，他叫我別再鉤了，他今天什麼也沒釣到。他將那些卡在鉤上的鱉，一隻隻用剪刀剪開丟入海釣池裡，沉在池裡的龍膽才開始騷動。「用釣的釣不到，用餵的你們就出來。當我來放生的做功德的喔。」他說。\n　　他將那一桶鱉倒在土堤上，。\n　　「你放生還真功德無量耶。」我說。\n　　隻隻的鱉，爬在土上，往前推往前推，進入水中。龍膽就在水底等著他們。那些鱉就像是我的代幣，投入池內，推呀推呀，能換取一些什麼，很短暫地，又掉入另外個洞裡。\n　　\n　　我邊投代幣，也沒研究什麼角度會更容易被推擠。他在一旁就發呆地看，看我沒代幣時就去換。今天他沒去一旁的釣魚機台釣，還在煩惱為何沒釣到那些沉底等吃鱉的龍膽。\n　　「釣龍膽有什麼好玩的？」我問。這個有什麼好玩的。我看著前排一隻小熊慢慢前推，那隻熊是這機台的最大獎。\n　　「釣起來可以換錢，你知不知道？」他說。\n　　「玩這個也可以換錢，你怎不陪我玩。」\n　　「不一樣啦。」。\n　　「哪裡不一樣，你自己不多釣幾次，掉不到就氣到把那些鱉拿去放生。把那些鱉賣給放生團體，也可以賺錢。要不要去做，你要嗎？」\n　　「拿五六十塊的鱉換一隻十公斤龍膽，十公斤龍膽也可以賣個兩三千，你又懂什麼？」\n　　我投入代幣的速度更快了些，這種遊戲只要代幣夠多自然會中一些；釣龍膽就像賭博，換錢還得看魚的心情，我想到就覺得好笑。\n　　他低頭看著手機，沒繼續投幣。\n　　他開口時，我的推幣將那隻小熊推入邊緣，掉入。機台響起巨大的聲響，他仍在說，而我什麼也聽不到。\n　　\n　　等到彩券出到一半，音樂停下。我才問你剛說了什麼？他說沒有。\n　　他說沒有，那只是賭氣罷了，我將他的手臂陷入我的乳房之間，再說一次嘛。\n　　\n　　「我們去批鱉來賣。」他說。「賣誰？」他不斷地說放生團、釣客、海釣場啊。拿了一個佛教放生團的網頁，小鱉有一隻二十的贖命金。他開始說他買釣龍膽的菸盒鱉多少錢；那裏的小鱉賣多少錢，一轉手就可賺幾倍。\n　　「做生意又做功德，到時候又迴向到偏財。」他投入許多的代幣，投入已無任何獎勵的機台。獎勵警鈴響起，下方的彩票口吐得不斷， 「好運就是擋不住。連沒東西的機台也會中大獎。」\n　　我蹲下將彩券收齊。\n　　「幹嘛收，就讓它亂。」他說。直到螢幕上剩餘彩券還有一萬多張，兩疊彩券吐完，工作人員繼續補上。那彩券纏繞在我腳踝，我邊笑邊想如何不被絆倒，只好脫了鞋，仍然將這些彩券收齊。\n　　\n　　這樣的巧合，讓他覺得我是助他的人，讓這一切都變成轉機。在臭臭的車上，他說他要轉運了，說一句這類的話就轉過來看我一眼，他瘦凹的臉與突出的嘴，迷不了誰，我只是在心裡說他是好人，他是好人。當然看不到他眼中我的倒影，但我想起我照鏡子時的自己，我也是迷不了人的人。他的手指輕點我的手臂，那樣癢的像是小鱉的啃咬，是想吃掉獵物，也沒有力量；而他將我的手抓過去他的下體，我緊緊抓著，「咬住就不放喔。」他笑。\n　　「等打雷我再放開。」我說。\n　　\n　　與他的性，無燈、無光，是縮殼的鱉，是怎樣都不想看光的互相。\n　　\n　　「小小的鱉。」我彈他的陽具時說。咬你喔。來啊。\n　　\n　　我們咬住互相不放，雷聲已來，仍不放口。幾個月過去，我依舊靠遊藝場的兌換品上網販賣維生，他一個禮拜幾天工作，幾天跑去海釣，偶爾曠班陪我在遊藝場。對我們兩人而言，這樣的生活跟獨自過差不多；其實對他也毫無依賴，說什麼愛呢，兩人都沒說一字愛，這樣齒嘴鉗住兩人的手腳。\n　　\n　　想挪開嗎？不要。就算咬的力道很輕，連齒痕都沒有。\n　　\n　　敲我家的門，進來我家，他先看了我整房的遊藝場兌換品。「你家是湯姆熊喔。」接著說：「我辭掉工作了。」本以為他要開始嘮叨說工廠怎樣，沒說那些，露出牙齦的笑，「我們去載鱉吧。」\n　　\n　　「光小電鍋就十幾台了。我送妳的那台呢？」往屏東的路上他問，其實我分不出哪一台是他送的那台。下交流道後，轉入看不出是沒人住了還是睡了的村落，只剩導航說著前方三百公尺要轉彎；左轉、右轉是畫圈，會走回原路嗎？我也不敢問。「這導航有導對嗎？」我問，「就只能相信它，要不然你知道在哪喔。」他說完，我們就聽到目的地在您的左手邊，有著微光的小屋。\n　　\n　　車停下來時，他又露出牙齦笑了。兩百公斤的鱉，賣鱉的大哥說我們這樣也賺不到油錢，開始對他說哪裡的釣具行買多少量、海釣也可以用，他直直點頭 。「還帶女友來喔，唉唷肯跟這麼遠，很愛喔。」大哥說。他回了兩次沒有啦。那位大哥推銷起鱉蛋，說什麼用燈光照過去裏頭有白點的是受精的，看鱉蛋有兩層顏色是受精的。只有白色是沒受精的，不斷地說受精不受精，不斷地問要不要賣，拿去賣給中藥行，或是泡酒拿去賣周遭的男人。他們兩個一直拿手電筒照鱉蛋，一直在說，說了很多。\n　　「喝了會很硬喔。」這句話我也不知道是誰說的。當大哥將那幾桶鱉搬上車，掩上後車箱門，塑膠桶裡小鱉雉鱉分開來放，大小不同鱉爬行磨爪的聲音有輕有弱，很吵很像是推代幣機台，代幣掉落到下一層的聲音，或說是他夜裡睡好睡熟的磨牙。\n　　在車上看他跟大哥聊天 ，聽不到對話，只聽得到大聲地笑，那種笑聲與在我身旁的笑、被我搔癢的笑完全不同。 大哥拿出鱉蛋，用燈照射，教他怎樣辨識受精的沒受精的。車燈照射著他們兩人，我也辨識不出來哪個男人是好的是壞的；聊到最後，那位大哥送了他一罐鱉蛋酒，給他時，兩人轉頭看我，他露出牙齦要啃咬我的笑。\n　　\n　　「那罐是什麼？」我問。他拿了手電筒照沉底的鱉蛋。「酒，受精的鱉蛋酒。」\n　　吞那些鱉蛋，喝那些酒，鉤起那些鱉，那些鱉的嘴會張得大大的。\n　　「你有跟大哥說你要買來幹嘛嗎？」「賣啊。」「放生呢？」\n　　「怎能跟他說這個，他搶我生意怎辦。」「吼，就算不搶生意，也會有人跟他收好不好？」\n　　「不會有人收這個去放生啦，護生園區那邊我也聯繫好了，我都跟他說我是在養鱉的，鱉場要清池沒地方放鱉。」那些護生園區，聽了也信。\n　　\n　　「護生園區的池，還養鱸鰻什麼的，下次也可以去收。」他說。\n　　「鱸鰻吃鱉，鱉被吃光了，又會跟我買。」\n　　「這放生也是放死耶。」我回，車回台中，我們一直在笑，那些幼鱉雉鱉爬行或啃咬塑膠桶的聲音，越來越大；整車都是那些鱉帶來的水味或土腥，這車依舊是他的模樣，擋風玻璃前曬成白色的檳榔盒、名片、用過的衛生紙，車上的塑料都是菸油，摸起來跟他的臉相似，味道卻不一樣了，我喝了一口鱉蛋酒，咬破一顆酒熟的鱉蛋，有各種雄性的味道，可以吞下，讓人想吐；我沒有跟順生說鱉蛋酒的味道與後來的嘔吐，因為我們是笑著的。\n　　\n　　到了台中，他掀開那一桶桶的鱉，將一桶較大的雉鱉倒在幼鱉那邊，多添秤頭多賺一點錢也好。「不用打冰、不用水，甚至也不用給食物，牠們餓個一天不會死。」他說。\n　　「不知這些鱉歹命還好命。」我說。\n　　「跟我們一樣，都是要賣的命啦。」睡沒幾小時，澡也不洗躺在他床上，睡意很深，卻在他的懷中淺眠。他的鼾聲磨牙與車內的那些鱉重合，是吃食咬合、是物與物的摩擦推擠。天一白這房間變成了淺藍，夢變成雜訊，「起來了，起來了。」我將他的腿推開。\n　　一開後車門，我只見幼鱉的那桶，混入的雉鱉不知多少隻沒了頭（沒人知道倒入的雉鱉有多少隻），手呀腳呀也沒了。鱉的血是紅色的，不見的器官都跑入幼鱉的胃，流的血溶在尿液唾液。\n　　「很多雉鱉被吃掉耶……」「沒差啦，反正都還在幼鱉的肚子，還沒拉出屎，就算拉出屎也一起秤，沒差沒差。」\n　　被吃掉的雉鱉，只留下殼與內臟，說不定心還在跳；不仔細看他們像是活的，只是縮進去了。\n　　\n　　我們先去了附近立了菩薩的雕像的護生園區，賣給園區，園區再賣給信徒。鱉進了園區的池，也不一定能活，這裡的池有大鱉、也有鱸鰻。向我們買鱉的師父（順生都叫他們師父）看了那幾桶比較大的鱉，他們不收菸盒大的，菸盒大的長得醜長得噁心，算隻賣也賣不出好價格；他從幼鱉桶裡，拿起一隻雉鱉，說這種的才好賣，他近看才發現那隻雉鱉，頭腳都沒了。直說阿彌陀佛澎肚短命。阿彌陀佛迴向給鱉；澎肚短命迴向給我們。師父不斷問我們，那些賣給他們的雉鱉，有沒有互相殘殺，甚至打開一隻隻檢查，檢查個三四十隻就當作全部都沒事了。鱉桶搬到護生池前，將鱉放在飼料販賣機下，旁邊寫著放生鱉一隻二十元，放生功德無量。那些雉鱉一隻踏著一隻，疊也疊不高，沒能逃出鱉桶，都等待著護生的客人帶他們到極樂世界 。\n　　\n　　順生拿起剛才那隻無頭無手的鱉，丟入護生池，池水變得混濁。他覺得這樣也是放生，雙手合十說阿彌陀佛 。\n　　\n　　他去上次釣龍膽的海釣場，門口寫「禁止放生。」\n　　「他就說你。」「我是餵龍膽吃飽耶，這樣比較難釣，他們更賺。」\n　　他問海釣場要不要鱉，他吃鱉了。\n　　\n　　一場一場的問。甚至停在海釣場外面，跟賣水果的一樣，上面寫著「龍膽利器：菸盒鱉！」我們賣一隻八十，幾個人買幾個人沒有用過，沒用過的我拿了他幾個鉤鉤上鱉，裝在黑色不透光的塑膠袋裡，「這麼殘忍喔。」客人說；「你用看看，沒用再來找我。」他說。沒用過鱉釣龍膽的客人，我們送他幾隻，但我們沒等到那些客人釣上龍膽換了錢，來對我們說好不好用，我們北上了。\n　　\n　　往北一點的巨大風扇下，有沒人騎的自行車步道，有幾家會買鱉的海釣場，我們在那裏賣了上百公斤的鱉，一公斤只賺十元，虧都虧死了，「第一趟虧不是虧，下次載多一點來賣就好。」回程的路上，都是那些要再訂貨的釣客。「唉唷，用鱉釣龍膽，很咬喔。」客人說。\n　　「大哥，你都中幾公斤的魚？十公斤上的嗎？好厲害喔。」我裝嗲地說。那些客人又訂了許多，甚至原本不打算買的海釣場也打來訂，回程繞到護生園區，我細聲地問師父：「還要多少呢？師父。」「還要還要。」順生將那些鱉已護生，業已無鱉的空桶收回。\n　　那些雉鱉活了多少隻，又賣了多少錢。如果可以，我也想買一桶來放生，看那些鱉一隻隻排對入池，我在後方用掃把推入。\n　　\n　　推、推、用力地推，直到濕土都有掃把的痕跡，掃過的痕跡蓋過雉鱉淺淺的腳印。\n　　推、推、用力地推，代幣疊成層層，直到後方的推耙無法推動，堆滿的代幣崩塌掉入前方小小的洞，塞滿小小的洞，彩券出到無法再出。\n　　只是夢而已，我醒在夢裡彩券纏繞到我腰間時，順生的腳壓得緊緊，我怎樣也動不了。晚上八點的手機震動，寫著載鱉喔。拍了幾下他，沒醒續睡。又叫了幾聲，他只撒嬌地說不去，還是起床載鱉。\n　　\n　　這樣的生活過了一兩個月。錢多了些，我笑他是雉鱉變成大鱉了；他也笑說這樣才能養我這隻肥鱉。鱉會吃同類，但我跟他是誰吃誰，誰餵食誰呢。我吃來吃去，餵養起肚裡有微小心跳的人，偶爾，我會用手電筒照照一兩個月的肚子，什麼也看不到。「變胖喔。這樣照也不會縮小。又不是縮小燈。」他說，他也不會發現，也不要他發現。\n　　如果他不要，他會把我肚裡的雉鱉拿出來，醃或釀，或許不會；或許還能丟到護生園區的池內放生。\n　　\n　　賣鱉可以賣一輩子嗎？我也答不出來。多餘的錢，我們存了一半，另一半換成代幣，兩三藍滿滿的代幣，又換成彩券，彩券又換成商品。我以前的家，變成了那些獎品的倉庫。不管有沒有人買，那都是商品，那換成錢。\n　　「我也可以幫你將那些獎品丟上網。」偶爾也想自己一個人享樂的時刻，他總會說這些。「但我不可以自己去載鱉呀。」我總是這麼回。\n　　\n　　那晚，他就不見了，他拿走我的手機，留下車的鑰匙與他的手機。我沒有緊張，他不會去死，他說這幾個月是他覺得人生是成功的日子。他只是叫我單獨去載鱉。我問他：「你去哪了？」他沒有回。直到我照了張南下高速公路旁的夜照燈，他才說：「要讓妳獨立，要不然妳沒有我怎麼辦。」\n　　我只能看那則訊息，開車，不能回。\n　　他叫我去屏東收小鱉，前鎮、安平收小章魚，沿路幾個港口收上來，幾個港口沿路放。雨刷刷不乾淨雨，我寧願雨大一點。這樣幾滴幾滴地下，雨刷刷過去，玻璃黏了一層膜，是雨刷太髒，也有可能是雨太黏。前方的車燈糊糊，車內的廣播（他的小客貨只能聽廣播）說什麼也聽不懂。「要來我家嗎？」他在第二次約會，賓館床邊的電話響起時說。櫃台小姐說時間到了。我說好，對櫃台小姐說，也對他說。\n　　「啊，你沒家喔？」他說。「有家啊，但想去你家嘛。」我更想罵髒話回嘴，但我很喜歡順生，撒嬌一下。「你那口氣也太噁。」我想也是，那跟我刻意買得托高內衣一樣、跟那件丁字褲一樣（我太肥，看起來就像沒穿一樣），最像的是那件情趣的護士服，穿起來就想拿起巨大的注射針刺向順生，然而我是想被刺的那個。都太廉價了。\n　　我不就是廉價的人，過廉價的生活。\n　　當順生說要去他家，我也跟去，想像他的家跟我家也沒兩樣，甚至覺得那樣的想像只是回憶，潮濕導致油漆剝落，潮濕導致油漆變黃，一定很髒亂吧，我是那樣想的。「你家長怎樣？」我問順生，沒什麼期待還說得雀躍。「就那樣啊。」他說這句時，黃掉有檳榔漬的牙齒也很潮濕，摸入我內衣裡的手與看著前方的臉，都是很黃的顏色，我想是夜晚的路燈吧；但到他家，日光燈下，他、他家、我都是過濕近霉的樣子。\n　　他不就是個廉價的人。「你想住多久？」第一次在他的凹陷椰子床做愛完問我。\n　　「可以很久嗎？跟你一樣久？」這大概是我裝笨的極限。\n　　我也沒想可以跟他這麼久。他也沒想過換掉那張凹陷成他模樣的椰子床。\n　　\n　　「妳男人咧？」鱉場大哥問。「沒來耶。」「是不是男人啦？還是喝太多鱉酒被妳操壞呀？」大哥笑的臉跟順生很像。\n　　「只有我喝啦，順生哪敢喝那種東西，有個味道臭腥他哪敢喝。」我說。大哥又拿了一罐鱉蛋酒給我，我跟他要了幾顆鱉蛋。\n　　「妳就敢喝，我懂啦，那種味道順生也有。」鱉桶的重量讓車低了一些，車燈照著大哥他指揮那些外勞搬貨。他不時轉頭看我，就只是一般的笑，我不知道他在笑什麼，我放下了手煞車，他更催促搬貨快一些，鱉桶堆滿後車廂，後照鏡看不到後方。打向N檔，我踩了油門。大哥嚇到後退幾步，我只是將手放在額頭上道歉而已，什麼也沒說。\n　　\n　　順生是不是男人，我知道是個男人。這台車沒有他，也都是他的味道，方向盤的油脂，前擋風玻璃下堆滿了檳榔盒、名片、用過的衛生紙。\n　　「怎麼有人會喜歡這種人？」我心裡想，同時問了怎麼會有人喜歡我這種人，便發動了車，往國道駛去。\n　　他打了電話問我在哪，屏東。他說話的地方很吵，我問他在哪？他說遊藝場。\n　　「你幹嘛躲，叫我自己去也可以，我又沒差。」他回你煩喔。沒什麼話好聊，就把電話擱在那，聽他笑、聽他拍打機台、甚至聽他要吃便當，他說掛了喔，車上沒有聲音也沒差。\n　　雨更大了，雨刷撥到最快，雨水與車窗上的油脂髒污，沒被撥開也不被風吹走，只是抹散，只是比模糊清楚一點。邊開車又撥了一次順生的電話，那頭的聲音像是打在車頂的雨滴，他只說蛤蛤，聽不清楚。我聽到了，換代幣、釣魚機中魚、太鼓達人、又或是順生還在電話另一頭蛤蛤說打來幹嘛，這些聲音一個個掉入耳道，相互推擠，「打來幹嘛啦，好好開車啊。」「妳那邊下大雨喔，很吵耶。」往前推擠，推擠到滿，開始掉落。\n　　\n　　我以為中獎了。停了雨刷，雨滴一點一點，到整片沾滿車窗，積滿了變成了流；似乎就是這樣的順序，但怎麼看清楚雨的滴點成流，就變成整片的模糊了。\n　　\n　　順生沒有掛電話，沒有繼續講下去。後車箱的鱉搔爪著塑膠桶，想上爬。\n　　前方事故，所以回堵。「媽的塞車很煩。」自言自語，眼前的車燈都打成雙黃燈，每台車內都響起答答響聲。鱉還在爬，疊羅漢式地爬，也出現答答響聲。\n　　「如果有幾隻鱉爬到桶子上方，會怎樣呀？」\n　　「蛤？」他沒聽到，我也沒再問第二次。掉下來吧。不會死吧。等到我開車廂時，四隻短短的腳爬到車殼的邊緣，再掉下去一次，沒死就當作中獎了。\n　　「牠們爬不出來。」他說。\n　　\n　　好煩，我打方向燈往外側走（方向燈與警示燈的聲音相同，仍只是警示燈閃），往路肩走，沒車順暢多了。只要繞過車陣，我就會回到原來的道路，我這麼想。穿越、路肩獨行以為都可以獨行到最後，就算真的到最後了，要彎進未受波及的那道，後方的車長按喇叭，車內的人一定在罵髒話吧，而我也長按喇叭。這樣什麼也聽不到了。過了塞車的口，踩到底的油門、車晃動未止又轉向另個車道，前方的車太慢了，緊急煞車，鱉桶往前又往後，鱉撒在後座各處。\n　　\n　　「喂，鱉灑出來了怎辦？」我問。「撿呀。」他說。回來的路途，還很遙遠，總覺得南下過去快得多。與鱉一同灑出來，還有幾片高麗菜葉與一點點的水混尿。悶久的車室，變成鱉生活的濕與土味，一開始以為只是下雨的氣味，更酸一點，更像順生的汗味一些。到家時，順生也在家了，他沒問那些灑出來的鱉怎樣了。\n　　「還順利嗎？」「嗯。」「生氣了喔？」「沒有。沒有啦。」\n　　叫我閉眼，他說有禮物要送我。不是生日禮物。當我睜開眼時，只是十多疊的彩券，一疊四千張，他說。「妳看妳去載貨，我換那麼多給妳。妳明天再去，我再換更多給妳。」他講話的方式就只是當成小孩哄騙我。\n　　「這些都是錢唷。」我裝成高興地說，滑起手機看那些兌換的商品賣得如何。\n　　\n　　「明天送完，想去釣魚嗎？」我問。他只是打開魚鉤的盒子，裡頭沒幾枝魚鉤了。這讓我記住明天送貨的時候，要幫他買這些東西。\n　　\n　　我想，我現在可以把鱉鉤得漂亮完整，仍活在鉤上，像是原生的池中，被吃掉。\n　　「可以是可以，不過，我又釣不到，去幹嘛？」聽到這句話，我明天也不用買這些魚鉤了。魚鉤鉤過鱉時，鱉的模樣很可怕。牠們的嘴總像是微笑，張得很大，本以為是痛才張大。當鉤好時，懸在空中，嘴就閉上了。懸在空中時，一定更痛吧。異物穿入，嘴巴學起人說不要嗎，還是對我們說釣不到啦，穿過我的身體幹嘛。 \n　　順生說他餓，我煎了鱉蛋，煎鍋中卵黃圓圓卵白少少像是鵪鶉蛋，熟了就見不到代表受精的小白點了。順生開了那罐他不會喝的鱉蛋酒，手指沾了些，便歪嘴笑起又打了呵欠，伸長脖子，閉上嘴的那刻跟嚙咬無異。 他吃了所有的鱉蛋，捏我小腹腰邊的肉說：「這是懷孕還是胖？」我想睡了，長長的呵欠，脖子拉長、挺腰、乾嘔，拉起他的手撫起小腹，這裡有小小的鱉。順生笑起嘴更歪了。\n　　\n　　早上還是下雨，暖車時我將雨刷打開，他就坐在副駕駛座叫我帶他去遊藝場，雨刷將窗戶刷得更髒了。我打開後車門，昨晚倒在那的鱉，不知去哪裡了，是不是躲在駕駛座下方呢？只不過，我沒有彎腰下去找，怕被唸或是連彎腰都有點懶。「好好送，開車小心。」順生在遊藝場前對我說，下車後，他拍拍車窗，好久沒看到他那樣的笑。他低下頭將鞋底踩扁的鱉拿給我看。\n　　「逃出來啦，還是要被我抓到。」他將扁掉的鱉丟在路旁。\n　　我駛離，我停在路旁，想說用手一把把抓起在副駕駛座、駕駛座的鱉。幼鱉的頭伸長，咬起我的手，那已不是雉鱉的癢，是能感受到倒鉤的嘴喙，卡進沒什麼肉的指掌，下意識甩開掉在後座的地上，牠又爬進去陰暗的凹槽間，打開手電筒看駕駛座底部的鱉們，牠們依舊想向上攀爬。副駕駛座的鱉們，就待在那，待在可看到被順生踩爆的鱉臟器屎尿之前。\n　　鱉的臟器那麼小，還是仍看到腸胃、血紅的肝。\n　　\n　　被咬的地方好痛好痛。\n　　被鱉咬到，得等雷響；鱉場大哥也曾跟我賭過大鱉一次可以咬斷幾隻筷。好險是小鱉。\n　　「咬住就不放喔。」咬住順生的我說。\n　　「你不用打雷就會放開了啦，等你嘴酸還是等我變小啊？」他搔起我的癢，我反而咬得更緊，他痛了，搥打我的頭。分不清楚輕還是重，齒顎鬆了些，他舒服了些，不再搥打。後來，我頭痛得像是春雷悶雨不下衣服潮濕的體膚。\n　　就算如此，我彈了他變成衰弱的小龜，我看過幾隻，但其實更像鱉一點。咬住不放的是我還是順生，到現在也沒差了。\n　　\n　　那些在駕駛座的鱉，幾隻爬到駕駛座地墊上，我踢了回去；副駕駛座則怎樣也不敢出來，我也不知道怎麼處理這些，邊想邊送出後車廂那些雉鱉，搬給護生園區的，隨口說聲阿彌陀佛，只聽到一聲冷笑與池中的水幫浦打氣的聲音，邊想邊開就變成不想了，問問順生怎麼處理好了。\n　　\n　　「掃出來啊，你怎開到牠倒光光，怎這麼蠢。」他投入代幣到我以前玩的機台，看著上方代幣掉落，推擠，下方代幣掉落。\n　　「你幫我嘛，我還被牠咬耶。」小小的傷口，痂還鮮紅。「這誰沒被咬過，我們玩玩再去處理就好。」我們一籃一籃地玩，換成一綑綑的彩券。「你知道我為什麼不釣魚了嗎？」順生在中大獎時對我說。\n　　「蛤？為什麼？」\n　　「釣魚又不是都能釣到，就像是賭博啊。你看這個，投多少沒中，你就投更多就會中了。」他說。\n　　\n　　我們忘了待在座位底下的鱉。\n　　車上只有我一人，我以為臭是來自於後車廂的活鱉掌上的土。越來越臭，我洗了副駕駛座的踏墊上的屍血內臟，也不敢彎腰下去看那些腐爛生蛆的鱉。「生，你可以來幫我把死掉的鱉用走嗎？這樣臭到我不能去拿貨，求你嘛。」他只發出像是鱉死前的咿呀。帶了好幾層的手套與口罩，他挖呀挖，挖出來的鱉，互相殘食，無頭或無手無腳，幾隻已成乾，「乾了能不能當中藥材。」順生說了個只有自己笑的玩笑。\n　　\n　　將死去的鱉放入垃圾袋。\n　　「今晚別去收鱉了，我們去釣魚吧。」他說。我們去了釣具行，買了鉤。餌料呢？他甩甩那袋死鱉。\n　　\n　　他沒下竿，將那些鱉放在龍膽池邊的土堤，像是活的，一腳一腳地撥入，烏黑色的水池中，那烏黑色的口中。\n　　\n　　「會死，會死。」他走得輕快。「走啦，遊藝場啦，明天再去載鱉。」他說。\n　　\n　　海釣場很安靜，只有水幫浦的聲音與那池龍膽搶食鱉的聲響，其實那兩種聲音沒人能分辨得出來。吞下的，不代表能轉換成什麼。咬得緊緊的，也不代表能傷或是捆住什麼，只是讓人痛到煩了，煩了就會對任何聲響敏感。\n　　「打雷，鱉真的會鬆嘴喔。」我說。\n　　\n　　一人一台推代幣機，我總算覺得這種機台無聊了。我跑去釣魚機，拋出虛擬的假餌，假裝魚在游，往那隻只有順生釣過（最近復活了）的魚去。身體與釣桿晃呀晃，順生走了過來，從後方不斷地頂住我的背，說這樣釣才對。我捏了他，而那尾魚已跑遠。「無聊。」我說。他繼續玩著推代幣機。\n　　\n　　\n　　而我又拋了一次竿，換了虛擬的活餌。當那隻龍膽咬住時，釣竿不斷震動，順生跑過來不斷投幣、不斷地按下電擊鍵，想將魚電暈，電的聲音是雷聲，響呀響，直到魚鬆口，變成炭灰，一旁的人都笑，電太多次了。他投了更多的代幣，釣起那池中所有的魚，投了更多的代幣，讓推幣變成沒東西可以推。他咬住了些什麼，就不會放吧。而我想到明晚又要一個人開車，我查了氣象預報，無風無雨不會有雷。讓鱉鬆口的雷，是悶是響？我好想知道\n　　\n　　"]),T={name:"Reader",computed:{cutContest:function(){var t=_[this.getBlahNum].replace(/<br\/>/g,"").replace(/(.{28})/g,"$1\n"),n=t.replace(/((.*\n){24})/g,""),e=t.match(/((.*\n){24})/g);return e.push(n),e},contentLen:function(){return _.length-1}},data:function(){return{current:1,activeTab:0,getBlahNum:0,activeStep:0}},methods:{}},C=T,w=(e("5cdc"),e("cabc"),Object(m["a"])(C,g,x,!1,null,"b3f804a0",null)),D=w.exports,O={name:"App",components:{"v-input-colorpicker":c.a,"child-task":y,Reader:D},created:function(){var t=new Date,n=t.getTimezoneOffset(),e=window.localStorage;t.setMonth(t.getMonth()),t.setDate(1),this.firstDay=t.getDay(),0===this.firstDay&&(this.firstDay=7),t.setMonth(t.getMonth()+1),t.setDate(0),this.numberOfDays=t.getDate(),e.getItem("tasks")&&(this.allTasks=JSON.parse(e.getItem("tasks"))),e.getItem("labels")&&(this.labels=JSON.parse(e.getItem("labels"))),t=new Date,t=new Date(t.getTime()-60*n*1e3),this.datetime=t.toISOString().split("T")[0]},data:function(){return{datetime:void 0,isAddLabel:!1,isAddTask:!1,isAddSaveTime:!1,isDeleteLabel:!1,file:null,componentKey:0,firstDay:1,numberOfDays:void 0,taskLabel:void 0,taskTitle:"",taskExplanation:"",taskDay:0,labelName:"",labelIcon:"",labelColor:"",allTasks:[],labels:[{name:"寫作",icon:"●",color:"#CD9DBE"},{name:"靈感",icon:"○",color:"#CD9DBE"},{name:"閱讀",icon:"▲",color:"#89D2AF"}],date:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"]}},methods:{compareDay:function(t){return t>0&&t<this.numberOfDays},setRed:function(t){this.$refs.dateTitle[t].style.color="red"===this.$refs.dateTitle[t].style.color?"black":"red"},handleTransTask:function(t){this.$refs.task[t.date].setTask(t),this.$refs.task[t.date].confirmAdd()},addTask:function(){var t={label:this.taskLabel,title:this.taskTitle||"",explanation:this.taskExplanation||"",date:this.taskDay};this.handleTransTask(t),this.isAddTask=!1},addLabel:function(){this.labels.push({name:this.labelName||"",icon:this.labelIcon||"。",color:this.labelColor||"#000000"}),this.isAddLabel=!1},deleteLabel:function(){var t=this;this.labels=this.labels.filter((function(n){var e=n.name;return e!==t.taskLabel.name})),this.isDeleteLabel=!1},saveWork:function(){this.allTasks=this.$refs.task.map((function(t){return t.tasks})),window.localStorage.removeItem("tasks"),window.localStorage.removeItem("labels"),window.localStorage.setItem("tasks",JSON.stringify(this.allTasks)),window.localStorage.setItem("labels",JSON.stringify(this.labels)),this.isAddSaveTime=!1},deleteCookie:function(){window.localStorage.removeItem("tasks"),window.localStorage.removeItem("labels")},compressJson:function(){this.allTasks=this.$refs.task.map((function(t){return t.tasks}));var t=JSON.stringify({tasks:JSON.stringify(this.allTasks),labels:JSON.stringify(this.labels)});this.download(t,"存檔")},download:function(t,n){var e=document.createElement("a");e.download="".concat(n,"_").concat(this.datetime,".json"),e.style.display="none";var a=new Blob([t],{type:"application/json;charset=utf-8"});e.href=URL.createObjectURL(a),document.body.appendChild(e),e.click(),document.body.removeChild(e)},uploadJson:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(this.file);case 3:n=t.sent,n=JSON.parse(n),this.allTasks=JSON.parse(n.tasks),this.labels=JSON.parse(n.labels),this.componentKey+=1,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));function n(){return t.apply(this,arguments)}return n}(),analyzeMonth:function(){var t=this.labels.map((function(t){return{name:t.name,count:0}}));this.$refs.task.forEach((function(n){n.tasks.forEach((function(n){var e=t.find((function(t){return t.name===n.label.name}));e&&e.count++}))})),t=t.map((function(t){return"".concat(t.name,": ").concat(t.count," hours")})).join(",\n"),this.download(t,"分析")}}},S=function(t){return new Promise((function(n,e){var a=new FileReader;a.onload=function(){return n(a.result)},a.onerror=e,a.readAsText(t)}))},L=O,E=(e("034f"),Object(m["a"])(L,i,l,!1,null,null,null)),N=E.exports,I=(e("5abe"),e("2b27")),j=e.n(I);a["a"].use(s["a"]),a["a"].use(j.a),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(N)}}).$mount("#app")},"5cdc":function(t,n,e){"use strict";e("a219")},6042:function(t,n,e){"use strict";e("4275")},"85ec":function(t,n,e){},a219:function(t,n,e){},c22a:function(t,n,e){"use strict";e("ef39")},cabc:function(t,n,e){"use strict";e("f797")},ef39:function(t,n,e){},f797:function(t,n,e){}});
//# sourceMappingURL=app.06856e97.js.map