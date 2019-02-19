var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="pyparsing.data";var REMOTE_PACKAGE_BASE="pyparsing.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","pyparsing-2.2.0-py3.7.egg-info",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:130543,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1665,3098,4575,6063,7133,8413,9533,10443,11469,12534,13651,14654,15736,16836,17965,18915,20073,21183,22208,23443,24729,25824,26990,28156,29473,30657,31714,32472,33430,34117,35284,36515,37735,38818,40007,41108,42184,43137,43986,44506,45363,46500,47589,48727,49912,50786,51865,52989,54276,55340,56566,57642,59050,60022,60950,62289,63533,64457,65576,66847,68106,69156,70091,70976,72127,72962,74166,75314,76341,77468,78759,79767,80905,81796,82987,84088,85195,86396,87629,88834,89921,91172,92336,93560,94664,95953,97236,98550,99730,101037,102336,103674,105050,106475,107651,108810,110073,111382,112695,113998,114958,116058,117342,118158,119407,120422,121746,122659,123563,124637,125586,126953,128131,129142,130025],sizes:[1665,1433,1477,1488,1070,1280,1120,910,1026,1065,1117,1003,1082,1100,1129,950,1158,1110,1025,1235,1286,1095,1166,1166,1317,1184,1057,758,958,687,1167,1231,1220,1083,1189,1101,1076,953,849,520,857,1137,1089,1138,1185,874,1079,1124,1287,1064,1226,1076,1408,972,928,1339,1244,924,1119,1271,1259,1050,935,885,1151,835,1204,1148,1027,1127,1291,1008,1138,891,1191,1101,1107,1201,1233,1205,1087,1251,1164,1224,1104,1289,1283,1314,1180,1307,1299,1338,1376,1425,1176,1159,1263,1309,1313,1303,960,1100,1284,816,1249,1015,1324,913,904,1074,949,1367,1178,1011,883,518],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_pyparsing.data")}Module["addRunDependency"]("datafile_pyparsing.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/pyparsing.py",start:0,end:231121,audio:0},{filename:"/lib/python3.7/site-packages/pyparsing-2.2.0-py3.7.egg-info/PKG-INFO",start:231121,end:232041,audio:0},{filename:"/lib/python3.7/site-packages/pyparsing-2.2.0-py3.7.egg-info/top_level.txt",start:232041,end:232051,audio:0},{filename:"/lib/python3.7/site-packages/pyparsing-2.2.0-py3.7.egg-info/SOURCES.txt",start:232051,end:237110,audio:0},{filename:"/lib/python3.7/site-packages/pyparsing-2.2.0-py3.7.egg-info/dependency_links.txt",start:237110,end:237111,audio:0}],remote_package_size:134639,package_uuid:"a08215a1-617b-4a6c-9f86-7dcfffe93841"})})();