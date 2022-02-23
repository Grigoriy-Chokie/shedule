let week = document.querySelector('.wrapper');
let dayMon = document.querySelector('#monday');
let dayTue = document.querySelector('#tuesday');
let dayWed = document.querySelector('#wednesday');
let dayThur = document.querySelector('#thursday');
let dayFrid = document.querySelector('#friday');

fetch('/data.json')
    .then(response => response.json())
    .then(function (data) {
        lessonDay(data);
    })
    .catch(function (error) {
        console.log('error', error)
    });

function lessonDay(data) {
    let subjects = data.subjects;
    subjects.forEach(e => {
        if(e.dayOfWeek == "Пн"){
            let li = document.createElement("li");
            li.classList.add('subject');
            li.innerHTML = "<div class='time'>"+ e.time +"</div>" + "<div class='name'>" + e.name + "</div>" + "<div class='lecturer'>" + e.lecturer + "</div>" + "<div class='cabinet'>" + e.cabinet + "</div>";
            dayMon.appendChild(li);
        }

        if(e.dayOfWeek == "Вт"){
            let li = document.createElement("li");
            li.classList.add('subject');
            li.innerHTML = "<div class='time'>"+ e.time +"</div>" + "<div class='name'>" + e.name + "</div>" + "<div class='lecturer'>" + e.lecturer + "</div>" + "<div class='cabinet'>" + e.cabinet + "</div>";
            dayTue.appendChild(li);
        }

        if(e.dayOfWeek == "Ср"){
            let li = document.createElement("li");
            li.classList.add('subject');
            li.innerHTML = "<div class='time'>"+ e.time +"</div>" + "<div class='name'>" + e.name + "</div>" + "<div class='lecturer'>" + e.lecturer + "</div>" + "<div class='cabinet'>" + e.cabinet + "</div>";
            dayWed.appendChild(li);
        }

        if(e.dayOfWeek == "Чт"){
            let li = document.createElement("li");
            li.classList.add('subject');
            li.innerHTML = "<div class='time'>"+ e.time +"</div>" + "<div class='name'>" + e.name + "</div>" + "<div class='lecturer'>" + e.lecturer + "</div>" + "<div class='cabinet'>" + e.cabinet + "</div>";
            dayThur.appendChild(li);
        }

        if(e.dayOfWeek == "Пт"){
            let li = document.createElement("li");
            li.classList.add('subject');
            li.innerHTML = "<div class='time'>"+ e.time +"</div>" + "<div class='name'>" + e.name + "</div>" + "<div class='lecturer'>" + e.lecturer + "</div>" + "<div class='cabinet'>" + e.cabinet + "</div>";
            dayFrid.appendChild(li);
        }
    });
    
    
}