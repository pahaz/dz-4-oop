﻿
/**
 * Модель для класса Event.
 * 
 * @constructor
 * @param {Object} info Обект, описывающий общую информацию о мероприятии (место проведения, название, описание, временные рамки).
 */
var Event = new Model({
    'default': {
        title: "event",
        go: false
    },
    'constructor': function (info) {
        this.update(info);
    },
    'errors': function (name) {
        if (!this.get('start_time') || !this.get('end_time')) {
            return "miss required fields";
        }
        if (this.get('start_time') > this.get('end_time')) {
            return "starat_time more then end_time";
        }
        return null;
    }
});

/**
 * Создает объект Event
 *
 * @param {Number|Date} start_at             Начало события
 * @param {Number|Date} end_at               Конец события
 * @param {String}      [name="Событие"]  Имя события
 *
 * @example
 *    Event(new Date("2011-10-10T14:48:00"),
 *          new Date("2011-10-10T15:48:00"),
 *          "Совещание")
 *
 * @return {Object}
 */
function createNewEvent(start_at, end_at, name, go) {
    var info = {
        start_time: start_at,
        end_time: end_at,
        name: name
    };
    if (go) {
        info.go = true;
    }

    return new Event(info);
}


function ModelTests() {
    var a = createNewEvent(222, 333, 'lol');
}
ModelTests();
