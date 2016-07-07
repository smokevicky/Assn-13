
var studentId = 0;
var slNo = 1;
var edit = false;
var editId = 0;

//All the Objects
    var students = [];                                                                    //array object

    var countries = [{ id: 1, name: "India" }, { id: 2, name: "Pakistan" }];        

    var states = [{ id: 1, name: "Odisha", countryId: 1 },
                  { id: 2, name: "Andaman and Nicobar Islands", countryId: 1 },
                  { id: 3, name: "Assam", countryId: 1 },
                  { id: 4, name: "Baluchistan", countryId: 2 },
                  { id: 5, name: "Punjab", countryId: 2 },
                  { id: 6, name: "Sind", countryId: 2 }];
                    
    var cities = [{ id: 1, name: "Bhubaneswar", stateId: 1 },
                  { id: 2, name: "Cuttack", stateId: 1 },
                  { id: 3, name: "Bombuflat", stateId: 2 },
                  { id: 4, name: "Port-Blair", stateId: 2 },
                  { id: 5, name: "Abhayapuri", stateId: 3 },
                  { id: 6, name: "Barkhan", stateId: 4 },
                  { id: 7, name: "Adampur", stateId: 5 },
                  { id: 8, name: "Amritsar", stateId: 5 },
                  { id: 9, name: "Adilpur", stateId: 6 },
                  { id: 10, name: "Badah", stateId: 6 }];

$(document).ready(function () {

    function addCntry(item, index) {                                                                            //Add Country Options
        $("#countySel").append("<option value='" + item.id + "'>" + item.name + "</option><br />");
    }

    function addState(item, index) {                                                                            // Add State options
        var id = $("#countySel").val();
        if (parseInt(item.countryId) == parseInt(id)) {
            $("#stateSel").append("<option value='" + item.id + "'>" + item.name + "</option><br />");
        }
    }

    function addCity(item, index) {                                                                             //Add City Options
        var id = $("#stateSel").val();
        if (parseInt(item.stateId) == parseInt(id)) {
            $("#citySel").append("<option value='" + item.id + "'>" + item.name + "</option><br />");
        }
    }

    $("#fname").keyup(function () {
        var fname = $("#fname").val();
        if (fname == "") {
            $("#fname-Grp").removeClass("has-success").addClass("has-error");
            $("#fname-Glyph").removeClass("glyphicon-ok").addClass("glyphicon-remove");
            $("#fname").attr('validated', 'false');
        }
        else {
            $("#fname-Grp").removeClass("has-error").addClass("has-success");
            $("#fname-Glyph").removeClass("glyphicon-remove").addClass("glyphicon-ok");
            $("#fname").attr('validated', 'true');
        }
    });

    $("#lname").keyup(function () {
        var lname = $("#lname").val();
        if (lname == "") {
            $("#lname-Grp").removeClass("has-success").addClass("has-error");
            $("#lname-Glyph").removeClass("glyphicon-ok").addClass("glyphicon-remove");
            $("#lname").attr('validated', 'false');
        }
        else {
            $("#lname-Grp").removeClass("has-error").addClass("has-success");
            $("#lname-Glyph").removeClass("glyphicon-remove").addClass("glyphicon-ok");
            $("#lname").attr('validated', 'true');
        }
    });

    $("div[name^='genderDiv']").click(function () {
        $("#gender-Grp").removeClass("has-error").addClass("has-success");
        $("#gender-Glyph").removeClass("glyphicon-remove").addClass("glyphicon-ok");
    });

    $("#countySel").change(function () {
        var countrySel = $("#countySel").val();
        if (countrySel == "") {
            $("#country-Grp").removeClass("has-success").addClass("has-error");
            $("#country-Glyph").removeClass("glyphicon-ok").addClass("glyphicon-remove");
            $("#countySel").attr('validated', 'false');
        }
        else {
            $("#country-Grp").removeClass("has-error").addClass("has-success");
            $("#country-Glyph").removeClass("glyphicon-remove").addClass("glyphicon-ok");
            $("#countySel").attr('validated', 'true');
        }

    });

    $("#stateSel").change(function () {
        var stateId = $("#stateSel").val();
        if (stateId == "") {
            $("#state-Grp").removeClass("has-success").addClass("has-error");
            $("#state-Glyph").removeClass("glyphicon-ok").addClass("glyphicon-remove");
            $("#stateSel").attr('validated', 'false');
        }
        else {
            $("#state-Grp").removeClass("has-error").addClass("has-success");
            $("#state-Glyph").removeClass("glyphicon-remove").addClass("glyphicon-ok");
            $("#stateSel").attr('validated', 'true');
        }
    });

    $("#citySel").change(function () {
        var cityId = $("#citySel").val();
        if (cityId == "") {
            $("#city-Grp").removeClass("has-success").addClass("has-error");
            $("#city-Glyph").removeClass("glyphicon-ok").addClass("glyphicon-remove");
            $("#citySel").attr('validated', 'false');
        }
        else {
            $("#city-Grp").removeClass("has-error").addClass("has-success");
            $("#city-Glyph").removeClass("glyphicon-remove").addClass("glyphicon-ok");
            $("#citySel").attr('validated', 'true');
        }
    });

    $("#AddNew").click(function () {
        edit = false;
        $('#AddNewModal').modal('show');
    });

    function validateForm(selector) {
        var inputField = $('#'+selector).val();
        if (!inputField && inputField.length === 0) {
            $('#' + selector).closest('.row').find('.form-group').removeClass("has-success").addClass("has-error");
            $('#' + selector).closest('div').find('.glyphicon').removeClass("glyphicon-ok").addClass("glyphicon-remove");
            return false;
        }
        else {
            $('#' + selector).closest('.row').find('.form-group').removeClass("has-error").addClass("has-success");
            $('#' + selector).closest('div').find('.glyphicon').removeClass("glyphicon-remove").addClass("glyphicon-ok");
            return true;
        }
    }

    $("#Add-Btn").click(function () {                                           //add btn click        

        if ($("#fname").attr('validated') == 'true' && $("#lname").attr('validated') == 'true' && $("#countySel").attr('validated') == 'true' &&
                $("#stateSel").attr('validated') == 'true' && $("#citySel").attr('validated') == 'true' && (validateForm('fname') == true) && 
                (validateForm('lname') == true) && (validateForm('countySel') == true) && (validateForm('stateSel') == true) && (validateForm('citySel') == true) )
        {            
            $('#AddNewModal').modal('hide');            

            if (edit == false) {

                studentId++;

                students.push(['id', studentId]);                                                   //inserting into array
                students.push(['fname', encodeURI($("#fname").val())]);
                students.push(['lname', encodeURI($("#lname").val())]);

                var gender = $("input[name='gender']:checked").val();
                students.push(['gender', encodeURI(gender)]);

                var country = $("#countySel option:selected").val();                
                students.push(['country', encodeURI(country)]);

                var state = $("#stateSel option:selected").val();                
                students.push(['state', encodeURI(state)]);

                var city = $("#citySel option:selected").val();               
                students.push(['city', encodeURI(city)]);

                $("#footer").append("<span style='color:green'> &#10004; New student added</span><br>");
            }
            else
            {
                for (var i = 0; i < students.length; i += 7) {
                    if (students[i][1] == editId) {
                        students[i + 1][1] = encodeURI($("#fname").val());
                        students[i + 2][1] = encodeURI($("#lname").val());
                        students[i + 3][1] = encodeURI($("input[name='gender']:checked").val());
                        students[i + 4][1] = encodeURI($("#countySel option:selected").val());
                        students[i + 5][1] = encodeURI($("#stateSel option:selected").val());
                        students[i + 6][1] = encodeURI($("#citySel option:selected").val());
                    }
                }

                $("#footer").append("<span style='color:blue'> &#10007; 1 student detail updated</span><br>");
            }

            resetGrid();
        }
        else {
            validateForm('fname');
            validateForm('lname');
            validateForm('countySel');
            validateForm('stateSel');
            validateForm('citySel');
        }
    });                                    

    function update(id, fname, lname, gender, country, state, city) {

        for (var i = 0; i < countries.length; i++) {
            if (countries[i].id == country) {
                country = countries[i].name;
            }
        }

        for (var i = 0; i < states.length; i++) {
            if (states[i].id == state) {
                state = states[i].name;
            }
        }

        for (var i = 0; i < cities.length; i++) {
            if (cities[i].id == city) {
                city = cities[i].name;
            }
        }

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
            var fname = i + 1;
            var lname = i + 2;
            var gender = i + 3;
            var country = i + 4;
            var state = i + 5;
            var city = i + 6;
            update(students[i][1], students[fname][1], students[lname][1], students[gender][1], students[country][1], students[state][1], students[city][1]);     //data print
        }
    }                                                                                                    

    function clearModal() {
        $("#fname").val("");
        $("#fname-Grp").removeClass("has-success has-error");
        $("#fname-Glyph").removeClass("glyphicon-ok glyphicon-remove");

        $("#lname").val("");
        $("#lname-Grp").removeClass("has-success has-error");
        $("#lname-Glyph").removeClass("glyphicon-ok glyphicon-remove");

        $("#gender-Grp").removeClass("has-success has-error");
        $("#gender-Glyph").removeClass("glyphicon-ok glyphicon-remove");

        $("#country-Glyph").removeClass("glyphicon-ok").removeClass("glyphicon-remove");
        $("#country-Grp").removeClass("has-success").removeClass("has-error");

        $("#state-Glyph").removeClass("glyphicon-ok").removeClass("glyphicon-remove");
        $("#state-Grp").removeClass("has-success").removeClass("has-error");

        $("#city-Glyph").removeClass("glyphicon-ok").removeClass("glyphicon-remove");
        $("#city-Grp").removeClass("has-success").removeClass("has-error");
    }                                                                               //clear Modal

    $("#Add-Cancel").click(function () {                                                                    //cancel btn click
        $('#AddNewModal').modal('hide');
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
                var fname = i + 1;                               
                var lname = i + 2;                               
                var gender = i + 3;                              
                var country = i + 4;                             
                var state = i + 5;                               
                var city = i + 6;                                
                                                             
                $("#fname").val(students[fname][1]);         
                $("#lname").val(students[lname][1]);


                if (students[gender][1] == "male")
                {
                    $('#male').prop('checked', true).parent().click();
                }
                else if (students[gender][1] == "female")
                {
                    $('#female').prop('checked', true).parent().click();                    
                }
                else {
                    $('#others').prop('checked', true).parent().click();                    
                }
                $("#gender-Glyph").removeClass("glyphicon-ok");

                $("#countySel").val(students[country][1]).change();              
                $("#country-Glyph").removeClass("glyphicon-ok");
                $("#country-Grp").removeClass("has-success");

                $("#stateSel").val(students[state][1]).change();
                $("#state-Glyph").removeClass("glyphicon-ok");
                $("#state-Grp").removeClass("has-success");

                $("#citySel").val(students[city][1]);
                $("#city-Glyph").removeClass("glyphicon-ok");
                $("#city-Grp").removeClass("has-success");
            }                                                
        }               
    });

    $('#AddNewModal').on('show.bs.modal', function ()
    {
        clearModal();

        $('#male').parent().click();
        $("#gender-Glyph").removeClass("glyphicon-ok");

        if (edit == true) {
            $("#Add-Btn").text("Update");

            $("#fname").attr('validated', 'true');
            $("#lname").attr('validated', 'true');
            $("#countySel").attr('validated', 'true');
            $("#stateSel").attr('validated',  'true');
            $("#citySel").attr('validated',   'true');
        }
        else {
            $("#Add-Btn").text("Add");

            $("#countySel").empty().html("<option value=''>Select Country</option>");            
            countries.forEach(addCntry);
            $("#country-Glyph").removeClass("glyphicon-ok").removeClass("glyphiuecon-remove");
            $("#country-Grp").removeClass("has-success").removeClass("has-error");

            $("#stateSel").empty().html("<option value=''>Select State</option>");
            $("#citySel").empty().html("<option value=''>Select City</option>");

            $("#state-Glyph").removeClass("glyphicon-ok").removeClass("glyphicon-remove");
            $("#state-Grp").removeClass("has-success").removeClass("has-error");

            $("#city-Glyph").removeClass("glyphicon-ok").removeClass("glyphicon-remove");
            $("#city-Grp").removeClass("has-success").removeClass("has-error");

            $("#fname").attr('validated', 'false');
            $("#lname").attr('validated', 'false');
            $("#countySel").attr('validated', 'false');
            $("#stateSel").attr('validated', 'false');
            $("#citySel").attr('validated', 'false');
        }
    });

    $('#AddNewModal').on('shown.bs.modal', function () {
        $("#fname").focus();        
    });
    
    $(document).on("change", "#countySel", function () {
        $("#stateSel").empty().html("<option value=''>Select State</option>");
        $("#citySel").empty().html("<option value=''>Select City</option>");
        states.forEach(addState);
    });

    $(document).on("change", "#stateSel", function () {

        $("#citySel").empty().html("<option value=''>Select City</option>");
        cities.forEach(addCity);
    });

});
