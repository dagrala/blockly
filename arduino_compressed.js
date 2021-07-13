// Do not edit this file; automatically generated by gulp.

/* eslint-disable */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) { // AMD
    define(['./blockly_compressed.js'], factory);
  } else if (typeof exports === 'object') { // Node.js
    module.exports = factory(require('./blockly_compressed.js'));
  } else { // Browser
    root.Blockly.Arduino = factory(root.Blockly);
  }
}(this, function(Blockly) {
  /*

 Copyright 2012 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';Blockly.Arduino=new Blockly.Generator("Arduino");Blockly.Arduino.addReservedWords("False,None,True,and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,nonlocal,not,or,pass,print,raise,return,try,while,with,yield,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,ArithmeticError,AssertionError,AttributeError,BaseException,BlockingIOError,BrokenPipeError,BufferError,BytesWarning,ChildProcessError,ConnectionAbortedError,ConnectionError,ConnectionRefusedError,ConnectionResetError,DeprecationWarning,EOFError,Ellipsis,EnvironmentError,Exception,FileExistsError,FileNotFoundError,FloatingPointError,FutureWarning,GeneratorExit,IOError,ImportError,ImportWarning,IndentationError,IndexError,InterruptedError,IsADirectoryError,KeyError,KeyboardInterrupt,LookupError,MemoryError,ModuleNotFoundError,NameError,NotADirectoryError,NotImplemented,NotImplementedError,OSError,OverflowError,PendingDeprecationWarning,PermissionError,ProcessLookupError,RecursionError,ReferenceError,ResourceWarning,RuntimeError,RuntimeWarning,StandardError,StopAsyncIteration,StopIteration,SyntaxError,SyntaxWarning,SystemError,SystemExit,TabError,TimeoutError,TypeError,UnboundLocalError,UnicodeDecodeError,UnicodeEncodeError,UnicodeError,UnicodeTranslateError,UnicodeWarning,UserWarning,ValueError,Warning,ZeroDivisionError,_,__build_class__,__debug__,__doc__,__import__,__loader__,__name__,__package__,__spec__,abs,all,any,apply,ascii,basestring,bin,bool,buffer,bytearray,bytes,callable,chr,classmethod,cmp,coerce,compile,complex,copyright,credits,delattr,dict,dir,divmod,enumerate,eval,exec,execfile,exit,file,filter,float,format,frozenset,getattr,globals,hasattr,hash,help,hex,id,input,int,intern,isinstance,issubclass,iter,len,license,list,locals,long,map,max,memoryview,min,next,object,oct,open,ord,pow,print,property,quit,range,raw_input,reduce,reload,repr,reversed,round,set,setattr,slice,sorted,staticmethod,str,sum,super,tuple,type,unichr,unicode,vars,xrange,zip");
Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_COLLECTION=1;Blockly.Arduino.ORDER_STRING_CONVERSION=1;Blockly.Arduino.ORDER_MEMBER=2.1;Blockly.Arduino.ORDER_FUNCTION_CALL=2.2;Blockly.Arduino.ORDER_EXPONENTIATION=3;Blockly.Arduino.ORDER_UNARY_SIGN=4;Blockly.Arduino.ORDER_BITWISE_NOT=4;Blockly.Arduino.ORDER_MULTIPLICATIVE=5;Blockly.Arduino.ORDER_ADDITIVE=6;Blockly.Arduino.ORDER_BITWISE_SHIFT=7;Blockly.Arduino.ORDER_BITWISE_AND=8;Blockly.Arduino.ORDER_BITWISE_XOR=9;
Blockly.Arduino.ORDER_BITWISE_OR=10;Blockly.Arduino.ORDER_RELATIONAL=11;Blockly.Arduino.ORDER_LOGICAL_NOT=12;Blockly.Arduino.ORDER_LOGICAL_AND=13;Blockly.Arduino.ORDER_LOGICAL_OR=14;Blockly.Arduino.ORDER_CONDITIONAL=15;Blockly.Arduino.ORDER_LAMBDA=16;Blockly.Arduino.ORDER_NONE=99;
Blockly.Arduino.ORDER_OVERRIDES=[[Blockly.Arduino.ORDER_FUNCTION_CALL,Blockly.Arduino.ORDER_MEMBER],[Blockly.Arduino.ORDER_FUNCTION_CALL,Blockly.Arduino.ORDER_FUNCTION_CALL],[Blockly.Arduino.ORDER_MEMBER,Blockly.Arduino.ORDER_MEMBER],[Blockly.Arduino.ORDER_MEMBER,Blockly.Arduino.ORDER_FUNCTION_CALL],[Blockly.Arduino.ORDER_LOGICAL_NOT,Blockly.Arduino.ORDER_LOGICAL_NOT],[Blockly.Arduino.ORDER_LOGICAL_AND,Blockly.Arduino.ORDER_LOGICAL_AND],[Blockly.Arduino.ORDER_LOGICAL_OR,Blockly.Arduino.ORDER_LOGICAL_OR]];
Blockly.Arduino.isInitialized=!1;
Blockly.Arduino.init=function(a){Object.getPrototypeOf(this).init.call(this);this.PASS=this.INDENT+"pass\n";this.nameDB_?this.nameDB_.reset():this.nameDB_=new Blockly.Names(this.RESERVED_WORDS_);this.nameDB_.setVariableMap(a.getVariableMap());this.nameDB_.populateVariables(a);this.nameDB_.populateProcedures(a);for(var d=[],b=Blockly.Variables.allDeveloperVariables(a),c=0;c<b.length;c++)d.push(this.nameDB_.getName(b[c],Blockly.Names.DEVELOPER_VARIABLE_TYPE)+" = None");a=Blockly.Variables.allUsedVarModels(a);
for(c=0;c<a.length;c++)d.push(this.nameDB_.getName(a[c].getId(),Blockly.VARIABLE_CATEGORY_NAME)+" = None");this.definitions_.variables=d.join("\n");this.isInitialized=!0};
Blockly.Arduino.finish=function(a){var d=[],b=[],c;for(c in this.definitions_){var e=this.definitions_[c];e.match(/^(from\s+\S+\s+)?import\s+\S+/)?d.push(e):b.push(e)}a=Object.getPrototypeOf(this).finish.call(this,a);this.isInitialized=!1;this.nameDB_.reset();return(d.join("\n")+"\n\n"+b.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a};Blockly.Arduino.scrubNakedValue=function(a){return a+"\n"};
Blockly.Arduino.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n");var d="'";-1!==a.indexOf("'")&&(-1===a.indexOf('"')?d='"':a=a.replace(/'/g,"\\'"));return d+a+d};Blockly.Arduino.multiline_quote_=function(a){return a.split(/\n/g).map(this.quote_).join(" + '\\n' + \n")};
Blockly.Arduino.scrub_=function(a,d,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var e=a.getCommentText();e&&(e=Blockly.utils.string.wrap(e,this.COMMENT_WRAP-3),c+=this.prefixLines(e+"\n","# "));for(var f=0;f<a.inputList.length;f++)a.inputList[f].type==Blockly.inputTypes.VALUE&&(e=a.inputList[f].connection.targetBlock())&&(e=this.allNestedComments(e))&&(c+=this.prefixLines(e,"# "))}a=a.nextConnection&&a.nextConnection.targetBlock();b=b?"":this.blockToCode(a);return c+
d+b};Blockly.Arduino.getAdjustedInt=function(a,d,b,c){b=b||0;a.workspace.options.oneBasedIndex&&b--;var e=a.workspace.options.oneBasedIndex?"1":"0";a=this.valueToCode(a,d,b?this.ORDER_ADDITIVE:this.ORDER_NONE)||e;Blockly.isNumber(a)?(a=parseInt(a,10)+b,c&&(a=-a)):(a=0<b?"int("+a+" + "+b+")":0>b?"int("+a+" - "+-b+")":"int("+a+")",c&&(a="-"+a));return a};Blockly.Arduino.variables={};Blockly.Python.variables_get=function(a){return[Blockly.Python.nameDB_.getName(a.getFieldValue("VAR"),Blockly.VARIABLE_CATEGORY_NAME),Blockly.Python.ORDER_ATOMIC]};Blockly.Python.variables_set=function(a){var d=Blockly.Python.valueToCode(a,"VALUE",Blockly.Python.ORDER_NONE)||"0";return Blockly.Python.nameDB_.getName(a.getFieldValue("VAR"),Blockly.VARIABLE_CATEGORY_NAME)+" = "+d+"\n"};/*

 Copyright 2018 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
Blockly.Arduino.variablesDynamic={};Blockly.Python.variables_get_dynamic=Blockly.Python.variables_get;Blockly.Python.variables_set_dynamic=Blockly.Python.variables_set;
return Blockly.Arduino;
}));


//# sourceMappingURL=arduino_compressed.js.map
