$(function () {
    var focus = document.querySelector('.search-img');
    var foucswidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function () {
        timer = setInterval(function () {
            xuxu();
        }, 2000);
    });
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            };
            this.className = 'yellow';
            var index = this.getAttribute('index');
            num = circle = index;
            anminate(ul, -index * foucswidth);
        });
    };
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    var flag = true;
    var timer = setInterval(function () {
        xuxu();
    }, 2000);

    function xuxu() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            };
            num++;
            anminate(ul, -num * foucswidth, function () {
                flag = true;
            });
            circle++;
            circle = circle == ol.children.length ? circle = 0 : circle;
            circlechange();
        }
    };

    function circlechange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        };
        ol.children[circle].className = 'yellow';
    };

    function anminate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                callback && callback();
            } else {
                obj.style.left = obj.offsetLeft + step + 'px';
            };
        }, 15);
    };
})