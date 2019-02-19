/*jslint indent: 2*/
/*global rJS, window, RSVP */
(function (rJS, window, RSVP) {
    "use strict";

    rJS(window)
        .allowPublicAcquisition('notifyChange', function (options) {
            window.console.warn(options);
        })
        .allowPublicAcquisition('submitContent', function () {
            window.console.warn(arguments);
        })
        .ready(function (gadget) {
            return gadget.render();
        })
        .onStateChange(function (modif_dict) {
            var gadget = this;
            if (modif_dict.hasOwnProperty("script")) {
                gadget.element.querySelector('.script').value = gadget.state.script;
            }
            if (modif_dict.hasOwnProperty("result")) {
                gadget.element.querySelector('.result').value = gadget.state.result;
            }
        })
        .declareMethod("render", function () {
            var gadget = this;
            return gadget.changeState({
                script: 'var dataframes_paths = ["olapy-data/cubes/sales/Facts.csv","olapy-data/cubes/sales/Product.csv","olapy-data/cubes/sales/Geography.csv"]\n' +
                    '\n' +
                    'var mdx_query1 = ""\n' +
                    'var mdx_query2 = "SELECT {[Geography].[Geography].[America]} ON 0 FROM [sales]"\n' +
                    '\n' +
                    '// ça c"est pour CUBEMEMBER\n' +
                    'callFunction({"fun": "get_olapy_response", argument_list: [dataframes_paths,mdx_query1]}) \n' +
                    '// ça c"est pour CUBEVALUES\n' +
                    'callFunction({"fun": "get_olapy_response2", argument_list: [dataframes_paths,mdx_query2]})'
                ,
                result: ""
            })
                .push(function () {
                    return gadget.getDeclaredGadget('iodide');
                })
                .push(function (iodide) {
                    return iodide.render({
                        key: 'script', value: '%% meta\n' +
                            '{\n' +
                            '  "title": "Python",\n' +
                            '  "languages": {\n' +
                            '    "js": {\n' +
                            '      "pluginType": "language",\n' +
                            '      "languageId": "js",\n' +
                            '      "displayName": "Javascript",\n' +
                            '      "codeMirrorMode": "javascript",\n' +
                            '      "module": "window",\n' +
                            '      "evaluator": "eval",\n' +
                            '      "keybinding": "j",\n' +
                            '      "url": ""\n' +
                            '    },\n' +
                            '    "py": {\n' +
                            '      "languageId": "py",\n' +
                            '      "displayName": "python",\n' +
                            '      "codeMirrorMode": "python",\n' +
                            '      "keybinding": "p",\n' +
                            '      "url": "/pyodide_dev.js",\n' +
                            '      "module": "pyodide",\n' +
                            '      "evaluator": "runPython",\n' +
                            '      "pluginType": "language"\n' +
                            '    }\n' +
                            '  },\n' +
                            '  "lastExport": "2018-05-04T17:13:00.489Z"\n' +
                            '}\n' +
                            '\n' +
                            '%% plugin\n' +
                            '{\n' +
                            '  "languageId": "py",\n' +
                            '  "displayName": "python",\n' +
                            '  "codeMirrorMode": "python",\n' +
                            '  "keybinding": "p",\n' +
                            '  "url": "/pyodide_dev.js",\n' +
                            '  "module": "pyodide",\n' +
                            '  "evaluator": "runPython",\n' +
                            '  "pluginType": "language"\n' +
                            '}\n' +
                            '\n' +
                            '\n' +
                            '%% js\n' +
                            '\n' +
                            'pyodide.loadPackage(\'olapy\')\n' +
                            '\n' +
                            '\n' +
                            '%% code {"language":"py"}\n' +
                            '\n' +
                            '# ******************************** CUBEMEMBER **************************** \n'+
                            'import os\n' +
                            '\n' +
                            'import pandas as pd\n' +
                            'import pyodide\n' +
                            'from olapy.core.services.xmla_lib import get_response\n' +
                            '\n' +
                            'def olapy_response(dataframes_paths, mdx_query):\n' +
                            '    dataframes = {}\n' +
                            '    for df_path in dataframes_paths:\n' +
                            '        dataframes[os.path.splitext(os.path.basename(df_path))[0]] = pd.read_csv(pyodide.open_url(df_path), sep=\';\',\n' +
                            '                                                                                 encoding=\'utf8\')\n' +
                            '    #    xmla_request_params = {\'cube\': \'sales\',\n' +
                            '    #                           \'properties\': {\'AxisFormat\': \'TupleFormat\', \'Format\': \'Multidimensional\',\n' +
                            '    #                                          \'Content\': \'SchemaData\',\n' +
                            '    #                                          \'Catalog\': \'sales\',\n' +
                            '    #                                          \'LocaleIdentifier\': \'1033\', \'Timeout\': \'0\'},\n' +
                            '    #                           \'mdx_query\': mdx_query}\n' +
                            '\n' +
                            '    xmla_request_params = {\'cube\': \'sales\',\n' +
                            '                           \'request_type\': \'MDSCHEMA_MEMBERS\',\n' +
                                                        '\'properties\': {\'Catalog\': \'sales\'},\n'+
                            '                           \'restrictions\': {\'CUBE_NAME\': \'sales\',\n' +
                            '                                            \'MEMBER_UNIQUE_NAME\': \'[Geography].[Geography].[America]\',\n' +
                            '                                            \'TREE_OP\': \'3\',\n' +
                            '                                            \'mdx_query\': mdx_query}\n' +
                            '                           }\n' +
                            '\n' +
                            '    return get_response(xmla_request_params=xmla_request_params, dataframes=dataframes,\n' +
                            '                        output=\'xmla\')  # or output=\'dict\'' +
                            '\n' +
                            '%% js\n' +
                            '\n' +
                            'function get_olapy_response(dataframes_paths, mdx_query) {\n' +
                            '  var reponse = pyodide.pyimport("olapy_response")\n' +
                            '  return reponse(dataframes_paths, mdx_query)\n' +
                            '}\n' +
                            '%% code {"language":"py"}\n' +
                            '# ********************************* CUBEVALUE ********************************** \n' +
                            'import os\n' +
                            '\n' +
                            'import pandas as pd\n' +
                            'import pyodide\n' +
                            'from olapy.core.services.xmla_lib import get_response\n' +
                            '\n' +
                            '\n' +
                            'def olapy_response2(dataframes_paths, mdx_query):\n' +
                            '    dataframes = {}\n' +
                            '    for df_path in dataframes_paths:\n' +
                            '        dataframes[os.path.splitext(os.path.basename(df_path))[0]] = pd.read_csv(pyodide.open_url(df_path), sep=\';\',\n' +
                            '                                                                                 encoding=\'utf8\')\n' +
                            '\n' +
                            '    xmla_request_params = {\'cube\': \'sales\',\n' +
                            '                           \'properties\': {\'Catalog\': \'sales\',\n' +
                            '                                          \'Content\': \'SchemaData\',\n' +
                            '                                          \'Format\': \'Multidimensional\'},\n' +
                            '                           \'mdx_query\': mdx_query\n' +
                            '                           }\n' +
                            '\n' +
                            '    return get_response(xmla_request_params=xmla_request_params, dataframes=dataframes,\n' +
                            '                        output=\'xmla\')  # or output=\'dict\'' +
                            '\n' +
                            '%% js\n' +
                            '\n' +
                            'function get_olapy_response2(dataframes_paths, mdx_query) {\n' +
                            '  var reponse = pyodide.pyimport("olapy_response2")\n' +
                            '  return reponse(dataframes_paths, mdx_query)\n' +
                            '}\n'

                    });
                });
        })
        .onEvent('click', function (evt) {
            var gadget = this, script;
            if (evt.target.tagName === 'BUTTON') {
                return gadget.getDeclaredGadget('iodide')
                    .push(function (iodide) {
                        script = gadget.element.querySelector('.script').value;
                        return iodide.evalCode(script);
                    })
                    .push(function (result) {
                        return gadget.changeState({"script": script, "result": result});
                    }, function (error) {
                        return gadget.changeState({"script": script, "result": error});
                    });
            }
        });

}(rJS, window, RSVP));
