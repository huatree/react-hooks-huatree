(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{MZF8:function(e,t,n){"use strict";var o=n("ogwx");n.d(t,"a",(function(){return o["b"]}));n("VCU9")},OYlG:function(e,t,n){"use strict";n.r(t);var o=n("mn0l"),r=n("uLvW"),u=n.n(r),s=n("RGYn"),a=n("DBVu"),i=n("GAyR"),c=n("2KoA"),l="import React from 'react';\nimport { useBoolean } from 'hooks-huatree';\n\nexport default () => {\n  const [state, { toggle, setTrue, setFalse }] = useBoolean(true);\n\n  return (\n    <div>\n      <p>Effects\uff1a{JSON.stringify(state)}</p>\n      <p>\n        <button type=\"button\" onClick={toggle}>\n          Toggle\n        </button>\n        <button type=\"button\" onClick={setFalse} style={{ margin: '0 16px' }}>\n          Set false\n        </button>\n        <button type=\"button\" onClick={setTrue}>\n          Set true\n        </button>\n      </p>\n    </div>\n  );\n};",p="import { useDebounce } from 'hooks-huatree';\nimport React, { useState } from 'react';\n\nexport default () => {\n  const [value, setValue] = useState<string>();\n  const debouncedValue = useDebounce(value, { wait: 500 });\n\n  return (\n    <div>\n      <input\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n        placeholder=\"Typed value\"\n        style={{ width: 300 }}\n      />\n      <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>\n    </div>\n  );\n};",d="import { useDebounceFn } from 'hooks-huatree';\nimport React, { useState } from 'react';\n\nexport default () => {\n  const [value, setValue] = useState(0);\n  const { run } = useDebounceFn(\n    () => {\n      setValue(value + 1);\n    },\n    {\n      wait: 500,\n    },\n  );\n\n  return (\n    <div>\n      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>\n      <button type=\"button\" onClick={run}>\n        Click fast!\n      </button>\n    </div>\n  );\n};",m="import React, { useState, useEffect } from 'react';\nimport { useLatest } from 'hooks-huatree';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n\n  const latestCountRef = useLatest(count);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setCount(latestCountRef.current + 1);\n    }, 1000);\n    return () => clearInterval(interval);\n  }, []);\n\n  return (\n    <>\n      <p>count: {count}</p>\n    </>\n  );\n};",b="import React from 'react';\nimport { useToggle } from 'hooks-huatree';\n\nexport default () => {\n  const [state, { toggle, setLeft, setRight }] = useToggle();\n\n  return (\n    <div>\n      <p>Effects\uff1a{`${state}`}</p>\n      <p>\n        <button type=\"button\" onClick={toggle}>\n          Toggle\n        </button>\n        <button type=\"button\" onClick={setLeft} style={{ margin: '0 8px' }}>\n          Toggle False\n        </button>\n        <button type=\"button\" onClick={setRight}>\n          Toggle True\n        </button>\n      </p>\n    </div>\n  );\n};",f="import React from 'react';\nimport { useToggle } from 'hooksHuatree';\n\nexport default () => {\n  const [state, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'World');\n\n  return (\n    <div>\n      <p>Effects\uff1a{state}</p>\n      <p>\n        <button type=\"button\" onClick={toggle}>\n          Toggle\n        </button>\n        <button type=\"button\" onClick={() => set('Hello')} style={{ margin: '0 8px' }}>\n          Set Hello\n        </button>\n        <button type=\"button\" onClick={() => set('World')}>\n          Set World\n        </button>\n        <button type=\"button\" onClick={setLeft} style={{ margin: '0 8px' }}>\n          Set Left\n        </button>\n        <button type=\"button\" onClick={setRight}>\n          Set Right\n        </button>\n      </p>\n    </div>\n  );\n};",h="import { useBoolean, useUnmount } from 'hooks-huatree';\nimport { message } from 'antd';\nimport React from 'react';\n\nconst MyComponent = () => {\n  useUnmount(() => {\n    message.info('unmount');\n  });\n\n  return <p>Hello World!</p>;\n};\n\nexport default () => {\n  const [state, { toggle }] = useBoolean(true);\n\n  return (\n    <>\n      <button type=\"button\" onClick={toggle}>\n        {state ? 'unmount' : 'mount'}\n      </button>\n      {state && <MyComponent />}\n    </>\n  );\n};",g={"useboolean-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(14),n.e(3)]).then(n.bind(null,"yoie"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l}},dependencies:{react:{version:"18.3.1"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u5207\u6362 boolean\uff0c\u53ef\u4ee5\u63a5\u6536\u9ed8\u8ba4\u503c\u3002</p></div>',identifier:"useboolean-demo1"}},"usedebounce-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(14),n.e(3)]).then(n.bind(null,"eWij"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"18.3.1"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>DebouncedValue \u53ea\u4f1a\u5728\u8f93\u5165\u7ed3\u675f 500ms \u540e\u53d8\u5316\u3002</p></div>',identifier:"usedebounce-demo1"}},"usedebouncefn-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(14),n.e(3)]).then(n.bind(null,"tHpm"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d}},dependencies:{react:{version:"18.3.1"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u9891\u7e41\u8c03\u7528 run\uff0c\u4f46\u53ea\u4f1a\u5728\u6240\u6709\u70b9\u51fb\u5b8c\u6210 500ms \u540e\u6267\u884c\u4e00\u6b21\u76f8\u5173\u51fd\u6570</p></div>',identifier:"usedebouncefn-demo1"}},"uselatest-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(14),n.e(3)]).then(n.bind(null,"OCTU"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m}},dependencies:{react:{version:"18.3.1"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>useLatest \u8fd4\u56de\u7684\u6c38\u8fdc\u662f\u6700\u65b0\u503c</p></div>',identifier:"uselatest-demo1"}},"usetoggle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(14),n.e(3)]).then(n.bind(null,"82LI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b}},dependencies:{react:{version:"18.3.1"}},title:"\u57fa\u7840\u7528\u6cd5",description:'<div class="markdown"><p>\u9ed8\u8ba4\u4e3a boolean \u5207\u6362\uff0c\u57fa\u7840\u7528\u6cd5\u4e0e useBoolean \u4e00\u81f4\u3002</p></div>',identifier:"usetoggle-demo1"}},"usetoggle-demo2":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(14),n.e(3)]).then(n.bind(null,"Dr+N"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f}},dependencies:{react:{version:"18.3.1"}},title:"\u5728\u4efb\u610f\u4e24\u4e2a\u503c\u4e4b\u95f4\u5207\u6362",description:'<div class="markdown"><p>\u63a5\u53d7\u4e24\u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u5728\u5b83\u4eec\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\u3002</p></div>',identifier:"usetoggle-demo2"}},"useunmount-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(14),n.e(3)]).then(n.bind(null,"y7Gi"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:h}},dependencies:{antd:{version:"5.21.3"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u5728\u7ec4\u4ef6\u5378\u8f7d\u65f6\uff0c\u6267\u884c\u51fd\u6570\u3002</p></div>',identifier:"useunmount-demo1"}}},v=n("Zs1V"),k=n("SlDG"),w=n.n(k);t["default"]=e=>u.a.createElement(w.a,Object(o["a"])({},e,{config:s,demos:g,apis:v}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}],"*":[{"path":"/","title":"\u2728 \u7279\u6027","meta":{}}],"/hooks":[{"title":"\u751f\u547d\u5468\u671f","children":[{"path":"/hooks/use-unmount","title":"useUnmount"}]},{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-boolean/inde","title":"useBoolean"},{"path":"/hooks/use-debounce","title":"useDebounce"},{"path":"/hooks/use-toggle","title":"useToggle"}]},{"title":"Effect","children":[{"path":"/hooks/use-debounce-fn","title":"useDebounceFn"}]},{"title":"\u8fdb\u9636","children":[{"path":"/hooks/use-latest","title":"useLatest"}]}],"/":[{"title":"\u9996\u9875","path":"index"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"},{"title":"GitHub","path":"https://github.com/huatree/react-hooks-huatree"}]},"title":"\u524d\u7aef\u5b88\u591c\u4eba","logo":"/react-hooks-huatree/logo.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);