(function(t){function e(e){for(var o,c,a=e[0],u=e[1],s=e[2],h=0,l=[];h<a.length;h++)c=a[h],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&l.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(e);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},i=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0af7":function(t,e,n){"use strict";n("6eac")},"0c74":function(t,e,n){"use strict";n("2a84")},"2a84":function(t,e,n){},"4b34":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("7a23");function r(t,e){const n=Object(o["s"])("router-view");return Object(o["o"])(),Object(o["d"])(o["a"],{name:"fade",mode:"out-in"},{default:Object(o["y"])(()=>[Object(o["f"])(n)]),_:1})}n("bc20");const i={};i.render=r;var c=i,a=n("6c02");const u={class:"background-black"},s={id:"title-div"};function p(t,e,n,r,i,c){const a=Object(o["s"])("navBar"),p=Object(o["s"])("main-title"),h=Object(o["s"])("brainButton");return Object(o["o"])(),Object(o["d"])("div",u,[Object(o["f"])(a),Object(o["f"])("div",s,[Object(o["f"])(p,{text:"BrainFuck"}),Object(o["f"])(p,{id:"bottom-title",text:"Interpreter"}),Object(o["f"])(h,{id:"start-button",text:"Start Coding",onClick:e[1]||(e[1]=e=>t.$router.push("interpreter"))})])])}const h={class:"mainTitleText"};function l(t,e,n,r,i,c){return Object(o["o"])(),Object(o["d"])("h1",h,Object(o["u"])(n.text),1)}var b={props:{text:String}};n("0af7");b.render=l;var d=b;const f={class:"navbar-div"},m={class:"navbar-ul"},O=Object(o["f"])("li",null,[Object(o["f"])("a",{target:"_blank",href:"https://github.com/Liberontissauri/BrainFckInterpreter"},"github")],-1);function v(t,e,n,r,i,c){return Object(o["o"])(),Object(o["d"])("div",f,[Object(o["f"])("ul",m,[Object(o["f"])("li",null,[Object(o["f"])("a",{onClick:e[1]||(e[1]=e=>t.$router.push("/"))},"Home")]),Object(o["f"])("li",null,[Object(o["f"])("a",{onClick:e[2]||(e[2]=e=>t.$router.push("interpreter"))},"Interpreter")]),Object(o["f"])("li",null,[Object(o["f"])("a",{onClick:e[3]||(e[3]=e=>t.$router.push("about"))},"about")]),O])])}var j={};n("bc44");j.render=v;var y=j;const g={class:"brainButton"};function k(t,e,n,r,i,c){return Object(o["o"])(),Object(o["d"])("button",g,Object(o["u"])(n.text),1)}var C={props:{text:String}};n("5a49");C.render=k;var _=C,x={name:"Home",components:{mainTitle:d,navBar:y,brainButton:_}};n("6b1b");x.render=p;var w=x;const I={class:"background-black"},B={id:"code-buttons-div"};function S(t,e,n,r,i,c){const a=Object(o["s"])("navBar"),u=Object(o["s"])("codeInput"),s=Object(o["s"])("codeOutput"),p=Object(o["s"])("brainButton");return Object(o["o"])(),Object(o["d"])("div",I,[Object(o["f"])(a),Object(o["f"])(u,{id:"code-input",onCodeChange:c.changeCode},null,8,["onCodeChange"]),Object(o["f"])(s,{id:"code-input",text:t.output_code},null,8,["text"]),Object(o["f"])("div",B,[Object(o["f"])(p,{text:"Run",onClick:c.executeCode,class:"code-button"},null,8,["onClick"]),Object(o["f"])(p,{text:"Clear Output",onClick:c.clearOutput,class:"code-button"},null,8,["onClick"])])])}const A={class:"code-input-div"},F=Object(o["f"])("h2",{class:"code-input-label"},"Code",-1);function P(t,e,n,r,i,c){return Object(o["o"])(),Object(o["d"])("div",A,[F,Object(o["z"])(Object(o["f"])("textarea",{class:"code-input-text-area","onUpdate:modelValue":e[1]||(e[1]=e=>t.input_content=e),onInput:e[2]||(e[2]=(...t)=>c.changeCode&&c.changeCode(...t)),spellcheck:"false"},null,544),[[o["w"],t.input_content]])])}var L={data:function(){return{input_content:"++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>."}},methods:{changeCode(){this.$emit("code-change",this.input_content)}}};n("c9ae");L.render=P;var M=L;const T={class:"code-output-div"},$=Object(o["f"])("h2",{class:"code-output-label"},"Output",-1);function W(t,e,n,r,i,c){return Object(o["o"])(),Object(o["d"])("div",T,[$,Object(o["f"])("textarea",{class:"code-output-text-area",spellcheck:"false",value:n.text,readonly:""},null,8,["value"])])}var E={props:{text:String}};n("0c74");E.render=W;var R=E,q=n("a8e1"),H=n.n(q),J={data:function(){return{input_code:"++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.",output_code:""}},components:{navBar:y,codeInput:M,codeOutput:R,brainButton:_},methods:{changeCode(t){this.input_code=t},executeCode(){let t=new H.a(this.addOutput);t.loadCode(this.input_code)},addOutput(t){this.output_code=this.output_code+t},clearOutput(){this.output_code=""}}};n("a320");J.render=S;var U=J;const z={class:"background-black"},V=Object(o["e"])('<div class="paragraph-about-div"><h2>What is Brainfuck?</h2><p>BrainF*ck is an Esoteric programming language made by Urban Müller in 1993. It is composed of 8 different instructions and was pruposely made to be hard to read and overcomplicated.</p><h2>What is this website?</h2><p>This website is a brainf*ck interpreter implementation written in typescript. A hello world example is pre-loaded for you to try!</p><h2>Why?</h2><p>For the last couple of months, I have been looking into developing console emulators but, since I do not have the knowledge to build one at the present moment, I decided to learn the principles behind building an interpreter whilst learning typescript.</p><h2>Who am I?</h2><p>On the internet, you will usually find me by the name &quot;Liberontissauri&quot;, I have been studying software development for the last two years. As of lately, I have been working mainly with javascript, html and css, but I used to write the majority of my code in python. Check out my <a class="about-link" target="_blank" href="https://github.com/Liberontissauri/BrainFckInterpreter">github</a> to learn more!</p></div>',1);function D(t,e,n,r,i,c){const a=Object(o["s"])("navBar");return Object(o["o"])(),Object(o["d"])("div",z,[Object(o["f"])(a),V])}var G={components:{navBar:y}};n("b62b");G.render=D;var K=G;const N=[{path:"/",name:"home",component:w},{path:"/interpreter",name:"Interpreter",component:U},{path:"/about",name:"About",component:K}],Q=Object(a["a"])({history:Object(a["b"])(),routes:N});var X=Q,Y=n("5502"),Z=Object(Y["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(c).use(Z).use(X).mount("#app")},"5a49":function(t,e,n){"use strict";n("e961")},"61ac":function(t,e,n){},"6b1b":function(t,e,n){"use strict";n("61ac")},"6eac":function(t,e,n){},a320:function(t,e,n){"use strict";n("f650")},a8e1:function(t,e,n){"use strict";e.__esModule=!0;var o=function(){function t(t){void 0===t&&(t=function(t){return console.log(t)}),this.memory=new Array(3e4);for(var e=0;e<this.memory.length;e++)this.memory[e]=0;this.code="",this.pointer=15e3,this.instruction_pointer=0,this.loopStartIndex=0,this.isLooping=!1,this.bracketCounter=0,this.outputFunction=t}return t.prototype.moveRight=function(){this.pointer+=1},t.prototype.moveLeft=function(){this.pointer-=1},t.prototype.increment=function(){this.memory[this.pointer]+=1},t.prototype.decrement=function(){this.memory[this.pointer]-=1},t.prototype.readChar=function(){var t=String.fromCharCode(this.memory[this.pointer]);this.outputFunction(t)},t.prototype.loopStart=function(){if(this.bracketCounter=0,0==this.memory[this.pointer])while(1)if(this.instruction_pointer+=1,"["==this.code.charAt(this.instruction_pointer)?this.bracketCounter+=1:"]"==this.code.charAt(this.instruction_pointer)&&(this.bracketCounter-=1),"]"==this.code.charAt(this.instruction_pointer)&&-1==this.bracketCounter)break},t.prototype.loopEnd=function(){if(this.bracketCounter=0,0!=this.memory[this.pointer])while(1)if(this.instruction_pointer-=1,"]"==this.code.charAt(this.instruction_pointer)?this.bracketCounter+=1:"["==this.code.charAt(this.instruction_pointer)&&(this.bracketCounter-=1),"["==this.code.charAt(this.instruction_pointer)&&-1==this.bracketCounter)break},t.prototype.executeInstruction=function(){var t=this.code.charAt(this.instruction_pointer);switch(t){case">":this.moveRight();break;case"<":this.moveLeft();break;case"+":this.increment();break;case"-":this.decrement();break;case".":this.readChar();break;case"[":this.loopStart();break;case"]":this.loopEnd();break}this.instruction_pointer+=1,""!=this.code.charAt(this.instruction_pointer)&&this.executeInstruction()},t.prototype.loadCode=function(t){this.code=t,this.instruction_pointer=0,this.executeInstruction()},t}();e["default"]=o},b62b:function(t,e,n){"use strict";n("b802")},b802:function(t,e,n){},bc20:function(t,e,n){"use strict";n("4b34")},bc44:function(t,e,n){"use strict";n("e2fb")},c9ae:function(t,e,n){"use strict";n("f85f")},e2fb:function(t,e,n){},e961:function(t,e,n){},f650:function(t,e,n){},f85f:function(t,e,n){}});
//# sourceMappingURL=app.a3f1bf00.js.map