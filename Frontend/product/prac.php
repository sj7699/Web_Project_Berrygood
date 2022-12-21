<?php 
    $response = file_get_contents('https://jsonplaceholder.typicode.com/todos/1')
    $response = json_decode($response)
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
    <?php 
        echo $response['userId']
    ?>
    </div>
</body>
</html>
