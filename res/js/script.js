$(function () {

    let user = new User('Jane',
                        'Doe',
                        '17/01/1990',
                        'Faculty of Science and Technology',
                        4.5
        );

    let courses = [
        new Course('Machine Learning',1,99),
        new Course('Business Data Analytics',1,91),
        new Course('Programming Languages',2,95),
        new Course('School Software',2,81)
    ];

    init(); //initialize dynamical population

    function init() {

        //user information:
        $("#name").text(user.firstname+" "+user.lastname);
        $("#birthdate").text(user.birthdate);
        $("#faculty").text(user.faculty);
        $("#gpa strong").text(user.gpa);

        //courses table:
        $("#courses tbody").empty();
        for (let i = 0; i < courses.length; i++) {
            let rowNo = $('<td></td>').text(i+1);
            let courseName = $('<td></td>').text(courses[i].title);
            let courseSemester = $('<td></td>').text(courses[i].semester);
            let courseGrade = $('<td></td>').text(courses[i].grade);

            let tr = $("<tr></tr>");

            tr.append(rowNo);
            tr.append(courseName);
            tr.append(courseSemester);
            tr.append(courseGrade);

            $("#courses tbody").append(tr);
        }

        $("#profile-button").click(function (event) {
            $("#profile-container").addClass('active');
            $("#profile-button").addClass('active');
            $("#courses-container").removeClass('active');
            $("#courses-button").removeClass('active');

        });

        $("#courses-button").click(function (event) {
            $("#courses-container").addClass('active');
            $("#courses-button").addClass('active');
            $("#profile-container").removeClass('active');
            $("#profile-button").removeClass('active');

        });

        $("#add-course-button").click(function (event) {
            $("#add-course").toggle();

        });

        $("#save-course").click(function (event) {
            let number = $('#courses tr').length;
            let title = $('#title').val();
            let semester = $('#semester').val();
            let grade = $('#grade').val();

            let table = $("#courses").find('tbody');

            table.append($('<tr>'));
            table.append($('<td>').text(number));
            table.append($('<td>').text(title));
            table.append($('<td>').text(semester));
            table.append($('<td>').text(grade));

            $('.input').val('');
            $('#add-course').hide();

        });


    }





});