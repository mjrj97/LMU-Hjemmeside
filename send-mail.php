<?php
    // Replace this with your own email address
    $to="formand@odenselmu.dk";

    // Extract form contents
    $name = $_POST['realname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate email address
    function valid_email($str) {
        return ( ! preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $str)) ? FALSE : TRUE;
    }

    // Return errors if present
    $errors = "";

    if($name =='') { $errors .= "name,"; }
    if(valid_email($email)==FALSE) { $errors .= "email,"; }
    if($message =='') { $errors .= "message,"; }

    // Send email
    if($errors =='') {
        header('Location: index.html');
        $headers =  'From: Kontakt formular <no-reply@odenselmu.dk>'. "\r\n" .
                    'Reply-To: '.$email.'' . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();
        $email_subject = "Besked fra: $email";
        $message="Name: $name \n\nEmail: $email \n\nMessage: $message";
        mail($to, $email_subject, $message, $headers);
    } else {
        header('Location: kontakt-fejl.html');
    }
?>