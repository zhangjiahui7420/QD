/**
 *  根据元素的id查找元素对象
 */
function id(sId) {
    return document.getElementById(sId);
}


//找到elem的下一个兄弟元素 nodeType=1
function next(elem) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType != 1);
    return elem;
}

//找到elem的第一个孩子元素
function first(elem) {
    elem = elem.firstChild;
    return elem.nodeType == 1 ? elem : next(elem);
}

//封装函数，通过class的名字获取元素
function getByClassName(clsName, context) {
    context = context || document;
    if (context.getElementsByClassName) { //能力检测
        return context.getElementsByClassName(clsName);
    } else {
        var allList = context.getElementsByTagName('*');
        var result = [];
        for (var i = 0; i < allList.length; i++) {
            if (allList[i].className.indexOf(clsName) != -1) {
                result.push(allList[i]);
            }
        }
        return result;
    }
}

//添加事件

function addEvent(elem, type, handler) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handler, false);
    } else if (elem.attachEvent) {
        elem.fnxx = function() {
            handler.call(elem);
        };
        elem.attachEvent('on' + type, elem.fnxx);
    } else {
        elem['on' + type] = handler;
    }
}

//实现深拷贝
function clone(obj) {
    var newObj = {};
    for (var p in obj) {
        if (typeof obj[p] == 'object') {
            newObj[p] = clone(obj[p]);
        } else {
            newObj[p] = obj[p];
        }
    }
    return newObj;
}