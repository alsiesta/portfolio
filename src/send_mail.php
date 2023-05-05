<?php

########### CONFIG ###############

$recipient = 'as@daslizenzatelier.de'; # Bitte hier deine E-Mail angeben
$redirect = 'success.html';

########### CONFIG END ###########



########### Instruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST request to this file, including
#     [name] The name of the sender (Absender)
#     [message] Message that should be send to you
#
##################################



###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

if (empty($recipient)) {
    die("Bitte geben Sie die E-Mail-Adresse in Zeile 5 an.");
}

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;

        $subject = "Portfolio Contact Request: " . $_POST['email'];
        $headers = "From: noreply@developerakademie.com";
        $body = "REQEUEST FROM PORTFOLIO CONTACT FORM" . "\n" . "\n" ."Name: " . $_POST['name'] . "\n" ."E-mail: ". $_POST['email'] . "\n" . "\n" .  "Message: ". "\n" . $_POST['message'];

        mail($recipient, $subject, $body, $headers);
        header("Location: " . $redirect); 

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
