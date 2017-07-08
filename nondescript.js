'use strict';Object.defineProperty(exports,'__esModule',{value:!0});function _interopDefault(a){return a&&'object'==typeof a&&'default'in a?a['default']:a}var globby=_interopDefault(require('globby')),del=_interopDefault(require('del')),F=_interopDefault(require('fluture')),L=_interopDefault(require('partial.lenses')),readPkgUp=_interopDefault(require('read-pkg-up')),katsuCurry=require('katsu-curry'),$$1=_interopDefault(require('inquirer')),chalk=_interopDefault(require('chalk')),entrust=require('entrust');function unwrapExports(a){return a&&a.__esModule?a['default']:a}function createCommonjsModule(a,b){return b={exports:{}},a(b,b.exports),b.exports}var katsuCurry$2=createCommonjsModule(function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c='\uD83C\uDF5B',d=function(c){return function(a){return Symbol.for(a)===Symbol.for(c)}},g=function(d){return function(a){return a.reduce(function(a,b){return d(b)?a:a+1},0)}},h=function(c){return function(a){return a.some(c)}},i=function(c){return function(a,e){return a.map(function(a){return c(a)&&e[0]?e.shift():a}).concat(e)}},e=function(j){return function(k){function l(){for(var e=arguments,f=[],a=arguments.length;a--;)f[a]=e[a];var g=d(f)?b(f):f.length;return g>=k.length?k.apply(this,f):function(){for(var a=arguments,e=[],b=arguments.length;b--;)e[b]=a[b];return l.apply(this,c(f,e))}}var b=g(j),c=i(j),d=h(j);return l.toString=function(){return k.name?k.name:k.toString()},l}},f=function(b){return e(b,e)},j=f(d(c)),k=Object.assign,l=Object.keys,m=l,n=j(function(c,a){return a[c]}),o=j(function(d,a,b){return b[d](a)}),p=o('filter'),q=j(function(b,c){return k({},b,c)}),r=function(){for(var c=arguments,d=[],a=arguments.length;a--;)d[a]=c[a];return function(a){return d.reduce(function(c,a){return a(c)},a)}},s=n('length'),t=r(m,s),u=function(b){return s(b)||t(b)},v=j(function(c,a){return p(function(a){return c.includes(a)},m(a))}),w=j(function(c,a){return r(v(c),u)(a)}),x=j(function(f,a,b){return function c(d){return f(a,d)?b(d):r(q(d),c)}}),y=x(function(c,a){return u(a)>=c}),z=x(function(c,a){return w(c,a)>=u(c)});b.PLACEHOLDER=c,b.symbolTest=d,b.curryPowder=e,b.curryify=f,b.curry=j,b.curryObjectN=y,b.curryObjectK=z}),katsuCurry$3=unwrapExports(katsuCurry$2),katsuCurry_1=katsuCurry$2.PLACEHOLDER,katsuCurry_2=katsuCurry$2.symbolTest,katsuCurry_3=katsuCurry$2.curryPowder,katsuCurry_4=katsuCurry$2.curryify,katsuCurry_5=katsuCurry$2.curry,katsuCurry_6=katsuCurry$2.curryObjectN,katsuCurry_7=katsuCurry$2.curryObjectK,katsuCurry$4=Object.freeze({default:katsuCurry$3,__moduleExports:katsuCurry$2,PLACEHOLDER:katsuCurry_1,symbolTest:katsuCurry_2,curryPowder:katsuCurry_3,curryify:katsuCurry_4,curry:katsuCurry_5,curryObjectN:katsuCurry_6,curryObjectK:katsuCurry_7}),katsuCurry$1=katsuCurry$4&&katsuCurry$3||katsuCurry$4,xtrace_1$1=createCommonjsModule(function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c=katsuCurry$1.PLACEHOLDER,d=katsuCurry$1.PLACEHOLDER,e=katsuCurry$1.curry(function(e,a,b,c){return e(a,b(c)),c}),f=e(katsuCurry$1.PLACEHOLDER,katsuCurry$1.PLACEHOLDER,function(b){return b},katsuCurry$1.PLACEHOLDER),g=f(function(){});b.PLACEHOLDER=c,b.$=d,b.sideEffect=e,b.xtrace=f,b.trace=g}),xtrace_5=xtrace_1$1.xtrace,xtrace_6=xtrace_1$1.trace,_isPlaceholder=function(b){return null!=b&&'object'==typeof b&&!0===b['@@functional/placeholder']},_curry1=function(b){return function c(d){return 0===arguments.length||_isPlaceholder(d)?c:b.apply(this,arguments)}},_curry2=function(c){return function d(e,a){switch(arguments.length){case 0:return d;case 1:return _isPlaceholder(e)?d:_curry1(function(a){return c(e,a)});default:return _isPlaceholder(e)&&_isPlaceholder(a)?d:_isPlaceholder(e)?_curry1(function(b){return c(b,a)}):_isPlaceholder(a)?_curry1(function(a){return c(e,a)}):c(e,a);}}},_isArray=Array.isArray||function(a){return null!=a&&0<=a.length&&'[object Array]'===Object.prototype.toString.call(a)},_isTransformer=function(a){return'function'==typeof a['@@transducer/step']},_dispatchable=function(a,b,c){return function(){if(0===arguments.length)return c();var d=Array.prototype.slice.call(arguments,0),e=d.pop();if(!_isArray(e)){for(var f=0;f<a.length;){if('function'==typeof e[a[f]])return e[a[f]].apply(e,d);f+=1}if(_isTransformer(e)){var g=b.apply(null,d);return g(e)}}return c.apply(this,arguments)}},_map=function(a,b){for(var c=0,d=b.length,e=Array(d);c<d;)e[c]=a(b[c]),c+=1;return e},_isString=function(a){return'[object String]'===Object.prototype.toString.call(a)},_isArrayLike=_curry1(function(a){return!!_isArray(a)||!!a&&!('object'!=typeof a)&&!_isString(a)&&(1===a.nodeType?!!a.length:!(0!==a.length)||!!(0<a.length)&&a.hasOwnProperty(0)&&a.hasOwnProperty(a.length-1))}),_xwrap=function(){function a(a){this.f=a}return a.prototype['@@transducer/init']=function(){throw new Error('init not implemented on XWrap')},a.prototype['@@transducer/result']=function(a){return a},a.prototype['@@transducer/step']=function(a,b){return this.f(a,b)},function(b){return new a(b)}}(),_arity=function(a,b){switch(a){case 0:return function(){return b.apply(this,arguments)};case 1:return function(){return b.apply(this,arguments)};case 2:return function(){return b.apply(this,arguments)};case 3:return function(){return b.apply(this,arguments)};case 4:return function(){return b.apply(this,arguments)};case 5:return function(){return b.apply(this,arguments)};case 6:return function(){return b.apply(this,arguments)};case 7:return function(){return b.apply(this,arguments)};case 8:return function(){return b.apply(this,arguments)};case 9:return function(){return b.apply(this,arguments)};case 10:return function(){return b.apply(this,arguments)};default:throw new Error('First argument to _arity must be a non-negative integer no greater than ten');}},bind=_curry2(function(a,b){return _arity(a.length,function(){return a.apply(b,arguments)})}),_reduce=function(){function a(a,b,c){for(var d=0,e=c.length;d<e;){if(b=a['@@transducer/step'](b,c[d]),b&&b['@@transducer/reduced']){b=b['@@transducer/value'];break}d+=1}return a['@@transducer/result'](b)}function b(a,b,c){for(var d=c.next();!d.done;){if(b=a['@@transducer/step'](b,d.value),b&&b['@@transducer/reduced']){b=b['@@transducer/value'];break}d=c.next()}return a['@@transducer/result'](b)}function c(a,b,c,d){return a['@@transducer/result'](c[d](bind(a['@@transducer/step'],a),b))}var d='undefined'==typeof Symbol?'@@iterator':Symbol.iterator;return function(e,f,g){if('function'==typeof e&&(e=_xwrap(e)),_isArrayLike(g))return a(e,f,g);if('function'==typeof g['fantasy-land/reduce'])return c(e,f,g,'fantasy-land/reduce');if(null!=g[d])return b(e,f,g[d]());if('function'==typeof g.next)return b(e,f,g);if('function'==typeof g.reduce)return c(e,f,g,'reduce');throw new TypeError('reduce: list must be array or iterable')}}(),_xfBase={init:function(){return this.xf['@@transducer/init']()},result:function(a){return this.xf['@@transducer/result'](a)}},_xmap=function(){function a(a,b){this.xf=b,this.f=a}return a.prototype['@@transducer/init']=_xfBase.init,a.prototype['@@transducer/result']=_xfBase.result,a.prototype['@@transducer/step']=function(a,b){return this.xf['@@transducer/step'](a,this.f(b))},_curry2(function(b,c){return new a(b,c)})}(),_curryN=function a(b,c,d){return function(){for(var e=arguments,f=[],g=0,h=b,i=0;i<c.length||g<arguments.length;){var j;i<c.length&&(!_isPlaceholder(c[i])||g>=e.length)?j=c[i]:(j=e[g],g+=1),f[i]=j,_isPlaceholder(j)||(h-=1),i+=1}return 0>=h?d.apply(this,f):_arity(h,a(b,f,d))}},curryN=_curry2(function(a,b){return 1===a?_curry1(b):_arity(a,_curryN(a,[],b))}),_has=function(a,b){return Object.prototype.hasOwnProperty.call(b,a)},_isArguments=function(){var a=Object.prototype.toString;return'[object Arguments]'===a.call(arguments)?function(b){return'[object Arguments]'===a.call(b)}:function(a){return _has('callee',a)}}(),keys=function(){var a=!{toString:null}.propertyIsEnumerable('toString'),b=['constructor','valueOf','isPrototypeOf','toString','propertyIsEnumerable','hasOwnProperty','toLocaleString'],c=function(){'use strict';return arguments.propertyIsEnumerable('length')}(),d=function(a,b){for(var c=0;c<a.length;){if(a[c]===b)return!0;c+=1}return!1};return'function'!=typeof Object.keys||c?_curry1(function(e){if(Object(e)!==e)return[];var f,g,h=[],i=c&&_isArguments(e);for(f in e)_has(f,e)&&(!i||'length'!==f)&&(h[h.length]=f);if(a)for(g=b.length-1;0<=g;)f=b[g],_has(f,e)&&!d(h,f)&&(h[h.length]=f),g-=1;return h}):_curry1(function(a){return Object(a)===a?Object.keys(a):[]})}(),map=_curry2(_dispatchable(['fantasy-land/map','map'],_xmap,function(a,b){switch(Object.prototype.toString.call(b)){case'[object Function]':return curryN(b.length,function(){return a.call(this,b.apply(this,arguments))});case'[object Object]':return _reduce(function(c,d){return c[d]=a(b[d]),c},{},keys(b));default:return _map(a,b);}})),_curry3=function(d){return function e(f,a,b){switch(arguments.length){case 0:return e;case 1:return _isPlaceholder(f)?e:_curry2(function(a,b){return d(f,a,b)});case 2:return _isPlaceholder(f)&&_isPlaceholder(a)?e:_isPlaceholder(f)?_curry2(function(b,c){return d(b,a,c)}):_isPlaceholder(a)?_curry2(function(a,b){return d(f,a,b)}):_curry1(function(b){return d(f,a,b)});default:return _isPlaceholder(f)&&_isPlaceholder(a)&&_isPlaceholder(b)?e:_isPlaceholder(f)&&_isPlaceholder(a)?_curry2(function(a,c){return d(a,c,b)}):_isPlaceholder(f)&&_isPlaceholder(b)?_curry2(function(b,c){return d(b,a,c)}):_isPlaceholder(a)&&_isPlaceholder(b)?_curry2(function(a,b){return d(f,a,b)}):_isPlaceholder(f)?_curry1(function(c){return d(c,a,b)}):_isPlaceholder(a)?_curry1(function(a){return d(f,a,b)}):_isPlaceholder(b)?_curry1(function(b){return d(f,a,b)}):d(f,a,b);}}},reduce=_curry3(_reduce),always$1=_curry1(function(a){return function(){return a}}),_identity=function(a){return a},identity=_curry1(_identity),_arrayFromIterator=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c},_functionName=function(a){var b=(a+'').match(/^function (\w*)/);return null==b?'':b[1]},identical=_curry2(function(c,a){return c===a?0!==c||1/c==1/a:c!==c&&a!==a}),type=_curry1(function(a){return null===a?'Null':a===void 0?'Undefined':Object.prototype.toString.call(a).slice(8,-1)}),_equals=function c(d,e,f,g){if(identical(d,e))return!0;if(type(d)!==type(e))return!1;if(null==d||null==e)return!1;if('function'==typeof d['fantasy-land/equals']||'function'==typeof e['fantasy-land/equals'])return'function'==typeof d['fantasy-land/equals']&&d['fantasy-land/equals'](e)&&'function'==typeof e['fantasy-land/equals']&&e['fantasy-land/equals'](d);if('function'==typeof d.equals||'function'==typeof e.equals)return'function'==typeof d.equals&&d.equals(e)&&'function'==typeof e.equals&&e.equals(d);switch(type(d)){case'Arguments':case'Array':case'Object':if('function'==typeof d.constructor&&'Promise'===_functionName(d.constructor))return d===e;break;case'Boolean':case'Number':case'String':if(!(typeof d==typeof e&&identical(d.valueOf(),e.valueOf())))return!1;break;case'Date':if(!identical(d.valueOf(),e.valueOf()))return!1;break;case'Error':return d.name===e.name&&d.message===e.message;case'RegExp':if(d.source!==e.source||d.global!==e.global||d.ignoreCase!==e.ignoreCase||d.multiline!==e.multiline||d.sticky!==e.sticky||d.unicode!==e.unicode)return!1;break;case'Map':case'Set':if(!c(_arrayFromIterator(d.entries()),_arrayFromIterator(e.entries()),f,g))return!1;break;case'Int8Array':case'Uint8Array':case'Uint8ClampedArray':case'Int16Array':case'Uint16Array':case'Int32Array':case'Uint32Array':case'Float32Array':case'Float64Array':break;case'ArrayBuffer':break;default:return!1;}var h=keys(d);if(h.length!==keys(e).length)return!1;for(var i=f.length-1;0<=i;){if(f[i]===d)return g[i]===e;i-=1}for(f.push(d),g.push(e),i=h.length-1;0<=i;){var j=h[i];if(!(_has(j,e)&&c(e[j],d[j],f,g)))return!1;i-=1}return f.pop(),g.pop(),!0},equals=_curry2(function(c,a){return _equals(c,a,[],[])}),_indexOf=function(b,c,d){var e,f;if('function'==typeof b.indexOf)switch(typeof c){case'number':if(0===c){for(e=1/c;d<b.length;){if(f=b[d],0===f&&1/f===e)return d;d+=1}return-1}if(c!==c){for(;d<b.length;){if(f=b[d],'number'==typeof f&&f!==f)return d;d+=1}return-1}return b.indexOf(c,d);case'string':case'boolean':case'function':case'undefined':return b.indexOf(c,d);case'object':if(null===c)return b.indexOf(c,d);}for(;d<b.length;){if(equals(b[d],c))return d;d+=1}return-1},_contains=function(b,a){return 0<=_indexOf(a,b,0)},_Set=function(){function a(){this._nativeSet='function'==typeof Set?new Set:null,this._items={}}function b(a,b,c){var d,e,f=typeof a;switch(f){case'string':case'number':return 0===a&&1/a==-Infinity?!!c._items['-0']||(b&&(c._items['-0']=!0),!1):null===c._nativeSet?f in c._items?!!(a in c._items[f])||(b&&(c._items[f][a]=!0),!1):(b&&(c._items[f]={},c._items[f][a]=!0),!1):b?(d=c._nativeSet.size,c._nativeSet.add(a),e=c._nativeSet.size,e===d):c._nativeSet.has(a);case'boolean':if(f in c._items){var g=a?1:0;return!!c._items[f][g]||(b&&(c._items[f][g]=!0),!1)}return b&&(c._items[f]=a?[!1,!0]:[!0,!1]),!1;case'function':return null===c._nativeSet?f in c._items?!!_contains(a,c._items[f])||(b&&c._items[f].push(a),!1):(b&&(c._items[f]=[a]),!1):b?(d=c._nativeSet.size,c._nativeSet.add(a),e=c._nativeSet.size,e===d):c._nativeSet.has(a);case'undefined':return!!c._items[f]||(b&&(c._items[f]=!0),!1);case'object':if(null===a)return!!c._items['null']||(b&&(c._items['null']=!0),!1);default:return f=Object.prototype.toString.call(a),f in c._items?!!_contains(a,c._items[f])||(b&&c._items[f].push(a),!1):(b&&(c._items[f]=[a]),!1);}}return a.prototype.add=function(a){return!b(a,!0,this)},a.prototype.has=function(a){return b(a,!1,this)},a}(),uniqBy=_curry2(function(a,b){for(var c,d,e=new _Set,f=[],g=0;g<b.length;)d=b[g],c=a(d),e.add(c)&&f.push(d),g+=1;return f}),uniq=uniqBy(identity),_pipe=function(a,b){return function(){return b.call(this,a.apply(this,arguments))}},_checkForMethod=function(a,b){return function(){var c=arguments.length;if(0===c)return b();var d=arguments[c-1];return _isArray(d)||'function'!=typeof d[a]?b.apply(this,arguments):d[a].apply(d,Array.prototype.slice.call(arguments,0,c-1))}},slice=_curry3(_checkForMethod('slice',function(a,b,c){return Array.prototype.slice.call(c,a,b)})),tail=_curry1(_checkForMethod('tail',slice(1,Infinity))),pipe=function(){if(0===arguments.length)throw new Error('pipe requires at least one argument');return _arity(arguments[0].length,reduce(_pipe,arguments[0],tail(arguments)))},zip=_curry2(function(c,a){for(var b=[],d=0,e=Math.min(c.length,a.length);d<e;)b[d]=[c[d],a[d]],d+=1;return b}),fromPairs=_curry1(function(a){for(var b={},c=0;c<a.length;)b[a[c][0]]=a[c][1],c+=1;return b}),__nameMessage=['name','message'],zipObject=katsuCurry.curry(function(a,b){return pipe(zip(a),fromPairs)(b)}),addTypedQuestion=function(a){return katsuCurry.curryObjectK(__nameMessage,function(b){return Object.assign({},{type:a},b)})},messagePairToObject=zipObject(__nameMessage),input=addTypedQuestion('input'),questionInput=pipe(messagePairToObject,input),confirm=addTypedQuestion('confirm'),questionConfirm=pipe(messagePairToObject,confirm),prompt=F.encaseP($$1.prompt),freeze=Object.freeze,_log=console.log,_error=console.error,log=_log.bind(console),error=_error.bind(console),good=xtrace_5(log),bad=xtrace_5(error),ap=entrust.e1('ap'),bimap=entrust.e2('bimap'),fork=entrust.e2('fork'),j2=function(a){return JSON.stringify(a,null,2)},replace=entrust.e2('replace'),hasString=katsuCurry.curry(function(a,b){return b&&b.indexOf&&-1<b.indexOf(a)}),lastPast=katsuCurry.curry(function(a,b){return b.substr(b.lastIndexOf(a)+1)}),toLowerCase=entrust.e0('toLowerCase'),CONFIG=freeze({PROJECT:'input:project',ERASE:{SRC:'erase:dir:src',NODE_MODULES:'erase:dir:node-modules',PKG_DEPENDENCIES:'erase:pkg:dependencies',PKG_DEV_DEPENDENCIES:'erase:pkg:devDependencies',PKG_PEER_DEPENDENCIES:'erase:pkg:peerDependencies'}});console.log('bad, bad',bad),console.log('bad, bad, bad',bad(20202));var R__={"@@functional/placeholder":!0},readPkgUpF=F.encaseP(readPkgUp),globbyF=F.encaseP(globby),rimraF=F.encaseP(del),questions={inputs:map(questionInput,[[CONFIG.PROJECT,'What\'s the name of your project?']]),confirmations:map(questionConfirm,[[CONFIG.ERASE.SRC,'Wanna erase src?'],[CONFIG.ERASE.NODE_MODULES,'Wanna erase node_modules?'],[CONFIG.ERASE.PKG_DEPENDENCIES,'Wanna erase package.json.peerDependencies?'],[CONFIG.ERASE.PKG_DEV_DEPENDENCIES,'Wanna erase package.json.devDependencies?'],[CONFIG.ERASE.PKG_PEER_DEPENDENCIES,'Wanna erase package.json.dependencies?']])},allQuestions=questions.inputs.concat(questions.confirmations),grabUpToFirstSlash=function(a){return a.substr(0,a.indexOf('/'))},grabEveryUniqueDirectory=pipe(map(grabUpToFirstSlash),uniq),allFoldersF=always$1(globbyF(['*/*','!node_modules/*']).map(grabEveryUniqueDirectory)),writePkgName=L.modify(['package','name']),whenOldNameIsPresent=function(a){return L.when(hasString(a))},pkgPropsRewrite=katsuCurry.curry(function(a,b){return L.modify(['package',L.values,whenOldNameIsPresent(a)],b)}),pkgPropsNestedRewrite=katsuCurry.curry(function(a,b){return L.modify(['package',L.values,L.values,whenOldNameIsPresent(a)],b)}),pkgPropsModifyArrays=L.modify(['package',L.values,L.values,L.when(Array.isArray),L.elems]),grabFromConfig=katsuCurry.curry(function(a,b){return L.collectAs(function(a,b){return b},['config',L.values,L.when(function(b,c){return hasString(a,c)&&b})],b)}),removeFromPackage=katsuCurry.curry(function(a,b){return reduce(function(a,b){return L.remove(['package',lastPast(':',b)],a)},R__,a)(b)}),grabCleanName=pipe(L.get(['config',CONFIG.PROJECT]),toLowerCase,replace(/\s/g,'-')),rewritePackageJSON=function(a){var b=L.get(['package','name'],a),c=grabCleanName(a),d=always$1(c),e=replace(b,c),f=grabFromConfig('erase:pkg',a);return pipe(removeFromPackage(f),writePkgName(d),pkgPropsRewrite(b,e),pkgPropsNestedRewrite(b,e),pkgPropsModifyArrays(e))(a)},nondescript=pipe(F.of,ap(readPkgUpF()),ap(allFoldersF()),ap(prompt(allQuestions)),map(rewritePackageJSON),map(j2),map(xtrace_6('shitbutts')),fork(bad('\uD83D\uDD25'),good('\u2728'))),consumer=katsuCurry.curry(function(a,b,c){var d=a.pkg;return{package:d,directories:b,config:c}});nondescript(consumer);
