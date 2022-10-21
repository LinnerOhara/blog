(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{596:function(s,a,n){"use strict";n.r(a);var e=n(15),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"},[s._v("介绍")]),n("p",[n("a",{attrs:{href:"https://github.com/postcss/postcss/blob/main/docs/README-cn.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostCSS"),n("OutboundLink")],1),s._v("是一个通过JS插件转换样式表的工具，本身并不是一个CSS语言，而是一个平台，提供插件拓展服务。")])]),n("h2",{attrs:{id:"如何使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[s._v("#")]),s._v(" 如何使用")]),s._v(" "),n("p",[s._v("以下只提供 webpack 和 vite 里集成使用。")]),s._v(" "),n("p",[s._v("vite 内部已集成了 postcss，而 webpack 需先配置 postcss-loader。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("rules: [\n  {\n    test: '\\.css',\n    exclude: '/node_modules/',\n    use: [\n      {\n        loader: 'style-loader'\n      },\n      {\n        loader: 'css-loader',\n        options: {\n          importLoaders: 1\n        }\n      },\n      {\n        loader: 'postcss-loader'\n      }\n    ]\n  }\n]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("然后在项目根目录新建 postcss.config.js 文件，在里面配置插件。")]),s._v(" "),n("h2",{attrs:{id:"常用插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用插件"}},[s._v("#")]),s._v(" "),n("a",{attrs:{href:"https://github.com/postcss/postcss/blob/main/docs/README-cn.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("常用插件"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("1、Autoprefix")]),s._v(" "),n("p",[s._v("自动去补全前缀")]),s._v(" "),n("p",[s._v("2、postcss-cssnext")]),s._v(" "),n("p",[s._v("使用下个版本的css语法")]),s._v(" "),n("p",[s._v("3、postcss-pxtorem")]),s._v(" "),n("p",[s._v("把px转换成rem")]),s._v(" "),n("p",[s._v("配置项：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{\n  rootValue: 16,  // html节点设置的font-size大小\n  unitPrecision: 5, // 转rem精准到小数点多少位\n  propList: ['font', 'font-size', 'line-height', 'letter-spacing'], // 指定转换成rem的属性，支持 *\n  selectorBlackList: [],  // str/reg 指定不转换的选择器，str是包含字段即匹配\n  replace: true,\n  mediaQuery: false,  // 媒体查询内的px是否转换\n  minPixelValue: 0  // 小于指定数值的px不转换\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),n("p",[s._v("CSS -> "),n("em",[s._v("Parser")]),s._v(" -> "),n("strong",[s._v("Plugin 1")]),s._v(" -> "),n("strong",[s._v("Plugin 2")]),s._v(" -> "),n("em",[s._v("Stringifier")]),s._v(" -> New CSS")]),s._v(" "),n("p",[s._v("大致步骤：")]),s._v(" "),n("ol",[n("li",[s._v("将CSS解析成抽象语法树(AST树)")]),s._v(" "),n("li",[s._v("将AST树”传递”给任意数量的插件处理")]),s._v(" "),n("li",[s._v("将处理完毕的AST树重新转换成字符串")])]),s._v(" "),n("p",[s._v("在PostCSS中有几个关键的处理机制：")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[s._v("Source string → Tokenizer → Parser → AST → Processor → Stringifier")])]),n("h3",{attrs:{id:"tokenizer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tokenizer"}},[s._v("#")]),s._v(" Tokenizer")]),s._v(" "),n("p",[s._v("将源css字符串进行分词")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".className { color: #FFF; }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("通过Tokenizer后结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[\n  ["word", ".className", 1, 1, 1, 10]\n  ["space", " "]\n  ["{", "{", 1, 12]\n  ["space", " "]\n  ["word", "color", 1, 14, 1, 18]\n  [":", ":", 1, 19]\n  ["space", " "]\n  ["word", "#FFF" , 1, 21, 1, 23]\n  [";", ";", 1, 24]\n  ["space", " "]\n  ["}", "}", 1, 26]\n]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const token = [\n  // token 的类型，如word、space、comment\n  'word',\n  // 匹配到的词名称\n  '.className',\n  // 代表该词开始位置的row以及column，但像 type为`space`的属性没有该值\n  1, 1,\n  // 代表该词结束位置的row以及column，\n  1, 10\n]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"parser"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parser"}},[s._v("#")]),s._v(" Parser")]),s._v(" "),n("p",[s._v("经过Tokenizer之后，需要Parser将结果初始化为AST")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('this.root = {\n  type: \'root\',\n  source: {\n    input: {css: ".className { color: #FFF; }", hasBOM: false, id: "<input css 1>"},\n    start: { line: 1, column: 1 } ,\n    end: { line: 1, column: 27 }\n  },\n  raws:{after: "", semicolon: false}\n  nodes // 子元素\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"processor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#processor"}},[s._v("#")]),s._v(" Processor")]),s._v(" "),n("p",[s._v("经过AST之后，PostCSS提供了大量"),n("a",{attrs:{href:"https://postcss.org/api/#postcss",target:"_blank",rel:"noopener noreferrer"}},[s._v("JS API"),n("OutboundLink")],1),s._v("给插件用")]),s._v(" "),n("h3",{attrs:{id:"stringifier"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stringifier"}},[s._v("#")]),s._v(" Stringifier")]),s._v(" "),n("p",[s._v("插件处理后，比如加浏览器前缀，会被重新Stringifier.stringify为一般CSS")])])}),[],!1,null,null,null);a.default=t.exports}}]);