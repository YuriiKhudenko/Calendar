

window.onload = function () {

    var calendar = document.getElementById('calendar-wrap');


    var div = document.createElement("div");
    div.className = "add-event-wrap";
    div.innerHTML = "<div class='inputs-wrap'><span class='close' id='close-button'>+</span><form action='#'><input type='text' placeholder='Событие' id='ev'><input type='text' placeholder='День, месяц, год' id='dat'><input type='text' placeholder='Имена участников' id='names'><textarea id='descript' placeholder='Описание' cols='30' rows='6'></textarea><div class='buttons-wrap'><button type='submit' id='add'>Готово</button><button type='reset'>Удалить</button> </form></div> </div>";

    calendar.onclick = function(event) {
        var target = event.target;
        while (target != this) {
            if (target.classList.contains('calendar-day')) {
                target.insertBefore(div, target.children[0]);

                document.getElementById('add').onclick = function () {
                    var ev =  document.getElementById('ev').value;
                    var dat =  document.getElementById('dat').value;
                    var names =  document.getElementById('names').value;
                    var descript =  document.getElementById('descript').value;

                    var newEvent = target.getElementsByClassName('event-name');
                    var member = target.getElementsByClassName('member');
                    var description = target.getElementsByClassName('description');

                    for(var i = 0; i < newEvent.length; i++) {
                        var res = newEvent[i];

                    }
                    for(var a = 0; a < member.length; a++) {
                        var res1 = member[a];

                    }
                    for(var q = 0; q < description.length; q++) {
                        var res2 = description[q];

                    }

                    res.innerHTML = ev;
                    res1.innerHTML = names;
                    res2.innerHTML = descript;
                    div.remove();

                    for(var e = 0; e < newEvent.length; e++) {
                        var ress = newEvent[e];
                        var r = ress.textContent;
                    }

                    if (r.length >= 1) {
                        target.classList.add('added-event');
                    } else {
                        target.classList.remove('added-event');
                    }
                };

                document.getElementById('close-button').onclick = function () {
                    div.remove();

                };
                break;
            }
            if (target.classList.contains('add-event-wrap')) {
                break;
            }
            target = target.parentNode;
        }
    };

};






