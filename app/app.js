$(document).ready(function() {
    //Initializing timepicker with icon
    $('#time').timepicker({
        defaultTime: 'current',
        showSeconds: true,
        showMeridian: false
    });

    /**
     * @param appointment
     * @returns {string}
     * Method which converts passed appointment into string, I would say html in the form of string
     */
    var renderAppointment = function(appointment) {
        return '<tr><td>'+appointment.date+'</td><td>'+appointment.time+'</td><td>'+appointment.description+'</td></tr>';
    }

    /**
     * @param tableBody
     * In this method we will clear table which is being passed into this method
     */
    var clearTableBody = function(tableBody) {
        tableBody.html('');
    }

    /**
     * @param appointments
     * Here we are appending every appointment by converting each appointment to row in table body
     */
    var renderAppointments = function(appointments) {
        var appointmentsTableBody = $('#appointments');
        clearTableBody(appointmentsTableBody);
        for(var i = 0; i < appointments.length; i++) {
            appointmentsTableBody.append(renderAppointment(appointments[i]));
        }
    }

    /**
     * @param searchQuery
     * Method which sends request to backend with search query
     */
    var getAppointments = function(searchQuery) {
        $.get('/search?search='+searchQuery, function(data) {
            renderAppointments(data.appointments)
        });
    }

    //event is fired for every key types, tried to make it instant search instead of explicit button
    $('#search').keyup(function() {
        getAppointments($(this).val());
    });

    //Calling to get all appointments on document.ready
    getAppointments('');
});