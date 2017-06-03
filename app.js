angular.module('myApp', ['ui.tree'])
    .config(function(treeConfig) {
        treeConfig.defaultCollapsed = true;
    })
    .controller('myCtrl', function($scope) {

        $scope.dataBinding = [];

        function init() {
            $scope.dataBinding.push(parse('psi', $scope.json.psi));
        }

        $scope.click = function(object, node) {

            if (object === undefined)
                return;

            if (node.isEmpty !== undefined && node.isEmpty === false && node.load !== undefined) {
                node.load(node);

                if (object.collapsed)
                    object.expand();

                return;
            }

            if (object.collapsed)
                object.expand();
            else
                object.collapse();
        };

        function parse(name, value) {

            var node = {
                name: name
            };

            if (Array.isArray(value)) {
                node.isEmpty = value.length === 0;
                node.payload = value;
                node.props = [];
                node.load = function(node) {
                    for (var i = 0; i < node.payload.length; i++) {
                        node.props.push(parse(node.name + '[' + i + ']', node.payload[i]));
                    }
                    delete node.isEmpty;
                    delete node.payload;
                }
            } else if (value !== undefined && value !== null && typeof value === 'object') {
                node.isEmpty = Object.keys(value).length === 0;
                node.payload = value;
                node.props = [];
                node.load = function(node) {
                    var keys = Object.keys(node.payload);
                    for (var i = 0; i < keys.length; i++) {
                        node.props.push(parse(node.name + '.' + keys[i], node.payload[keys[i]]));
                    }
                    delete node.isEmpty;
                    delete node.payload;
                }
            } else {
                node.value = value;
            }

            return node;
        }

        $scope.json = {
            "psi": {
                "pat": {
                    "tsId": 5200,
                    "ver": 1,
                    "programs": [{
                        "num": 3401,
                        "pmt": 1104
                    }, {
                        "num": 3402,
                        "pmt": 1105
                    }, {
                        "num": 3403,
                        "pmt": 1106
                    }, {
                        "num": 3404,
                        "pmt": 260
                    }, {
                        "num": 3405,
                        "pmt": 259
                    }, {
                        "num": 3406,
                        "pmt": 262
                    }, {
                        "num": 3407,
                        "pmt": 261
                    }, {
                        "num": 3408,
                        "pmt": 1107
                    }, {
                        "num": 3490,
                        "pmt": 263
                    }, {
                        "num": 3491,
                        "pmt": 264
                    }]
                },
                "pmt": [{
                    "pid": 1104,
                    "progNum": 3401,
                    "ver": 5,
                    "prcPid": 8190,
                    "descr": null,
                    "stream": [{
                        "type": 2,
                        "pid": 160,
                        "descr": []
                    }, {
                        "type": 4,
                        "pid": 80,
                        "descr": [{
                            "tag": 10,
                            "len": 4,
                            "descr": null
                        }]
                    }, {
                        "type": 6,
                        "pid": 44,
                        "descr": [{
                            "tag": 86,
                            "len": 15,
                            "descr": null
                        }]
                    }, {
                        "type": 192,
                        "pid": 208,
                        "descr": [{
                            "tag": 198,
                            "len": 5,
                            "descr": null
                        }, {
                            "tag": 194,
                            "len": 40,
                            "descr": null
                        }]
                    }, {
                        "type": 192,
                        "pid": 222,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }, {
                        "type": 193,
                        "pid": 817,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }, {
                        "type": 193,
                        "pid": 213,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }]
                }, {
                    "pid": 1105,
                    "progNum": 3402,
                    "ver": 28,
                    "prcPid": 8190,
                    "descr": null,
                    "stream": [{
                        "type": 2,
                        "pid": 161,
                        "descr": []
                    }, {
                        "type": 4,
                        "pid": 84,
                        "descr": [{
                            "tag": 10,
                            "len": 4,
                            "descr": null
                        }]
                    }, {
                        "type": 6,
                        "pid": 45,
                        "descr": [{
                            "tag": 86,
                            "len": 15,
                            "descr": null
                        }]
                    }, {
                        "type": 192,
                        "pid": 208,
                        "descr": [{
                            "tag": 198,
                            "len": 5,
                            "descr": null
                        }, {
                            "tag": 194,
                            "len": 40,
                            "descr": null
                        }]
                    }, {
                        "type": 192,
                        "pid": 222,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }, {
                        "type": 193,
                        "pid": 823,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }, {
                        "type": 193,
                        "pid": 213,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }]
                }, {
                    "pid": 1106,
                    "progNum": 3403,
                    "ver": 20,
                    "prcPid": 8190,
                    "descr": null,
                    "stream": [{
                        "type": 2,
                        "pid": 162,
                        "descr": []
                    }, {
                        "type": 4,
                        "pid": 88,
                        "descr": [{
                            "tag": 10,
                            "len": 4,
                            "descr": null
                        }]
                    }, {
                        "type": 6,
                        "pid": 46,
                        "descr": [{
                            "tag": 86,
                            "len": 15,
                            "descr": null
                        }]
                    }, {
                        "type": 192,
                        "pid": 208,
                        "descr": [{
                            "tag": 198,
                            "len": 5,
                            "descr": null
                        }, {
                            "tag": 194,
                            "len": 40,
                            "descr": null
                        }]
                    }, {
                        "type": 192,
                        "pid": 222,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }, {
                        "type": 193,
                        "pid": 828,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }, {
                        "type": 193,
                        "pid": 213,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }]
                }, {
                    "pid": 260,
                    "progNum": 3404,
                    "ver": 13,
                    "prcPid": 8190,
                    "descr": null,
                    "stream": [{
                        "type": 2,
                        "pid": 515,
                        "descr": []
                    }, {
                        "type": 4,
                        "pid": 653,
                        "descr": [{
                            "tag": 10,
                            "len": 4,
                            "descr": null
                        }]
                    }]
                }, {
                    "pid": 259,
                    "progNum": 3405,
                    "ver": 9,
                    "prcPid": 8190,
                    "descr": null,
                    "stream": [{
                        "type": 2,
                        "pid": 516,
                        "descr": []
                    }, {
                        "type": 4,
                        "pid": 654,
                        "descr": [{
                            "tag": 10,
                            "len": 4,
                            "descr": null
                        }]
                    }, {
                        "type": 240,
                        "pid": 948,
                        "descr": []
                    }]
                }, {
                    "pid": 262,
                    "progNum": 3406,
                    "ver": 9,
                    "prcPid": 8190,
                    "descr": null,
                    "stream": [{
                        "type": 2,
                        "pid": 517,
                        "descr": []
                    }, {
                        "type": 4,
                        "pid": 655,
                        "descr": [{
                            "tag": 10,
                            "len": 4,
                            "descr": null
                        }]
                    }]
                }, {
                    "pid": 261,
                    "progNum": 3407,
                    "ver": 4,
                    "prcPid": 8190,
                    "descr": null,
                    "stream": [{
                        "type": 2,
                        "pid": 164,
                        "descr": []
                    }, {
                        "type": 4,
                        "pid": 96,
                        "descr": [{
                            "tag": 10,
                            "len": 4,
                            "descr": null
                        }]
                    }, {
                        "type": 192,
                        "pid": 208,
                        "descr": [{
                            "tag": 198,
                            "len": 5,
                            "descr": null
                        }, {
                            "tag": 194,
                            "len": 40,
                            "descr": null
                        }]
                    }, {
                        "type": 192,
                        "pid": 222,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }, {
                        "type": 193,
                        "pid": 817,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }, {
                        "type": 193,
                        "pid": 213,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }]
                }, {
                    "pid": 1107,
                    "progNum": 3408,
                    "ver": 2,
                    "prcPid": 8190,
                    "descr": null,
                    "stream": [{
                        "type": 2,
                        "pid": 163,
                        "descr": []
                    }, {
                        "type": 4,
                        "pid": 92,
                        "descr": [{
                            "tag": 10,
                            "len": 4,
                            "descr": null
                        }]
                    }, {
                        "type": 192,
                        "pid": 208,
                        "descr": [{
                            "tag": 198,
                            "len": 5,
                            "descr": null
                        }, {
                            "tag": 194,
                            "len": 40,
                            "descr": null
                        }]
                    }, {
                        "type": 192,
                        "pid": 222,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }, {
                        "type": 193,
                        "pid": 817,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }, {
                        "type": 193,
                        "pid": 213,
                        "descr": [{
                            "tag": 194,
                            "len": 8,
                            "descr": null
                        }]
                    }]
                }]
            }
        };

        init();
    });
