<?php
    // Replace this with your own email address
    $to = "formand@odenselmu.dk";
    $type = 0;

    // Extract form contents
    $name = $_POST['realname'];
    $message = $_POST['message'];
    $email = "";
    $hvor = "";
    $opgaver = "";
    $fratagelse = "";
    
    // Return errors if present
    $errors = "";
    $url = "";
    
    if( isset($_POST['email']) )
    {
        // Validate email address
        $email = $_POST['email'];
        $url = "kontakt.phtml";
        if(valid_email($email)==FALSE)
        {
            $errors .= "email,";
        }
        if($message =='') { $errors .= "message,"; }
        $type = 0;
    }
    else if( isset($_POST['hvor']) )
    {
        //if($hvor =='') { $errors .= "hvor,"; }
        $url = "bibelstudie/jeg-mangler-en-gruppe.phtml";
        $hvor = $_POST['hvor'];
        $type = 1;
    }
    else if( isset($_POST['opgaver']) )
    {
        //if($hvor =='') { $errors .= "hvor,"; }
        if(!empty($_POST['opgaver'])) {
            foreach($_POST['opgaver'] as $check) {
                $opgaver .= $check;
                $opgaver .= ", ";
            }
        }
        $url = "program/opgaver.phtml";
        $fratagelse = $_POST['fratagelse'];
        $type = 2;
    }

    function valid_email($str) {
        return ( ! preg_match("/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix", $str)) ? FALSE : TRUE;
    }

    if($name =='') { $errors .= "name,"; }

    // Send email
    if($errors =='') {
        $msg = "<p style='color:green'>Tak for din besked!</p>";
        header('Location: '.$url.'?msg='.$msg);
        $headers = "";
        $email_subject = "";
        
        if ($type == 0)
        {
            $message = "Name: $name \n\nEmail: $email \n\nMessage: $message";
            $email_subject = "Besked fra: $email";
            $headers =  'From: Kontakt formular <no-reply@odenselmu.dk>'. "\r\n" .
                    'Reply-To: '.$email.'' . "\r\n" .
                    'Content-Type: text/plain; charset=UTF-8' .  "\r\n" .
                    'X-Mailer: PHP/' . phpversion();
        }
        else if ($type == 1)
        {
            $message = "Name: $name \n\nHvor: $hvor \n\nMessage: $message";
            $email_subject = "$name vil gerne med i en gruppe.";
            $headers =  'From: Bibelstudie <no-reply@odenselmu.dk>'. "\r\n" .
                    'Reply-To: '.$name.'' . "\r\n" .
                    'Content-Type: text/plain; charset=UTF-8' .  "\r\n" .
                    'X-Mailer: PHP/' . phpversion();
        }
        else if ($type == 2)
        {
            $message = "Name: $name \n\nOpgaver: $opgaver \n\nFratagelse: $fratagelse \n\nMessage: $message";
            $email_subject = "$name's opgaver.";
            $headers =  'From: Opgaver <no-reply@odenselmu.dk>'. "\r\n" .
                    'Reply-To: '.$name.'' . "\r\n" .
                    'Content-Type: text/plain; charset=UTF-8' .  "\r\n" .
                    'X-Mailer: PHP/' . phpversion();
        }
        
        mail($to, $email_subject, $message, $headers);
    } else {
        $msg = "<p style='color:red;'>Din besked kunne ikke sendes.</p>";
        header('Location: '.$url.'?msg='.$msg);
    }
?>