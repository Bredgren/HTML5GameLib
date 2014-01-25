///<reference path="./gamelib/references.ts"/>
///<reference path="./jquery.d.ts"/>

window.onload = () => {
    var content = $('#content');
    var top_list = $('<ol>');
    content.append(top_list);

    top_list.append(getListItem("Vector", testVector()));
    top_list.append(getListItem("Color", testColor()));
    top_list.append(getListItem("Entity", testEntity()));
};

function getListItem(title: string, errors: string[]): JQuery {
    var outer_item = $('<li>');
    var title_item = $('<div>');
    if (errors.length > 0) {
        title += " - " + errors.length + " errors";
        title_item.addClass('failed');
    } else {
        title_item.addClass('success');
    }
    title_item.append(title);
    outer_item.append(title_item);
    var inner_list = $('<ul>');
    for (var i = 0; i < errors.length; i++) {
        var inner_item = $('<li>');
        inner_item.html(errors[i]);
        inner_list.append(inner_item);
    }
    outer_item.append(inner_list);
    return outer_item;
}

function testVector(): string[] {
    var Vector = HTML5GameLib.Vector;
    var errors: string[] = [];

    function newVector(name: string, x: number, y: number): HTML5GameLib.Vector {
        var v = new Vector(x, y);
        confirmVector(v, name, x, y);
        return v;
    }

    function confirmVector(v: HTML5GameLib.Vector, name: string, x: number, y: number) {
        confirm("" + name + ".x()", v.x(), x);
        confirm("" + name + ".y()", v.y(), y);
    }

    function confirm(what: string, actual: any, expected: any) {
        if (expected !== actual) {
            errors.push("" + what + " is '" + actual + "', expected '" + expected + "'");
        }
    }
   
    var v1 = newVector("v1", 3, 4);
    confirm("v1.length()", v1.length(), 5);
    var s1 = v1.scale(5);
    confirmVector(s1, "s1", 15, 20);

    var v2 = newVector("v2", 5, 6);
    var s2 = v2.scale(3);
    confirmVector(s2, "s2", 15, 18);

    var p12 = v1.plus(v2);
    confirmVector(p12, "(v1+v2)", 8, 10);
    var p21 = v2.plus(v1);
    confirmVector(p21, "(v2+v1)", 8, 10);

    var m12 = v1.minus(v2);
    confirmVector(m12, "(v1-v2)", -2, -2);
    var m21 = v2.minus(v1);
    confirmVector(m21, "(v2-v1)", 2, 2);

    var s12 = v1.scaleVector(v2);
    confirmVector(s12, "(v1*v2)", 15, 24);
    var s21 = v2.scaleVector(v1);
    confirmVector(s21, "(v2*v1)", 15, 24);

    var v3 = newVector("v3", 7, 0);
    var n3 = v3.normalized();
    confirmVector(n3, "n3", 1, 0);

    var v4 = newVector("v4", 0, 0.1);
    var n4 = v4.normalized();
    confirmVector(n4, "n4", 0, 1);

    confirm("v1.toString()", v1.toString(), "(3, 4)");

    var v5 = Vector.ZERO_VECTOR;
    var n5 = v5.normalized();
    confirmVector(n5, "n5", 0, 0);

    return errors;
}

function testColor() {
    var errors: string[] = [];
    errors.push("oi enfoea nsotien aifetn at");
    errors.push("oie rsnset fetntru ntn");
    return errors;
}

function testEntity() {
    var errors: string[] = [];
    errors.push("Eftn teor  rtf fa roset ");
    errors.push("OOTFT  rst ft st faou");
    return errors;
}