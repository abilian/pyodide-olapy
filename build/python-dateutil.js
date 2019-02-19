var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="python-dateutil.data";var REMOTE_PACKAGE_BASE="python-dateutil.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","dateutil",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/dateutil","parser",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/dateutil","tz",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/dateutil","zoneinfo",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","python_dateutil-2.7.2-py3.7.egg-info",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:279131,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1252,2689,4233,5522,6752,7742,8778,9728,10521,11215,12200,12799,13488,14261,15525,16857,17911,18949,20041,21253,22467,23504,24610,25665,26407,27282,27974,29054,30116,31041,31885,32703,33531,34466,35843,37174,38008,38930,39923,40912,41846,42775,43844,44795,45549,46376,47576,49015,50203,50848,51985,53180,54085,54993,55899,57049,58198,59393,60391,61387,62257,63352,64267,65362,66503,67692,68790,70054,71242,72517,73292,74165,74955,76101,77366,78661,79749,80697,81920,83006,84112,85424,86635,87876,88900,90083,91106,92425,93642,94733,95934,97038,98536,99754,100904,102024,103012,104153,105436,106479,107720,108899,109924,111119,112255,113526,114691,115664,116999,118254,119349,120538,121776,122807,123591,124363,125360,126249,127310,128654,129660,131645,133693,135741,137789,139837,141894,143942,145990,148038,150086,152134,154182,156230,158278,160326,162380,164428,166476,168524,170572,172622,174596,176644,178689,180743,182791,184839,186887,188935,190983,193031,195079,197127,199183,201231,203287,205344,207392,209440,211488,213536,215590,217638,219686,221734,223782,225830,227878,229926,231974,234025,236073,238121,240169,242217,244274,246322,248370,250418,252465,254513,256561,258617,260665,262722,264770,266823,268871,270228,271502,272882,273973,275073,276332,277546,278732],sizes:[1252,1437,1544,1289,1230,990,1036,950,793,694,985,599,689,773,1264,1332,1054,1038,1092,1212,1214,1037,1106,1055,742,875,692,1080,1062,925,844,818,828,935,1377,1331,834,922,993,989,934,929,1069,951,754,827,1200,1439,1188,645,1137,1195,905,908,906,1150,1149,1195,998,996,870,1095,915,1095,1141,1189,1098,1264,1188,1275,775,873,790,1146,1265,1295,1088,948,1223,1086,1106,1312,1211,1241,1024,1183,1023,1319,1217,1091,1201,1104,1498,1218,1150,1120,988,1141,1283,1043,1241,1179,1025,1195,1136,1271,1165,973,1335,1255,1095,1189,1238,1031,784,772,997,889,1061,1344,1006,1985,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2054,2048,2048,2048,2048,2050,1974,2048,2045,2054,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2056,2057,2048,2048,2048,2048,2054,2048,2048,2048,2048,2048,2048,2048,2048,2051,2048,2048,2048,2048,2057,2048,2048,2048,2047,2048,2048,2056,2048,2057,2048,2053,2048,1357,1274,1380,1091,1100,1259,1214,1186,399],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_python-dateutil.data")}Module["addRunDependency"]("datafile_python-dateutil.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/dateutil/_common.py",start:0,end:932,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/utils.py",start:932,end:2773,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/easter.py",start:2773,end:5457,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/relativedelta.py",start:5457,end:29950,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tzwin.py",start:29950,end:30009,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/__init__.py",start:30009,end:30231,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/_version.py",start:30231,end:30347,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/rrule.py",start:30347,end:95214,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/parser/_parser.py",start:95214,end:150972,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/parser/isoparser.py",start:150972,end:163817,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/parser/__init__.py",start:163817,end:165544,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/_common.py",start:165544,end:178436,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/win.py",start:178436,end:189754,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/tz.py",start:189754,end:246134,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/_factories.py",start:246134,end:247568,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/tz/__init__.py",start:247568,end:248071,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/zoneinfo/dateutil-zoneinfo.tar.gz",start:248071,end:387151,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/zoneinfo/rebuild.py",start:387151,end:388870,audio:0},{filename:"/lib/python3.7/site-packages/dateutil/zoneinfo/__init__.py",start:388870,end:394759,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/PKG-INFO",start:394759,end:402682,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/zip-safe",start:402682,end:402683,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/top_level.txt",start:402683,end:402692,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/SOURCES.txt",start:402692,end:404277,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/requires.txt",start:404277,end:404286,audio:0},{filename:"/lib/python3.7/site-packages/python_dateutil-2.7.2-py3.7.egg-info/dependency_links.txt",start:404286,end:404287,audio:0}],remote_package_size:283227,package_uuid:"73c31cff-0251-489b-a637-c1409c7009b7"})})();