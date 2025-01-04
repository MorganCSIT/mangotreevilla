<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $message = htmlspecialchars($_POST["message"]);
  
  $to = "mangotreevillaphuket@gmail.com";
  $subject = "New message from contact form";
  $body = "Email: $email\n\nMessage:\n$message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully.";
  } else {
    echo "Error sending message.";
  }
} else {
  echo "Invalid request.";
}
?>
