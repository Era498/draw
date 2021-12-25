
var canvas = document.getElementById("canvas");;
var bounds = null;
var colorid = "f4";
var lcolorid = "l4";
var ctx = null;
var hasLoaded = false;
var dblcanvas = null;
var dblctx = null;
var mode = "";
var isCanvas = false;
var isSVG = true;
var startX = 0;
var startY = 0;
var mouseX = 0;
var mouseY = 0;
var isDrawing = false;
var attrs = [];
var color = 'black';
var lcolor = 'black';
width = 2;
lWidth = 4;
var selected = null;
const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

function svgx(x) {
    document.getElementById("de").disabled = false;
    document.getElementById("r").disabled = false;
    document.getElementById("c").disabled = false;
    var y = document.getElementsByClassName("button2");
    for (var i = 0; i < y.length; i++) {
        y[i].disabled = false;
    } 
    y = document.getElementsByClassName("button");
    for (i = 0; i < y.length; i++) {
        y[i].disabled = false;
    } 
    y = document.getElementsByClassName("button3");
    for (i = 0; i < y.length; i++) {
        y[i].disabled = false;
    } 
    document.getElementById("de").disabled = false;
    document.getElementById("myRange").disabled = false;
    if(x.checked) {
        svgc.style.border = 'solid 1px black';
        dblcanvas.style.display = 'none';
        canvas.style.display = 'none';
        svgc.style.display = 'block';
        isSVG = true;
        isCanvas = false;
        document.getElementById("svgc").addEventListener("mousedown",onmousedown);
        document.getElementById("svgc").addEventListener("mouseup",onmouseup);
        document.getElementById("svgc").addEventListener("mousemove",onmousemove);
        document.getElementById("canvas").removeEventListener("mousedown",onmousedown);
        document.getElementById("canvas").removeEventListener("mouseup",onmouseup);
        document.getElementById("canvas").removeEventListener("mousemove",onmousemove);
        document.getElementById("dblcanvas").removeEventListener("mousedown",onmousedown);
        document.getElementById("dblcanvas").removeEventListener("mouseup",onmouseup);
        document.getElementById("dblcanvas").removeEventListener("mousemove",onmousemove);
    }
}

function canc(x) {
    document.getElementById("de").disabled = false;
    document.getElementById("r").disabled = false;
    document.getElementById("c").disabled = false;
    var y = document.getElementsByClassName("button2");
    for (var i = 0; i < y.length; i++) {
        y[i].disabled = false;
    } 
    y = document.getElementsByClassName("button");
    for (i = 0; i < y.length; i++) {
        y[i].disabled = false;
    } 
    y = document.getElementsByClassName("button3");
    for (i = 0; i < y.length; i++) {
        y[i].disabled = false;
    } 
    document.getElementById("myRange").disabled = false;
    document.getElementById("de").disabled = true;
    if(x.checked) {
        canvas.style.display = 'block';
        dblcanvas.style.display = 'block';
        svgc.style.display = 'none';
        isSVG = false;
        isCanvas = true;
        document.getElementById("svgc").removeEventListener("mousedown",onmousedown);
        document.getElementById("svgc").removeEventListener("mouseup",onmouseup);
        document.getElementById("svgc").removeEventListener("mousemove",onmousemove);
        document.getElementById("canvas").addEventListener("mousedown",onmousedown);
        document.getElementById("canvas").addEventListener("mouseup",onmouseup);
        document.getElementById("canvas").addEventListener("mousemove",onmousemove);
        document.getElementById("dblcanvas").addEventListener("mousedown",onmousedown);
        document.getElementById("dblcanvas").addEventListener("mouseup",onmouseup);
        document.getElementById("dblcanvas").addEventListener("mousemove",onmousemove);
    }
}

function both(x) {
    document.getElementById("de").disabled = true;
    document.getElementById("r").disabled = true;
    document.getElementById("c").disabled = true;
    var y = document.getElementsByClassName("button2");
    for (var i = 0; i < y.length; i++) {
        y[i].disabled = true;
    } 
    y = document.getElementsByClassName("button");
    for (i = 0; i < y.length; i++) {
        y[i].disabled = true;
    } 
    y = document.getElementsByClassName("button3");
    for (i = 0; i < y.length; i++) {
        y[i].disabled = true;
    } 
    document.getElementById("myRange").disabled = true;
    if(x.checked) {
        dblcanvas.style.display = 'block';
        canvas.style.display = 'block';
        svgc.style.display = 'block';
        isSVG = true;
        isCanvas = true;
        document.getElementById("svgc").removeEventListener("mousedown",onmousedown);
        document.getElementById("svgc").removeEventListener("mouseup",onmouseup);
        document.getElementById("svgc").removeEventListener("mousemove",onmousemove);
        document.getElementById("canvas").removeEventListener("mousedown",onmousedown);
        document.getElementById("canvas").removeEventListener("mouseup",onmouseup);
        document.getElementById("canvas").removeEventListener("mousemove",onmousemove);
        document.getElementById("dblcanvas").removeEventListener("mousedown",onmousedown);
        document.getElementById("dblcanvas").removeEventListener("mouseup",onmouseup);
        document.getElementById("dblcanvas").removeEventListener("mousemove",onmousemove);
    }
}

function changeToRed(col) {
    color = col; 
    var x = document.getElementsByClassName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = 'none';
    } 
    document.getElementById("f6").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.backgroundColor=color;
    document.getElementById("r").style.backgroundColor=color;
    colorid="f6";
}

function changeToBlack() {
    color = 'rgb(0, 0, 0)';
    var x = document.getElementsByClassName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = 'none';
    } 
    document.getElementById("f4").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.backgroundColor='rgb(0, 0, 0)';
    document.getElementById("r").style.backgroundColor='rgb(0, 0, 0)';
    colorid="f4";
}

function changeToBlue() {
    color = 'rgb(28, 126, 192)';
    var x = document.getElementsByClassName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = 'none';
    } 
    document.getElementById("f7").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.backgroundColor='rgb(28, 126, 192)';
    document.getElementById("r").style.backgroundColor='rgb(28, 126, 192)';
    colorid="f7";
}

function changeToGreen() {
    color = 'rgb(125, 204, 125)';
    var x = document.getElementsByClassName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = 'none';
    } 
    document.getElementById("f8").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.backgroundColor='rgb(125, 204, 125)';
    document.getElementById("r").style.backgroundColor='rgb(125, 204, 125)';
    colorid="f8";
}

function changeToYellow() {
    color = 'rgb(231, 231, 60)';
    var x = document.getElementsByClassName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow='0px 0px 0 0px red';
    } 
    document.getElementById("f5").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.backgroundColor='rgb(231, 231, 60)';
    document.getElementById("r").style.backgroundColor='rgb(231, 231, 60)';
    colorid="f5";
}

function changeToGray() {
    color = 'rgb(155, 148, 148)';
    var x = document.getElementsByClassName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = '0px 0px 0 0px red';
    } 
    document.getElementById("f3").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.backgroundColor='rgb(155, 148, 148)';
    document.getElementById("r").style.backgroundColor='rgb(155, 148, 148)';
    colorid="f3";
}

function changeToWhite() {
    color = 'rgb(255, 255, 255)';
    var x = document.getElementsByClassName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = 'none';
    } 
    document.getElementById("f2").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.backgroundColor='rgb(255, 255, 255)';
    document.getElementById("r").style.backgroundColor='rgb(255, 255, 255)';
    colorid="f2";
}

function changeToNone() {
    if(lcolor === 'None') {
        return;
    }
    color = 'None';
    var x = document.getElementsByClassName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = 'none';
    } 
    document.getElementById("f1").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.backgroundColor='rgb(255, 255, 255)';
    document.getElementById("r").style.backgroundColor='rgb(255, 255, 255)';
    colorid="f1";
}


function changeLRed() {
    lcolor = 'rgb(241, 5, 5)';
    var x = document.getElementsByClassName("button2");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = 'none';
    } 
    document.getElementById("l6").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.border='3px solid rgb(241, 5, 5)';
    document.getElementById("r").style.border='3px solid rgb(241, 5, 5)';
    lcolorid="l6";
}

function changeLBlack() {
    lcolor = 'rgb(0, 0, 0)';
    var x = document.getElementsByClassName("button2");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = 'none';
    } 
    document.getElementById("l4").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.border='3px solid rgb(0, 0, 0)';
    document.getElementById("r").style.border='3px solid rgb(0, 0, 0)';
    lcolorid="l4";
}

function changeLBlue() {
    lcolor = 'rgb(28, 126, 192)';
    var x = document.getElementsByClassName("button2");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = 'none';
    } 
    document.getElementById("l7").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.border='3px solid rgb(28, 126, 192)';
    document.getElementById("r").style.border='3px solid rgb(28, 126, 192)';
    lcolorid="l7";
}


function changeLGreen() {
    lcolor = 'rgb(125, 204, 125)';
    var x = document.getElementsByClassName("button2");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = 'none';
    } 
    document.getElementById("l8").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.border='3px solid rgb(125, 204, 125)';
    document.getElementById("r").style.border='3px solid rgb(125, 204, 125)';
    lcolorid="l8";
}

function changeLYellow() {
    lcolor = 'rgb(231, 231, 60)';
    var x = document.getElementsByClassName("button2");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = 'none';
    } 
    document.getElementById("l5").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.border='3px solid rgb(231, 231, 60)';
    document.getElementById("r").style.border='3px solid rgb(231, 231, 60)';
    lcolorid="l5";
}

function changeLGray() {
    lcolor = 'rgb(155, 148, 148)';
    var x = document.getElementsByClassName("button2");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = 'none';
    } 
    document.getElementById("l3").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.border='3px solid rgb(155, 148, 148)';
    document.getElementById("r").style.border='3px solid rgb(155, 148, 148)';
    lcolorid="l3";
}
function changeLWhite() {
    lcolor = 'rgb(255, 255, 255)';
    var x = document.getElementsByClassName("button2");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = 'none';
    } 
    document.getElementById("l2").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.border='3px solid rgb(255, 255, 255)';
    document.getElementById("r").style.border='3px solid rgb(255, 255, 255)';
    lcolorid="l2";
}

function changeLNone() {
    if( color === 'None') {
        return;
    }
    lcolor = 'None';
    var x = document.getElementsByClassName("button2");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow = 'none';
    } 
    document.getElementById("l1").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.border='3px solid rgb(255, 255, 255)';
    document.getElementById("r").style.border='3px solid rgb(255, 255, 255)';
    lcolorid="l1";
}

function drawHelp() {
    mode = 'Draw';
    document.getElementById("d").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("s").style.boxShadow='none';
    document.getElementById("r").style.boxShadow='none';
    document.getElementById("c").style.boxShadow='none';
}

function rectHelp() {
    mode = 'Rect';
    document.getElementById("d").style.boxShadow='none';
    document.getElementById("s").style.boxShadow='none';
    document.getElementById("r").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("c").style.boxShadow='none';
}

function circHelp() {
    mode = 'Circ';
    document.getElementById("d").style.boxShadow='none';
    document.getElementById("s").style.boxShadow='none';
    document.getElementById("r").style.boxShadow='none';
    document.getElementById("c").style.boxShadow='0px 0px 0 2px blue';
}

function selHelp() {
    mode = 'Select';
    document.getElementById("d").style.boxShadow='none';
    document.getElementById("s").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("r").style.boxShadow='none';
    document.getElementById("c").style.boxShadow='none';
}


function shadowSet(el) {
    if(mode === 'Select') {
        var children = svgNode.children;
        for (var i = 0; i < children.length; i++) {
            if(children[i] != selected) {
                children[i].setAttribute("style","filter: drop-shadow(3px 6px 6px rgba(0, 0, 0, 0))");;
            }
            if(children[i] === el){
                selected=el;
                colorid = attrs[i][0];
                lcolorid = attrs[i][1];
                color = attrs[i][2];
                lcolor = attrs[i][3];
                width = attrs[i][4];
            }
        }
        var x = document.getElementsByClassName("button2");
        for (i = 0; i < x.length; i++) {
            x[i].style.boxShadow = 'none';
        } 
        x = document.getElementsByClassName("button");
        for (i = 0; i < x.length; i++) {
            x[i].style.boxShadow = 'none';
        }
        switch(lcolorid) {
            case "l1":
                changeLNone();
                break;
            case "l2":
                changeLWhite();
                break;
            case "l3":
                changeLGray();
                break;
            case "l4":
                changeLBlack();
                break;
            case "l5":
                changeLYellow();
                break;
            case "l6":
                changeLRed();
                break;
            case "l7":
                changeLBlue();
                break;
            case "l8":
                changeLGreen();
                break;
        }

        switch(colorid) {
            case "f1":
                changeToNone();
                break;
            case "f2":
                changeToWhite();
                break;
            case "f3":
                changeToGray();
                break;
            case "f4":
                changeToBlack();
                break;
            case "f5":
                changeToYellow();
                break;
            case "f6":
                changeToRed();
                break;
            case "f7":
                changeToBlue();
                break;
            case "f8":
                changeToGreen();
                break;
        }
        var slider = document.getElementById("myRange");
        slider.value = width;
    }
}

function del() {
    var children = svgNode.children;
    for (var i = 0; i < children.length; i++) {
        if(children[i] === selected){
            selected.remove();
            
        }
    }
}

function delAll() {
    if(isSVG) {
        attrs = [];
        while (svgNode.lastChild) {
            svgNode.removeChild(svgNode.lastChild);
        }
    }
    if(isCanvas) {
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight);

    }
}

function drawCirc(e) {
    if(isSVG) {
        var slider = document.getElementById("myRange");
        width = slider.value;
        svgNode.lastChild.setAttributeNS(null, 'stroke-width', width);
        svgNode.lastChild.setAttributeNS(null, 'cx', startX);
        svgNode.lastChild.setAttributeNS(null, 'cy', startY);
        svgNode.lastChild.setAttributeNS(null, 'rx', Math.hypot(mouseX-startX, mouseX-startX));
        svgNode.lastChild.setAttributeNS(null, 'ry', Math.hypot(mouseY-startY, mouseY-startY));
        if(color != 'None') {
            svgNode.lastChild.setAttributeNS(null, 'fill', color);
        }
        else {
            svgNode.lastChild.setAttribute(null, 'fill',"none")
        }

        if(lcolor != 'None') {
            svgNode.lastChild.setAttributeNS(null, 'stroke', lcolor);
        }
        
        
    }
    if(isCanvas) {
        dblcanvas.style.display = 'block';
        dblctx = dblcanvas.getContext("2d");
        
        if (isDrawing) {
            var slider = document.getElementById("myRange");
            width = slider.value;
            if(lcolor != 'None') {
                dblctx.lineWidth = width;
                dblctx.strokeStyle = lcolor;
                dblctx.stroke();
            }
            dblctx.beginPath();
            dblctx.moveTo(startX, startY + (mouseY - startY) / 2);
            dblctx.bezierCurveTo(startX, startY, mouseX, startY, mouseX, startY + (mouseY - startY) / 2);
            dblctx.bezierCurveTo(mouseX, mouseY, startX,mouseY, startX, startY + (mouseY - startY) / 2);
            dblctx.closePath();
            if(color != 'None') {
                dblctx.fillStyle = color;
                dblctx.fill(); 
            }
            
            
            
        }
    }
}


function drawRect(e) {
    
    if(isSVG) {
        svgNode.lastChild.setAttributeNS(null, 'x', startX);
        svgNode.lastChild.setAttributeNS(null, 'y', startY);
        svgNode.lastChild.setAttributeNS(null, 'width', mouseX-startX);
        svgNode.lastChild.setAttributeNS(null, 'height', mouseY-startY);
        var slider = document.getElementById("myRange");
        width = slider.value;
        svgNode.lastChild.setAttributeNS(null, 'stroke-width', width);
        if(color != 'None') {
            svgNode.lastChild.setAttributeNS(null, 'fill', color);
        }
        if(lcolor != 'None') {
            svgNode.lastChild.setAttributeNS(null, 'stroke', lcolor);
        }
    }
    if(isCanvas) {
        dblcanvas.style.display = 'block';
        dblctx = dblcanvas.getContext("2d");
        
        if (isDrawing) {
            var slider = document.getElementById("myRange");
            width = slider.value;
            dblctx.lineWidth = width;
            if(lcolor != 'None') {
                dblctx.strokeStyle = lcolor;
                dblctx.strokeRect(mouseX, mouseY, startX-mouseX, startY-mouseY);
            }
            if(color != 'None') {
                dblctx.fillStyle = color;
                dblctx.fillRect(mouseX, mouseY, startX-mouseX, startY-mouseY);
            }
            
                
        }
    }
}

function draw(e) {
    if(color === 'None') {
        return;
    }
    if(isSVG) {
        svgNode.lastChild.setAttributeNS(null, 'x1', startX);
        svgNode.lastChild.setAttributeNS(null, 'y1', startY);
        svgNode.lastChild.setAttributeNS(null, 'x2', mouseX);
        svgNode.lastChild.setAttributeNS(null, 'y2', mouseY);
        var slider = document.getElementById("myRange");
        width = slider.value;
        svgNode.lastChild.setAttributeNS(null, 'stroke-width', width);
        svgNode.lastChild.setAttributeNS(null, 'stroke', color);
        
    }

    if(isCanvas) {
        dblcanvas.style.display = 'block';
        dblctx = dblcanvas.getContext("2d");
        dblctx.strokeStyle = color;
        
        if (isDrawing) {
            var slider = document.getElementById("myRange");
            width = slider.value;
            dblctx.strokeStyle = color;
            dblctx.lineWidth = width;
            dblctx.beginPath();
            dblctx.moveTo(startX,startY);
            dblctx.lineTo(mouseX,mouseY);
            dblctx.stroke();
        }
    }

}

function onmousedown(e) {
    if(isSVG) {
        startX = e.clientX - bounds.left;
        startY = e.clientY - bounds.top;
        if(mode === 'Select' && hasLoaded && e.button === 0) {
            isDrawing = false;
            selected.setAttribute("style","filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 10))");
            shadowSet(selected);
            
        }
        if (mode === 'Circ' && hasLoaded && e.button === 0) {
            if (!isDrawing) {
                const circleNode = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
                svgNode.appendChild(circleNode);
                circleNode.draggable = true;
                isDrawing = true;
                drawCirc();
            }
        }

        if (mode === 'Draw' && hasLoaded && e.button === 0) {
            if (!isDrawing) {
                const lineNode = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                svgNode.appendChild(lineNode);
                isDrawing = true;
                lineNode.draggable = true;
                draw();
            }
        }

        if(mode === 'Rect' && hasLoaded && e.button === 0) {
            if (!isDrawing) {
                const lineNode = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                svgNode.appendChild(lineNode);
                lineNode.draggable = true;
                isDrawing = true;
                drawRect();
            }
        }
    }
    if(isCanvas) {
        if (mode === 'Draw' && hasLoaded && e.button === 0) {
            if (!isDrawing) {
                startX = e.clientX - bounds.left;
                startY = e.clientY - bounds.top;
                isDrawing = true;
                draw();
            }
        }
        if(mode === 'Rect' && hasLoaded && e.button === 0) {
            if (!isDrawing) {
                startX = e.clientX - bounds.left;
                startY = e.clientY - bounds.top;
                isDrawing = true;
                drawRect();
            }
        }
        if(mode === 'Circ' && hasLoaded && e.button === 0) {
            if (!isDrawing) {
                startX = e.clientX - bounds.left;
                startY = e.clientY - bounds.top;
                isDrawing = true;
                drawCirc();
            }
        }
    }
            
}
function onmouseup(e) {
    if(isSVG && hasLoaded && e.button === 0){
        attrs.push([colorid,lcolorid,color,lcolor,width]);
        svgNode.lastChild.setAttributeNS(null, "onclick", shadowSet(e.target));
        isDrawing = false;
    }
    if(isCanvas) {
        if (hasLoaded && e.button === 0) {   
            ctx = canvas.getContext('2d');
            ctx.drawImage(dblcanvas,0,0);   
            isDrawing = false;
            if(mode === 'Draw') {
                draw()
            }
            if(mode === 'Rect') {
                drawRect()
            }
            if(mode === 'Circ') {
                drawCirc()
            }
        }
    }
}

function onmousemove(e) {
    if(isSVG) {
        if(hasLoaded) {
            mouseX = e.clientX - bounds.left;
            mouseY = e.clientY - bounds.top;
            if(isDrawing) {
                if(mode === 'Circ') {
                    drawCirc();
                }
                if(mode === 'Draw') {
                    draw();
                }
                if(mode === 'Rect') {
                    drawRect();
                }
            }
            if(!isDrawing && mode === 'Select' && selected) {
                drag();
            }
        }
    }
    if(isCanvas) {
        dblctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        if (hasLoaded) {
            mouseX = e.clientX - bounds.left;
            mouseY = e.clientY - bounds.top;
            
            if (isDrawing) {
                if(mode === 'Draw') {
                    draw();
                }

                if(mode === 'Rect') {
                    drawRect();
                }

                if(mode === 'Circ') {
                    drawCirc();
                }

            }
        }
    }
}

window.onload = function() {
    canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth/1.5;
    canvas.height = window.innerHeight/1.5;
    canvas.style.border = 'solid 1px black';
    canvas.style.float = 'right';
    canvas.style.display = 'none';
    lcolor = 'black';
    mode = 'Draw';
    
    
    
    dblcanvas = document.getElementById('dblcanvas');
    dblcanvas.width = window.innerWidth/1.5;
    dblcanvas.height = window.innerHeight/1.5;
    dblcanvas.style.float = 'right';
    dblcanvas.style.right = 0;
    dblcanvas.style.position = 'absolute';
    dblcanvas.style.display = 'none';
    dblctx = dblcanvas.getContext('2d');


    svgc = document.getElementById("svgc");
    svgc.style.float = 'right';
    svgc.style.right = 0;
    svgc.setAttribute("width", window.innerWidth/1.5);
    svgc.setAttribute("height", window.innerHeight/1.5);
    svgc.style.position = 'absolute';
    svgc.style.display = 'none';
    svgc.appendChild(svgNode);

    canvas.style.display = 'block';
    dblcanvas.style.display = 'block';
    document.getElementById("l4").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("f4").style.boxShadow='0px 0px 0 2px blue';
    document.getElementById("d").style.boxShadow='0px 0px 0 2px blue';
    

    document.getElementById("canvas").addEventListener("mousedown",onmousedown);
    document.getElementById("canvas").addEventListener("mouseup",onmouseup);
    document.getElementById("canvas").addEventListener("mousemove",onmousemove);
    document.getElementById("dblcanvas").addEventListener("mousedown",onmousedown);
    document.getElementById("dblcanvas").addEventListener("mouseup",onmouseup);
    document.getElementById("dblcanvas").addEventListener("mousemove",onmousemove);



    bounds = canvas.getBoundingClientRect();
    ctx = canvas.getContext("2d");

    svgx(document.getElementById("first"))

    changeLBlack();
    
    hasLoaded = true;
    

}
