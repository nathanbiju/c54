(self.webpackJsonp=self.webpackJsonp||[]).push([[10],{1007:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(1),i=n(0),r=n(1008);function a(e){const{ref:t}=Object(r.a)({onResize:e.onResize,refreshMode:"debounce",refreshRate:50});return i.createElement("div",{ref:t,className:Object(o.css)(s.container)},e.children)}const s=o.StyleSheet.create({container:{display:"flex",flex:1,flexDirection:"column",minWidth:0,minHeight:0,position:"relative"}})},1011:function(e,t,n){"use strict";var o,i=n(2),r=n(537),a=n(538),s=n(782);const c=String.raw;var d,l;t.a=c(o||(d=["\n  /* Common overrides */\n  .snack-monaco-editor .monaco-editor .line-numbers {\n    color: currentColor;\n    opacity: 0.5;\n  }\n\n  /* Context menu overrides */\n  .snack-monaco-editor .context-view.monaco-menu-container {\n    font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n  }\n\n  .snack-monaco-editor .monaco-menu .monaco-action-bar {\n    padding: 4px;\n    border-radius: 3px;\n    border-style: solid;\n    box-shadow: "," !important;\n    background-color: "," !important;\n    color: "," !important;\n    border-color: transparent !important;\n  }\n\n  .snack-monaco-editor.theme-light .monaco-menu .monaco-action-bar {\n    border-width: 0;\n  }\n\n  .snack-monaco-editor.theme-dark .monaco-menu .monaco-action-bar {\n    border-width: 1px;\n  }\n\n  .snack-monaco-editor .monaco-menu .monaco-action-bar .action-item .action-label,\n  .snack-monaco-editor .monaco-menu .monaco-action-bar .action-item .action-label:focus {\n    font-size: 14px;\n    line-height: 1;\n    color: inherit;\n    border: 0;\n  }\n\n  .snack-monaco-editor .monaco-menu .monaco-action-bar .action-item .action-menu-item,\n  .snack-monaco-editor .monaco-menu .monaco-action-bar .action-item .action-menu-item:focus {\n    color: inherit !important;\n    text-shadow: none !important;\n  }\n\n  .snack-monaco-editor .monaco-menu .monaco-action-bar .action-item.disabled .action-menu-item {\n    pointer-events: none;\n  }\n\n  .snack-monaco-editor .monaco-menu .monaco-action-bar .action-item.focused:not(.disabled),\n  .snack-monaco-editor .monaco-menu .monaco-action-bar .action-item:hover:not(.disabled) {\n    border-radius: 2px;\n    background-color: "," !important;\n    color: white !important;\n  }\n\n  .snack-monaco-editor .monaco-menu .monaco-action-bar .action-item .action-menu-item {\n    background-color: transparent !important;\n    color: inherit !important;\n  }\n\n  .snack-monaco-editor\n    .monaco-menu\n    .monaco-action-bar\n    .action-item\n    .action-menu-item:focus:not(.disabled)\n    .action-label,\n  .snack-monaco-editor\n    .monaco-menu\n    .monaco-action-bar\n    .action-item:hover:not(.disabled)\n    .action-label {\n    color: inherit;\n  }\n\n  .snack-monaco-editor .monaco-menu .monaco-action-bar .keybinding {\n    color: inherit;\n    font-size: 85%;\n    font-family: 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n    line-height: 18px;\n    opacity: 0.5;\n    margin-left: 8px;\n  }\n\n  .snack-monaco-editor .monaco-menu .monaco-action-bar .keybinding,\n  .snack-monaco-editor .monaco-menu .monaco-action-bar .action-label:not(.separator) {\n    padding: 8px 12px;\n  }\n\n  .snack-monaco-editor .monaco-action-bar .action-label.separator {\n    border-bottom-color: currentColor;\n    opacity: 0.1;\n  }\n\n  /* Light theme overrides */\n  .snack-monaco-editor.theme-light .JsxText {\n    color: ",";\n  }\n\n  .snack-monaco-editor.theme-light .JsxSelfClosingElement,\n  .snack-monaco-editor.theme-light .JsxOpeningElement,\n  .snack-monaco-editor.theme-light .JsxClosingElement,\n  .snack-monaco-editor.theme-light .tagName-of-JsxOpeningElement,\n  .snack-monaco-editor.theme-light .tagName-of-JsxClosingElement,\n  .snack-monaco-editor.theme-light .tagName-of-JsxSelfClosingElement {\n    color: ",";\n  }\n\n  .snack-monaco-editor.theme-light .name-of-JsxAttribute {\n    color: ",";\n  }\n\n  .snack-monaco-editor.theme-light .name-of-PropertyAssignment {\n    color: ",";\n  }\n\n  .snack-monaco-editor.theme-light .name-of-PropertyAccessExpression {\n    color: ",";\n  }\n\n  /* Dark theme overrides */\n  .snack-monaco-editor.theme-dark .JsxText {\n    color: ",";\n  }\n\n  .snack-monaco-editor.theme-dark .JsxSelfClosingElement,\n  .snack-monaco-editor.theme-dark .JsxOpeningElement,\n  .snack-monaco-editor.theme-dark .JsxClosingElement,\n  .snack-monaco-editor.theme-dark .tagName-of-JsxOpeningElement,\n  .snack-monaco-editor.theme-dark .tagName-of-JsxClosingElement,\n  .snack-monaco-editor.theme-dark .tagName-of-JsxSelfClosingElement {\n    color: ",";\n  }\n\n  .snack-monaco-editor.theme-dark .name-of-JsxAttribute {\n    color: ",";\n  }\n\n  .snack-monaco-editor.theme-dark .name-of-PropertyAssignment {\n    color: ",";\n  }\n\n  .snack-monaco-editor.theme-dark .name-of-PropertyAccessExpression {\n    color: ",";\n  }\n\n  .snack-monaco-vim-statusbar {\n    font-family: ",";\n    font-size: 12px;\n    padding: 0 16px;\n    height: 24px;\n    line-height: 24px;\n    border-top: 1px solid ",";\n  }\n\n  .snack-monaco-vim-statusbar input {\n    font-family: ",";\n    height: 100%;\n    outline: 0;\n    border: 0;\n    background: transparent;\n  }\n"],l||(l=d.slice(0)),o=Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(l)}}))),Object(i.c)("popover"),Object(i.a)("content"),Object(i.a)("text"),Object(i.a)("primary"),s.b.colors["editor.foreground"],a.syntax.property,a.syntax.number,a.syntax.string,a.syntax.constant,s.a.colors["editor.foreground"],r.syntax.property,r.syntax.number,r.syntax.string,r.syntax.constant,"var(--font-monospace)",Object(i.a)("border"),"var(--font-monospace)")},1012:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o={...i("react/jsx-runtime","import 'react';"),...i("@shopify/react-native-skia/lib/module/web","declare module \"@shopify/react-native-skia/lib/module/web\" {\n      import React, { Suspense } from 'react';\n      interface CanvasKitInitOptions {\n        /**\n         * This callback will be invoked when the CanvasKit loader needs to fetch a file (e.g.\n         * the blob of WASM code). The correct url prefix should be applied.\n         * @param file - the name of the file that is about to be loaded.\n         */\n        locateFile(file: string): string;\n      }\n      interface WithSkiaProps {\n          /**\n           * The component fetcher, should be a lazy-loaded component.\n           * It should be returned as `{ default: <Component /> }`, use default exports.\n           * E.g. `getComponent={() => import('./components/LazyComponent')}`\n           */\n          getComponent: () => Promise<{ default: React.ComponentType }>;\n          /** The content to render when CanvasKit is still loading (default: `null`) */\n          fallback?: React.ComponentProps<typeof Suspense>['fallback'];\n          /**\n           * The options to use when initializing CavasKit on web.\n           * In Snack, this defaults to the right default options.\n           * You can change these options if you know what you are doing.\n           */\n          opts?: CanvasKitInitOptions;\n      }\n      /**\n       * Wrap a lazy-loaded component inside CanvasKit for web.\n       * In Snack, using this will enable Skia to run natively and on web, without code changes.\n       * The component works by wrapping the lazy-loaded component in Suspense.\n       * \n       * @see https://shopify.github.io/react-native-skia/docs/getting-started/web/\n       */\n      export function WithSkiaWeb({ fallback, getComponent, opts: options }: WithSkiaProps): JSX.Element;\n      /**\n       * Load CanvasKit on web by initializing the WASM file.\n       * In Snack, this defaults to the right default options.\n       * You can change these options if you know what you are doing.\n       * \n       * @see https://shopify.github.io/react-native-skia/docs/getting-started/web/\n       */\n       export function LoadSkiaWeb(options?: CanvasKitInitOptions): Promise<void>;\n    }")};function i(e,t){return{["node_modules/".concat(e,"/package.json")]:JSON.stringify({name:e,version:"1.0.0",types:"./index.d.ts"}),["node_modules/".concat(e,"/index.d.ts")]:t}}},1034:function(e,t,n){"use strict";n.r(t),function(e,o,i,r,a){n(11),n(91);var s=n(1),c=n(31),d=n.n(c),l=n(784),m=n(688),u=n(1003),p=n(0),g=n(73),h=n(600),f=n(695),b=n(708),k=n(182),v=n(1007),y=n(782),x=n(1011),_=n(1012);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r.MonacoEnvironment={getWorker(t,n){switch(n){case"json":return new Worker(e,{});case"typescript":case"javascript":return new Worker(o,{});default:return new Worker(i,{})}}},l.editor.defineTheme("light",y.b),l.editor.defineTheme("dark",y.a),l.languages.typescript.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0});const S={async provideDocumentFormattingEdits(e){const t=await Object(b.a)(e.uri.path,e.getValue());return[{range:e.getFullModelRange(),text:t}]}};l.languages.registerDocumentFormattingEditProvider("javascript",S),l.languages.registerDocumentFormattingEditProvider("typescript",S),l.languages.registerDocumentFormattingEditProvider("markdown",S),l.languages.typescript.typescriptDefaults.setEagerModelSync(!0),l.languages.typescript.javascriptDefaults.setEagerModelSync(!0);const C={allowJs:!0,allowSyntheticDefaultImports:!0,alwaysStrict:!0,esModuleInterop:!0,forceConsistentCasingInFileNames:!0,isolatedModules:!0,jsx:l.languages.typescript.JsxEmit.ReactJSX,module:l.languages.typescript.ModuleKind.ESNext,moduleResolution:l.languages.typescript.ModuleResolutionKind.NodeJs,noEmit:!0,resolveJsonModule:!0,strict:!0,target:l.languages.typescript.ScriptTarget.ESNext,paths:{"*":["*","*.native","*.ios","*.android"]}};l.languages.typescript.typescriptDefaults.setCompilerOptions(C),l.languages.typescript.javascriptDefaults.setCompilerOptions(C);const j=new Map,M=new Map,O=new Map,E=m.b.codeEditorService.get(),F=e=>l.editor.getModels().find(t=>t.uri.path==="/".concat(e));class N extends p.Component{constructor(...e){super(...e),w(this,"state",{dependencies:{},sdkVersion:this.props.sdkVersion,allDependencies:{}}),w(this,"_initializeFile",(e,t)=>{let n=F(e);n&&!n.isDisposed()?n.pushEditOperations([],[{range:n.getFullModelRange(),text:t}]):(n=l.editor.createModel(t,void 0,l.Uri.from({scheme:"file",path:e})),n.updateOptions({tabSize:2,insertSpaces:!0}))}),w(this,"_openFile",(e,t,n)=>{this._initializeFile(e,t);const o=F(e);if(this._editor&&o){this._editor.setModel(o);const t=j.get(e);t&&this._editor.restoreViewState(t),n&&this._editor.focus()}}),w(this,"_handleEditFile",e=>{var t;const n=null===(t=this._editor)||void 0===t?void 0:t.getModel();if(n){var o;const e=n.getValue();e!==(null===(o=this.props.files[this.props.selectedFile])||void 0===o?void 0:o.contents)&&this.props.updateFiles(()=>({[this.props.selectedFile]:{type:"CODE",contents:e}}))}}),w(this,"_handleProvideHover",(e,t)=>{const n=e.getLineContent(t.lineNumber),o=Object(h.a)(this.props.selectedFile);if(!o)return null;const i=l.editor.tokenize(n,o)[0];for(let e=0,o=i.length;e<o;e++){const o=i[e],c=i[e+1],d=c?c.offset:n.length;if(("string.js"===o.type||"string.ts"===o.type)&&t.column>o.offset&&t.column<d){const e=n.slice(o.offset+1,d-1),i=this.state.allDependencies[e];if(i){var r,a,s;const n=this.state.dependencies[e]&&!this.state.dependencies[e].handle,c=null!==(r=null===(a=this.state.dependencies[e])||void 0===a||null===(s=a.handle)||void 0===s?void 0:s.split("@").pop())&&void 0!==r?r:i.version;return{range:new l.Range(t.lineNumber,o.offset+1,t.lineNumber,d),contents:[{value:n?'Resolving "'.concat(e,"@").concat(i.version,'" ...'):'version "'.concat(c,'"')}]}}}}return null}),w(this,"_handleProvideCompletionItems",(e,t,n,o)=>{const i=this._getImportAtPosition(e,t,!0);if(i){const t=e.getValueInRange(i);if(t.startsWith(".")){const e=Object(f.a)(t,this.props.selectedFile);return{suggestions:Object.keys(this.props.files).filter(t=>t!==this.props.selectedFile&&t.startsWith(e)).map(e=>{const t=Object(f.b)(e,this.props.selectedFile);return{label:t,insertText:"".concat(t.replace(/\.(js|tsx?)$/,"")),kind:l.languages.CompletionItemKind.File,range:i}})}}{const e=this.state.allDependencies;return{suggestions:Object.keys(e).map(t=>({label:t,insertText:t,detail:e[t].version,kind:l.languages.CompletionItemKind.Module,range:i}))}}}}),w(this,"_fetchTypings",()=>{const e=this.state.allDependencies;Object.keys(e).forEach(t=>{var n;const{version:o}=e[t];if(!Object(g.isValidSemver)(o))return;const i=/^(?:@([^/?]+)\/)?([^@/?]+)(?:\/([^@]+))?/.exec(t);if(!i)return;const r=(i[1]?"@".concat(i[1],"/"):"")+i[2];M.get(r)!==o&&(M.set(r,o),null===(n=this._typingsWorker)||void 0===n||n.postMessage({name:r,version:o}))})}),w(this,"_addTypings",({typings:e,errorMessage:t})=>{t&&console.warn(t),Object.keys(e).forEach(t=>{const n=O.get(t);n&&(n.js.dispose(),n.ts.dispose());let o=l.Uri.from({scheme:"file",path:t}).toString();t.includes("@")&&(o=o.replace("%40","@"));const i=l.languages.typescript.javascriptDefaults.addExtraLib(e[t],o),r=l.languages.typescript.typescriptDefaults.addExtraLib(e[t],o);O.set(t,{js:i,ts:r})})}),w(this,"_annotationToMarker",e=>{const{severity:t,location:n,action:o,...i}=e;let r;return r=t<0?l.MarkerSeverity.Info:1===t?l.MarkerSeverity.Hint:t>=3?l.MarkerSeverity.Error:l.MarkerSeverity.Warning,{...i,...n?{...n}:{},severity:r}}),w(this,"_updateMarkers",(e,t)=>l.editor.setModelMarkers(this._editor.getModel(),null,e.filter(e=>{var n;return(null===(n=e.location)||void 0===n?void 0:n.fileName)===t}).map(this._annotationToMarker))),w(this,"_toggleMode",e=>{var t;"vim"===e&&this._editor?this._vim=Object(u.initVimMode)(this._editor,this._statusbar.current):null===(t=this._vim)||void 0===t||t.dispose()}),w(this,"_handleResize",(e,t)=>{var n;this._width===e&&this._height===t||(this._width=e,this._height=t,null===(n=this._editor)||void 0===n||n.layout())}),w(this,"_typingsWorker",void 0),w(this,"_disposables",[]),w(this,"_editor",null),w(this,"_vim",void 0),w(this,"_node",p.createRef()),w(this,"_statusbar",p.createRef()),w(this,"_width",void 0),w(this,"_height",void 0)}static removePath(e){j.delete(e);const t=F(e);null==t||t.dispose()}static renamePath(e,t){const n=j.get(e);j.delete(e),j.set(t,n),this.removePath(e)}static getDerivedStateFromProps(e,t){const{dependencies:n,sdkVersion:o}=e;if(o!==t.sdkVersion||n!==t.dependencies){const e={};for(const[t,n]of Object.entries(Object(g.getPreloadedModules)(o,!0)))Object(g.isValidSemver)(n)&&"*"!==n&&(e[t]={version:n});return{sdkVersion:o,dependencies:n,allDependencies:{...e,...n}}}return null}componentDidMount(){var e,t;this._typingsWorker=new Worker(a,{}),null===(e=this._typingsWorker)||void 0===e||e.addEventListener("message",({data:e})=>this._addTypings(e));const{files:n,dependencies:o,selectedFile:i,annotations:r,autoFocus:s,sdkVersion:c,updateFiles:d,onSelectFile:m,...u}=this.props;E.openCodeEditor=async({resource:e,options:t},n)=>(this.props.onSelectFile(e.path.replace(/^\//,"")),n.setSelection(t.selection),n.revealLine(t.selection.startLineNumber),{getControl:()=>n});const p=l.editor.create(this._node.current,u,E);this._editor=p,this._disposables=[p],this._disposables.push(p.onDidChangeModelContent(this._handleEditFile)),this._toggleMode(this.props.mode),this._openFile(i,null===(t=n[i])||void 0===t?void 0:t.contents,s),this._updateMarkers(r,i),this._fetchTypings();for(const e in n){const t=n[e];"CODE"===t.type&&this._initializeFile(e,t.contents)}const g={provideHover:this._handleProvideHover};this._disposables.push(l.languages.registerHoverProvider("javascript",g)),this._disposables.push(l.languages.registerHoverProvider("typescript",g));const h={triggerCharacters:["'",'"',".","/"],provideCompletionItems:this._handleProvideCompletionItems};this._disposables.push(l.languages.registerCompletionItemProvider("javascript",h)),this._disposables.push(l.languages.registerCompletionItemProvider("typescript",h)),this._addTypings({typings:_.a,name:"snack-types",version:"1.0.0"})}componentDidUpdate(e,t){const{selectedFile:n,files:o,mode:i,annotations:r,dependencies:a,sdkVersion:s,autoFocus:c,theme:d,updateFiles:m,onSelectFile:u,...p}=this.props;if(this._editor){var g;this._editor.updateOptions(p);const t=this._editor.getModel(),i=null===(g=o[n])||void 0===g?void 0:g.contents;n!==e.selectedFile?(j.set(e.selectedFile,this._editor.saveViewState()),this._openFile(n,i,c)):t&&i!==t.getValue()&&this._editor.executeEdits(null,[{range:t.getFullModelRange(),text:i}])}if(r===e.annotations&&n===e.selectedFile||this._updateMarkers(r,n),this.state.allDependencies!==t.allDependencies&&this._fetchTypings(),i!==e.mode&&this._toggleMode(i),d!==e.theme&&l.editor.setTheme(d),e.files!==this.props.files)for(const t in this.props.files){var h;const o=this.props.files[t];"CODE"===o.type&&o.contents!==(null===(h=e.files[t])||void 0===h?void 0:h.contents)&&t!==n&&this._initializeFile(t,o.contents)}}componentWillUnmount(){var e;this._disposables.forEach(e=>e.dispose()),null===(e=this._typingsWorker)||void 0===e||e.terminate()}_getImportAtPosition(e,t,n){const o=e.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:t.lineNumber,endColumn:t.column}).match(/(([\s|\n]+(import|from)\s+)|(\brequire\b\s*\())["|'][^'^"]*$/);if(!o)return;const i=e.getValueInRange({startLineNumber:t.lineNumber,startColumn:1,endLineNumber:t.lineNumber,endColumn:t.column+1e3}),r=o[0].replace(/(\s|'|"|from |require\()/g,""),a=i.indexOf(r),s=Math.max(i.indexOf("'",a),0)||Math.max(i.indexOf('"',a),0)||i.length;return{startLineNumber:t.lineNumber,endLineNumber:t.lineNumber,startColumn:a+1,endColumn:n?t.column:s+1}}render(){return p.createElement("div",{className:Object(s.css)(D.container)},p.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:x.a}}),p.createElement(v.a,{onResize:this._handleResize},p.createElement("div",{ref:this._node,className:d()(Object(s.css)(D.editor),"snack-monaco-editor","theme-".concat(this.props.theme))})),"vim"===this.props.mode?p.createElement("div",{className:"snack-monaco-vim-statusbar",ref:this._statusbar}):null)}}w(N,"defaultProps",{lineNumbers:"on",wordWrap:"on",scrollBeyondLastLine:!1,minimap:{enabled:!1},fontFamily:"var(--font-monospace)",fontLigatures:!0}),t.default=Object(k.a)(N);const D=s.StyleSheet.create({container:{display:"flex",flex:1,flexDirection:"column",minWidth:0,minHeight:0},editor:{height:"100%",width:"100%"}})}.call(this,n(933),n(934),n(935),n(15),n(936))},537:function(e,t,n){"use strict";n.r(t),n.d(t,"syntax",(function(){return i})),n.d(t,"ui",(function(){return r}));var o=n(2);const i={text:"#d9d7ce",variable:"#d9d7ce",invalid:"#ff3333",constant:"#ff9d45",comment:"#5c6773",regexp:"#95e6cb",annotation:"#5ccfe6",tag:"#80d4ff",number:"#ff9d45",string:"#bae67e",property:"#5ccfe6",value:"#bae67e",keyword:"#ffae57",operator:"#778899",predefined:"#ff00ff"},r={background:Object(o.a)("background","dark"),text:"#d9d7ce",selection:"#aaaaaa",indent:{active:"#393b41",inactive:"#494b51"}}},538:function(e,t,n){"use strict";n.r(t),n.d(t,"syntax",(function(){return i})),n.d(t,"ui",(function(){return r}));var o=n(2);const i={text:"#5c6773",variable:"#5c6773",invalid:"#ff3333",constant:"#f08c36",comment:"#abb0b6",regexp:"#4dbf99",annotation:"#41a6d9",tag:"#e7c547",number:"#f08c36",string:"#86b300",property:"#41a6d9",value:"#0451a5",keyword:"#f2590c",operator:"#778899",predefined:"#FF00FF"},r={background:Object(o.a)("background","light"),text:"#5c6773",selection:"#cccccc",indent:{active:"#e0e0e0",inactive:"#ecebec"}}},782:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var o=n(537),i=n(538);const r=e=>e.substr(1),a=({ui:e,syntax:t},n)=>({base:n,inherit:!0,rules:[{token:"",foreground:r(t.text)},{token:"invalid",foreground:r(t.invalid)},{token:"emphasis",fontStyle:"italic"},{token:"strong",fontStyle:"bold"},{token:"variable",foreground:r(t.variable)},{token:"variable.predefined",foreground:r(t.variable)},{token:"constant",foreground:r(t.constant)},{token:"comment",foreground:r(t.comment),fontStyle:"italic"},{token:"number",foreground:r(t.number)},{token:"number.hex",foreground:r(t.number)},{token:"regexp",foreground:r(t.regexp)},{token:"annotation",foreground:r(t.annotation)},{token:"type",foreground:r(t.annotation)},{token:"delimiter",foreground:r(t.text)},{token:"delimiter.html",foreground:r(t.text)},{token:"delimiter.xml",foreground:r(t.text)},{token:"tag",foreground:r(t.tag)},{token:"tag.id.jade",foreground:r(t.tag)},{token:"tag.class.jade",foreground:r(t.tag)},{token:"meta.scss",foreground:r(t.tag)},{token:"metatag",foreground:r(t.tag)},{token:"metatag.content.html",foreground:r(t.string)},{token:"metatag.html",foreground:r(t.tag)},{token:"metatag.xml",foreground:r(t.tag)},{token:"metatag.php",fontStyle:"bold"},{token:"key",foreground:r(t.property)},{token:"string.key.json",foreground:r(t.property)},{token:"string.value.json",foreground:r(t.string)},{token:"attribute.name",foreground:r(t.constant)},{token:"attribute.value",foreground:r(t.property)},{token:"attribute.value.number",foreground:r(t.number)},{token:"attribute.value.unit",foreground:r(t.string)},{token:"attribute.value.html",foreground:r(t.string)},{token:"attribute.value.xml",foreground:r(t.string)},{token:"string",foreground:r(t.string)},{token:"string.html",foreground:r(t.string)},{token:"string.sql",foreground:r(t.string)},{token:"string.yaml",foreground:r(t.string)},{token:"keyword",foreground:r(t.keyword)},{token:"keyword.json",foreground:r(t.keyword)},{token:"keyword.flow",foreground:r(t.keyword)},{token:"keyword.flow.scss",foreground:r(t.keyword)},{token:"operator.scss",foreground:r(t.operator)},{token:"operator.sql",foreground:r(t.operator)},{token:"operator.swift",foreground:r(t.operator)},{token:"predefined.sql",foreground:r(t.predefined)}],colors:{"editor.background":e.background,"editor.foreground":e.text,"editorIndentGuide.background":e.indent.inactive,"editorIndentGuide.activeBackground":e.indent.active,"editorOverviewRuler.border":e.background}}),s=a(i,"vs"),c=a(o,"vs-dark")},936:function(e,t,n){e.exports=n.p+"0.ef57b917dd01a95332b0.chunk.cached.worker.js"}}]);