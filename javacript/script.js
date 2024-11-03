const months = ["JUL", "AGO", "SEP", "OCT", "NOV"];
        let currentMonth = 0;
        let intervalId;

        // Función para cambiar el mes y aplicar animación
        function changeMonth() {
            const calendar = document.getElementById("calendar");

            // Aplica la animación
            calendar.classList.add("flip");

            // Cambia el mes después de que la animación llegue a 50%
            setTimeout(() => {
                currentMonth += 1;
                document.getElementById("calendar-month").textContent = months[currentMonth];
            }, 500); // Cambia el texto en la mitad de la animación (0.5 segundos)

            // Remueve la animación después de que se complete para que se pueda volver a aplicar
            setTimeout(() => {
                calendar.classList.remove("flip");
            }, 1000);

            // Si llega a noviembre, detener el intervalo
            if (currentMonth === months.length - 1) {
                clearInterval(intervalId);
            }
        }

        // Cambia de mes cada 3 segundos
        intervalId = setInterval(changeMonth, 3000);