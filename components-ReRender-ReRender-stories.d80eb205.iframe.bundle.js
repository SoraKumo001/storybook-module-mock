"use strict";(self.webpackChunkstorybook_module_mock=self.webpackChunkstorybook_module_mock||[]).push([[103],{"./node_modules/.pnpm/storybook-addon-module-mock@1.3.5_@types+react@19.1.0_react@19.1.0_storybook@8.6.12/node_modules/storybook-addon-module-mock/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AF:()=>_mocks_index_js__WEBPACK_IMPORTED_MODULE_0__.AF,Ek:()=>_mocks_index_js__WEBPACK_IMPORTED_MODULE_0__.Ek,R1:()=>_mocks_index_js__WEBPACK_IMPORTED_MODULE_0__.R1,XX:()=>_mocks_index_js__WEBPACK_IMPORTED_MODULE_0__.XX,po:()=>_mocks_index_js__WEBPACK_IMPORTED_MODULE_0__.po});var _mocks_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/storybook-addon-module-mock@1.3.5_@types+react@19.1.0_react@19.1.0_storybook@8.6.12/node_modules/storybook-addon-module-mock/dist/esm/mocks/index.js")},"./node_modules/.pnpm/storybook-addon-module-mock@1.3.5_@types+react@19.1.0_react@19.1.0_storybook@8.6.12/node_modules/storybook-addon-module-mock/dist/esm/mocks/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AF:()=>getOriginal,Ek:()=>resetMock,R1:()=>createMock,XX:()=>render,po:()=>getMock});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@storybook+test@8.6.12_storybook@8.6.12/node_modules/@storybook/test/dist/index.mjs");const createMock=(module,name="default")=>{const moduleName=module.constructor.prototype.__moduleId__,funcName=name,fn=(hook=>{const fnSrc=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)();_storybook_test__WEBPACK_IMPORTED_MODULE_0__.I5.delete(fnSrc);const func=Object.assign(((...args)=>{const result=fnSrc(...args);return hook(fnSrc),result}),fnSrc);return func.bind(fnSrc),Object.defineProperty(func,"_isMockFunction",{value:!0}),Object.defineProperty(func,"mock",{get:()=>fnSrc.mock}),func})((()=>{fn.__module.event?.()})),descriptor=Object.getOwnPropertyDescriptor(module,name);let original;if(!descriptor?.writable)throw new Error("Failed to write mock");{const f=module[name];module[name]=fn,original=f,fn.mockRestore=()=>{module[name]=f}}return Object.assign(fn,{__module:{module,name},__name:`[${moduleName??"unknown"}]:${String(funcName)}`,__original:original})},getOriginal=mock=>mock.__original,getMock=(parameters,module,name="default")=>{const mock=parameters.moduleMock.mocks?.find((mock=>mock.__module?.module===module&&mock.__module?.name===name));if(!mock)throw new Error("Can't find mock");return mock},resetMock=parameters=>{parameters.moduleMock.mocks?.forEach((mock=>mock.mockReset()))},render=(parameters,args)=>{parameters.moduleMock.render(args)}},"./src/components/ReRender/ReRender.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,ReRenderTest:()=>ReRenderTest,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@storybook+test@8.6.12_storybook@8.6.12/node_modules/@storybook/test/dist/index.mjs"),storybook_addon_module_mock__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/storybook-addon-module-mock@1.3.5_@types+react@19.1.0_react@19.1.0_storybook@8.6.12/node_modules/storybook-addon-module-mock/dist/esm/index.js"),_message__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ReRender/message.ts"),_ReRender__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ReRender/ReRender.tsx");function cov_16zxxh5zjk(){var path="/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/ReRender/ReRender.stories.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"1f3efed9d7ee2f57ff5367cccc5ba900feb4b912"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/ReRender/ReRender.stories.tsx",statementMap:{0:{start:{line:5,column:13},end:{line:10,column:1}},1:{start:{line:12,column:23},end:{line:12,column:25}},2:{start:{line:13,column:28},end:{line:38,column:1}},3:{start:{line:17,column:29},end:{line:17,column:62}},4:{start:{line:18,column:16},end:{line:20,column:18}},5:{start:{line:25,column:23},end:{line:25,column:44}},6:{start:{line:26,column:21},end:{line:26,column:63}},7:{start:{line:27,column:8},end:{line:27,column:38}},8:{start:{line:28,column:8},end:{line:28,column:27}},9:{start:{line:29,column:8},end:{line:31,column:11}},10:{start:{line:30,column:12},end:{line:30,column:66}},11:{start:{line:32,column:8},end:{line:32,column:38}},12:{start:{line:33,column:8},end:{line:33,column:27}},13:{start:{line:34,column:8},end:{line:36,column:11}},14:{start:{line:35,column:12},end:{line:35,column:66}},15:{start:{line:39,column:36},end:{line:39,column:62}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:16,column:18},end:{line:16,column:19}},loc:{start:{line:16,column:22},end:{line:21,column:13}},line:16},1:{name:"(anonymous_1)",decl:{start:{line:24,column:10},end:{line:24,column:11}},loc:{start:{line:24,column:49},end:{line:37,column:5}},line:24},2:{name:"(anonymous_2)",decl:{start:{line:29,column:22},end:{line:29,column:23}},loc:{start:{line:29,column:26},end:{line:31,column:9}},line:29},3:{name:"(anonymous_3)",decl:{start:{line:34,column:22},end:{line:34,column:23}},loc:{start:{line:34,column:26},end:{line:36,column:9}},line:34}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0},f:{0:0,1:0,2:0,3:0},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/ReRender/ReRender.stories.tsx"],sourcesContent:['import { Meta, StoryObj } from "@storybook/react";\nimport { expect, waitFor, within } from "@storybook/test";\nimport { createMock, getMock, render } from "storybook-addon-module-mock";\nimport * as message from "./message";\nimport { ReRender } from "./ReRender";\n\nconst meta: Meta<typeof ReRender> = {\n  tags: ["autodocs"],\n  component: ReRender,\n};\nexport default meta;\n\nexport const Primary: StoryObj<typeof ReRender> = {};\n\nexport const ReRenderTest: StoryObj<typeof ReRender> = {\n  parameters: {\n    moduleMock: {\n      mock: () => {\n        const mock = createMock(message, "getMessage");\n        return [mock];\n      },\n    },\n  },\n  play: async ({ canvasElement, parameters }) => {\n    const canvas = within(canvasElement);\n    const mock = getMock(parameters, message, "getMessage");\n    mock.mockReturnValue("Test1");\n    render(parameters);\n    await waitFor(() => {\n      expect(canvas.getByText("Test1")).toBeInTheDocument();\n    });\n    mock.mockReturnValue("Test2");\n    render(parameters);\n    await waitFor(() => {\n      expect(canvas.getByText("Test2")).toBeInTheDocument();\n    });\n  },\n};\n'],names:["expect","waitFor","within","createMock","getMock","render","message","ReRender","meta","tags","component","Primary","ReRenderTest","parameters","moduleMock","mock","play","canvasElement","canvas","mockReturnValue","getByText","toBeInTheDocument"],mappings:"AACA,SAASA,MAAM,EAAEC,OAAO,EAAEC,MAAM,QAAQ,kBAAkB;AAC1D,SAASC,UAAU,EAAEC,OAAO,EAAEC,MAAM,QAAQ,8BAA8B;AAC1E,YAAYC,aAAa,YAAY;AACrC,SAASC,QAAQ,QAAQ,aAAa;AAEtC,MAAMC,OAA8B;IAClCC,MAAM;QAAC;KAAW;IAClBC,WAAWH;AACb;AACA,eAAeC,KAAK;AAEpB,OAAO,MAAMG,UAAqC,CAAC,EAAE;AAErD,OAAO,MAAMC,eAA0C;IACrDC,YAAY;QACVC,YAAY;YACVC,MAAM;gBACJ,MAAMA,OAAOZ,WAAWG,SAAS;gBACjC,OAAO;oBAACS;iBAAK;YACf;QACF;IACF;IACAC,MAAM,OAAO,EAAEC,aAAa,EAAEJ,UAAU,EAAE;QACxC,MAAMK,SAAShB,OAAOe;QACtB,MAAMF,OAAOX,QAAQS,YAAYP,SAAS;QAC1CS,KAAKI,eAAe,CAAC;QACrBd,OAAOQ;QACP,MAAMZ,QAAQ;YACZD,OAAOkB,OAAOE,SAAS,CAAC,UAAUC,iBAAiB;QACrD;QACAN,KAAKI,eAAe,CAAC;QACrBd,OAAOQ;QACP,MAAMZ,QAAQ;YACZD,OAAOkB,OAAOE,SAAS,CAAC,UAAUC,iBAAiB;QACrD;IACF;AACF,EAAE"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1f3efed9d7ee2f57ff5367cccc5ba900feb4b912"});var actualCoverage=coverage[path];return cov_16zxxh5zjk=function(){return actualCoverage},actualCoverage}cov_16zxxh5zjk();const __WEBPACK_DEFAULT_EXPORT__=(cov_16zxxh5zjk().s[0]++,{tags:["autodocs"],component:_ReRender__WEBPACK_IMPORTED_MODULE_3__.O}),Primary=(cov_16zxxh5zjk().s[1]++,{}),ReRenderTest=(cov_16zxxh5zjk().s[2]++,{parameters:{moduleMock:{mock:()=>{cov_16zxxh5zjk().f[0]++;const mock=(cov_16zxxh5zjk().s[3]++,(0,storybook_addon_module_mock__WEBPACK_IMPORTED_MODULE_1__.R1)(_message__WEBPACK_IMPORTED_MODULE_2__,"getMessage"));return cov_16zxxh5zjk().s[4]++,[mock]}}},play:async({canvasElement,parameters})=>{cov_16zxxh5zjk().f[1]++;const canvas=(cov_16zxxh5zjk().s[5]++,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)),mock=(cov_16zxxh5zjk().s[6]++,(0,storybook_addon_module_mock__WEBPACK_IMPORTED_MODULE_1__.po)(parameters,_message__WEBPACK_IMPORTED_MODULE_2__,"getMessage"));cov_16zxxh5zjk().s[7]++,mock.mockReturnValue("Test1"),cov_16zxxh5zjk().s[8]++,(0,storybook_addon_module_mock__WEBPACK_IMPORTED_MODULE_1__.XX)(parameters),cov_16zxxh5zjk().s[9]++,await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fm)((()=>{cov_16zxxh5zjk().f[2]++,cov_16zxxh5zjk().s[10]++,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(canvas.getByText("Test1")).toBeInTheDocument()})),cov_16zxxh5zjk().s[11]++,mock.mockReturnValue("Test2"),cov_16zxxh5zjk().s[12]++,(0,storybook_addon_module_mock__WEBPACK_IMPORTED_MODULE_1__.XX)(parameters),cov_16zxxh5zjk().s[13]++,await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fm)((()=>{cov_16zxxh5zjk().f[3]++,cov_16zxxh5zjk().s[14]++,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(canvas.getByText("Test2")).toBeInTheDocument()}))}}),__namedExportsOrder=(cov_16zxxh5zjk().s[15]++,["Primary","ReRenderTest"])},"./src/components/ReRender/ReRender.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ReRender});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.86.2/node_modules/next/dist/compiled/react/jsx-runtime.js"),_message__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.86.2/node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/components/ReRender/message.ts"));function cov_7iztlj8tf(){var path="/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/ReRender/ReRender.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"86a1473ba260e9dd4ad3d359dbf7a270812cc038"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/ReRender/ReRender.tsx",statementMap:{0:{start:{line:8,column:28},end:{line:13,column:1}},1:{start:{line:9,column:18},end:{line:9,column:30}},2:{start:{line:10,column:4},end:{line:12,column:7}},3:{start:{line:14,column:0},end:{line:18,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:8,column:28},end:{line:8,column:29}},loc:{start:{line:8,column:34},end:{line:13,column:1}},line:8}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/ReRender/ReRender.tsx"],sourcesContent:['import React, { FC } from "react";\nimport { getMessage } from "./message";\n\ninterface Props {}\n\n/**\n * ReRender\n *\n * @param {Props} { }\n */\nexport const ReRender: FC<Props> = ({}) => {\n  const value = getMessage();\n  return <div>{value}</div>;\n};\n'],names:[],mappings:";AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAS,AAAR,CAAS,AAAR,CAAS,AAAR,CAAS,AAAR,CAAC,AAAQ,CAAP,AAAQ,CAAP,AAAQ,CAAP,AAAQ,CAAA;AACjC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAItC,CAAC,CAAC;;;;CAID,CAAC,EACF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAW,CAAV,AAAW,CAAV,AAAW,CAAC,AAAX,CAAC,AAAW,CAAV,AAAW,CAAV,AAAW,CAAC,AAAX,CAAC,AAAW,CAAV,CAAC;IAChC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAC1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,eAAC,KAAC,CAAC,CAAC,CAAC,CAAC;kBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;AAC3B,CAAC,CAAA"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"86a1473ba260e9dd4ad3d359dbf7a270812cc038"});var actualCoverage=coverage[path];return cov_7iztlj8tf=function(){return actualCoverage},actualCoverage}cov_7iztlj8tf(),cov_7iztlj8tf().s[0]++;const ReRender=({})=>{cov_7iztlj8tf().f[0]++;const value=(cov_7iztlj8tf().s[1]++,(0,_message__WEBPACK_IMPORTED_MODULE_2__.getMessage)());return cov_7iztlj8tf().s[2]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:value})};cov_7iztlj8tf().s[3]++,ReRender.__docgenInfo={description:"ReRender\n\n@param {Props} { }",methods:[],displayName:"ReRender"}},"./src/components/ReRender/message.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cov_i86o8hz2d(){var path="/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/ReRender/message.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"e876d1e614a32ff58615999d81e33fbfa17b8f3b"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/ReRender/message.ts",statementMap:{0:{start:{line:1,column:26},end:{line:3,column:1}},1:{start:{line:2,column:4},end:{line:2,column:20}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:1,column:26},end:{line:1,column:27}},loc:{start:{line:1,column:30},end:{line:3,column:1}},line:1}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/ReRender/message.ts"],sourcesContent:['export const getMessage = () => {\n  return "Before";\n};\n'],names:["getMessage"],mappings:"AAAA,OAAO,MAAMA,aAAa;IACxB,OAAO;AACT,EAAE"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"e876d1e614a32ff58615999d81e33fbfa17b8f3b"});var actualCoverage=coverage[path];return cov_i86o8hz2d=function(){return actualCoverage},actualCoverage}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{getMessage:()=>getMessage}),cov_i86o8hz2d(),cov_i86o8hz2d().s[0]++;const getMessage=()=>(cov_i86o8hz2d().f[0]++,cov_i86o8hz2d().s[1]++,"Before")}}]);