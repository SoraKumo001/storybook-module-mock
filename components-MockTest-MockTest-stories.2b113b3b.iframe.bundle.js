"use strict";(self.webpackChunkstorybook_module_mock=self.webpackChunkstorybook_module_mock||[]).push([[337],{"./node_modules/.pnpm/storybook-addon-module-mock@1.3.5_@types+react@19.1.0_react@19.1.0_storybook@8.6.12/node_modules/storybook-addon-module-mock/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AF:()=>_mocks_index_js__WEBPACK_IMPORTED_MODULE_0__.AF,Ek:()=>_mocks_index_js__WEBPACK_IMPORTED_MODULE_0__.Ek,R1:()=>_mocks_index_js__WEBPACK_IMPORTED_MODULE_0__.R1,XX:()=>_mocks_index_js__WEBPACK_IMPORTED_MODULE_0__.XX,po:()=>_mocks_index_js__WEBPACK_IMPORTED_MODULE_0__.po});var _mocks_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/storybook-addon-module-mock@1.3.5_@types+react@19.1.0_react@19.1.0_storybook@8.6.12/node_modules/storybook-addon-module-mock/dist/esm/mocks/index.js")},"./node_modules/.pnpm/storybook-addon-module-mock@1.3.5_@types+react@19.1.0_react@19.1.0_storybook@8.6.12/node_modules/storybook-addon-module-mock/dist/esm/mocks/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AF:()=>getOriginal,Ek:()=>resetMock,R1:()=>createMock,XX:()=>render,po:()=>getMock});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@storybook+test@8.6.12_storybook@8.6.12/node_modules/@storybook/test/dist/index.mjs");const createMock=(module,name="default")=>{const moduleName=module.constructor.prototype.__moduleId__,funcName=name,fn=(hook=>{const fnSrc=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)();_storybook_test__WEBPACK_IMPORTED_MODULE_0__.I5.delete(fnSrc);const func=Object.assign(((...args)=>{const result=fnSrc(...args);return hook(fnSrc),result}),fnSrc);return func.bind(fnSrc),Object.defineProperty(func,"_isMockFunction",{value:!0}),Object.defineProperty(func,"mock",{get:()=>fnSrc.mock}),func})((()=>{fn.__module.event?.()})),descriptor=Object.getOwnPropertyDescriptor(module,name);let original;if(!descriptor?.writable)throw new Error("Failed to write mock");{const f=module[name];module[name]=fn,original=f,fn.mockRestore=()=>{module[name]=f}}return Object.assign(fn,{__module:{module,name},__name:`[${moduleName??"unknown"}]:${String(funcName)}`,__original:original})},getOriginal=mock=>mock.__original,getMock=(parameters,module,name="default")=>{const mock=parameters.moduleMock.mocks?.find((mock=>mock.__module?.module===module&&mock.__module?.name===name));if(!mock)throw new Error("Can't find mock");return mock},resetMock=parameters=>{parameters.moduleMock.mocks?.forEach((mock=>mock.mockReset()))},render=(parameters,args)=>{parameters.moduleMock.render(args)}},"./src/components/MockTest/MockTest.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Action:()=>Action,Mock:()=>Mock,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@storybook+test@8.6.12_storybook@8.6.12/node_modules/@storybook/test/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.86.2/node_modules/next/dist/compiled/react/index.js"),storybook_addon_module_mock__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/storybook-addon-module-mock@1.3.5_@types+react@19.1.0_react@19.1.0_storybook@8.6.12/node_modules/storybook-addon-module-mock/dist/esm/index.js"),_MockTest__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/MockTest/MockTest.tsx");function cov_2lx43nb4zl(){var path="/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/MockTest/MockTest.stories.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"f690967bce8df6d987e6e6b6db1e1dba9e0db01c"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/MockTest/MockTest.stories.tsx",statementMap:{0:{start:{line:5,column:13},end:{line:10,column:1}},1:{start:{line:12,column:23},end:{line:17,column:1}},2:{start:{line:14,column:23},end:{line:14,column:44}},3:{start:{line:15,column:8},end:{line:15,column:63}},4:{start:{line:18,column:20},end:{line:41,column:1}},5:{start:{line:22,column:29},end:{line:22,column:57}},6:{start:{line:23,column:16},end:{line:28,column:19}},7:{start:{line:25,column:34},end:{line:25,column:61}},8:{start:{line:27,column:20},end:{line:27,column:64}},9:{start:{line:29,column:16},end:{line:31,column:18}},10:{start:{line:36,column:23},end:{line:36,column:44}},11:{start:{line:37,column:8},end:{line:37,column:62}},12:{start:{line:38,column:21},end:{line:38,column:58}},13:{start:{line:39,column:8},end:{line:39,column:34}},14:{start:{line:42,column:22},end:{line:67,column:1}},15:{start:{line:46,column:32},end:{line:46,column:45}},16:{start:{line:47,column:29},end:{line:47,column:57}},17:{start:{line:48,column:16},end:{line:48,column:49}},18:{start:{line:49,column:16},end:{line:51,column:18}},19:{start:{line:56,column:23},end:{line:56,column:44}},20:{start:{line:57,column:21},end:{line:57,column:58}},21:{start:{line:58,column:8},end:{line:61,column:11}},22:{start:{line:59,column:26},end:{line:59,column:53}},23:{start:{line:60,column:12},end:{line:60,column:57}},24:{start:{line:62,column:8},end:{line:62,column:59}},25:{start:{line:63,column:8},end:{line:65,column:11}},26:{start:{line:64,column:12},end:{line:64,column:67}},27:{start:{line:68,column:36},end:{line:68,column:63}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:13,column:10},end:{line:13,column:11}},loc:{start:{line:13,column:37},end:{line:16,column:5}},line:13},1:{name:"(anonymous_1)",decl:{start:{line:21,column:18},end:{line:21,column:19}},loc:{start:{line:21,column:22},end:{line:32,column:13}},line:21},2:{name:"(anonymous_2)",decl:{start:{line:23,column:40},end:{line:23,column:41}},loc:{start:{line:23,column:52},end:{line:28,column:17}},line:23},3:{name:"(anonymous_3)",decl:{start:{line:35,column:10},end:{line:35,column:11}},loc:{start:{line:35,column:49},end:{line:40,column:5}},line:35},4:{name:"(anonymous_4)",decl:{start:{line:45,column:18},end:{line:45,column:19}},loc:{start:{line:45,column:22},end:{line:52,column:13}},line:45},5:{name:"(anonymous_5)",decl:{start:{line:55,column:10},end:{line:55,column:11}},loc:{start:{line:55,column:49},end:{line:66,column:5}},line:55},6:{name:"(anonymous_6)",decl:{start:{line:58,column:32},end:{line:58,column:33}},loc:{start:{line:58,column:44},end:{line:61,column:9}},line:58},7:{name:"(anonymous_7)",decl:{start:{line:63,column:22},end:{line:63,column:23}},loc:{start:{line:63,column:26},end:{line:65,column:9}},line:63}},branchMap:{0:{loc:{start:{line:27,column:27},end:{line:27,column:63}},type:"cond-expr",locations:[{start:{line:27,column:48},end:{line:27,column:55}},{start:{line:27,column:58},end:{line:27,column:63}}],line:27},1:{loc:{start:{line:60,column:19},end:{line:60,column:56}},type:"cond-expr",locations:[{start:{line:60,column:40},end:{line:60,column:48}},{start:{line:60,column:51},end:{line:60,column:56}}],line:60}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,sources:["/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/MockTest/MockTest.stories.tsx"],sourcesContent:['import { Meta, StoryObj } from "@storybook/react";\nimport { expect, userEvent, waitFor, within } from "@storybook/test";\nimport React, { DependencyList } from "react";\nimport { createMock, getMock, getOriginal } from "storybook-addon-module-mock";\nimport { MockTest } from "./MockTest";\n\nconst meta: Meta<typeof MockTest> = {\n  tags: ["autodocs"],\n  component: MockTest,\n};\nexport default meta;\n\nexport const Primary: StoryObj<typeof MockTest> = {\n  play: async ({ canvasElement }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByText("Before")).toBeInTheDocument();\n  },\n};\n\nexport const Mock: StoryObj<typeof MockTest> = {\n  parameters: {\n    moduleMock: {\n      mock: () => {\n        const mock = createMock(React, "useMemo");\n        mock.mockImplementation((fn: () => unknown, deps: DependencyList) => {\n          // Call the original useMemo\n          const value = getOriginal(mock)(fn, deps);\n          // Change the return value under certain conditions\n          return value === "Before" ? "After" : value;\n        });\n        return [mock];\n      },\n    },\n  },\n  play: async ({ canvasElement, parameters }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByText("After")).toBeInTheDocument();\n    const mock = getMock(parameters, React, "useMemo");\n    expect(mock).toBeCalled();\n  },\n};\n\nexport const Action: StoryObj<typeof MockTest> = {\n  parameters: {\n    moduleMock: {\n      mock: () => {\n        const useMemo = React.useMemo;\n        const mock = createMock(React, "useMemo");\n        mock.mockImplementation(useMemo);\n        return [mock];\n      },\n    },\n  },\n  play: async ({ canvasElement, parameters }) => {\n    const canvas = within(canvasElement);\n    const mock = getMock(parameters, React, "useMemo");\n    mock.mockImplementation((fn: () => unknown, deps: DependencyList) => {\n      const value = getOriginal(mock)(fn, deps);\n      return value === "Before" ? "Action" : value;\n    });\n    userEvent.click(await canvas.findByRole("button"));\n    await waitFor(() => {\n      expect(canvas.getByText("Action")).toBeInTheDocument();\n    });\n  },\n};\n'],names:["expect","userEvent","waitFor","within","React","createMock","getMock","getOriginal","MockTest","meta","tags","component","Primary","play","canvasElement","canvas","getByText","toBeInTheDocument","Mock","parameters","moduleMock","mock","mockImplementation","fn","deps","value","toBeCalled","Action","useMemo","click","findByRole"],mappings:"AACA,SAASA,MAAM,EAAEC,SAAS,EAAEC,OAAO,EAAEC,MAAM,QAAQ,kBAAkB;AACrE,OAAOC,WAA+B,QAAQ;AAC9C,SAASC,UAAU,EAAEC,OAAO,EAAEC,WAAW,QAAQ,8BAA8B;AAC/E,SAASC,QAAQ,QAAQ,aAAa;AAEtC,MAAMC,OAA8B;IAClCC,MAAM;QAAC;KAAW;IAClBC,WAAWH;AACb;AACA,eAAeC,KAAK;AAEpB,OAAO,MAAMG,UAAqC;IAChDC,MAAM,OAAO,EAAEC,aAAa,EAAE;QAC5B,MAAMC,SAASZ,OAAOW;QACtBd,OAAOe,OAAOC,SAAS,CAAC,WAAWC,iBAAiB;IACtD;AACF,EAAE;AAEF,OAAO,MAAMC,OAAkC;IAC7CC,YAAY;QACVC,YAAY;YACVC,MAAM;gBACJ,MAAMA,OAAOhB,WAAWD,OAAO;gBAC/BiB,KAAKC,kBAAkB,CAAC,CAACC,IAAmBC;oBAC1C,4BAA4B;oBAC5B,MAAMC,QAAQlB,YAAYc,MAAME,IAAIC;oBACpC,mDAAmD;oBACnD,OAAOC,UAAU,WAAW,UAAUA;gBACxC;gBACA,OAAO;oBAACJ;iBAAK;YACf;QACF;IACF;IACAR,MAAM,OAAO,EAAEC,aAAa,EAAEK,UAAU,EAAE;QACxC,MAAMJ,SAASZ,OAAOW;QACtBd,OAAOe,OAAOC,SAAS,CAAC,UAAUC,iBAAiB;QACnD,MAAMI,OAAOf,QAAQa,YAAYf,OAAO;QACxCJ,OAAOqB,MAAMK,UAAU;IACzB;AACF,EAAE;AAEF,OAAO,MAAMC,SAAoC;IAC/CR,YAAY;QACVC,YAAY;YACVC,MAAM;gBACJ,MAAMO,UAAUxB,MAAMwB,OAAO;gBAC7B,MAAMP,OAAOhB,WAAWD,OAAO;gBAC/BiB,KAAKC,kBAAkB,CAACM;gBACxB,OAAO;oBAACP;iBAAK;YACf;QACF;IACF;IACAR,MAAM,OAAO,EAAEC,aAAa,EAAEK,UAAU,EAAE;QACxC,MAAMJ,SAASZ,OAAOW;QACtB,MAAMO,OAAOf,QAAQa,YAAYf,OAAO;QACxCiB,KAAKC,kBAAkB,CAAC,CAACC,IAAmBC;YAC1C,MAAMC,QAAQlB,YAAYc,MAAME,IAAIC;YACpC,OAAOC,UAAU,WAAW,WAAWA;QACzC;QACAxB,UAAU4B,KAAK,CAAC,MAAMd,OAAOe,UAAU,CAAC;QACxC,MAAM5B,QAAQ;YACZF,OAAOe,OAAOC,SAAS,CAAC,WAAWC,iBAAiB;QACtD;IACF;AACF,EAAE"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f690967bce8df6d987e6e6b6db1e1dba9e0db01c"});var actualCoverage=coverage[path];return cov_2lx43nb4zl=function(){return actualCoverage},actualCoverage}cov_2lx43nb4zl();const __WEBPACK_DEFAULT_EXPORT__=(cov_2lx43nb4zl().s[0]++,{tags:["autodocs"],component:_MockTest__WEBPACK_IMPORTED_MODULE_3__.D}),Primary=(cov_2lx43nb4zl().s[1]++,{play:async({canvasElement})=>{cov_2lx43nb4zl().f[0]++;const canvas=(cov_2lx43nb4zl().s[2]++,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement));cov_2lx43nb4zl().s[3]++,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(canvas.getByText("Before")).toBeInTheDocument()}}),Mock=(cov_2lx43nb4zl().s[4]++,{parameters:{moduleMock:{mock:()=>{cov_2lx43nb4zl().f[1]++;const mock=(cov_2lx43nb4zl().s[5]++,(0,storybook_addon_module_mock__WEBPACK_IMPORTED_MODULE_2__.R1)(react__WEBPACK_IMPORTED_MODULE_1__,"useMemo"));return cov_2lx43nb4zl().s[6]++,mock.mockImplementation(((fn,deps)=>{cov_2lx43nb4zl().f[2]++;const value=(cov_2lx43nb4zl().s[7]++,(0,storybook_addon_module_mock__WEBPACK_IMPORTED_MODULE_2__.AF)(mock)(fn,deps));return cov_2lx43nb4zl().s[8]++,"Before"===value?(cov_2lx43nb4zl().b[0][0]++,"After"):(cov_2lx43nb4zl().b[0][1]++,value)})),cov_2lx43nb4zl().s[9]++,[mock]}}},play:async({canvasElement,parameters})=>{cov_2lx43nb4zl().f[3]++;const canvas=(cov_2lx43nb4zl().s[10]++,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement));cov_2lx43nb4zl().s[11]++,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(canvas.getByText("After")).toBeInTheDocument();const mock=(cov_2lx43nb4zl().s[12]++,(0,storybook_addon_module_mock__WEBPACK_IMPORTED_MODULE_2__.po)(parameters,react__WEBPACK_IMPORTED_MODULE_1__,"useMemo"));cov_2lx43nb4zl().s[13]++,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(mock).toBeCalled()}}),Action=(cov_2lx43nb4zl().s[14]++,{parameters:{moduleMock:{mock:()=>{cov_2lx43nb4zl().f[4]++;const useMemo=(cov_2lx43nb4zl().s[15]++,react__WEBPACK_IMPORTED_MODULE_1__.useMemo),mock=(cov_2lx43nb4zl().s[16]++,(0,storybook_addon_module_mock__WEBPACK_IMPORTED_MODULE_2__.R1)(react__WEBPACK_IMPORTED_MODULE_1__,"useMemo"));return cov_2lx43nb4zl().s[17]++,mock.mockImplementation(useMemo),cov_2lx43nb4zl().s[18]++,[mock]}}},play:async({canvasElement,parameters})=>{cov_2lx43nb4zl().f[5]++;const canvas=(cov_2lx43nb4zl().s[19]++,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)),mock=(cov_2lx43nb4zl().s[20]++,(0,storybook_addon_module_mock__WEBPACK_IMPORTED_MODULE_2__.po)(parameters,react__WEBPACK_IMPORTED_MODULE_1__,"useMemo"));cov_2lx43nb4zl().s[21]++,mock.mockImplementation(((fn,deps)=>{cov_2lx43nb4zl().f[6]++;const value=(cov_2lx43nb4zl().s[22]++,(0,storybook_addon_module_mock__WEBPACK_IMPORTED_MODULE_2__.AF)(mock)(fn,deps));return cov_2lx43nb4zl().s[23]++,"Before"===value?(cov_2lx43nb4zl().b[1][0]++,"Action"):(cov_2lx43nb4zl().b[1][1]++,value)})),cov_2lx43nb4zl().s[24]++,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(await canvas.findByRole("button")),cov_2lx43nb4zl().s[25]++,await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fm)((()=>{cov_2lx43nb4zl().f[7]++,cov_2lx43nb4zl().s[26]++,(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(canvas.getByText("Action")).toBeInTheDocument()}))}}),__namedExportsOrder=(cov_2lx43nb4zl().s[27]++,["Primary","Mock","Action"])},"./src/components/MockTest/MockTest.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>MockTest});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.86.2/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.2.4_@babel+core@7.26.10_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.86.2/node_modules/next/dist/compiled/react/index.js");function cov_2euk7qu4z9(){var path="/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/MockTest/MockTest.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"6facd5a9814a69a4a3f2df36a4f43b8d9096f4ac"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/MockTest/MockTest.tsx",statementMap:{0:{start:{line:7,column:28},end:{line:18,column:1}},1:{start:{line:8,column:23},end:{line:8,column:35}},2:{start:{line:9,column:18},end:{line:11,column:10}},3:{start:{line:10,column:8},end:{line:10,column:24}},4:{start:{line:12,column:4},end:{line:17,column:7}},5:{start:{line:14,column:25},end:{line:14,column:35}},6:{start:{line:19,column:0},end:{line:23,column:2}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:28},end:{line:7,column:29}},loc:{start:{line:7,column:34},end:{line:18,column:1}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:9,column:26},end:{line:9,column:27}},loc:{start:{line:9,column:30},end:{line:11,column:5}},line:9},2:{name:"(anonymous_2)",decl:{start:{line:14,column:21},end:{line:14,column:22}},loc:{start:{line:14,column:25},end:{line:14,column:35}},line:14}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0,2:0},b:{},inputSourceMap:{version:3,sources:["/home/runner/work/storybook-module-mock/storybook-module-mock/src/components/MockTest/MockTest.tsx"],sourcesContent:['import React, { FC, useMemo, useState } from "react";\ninterface Props {}\n\n/**\n * MockTest\n *\n * @param {Props} { }\n */\nexport const MockTest: FC<Props> = ({}) => {\n  const [, reload] = useState({});\n  const value = useMemo(() => {\n    return "Before";\n  }, []);\n  return (\n    <div>\n      <button onClick={() => reload({})}>{value}</button>\n    </div>\n  );\n};\n'],names:[],mappings:";AAAA,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAI,CAAH,AAAI,CAAH,AAAI,CAAC,AAAJ,CAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAA;AAGpD,CAAC,CAAC;;;;CAID,CAAC,EACF,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAW,CAAV,AAAW,CAAV,AAAW,CAAV,AAAW,CAAV,AAAW,CAAV,AAAW,CAAV,AAAW,CAAV,AAAW,CAAV,AAAW,CAAV,CAAC;IAChC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IAC/B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;QAC1B,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACjB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;IACN,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,cACL,KAAC,CAAC,CAAC,CAAC;gCACF,KAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;YAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAAE,CAAD,AAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;sBAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC;;;AAGxD,CAAC,CAAA"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6facd5a9814a69a4a3f2df36a4f43b8d9096f4ac"});var actualCoverage=coverage[path];return cov_2euk7qu4z9=function(){return actualCoverage},actualCoverage}cov_2euk7qu4z9(),cov_2euk7qu4z9().s[0]++;const MockTest=({})=>{cov_2euk7qu4z9().f[0]++;const[,reload]=(cov_2euk7qu4z9().s[1]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({})),value=(cov_2euk7qu4z9().s[2]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>(cov_2euk7qu4z9().f[1]++,cov_2euk7qu4z9().s[3]++,"Before")),[]));return cov_2euk7qu4z9().s[4]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:()=>(cov_2euk7qu4z9().f[2]++,cov_2euk7qu4z9().s[5]++,reload({})),children:value})})};cov_2euk7qu4z9().s[6]++,MockTest.__docgenInfo={description:"MockTest\n\n@param {Props} { }",methods:[],displayName:"MockTest"}}}]);