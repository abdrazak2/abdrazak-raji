<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    
    $to = "holatanger909@gmail.com"; 
    $subject = "رسالة جديدة من: $name";

    
    $body = "
    الاسم: $name\n
    البريد الإلكتروني: $email\n
    الرسالة:\n$message
    ";

    
    $headers = "From: $email";

    
    if (mail($to, $subject, $body, $headers)) {
        echo "تم إرسال الرسالة بنجاح.";
    } else {
        echo "حدث خطأ أثناء إرسال الرسالة. حاول مجددًا.";
    }
} else {
    echo "طلب غير صالح.";
}
?>
