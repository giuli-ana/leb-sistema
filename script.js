const events = [
    { id: 1, type: "concierto", name: "Concierto de Rock", date: "2024-11-10", description: "Un concierto épico de rock." },
    { id: 2, type: "grabacion", name: "Grabación de Álbum", date: "2024-11-12", description: "Grabación de un nuevo álbum de música pop." },
    { id: 3, type: "reunion", name: "Reunión de Planificación", date: "2024-11-15", description: "Reunión para planificar el próximo evento." },
];

function filterEvents() {
    const eventType = document.getElementById("eventType").value;
    const eventDate = document.getElementById("eventDate").value;

    const filteredEvents = events.filter(event => {
        const matchesType = event.type === eventType || eventType === '';
        const matchesDate = eventDate === '' || event.date === eventDate;
        return matchesType && matchesDate;
    });

    displayEvents(filteredEvents);
}

function displayEvents(events) {
    const eventList = document.getElementById("events");
    eventList.innerHTML = ''; // Limpiar lista

    events.forEach(event => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${event.name}</strong><br>
            Tipo: ${event.type}<br>
            Fecha: ${event.date}<br>
            Descripción: ${event.description}
        `;
        eventList.appendChild(li);
    });
}

// Inicializar los eventos
displayEvents(events);

// Función para agregar nuevos eventos
document.getElementById('addEventButton').addEventListener('click', () => {
    const newEvent = {
        id: events.length + 1,
        type: 'concierto',
        name: 'Nuevo Evento',
        date: '2024-11-20',
        description: 'Descripción del nuevo evento.'
    };
    events.push(newEvent);
    displayEvents(events);
});
