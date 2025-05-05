<?php
$x = 0;
foreach(new DirectoryIterator(__DIR__) as $file) {
    $name = basename($file);
    if(!is_dir($name) && $name != 'link.php' && $name != 'header.php' && $name != 'footer.php'){
        echo '<a href="'.$file.'">'.$file.'</a>'.'<br>';
        if (strpos($file, '.html') !== false) {
            $x++;
        }
    }
}
$x = $x;
echo 'Tổng số view thực tế: '.$x;
?>
