// General custom JS script
(function(){
    'use strict';
    const attention = Prompt();
    window.addEventListener('load', function() {
        let forms = document.getElementsByClassName("validasi");

        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(e) {
                if (form.checkValidity() === false) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                form.classList.add('divalidasi');
            }, false);
        });
    }, false);

    // Kustom notifikasi menggunakan notie library
    function notifikasi(msg, msgType) {
        notie.alert({
            type: msgType,
            text: msg
        })
    }

    function Prompt() {
        let toast = function(c) {
            const {
                msg = "",
                icon = "success",
                position = "center",
                popup = "colored-toast",
                iconColor = "white"
            } = c;
    
            const Toast = Swal.mixin({
                toast: true,
                position: position,
                iconColor: iconColor,
                customClass: {
                  popup: popup,
                },
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
              });
              (async () => {
                await Toast.fire({
                  icon: icon,
                  title: msg,
                })
              })()
        }
    
        let success = function(c) {
            const {
                msg = "",
                title = "",
                footer = "",
            } = c;
    
            Swal.fire({
                title: title,
                text: msg,
                icon: "success",
                footer: footer
              });
        }
        let error = function(c) {
            const {
                msg = "",
                title = "",
                footer = "",
            } = c;
    
            Swal.fire({
                title: title,
                text: msg,
                icon: "error",
                footer: footer
              });
        }
    
        return {
            toast: toast,
            success: success,
            error: error
        }
    }
})()

