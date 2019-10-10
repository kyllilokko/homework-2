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




    }





});