"use strict";

class TableTemplate {
    static fillIn(id, dictionary, columnName) {
        var table = document.getElementById(id);
        var row = table.getElementsByTagName("tr");
        var first = row[0];
        var column = table.getElementsByTagName("td");
        var select;
        var i, templateProcessor;
        var proc;
        if (columnName  === undefined) {
            templateProcessor = new Cs142TemplateProcessor(table.innerHTML);
            table.innerHTML = templateProcessor.fillIn(dictionary);
        }
        else {
            templateProcessor = new Cs142TemplateProcessor(first.innerHTML);
            first.innerHTML = templateProcessor.fillIn(dictionary);
                for (i=0; i < column.length; i++) {
                    if (column[i].innerHTML === columnName) {
                        select = i;
                    }
                }
                if (select >= 0) {
                    for (i=1; i < row.length; i++) {
                        proc = row[i].getElementsByTagName("td");
                        templateProcessor = new Cs142TemplateProcessor(proc[select].innerHTML);
                        proc[select].innerHTML = templateProcessor.fillIn(dictionary);
                    }
                }
        }
        if(table.style.visibility === "hidden") {
            table.style.visibility = "visible";
        }
    }
}