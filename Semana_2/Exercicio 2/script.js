addEventListener("load", 
    function relogio(){
        let data = new Date();
        let horas = data.getHours();
        let minutos = data.getMinutes();
        let segundos = data.getSeconds();
        document.write(`${horas} : ${minutos} : ${segundos}`);

        setTimeout(() => {
            location.reload();
        }, 1000
    );
    }  
);

