
var studentId = 0;
var slNo = 1;
var edit = false;
var editId = 0;
var students = [];                                              //array object




     



    var countryStateInfo = {                                                            //countryStateCity Object
        "India": {

            "Odisha": ["Bhubaneswar", "Bolangir", "Cuttack"],
            "Andaman and Nicobar Islands": ["Bombuflat", "Port-Blair"],
            "Assam": ["Abhayapuri", "Ambikapur"],
            "West Bengal": ["Kharagpur", "Kolkata"]
        },
        "Pakistan": {
            "Baluchistan": ["Barkhan"],
            "Punjab": ["Adampur", "Amritsar"],
            "Sind": ["Adilpur", "Badah"]
        }
    }

$(document).ready(function () {

    var isAddValidated = 0;


    //Javascript for Country
    var countySel = document.getElementById("countySel");
    var stateSel = document.getElementById("stateSel");
    var citySel = document.getElementById("citySel");

    for (var country in countryStateInfo) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }

    countySel.onchange = function () {

        stateSel.length = 1; // remove all options bar first
        citySel.length = 1; // remove all options bar first

        if (this.selectedIndex < 1)
            return; // done

        for (var state in countryStateInfo[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }

    stateSel.onchange = function () {

        citySel.length = 1; // remove all options bar first

        if (this.selectedIndex < 1)
            return; // done

        var city = countryStateInfo[countySel.value][this.value];
        for (var i = 0; i < city.length; i++) {
            citySel.options[citySel.options.length] = new Option(city[i], city[i]);
        }
    }
    //end


    $("#fname").keyup(function () {
        var fname = $("#fname").val();
        if (fname == "") {
            $("#fname-Grp").removeClass("has-success");
            $("#fname-Glyph").removeClass("glyphicon-ok");
            $("#fname-Grp").addClass("has-error");
            $("#fname-Glyph").addClass("glyphicon-remove");
            isAddValidated = 0;
        }
        else {
            $("#fname-Grp").removeClass("has-error");
            $("#fname-Glyph").removeClass("glyphicon-remove");
            $("#fname-Grp").addClass("has-success");
            $("#fname-Glyph").addClass("glyphicon-ok");
            isAddValidated++;
        }
    });

    $("#lname").keyup(function () {
        var lname = $("#lname").val();
        if (lname == "") {
            $("#lname-Grp").removeClass("has-success");
            $("#lname-Glyph").removeClass("glyphicon-ok");
            $("#lname-Grp").addClass("has-error");
            $("#lname-Glyph").addClass("glyphicon-remove");
            isAddValidated = 0;
        }
        else {
            $("#lname-Grp").removeClass("has-error");
            $("#lname-Glyph").removeClass("glyphicon-remove");
            $("#lname-Grp").addClass("has-success");
            $("#lname-Glyph").addClass("glyphicon-ok");
            isAddValidated++;
        }
    });

    $("div[name^='genderDiv']").click(function () {
        $("#gender-Grp").removeClass("has-error");
        $("#gender-Glyph").removeClass("glyphicon-remove");
        $("#gender-Grp").addClass("has-success");
        $("#gender-Glyph").addClass("glyphicon-ok");
        isAddValidated++;
    });

    $("#countySel").change(function () {
        var countrySel = $("#countySel").val();
        if (countrySel == "") {
            $("#country-Grp").removeClass("has-success");
            $("#country-Glyph").removeClass("glyphicon-ok");
            $("#country-Grp").addClass("has-error");
            $("#country-Glyph").addClass("glyphicon-remove");
            isAddValidated = 0;
        }
        else {
            $("#country-Grp").removeClass("has-error");
            $("#country-Glyph").removeClass("glyphicon-remove");
            $("#country-Grp").addClass("has-success");
            $("#country-Glyph").addClass("glyphicon-ok");
            isAddValidated++;
        }

    });

    $("#countySel").click(function () {
        var countrySel = $("#countySel").val();
        if (countrySel == "") {
            $("#country-Grp").removeClass("has-success");
            $("#country-Glyph").removeClass("glyphicon-ok");
            $("#country-Grp").addClass("has-error");
            $("#country-Glyph").addClass("glyphicon-remove");
            isAddValidated = 0;
        }
        else {
            $("#country-Grp").removeClass("has-error");
            $("#country-Glyph").removeClass("glyphicon-remove");
            $("#country-Grp").addClass("has-success");
            $("#country-Glyph").addClass("glyphicon-ok");
            isAddValidated++;
        }

    });

    $("#stateSel").change(function () {
        var stateId = $("#stateSel").val();
        if (stateId == "") {
            $("#state-Grp").removeClass("has-success");
            $("#state-Glyph").removeClass("glyphicon-ok");
            $("#state-Grp").addClass("has-error");
            $("#state-Glyph").addClass("glyphicon-remove");
            isAddValidated = 0;
        }
        else {
            $("#state-Grp").removeClass("has-error");
            $("#state-Glyph").removeClass("glyphicon-remove");
            $("#state-Grp").addClass("has-success");
            $("#state-Glyph").addClass("glyphicon-ok");
            isAddValidated++;
        }
    });

    $("#stateSel").click(function () {
        var stateId = $("#stateSel").val();
        if (stateId == "") {
            $("#state-Grp").removeClass("has-success");
            $("#state-Glyph").removeClass("glyphicon-ok");
            $("#state-Grp").addClass("has-error");
            $("#state-Glyph").addClass("glyphicon-remove");
            isAddValidated = 0;
        }
        else {
            $("#state-Grp").removeClass("has-error");
            $("#state-Glyph").removeClass("glyphicon-remove");
            $("#state-Grp").addClass("has-success");
            $("#state-Glyph").addClass("glyphicon-ok");
            isAddValidated++;
        }
    });

    $("#citySel").change(function () {
        var cityId = $("#citySel").val();
        if (cityId == "") {
            $("#city-Grp").removeClass("has-success");
            $("#city-Glyph").removeClass("glyphicon-ok");
            $("#city-Grp").addClass("has-error");
            $("#city-Glyph").addClass("glyphicon-remove");
            isAddValidated = 0;
        }
        else {
            $("#city-Grp").removeClass("has-error");
            $("#city-Glyph").removeClass("glyphicon-remove");
            $("#city-Grp").addClass("has-success");
            $("#city-Glyph").addClass("glyphicon-ok");
            isAddValidated++;
        }
    });

    $("#citySel").click(function () {
        var cityId = $("#citySel").val();
        if (cityId == "") {
            $("#city-Grp").removeClass("has-success");
            $("#city-Glyph").removeClass("glyphicon-ok");
            $("#city-Grp").addClass("has-error");
            $("#city-Glyph").addClass("glyphicon-remove");
            isAddValidated = 0;
        }
        else {
            $("#city-Grp").removeClass("has-error");
            $("#city-Glyph").removeClass("glyphicon-remove");
            $("#city-Grp").addClass("has-success");
            $("#city-Glyph").addClass("glyphicon-ok");
            isAddValidated++;
        }
    });

    $("#AddNew").click(function () {
        edit = false;
        $('#AddNewModal').modal('show');
    });

    $("#Add-Btn").click(function () {                                           //add btn click
        isAddValidated = 0;
        studentId++;

        $("#fname").keyup();                                        //form Validation
        $("#lname").keyup();
        $("#countySel").click();
        $("#stateSel").click();
        $("#citySel").click();

        //isAddValidated = 5;                                         //enable/disable modal validation

        
        if (isAddValidated == 5) {
            if (edit == false) {                
                $('#AddNewModal').modal('hide');

                students.push(['id', studentId]);                                                    //inserting into array
                students.push(['fname', $("#fname").val()]);            
                students.push(['lname', $("#lname").val()]);
                var gender = $("input[name='gender']:checked").val();
                students.push(['gender', gender]);
                var country = $("#countySel option:selected").text();
                students.push(['country', country]);
                var state = $("#stateSel option:selected").text();
                students.push(['state', state]);
                var city = $("#citySel option:selected").text();
                students.push(['city', city]);

                resetGrid();
                $("#footer").append("<span style='color:green'> &#10004; New student added</span><br>");
            }
            else {                
                $('#AddNewModal').modal('hide');

                for (var i = 0; i < students.length; i += 7) {
                    if (students[i][1] == editId) {
                        students.splice(i, 7);
                    }
                }

                students.push(['id', studentId]);                                                   //inserting into array
                students.push(['fname', $("#fname").val()]);            
                students.push(['lname', $("#lname").val()]);
                var gender = $("input[name='gender']:checked").val();
                students.push(['gender', gender]);
                var country = $("#countySel option:selected").text();
                students.push(['country', country]);
                var state = $("#stateSel option:selected").text();
                students.push(['state', state]);
                var city = $("#citySel option:selected").text();
                students.push(['city', city]);

                resetGrid();
                $("#footer").append("<span style='color:blue'> &#10007; 1 student detail updated</span><br>");
            }
        }
       
    });                                    

    function update(id, fname, lname, gender, country, state, city) {
        $("#studentGrid").append("<li class='list-group-item'> \
                <div class='row'>\
                    <div class='col-sm-1 id hidden'>"+ id +"</div>\
                    <div class='col-sm-1'>" + slNo++ + "</div>\
                    <div class='col-sm-2'>\
                        "+ fname + "\
                    </div>\
                    <div class='col-sm-2'>\
                        "+ lname + "\
                    </div>\
                    <div class='col-sm-1'>\
                        "+ gender +" \
                    </div>\
                    <div class='col-sm-1'>\
                        "+ country +"\
                    </div>\
                    <div class='col-sm-2'>\
                        "+ state +"\
                    </div>\
                    <div class='col-sm-1'>\
                        "+ city +"\
                    </div>\
                    <div class='col-sm-1'>\
                        <button class='btn btn-warning edit'>Edit</button>\
                    </div>\
                    <div class='col-sm-1'>\
                        <button class='btn btn-danger delete'>Delete</button>\
                    </div>\
                </div>\
                </li> \
    ");        
    }

    function resetGrid() {
        slNo = 1;
        //printing header
        $("#studentGrid").html("<li class='list-group-item list-group-item-danger'> \
                 <div class='row'>\
                    <div class='col-sm-1 hidden'>\
                        StudentId\
                    </div>\
                    <div class='col-sm-1'>\
                        Sl. No.\
                    </div>\
                    <div class='col-sm-2'>\
                        First Name\
                    </div>\
                    <div class='col-sm-2'>\
                        Last Name\
                    </div>\
                    <div class='col-sm-1'>\
                        Gender \
                    </div>\
                    <div class='col-sm-1'>\
                        Country\
                    </div>\
                    <div class='col-sm-2'>\
                        State\
                    </div>\
                    <div class='col-sm-1'>\
                        City\
                    </div>\
                    <div class='col-sm-1'>\
                        Edit\
                    </div>\
                    <div class='col-sm-1'>\
                        Delete\
                    </div>\
                </div>\
                </li>");
        for (var i = 0; i < students.length; i += 7) {
            i1 = i + 1;
            i2 = i + 2;
            i3 = i + 3;
            i4 = i + 4;
            i5 = i + 5;
            i6 = i + 6;
            update(students[i][1], students[i1][1], students[i2][1], students[i3][1], students[i4][1], students[i5][1], students[i6][1]);     //data print
        }
    }

    function valueReset(id) {
        $("#" + id).prop('selectedIndex', 0);                                                             //dropdown reset
    }                                                                                                  

    function clearModal() {
        $("#fname").val("");
        $("#fname-Grp").removeClass("has-success");
        $("#fname-Glyph").removeClass("glyphicon-ok");
        $("#fname-Grp").removeClass("has-error");
        $("#fname-Glyph").removeClass("glyphicon-remove");
        $("#lname").val("");
        $("#lname-Grp").removeClass("has-success");
        $("#lname-Glyph").removeClass("glyphicon-ok");
        $("#lname-Grp").removeClass("has-error");
        $("#lname-Glyph").removeClass("glyphicon-remove");
        valueReset("countySel");
        valueReset("stateSel");
        valueReset("citySel");
        $("#gender-Grp").removeClass("has-success");
        $("#gender-Glyph").removeClass("glyphicon-ok");
        $("#gender-Grp").removeClass("has-error");
        $("#gender-Glyph").removeClass("glyphicon-remove");
        $("#country-Grp").removeClass("has-success");
        $("#country-Glyph").removeClass("glyphicon-ok");
        $("#country-Grp").removeClass("has-error");
        $("#country-Glyph").removeClass("glyphicon-remove");
        $("#state-Grp").removeClass("has-success");
        $("#state-Glyph").removeClass("glyphicon-ok");
        $("#state-Grp").removeClass("has-error");
        $("#state-Glyph").removeClass("glyphicon-remove");
        $("#city-Grp").removeClass("has-success");
        $("#city-Glyph").removeClass("glyphicon-ok");
        $("#city-Grp").removeClass("has-error");
        $("#city-Glyph").removeClass("glyphicon-remove");

    }                                                                               //clear Modal


    $("#Add-Cancel").click(function () {                                                                    //cancel btn click
        $('#AddNewModal').modal('hide');
        //clearModal();
        $("#footer").append("<span style='color:red'> &#10007; No new student added/edited</span><br>");
    });                                
    
    $(document).on("click", ".delete", function () {
        if (confirm('Are you sure you want to delete the record ?')) {
            var id = $(this).closest('li').find("div.id").text();
            for (var i = 0; i < students.length; i += 7) {
                if (students[i][1] == id) {
                    students.splice(i, 7);
                }
            }

            $("#footer").append("<span style='color:red'> &#10007; 1 student deleted</span><br>");
            $(this).closest('li').remove();

            resetGrid();
        }
    });

    $(document).on("click", ".edit", function () {

        var id = $(this).closest('li').find("div.id").text();

        edit = true;
        editId = id;
        $('#AddNewModal').modal('show');

        for (var i = 0; i < students.length; i += 7) {       
            if (students[i][1] == id) {                      
                fname = i + 1;                               
                lname = i + 2;                               
                gender = i + 3;                              
                country = i + 4;                             
                state = i + 5;                               
                city = i + 6;                                
                                                             
                $("#fname").val(students[fname][1]);         
                $("#lname").val(students[lname][1]);


                if (students[gender][1] == "male")
                {
                    $('#male').prop('checked', true);
                    $('#male').parent().click();
                }
                else if (students[gender][1] == "female")
                {
                    $('#female').prop('checked', true);
                    $('#female').parent().click();
                }
                else {
                    $('#others').prop('checked', true);
                    $('#others').parent().click();
                }
                $("#gender-Glyph").removeClass("glyphicon-ok");

                $("#countySel").val(students[country][1].toString());
                $("#countySel").change();
                $("#country-Glyph").removeClass("glyphicon-ok");
                $("#country-Grp").removeClass("has-success");

                $("#stateSel").val(students[state][1].toString());
                $("#stateSel").change();
                $("#state-Glyph").removeClass("glyphicon-ok");
                $("#state-Grp").removeClass("has-success");

                $("#citySel").val(students[city][1].toString());
            }                                                
        }               
    });

    $('#AddNewModal').on('show.bs.modal', function () {
        clearModal();

        if (edit == true) {
            $("#Add-Btn").text("Update");
        }
        else {
            $("#Add-Btn").text("Add");
        }

        $('#male').parent().click();
        $("#gender-Glyph").removeClass("glyphicon-ok");

        if (edit == false) {
            $("#countySel").selectedIndex = 0;
            $("#countySel").change();
            $("#country-Glyph").removeClass("glyphicon-remove");
            $("#country-Grp").removeClass("has-error");

            $("#stateSel").selectedIndex = 0;
            $("#stateSel").change();
            $("#state-Glyph").removeClass("glyphicon-remove");
            $("#state-Grp").removeClass("has-error");
        }
    });

    $('#AddNewModal').on('shown.bs.modal', function () {
        $("#fname").focus();
        
    });





  
});
