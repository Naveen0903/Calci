<?php
    $ma = $_GET["expression"];
    $p= eval("return $ma ;");
    
    // if(preg_match('/(\d+)(?:\s*)([\+\-\*\/])(?:\s*)(\d+)/', $ma, $matches) !== FALSE){
    //     $operator = $matches[2];
    
    //     switch($operator){
    //         case '+':
    //             $p = $matches[1] + $matches[3];
    //             break;
    //         case '-':
    //             $p = $matches[1] - $matches[3];
    //             break;
    //         case '*':
    //             $p = $matches[1] * $matches[3];
    //             break;
    //         case '/':
    //             $p = $matches[1] / $matches[3];
    //             break;
    //     }
    
        // echo "<script>document.querySelector('.calculator-screen').value = $p</script>";
    echo $p;
?>