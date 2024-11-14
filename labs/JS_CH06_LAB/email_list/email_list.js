const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
    
        // create an error message and set it to an empty string
        let errorMessage = "";

        // check user entries - add text to error message if invalid
        if (email1.value == "") { 
            errorMessage += "First email is required.\n";
            $("#email_1_error").innerHTML = "Enter an email"
        }
    
        if (email2.value == "") { 
            errorMessage += "Second email is required.\n";
            $("#email_2_error").innerHTML = "Enter an email"
        }
    
        if (email1.value != email2.value) { 
            errorMessage += "Both emails must match.\n";
            $("#email_2_error").innerHTML = "Must match first email"
        }
    
        if (firstName.value == "") {
            errorMessage += "First name is required.\n";
            $("#f_name").innerHTML = "Enter a proper name"
        }
    
        // submit the form if error message is an empty string
        if (errorMessage == "") {
            $("#email_form").submit();
        } else {
            alert(errorMessage);            
        }
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});