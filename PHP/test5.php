<?php
if (isset($_POST['submit'])){
    echo "<pre>"
}

?>

<meta charset="utf-8">
<h4>请输入标题内容和日期</h4>
<form action="test5.php" method="POST">
    新闻标题：<input type="text" name="title"></br>
    新闻内容：<input type="text" name="content"></br>
    新闻日期：<input type="text" name="data"></br>
    <input type="submit" name="submit" value="提交">
</form>