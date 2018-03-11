<?php
	echo "<table width=800 aligh=center border=1>";
	echo "<caption>九九乘法表</caption>";
	for ($i=1; $i <=9 ; $i++) { 
		echo "<tr>";
		for ($j=1; $j <=$i ; $j++) {
			echo "<td>";
			echo $i." * ".$j." = ".($i*$j);
			echo "</td>"; 
			
        }
        echo "</tr>";
    }
    echo "</table>"

?>




<?php
    echo "<table width=800 aligh=center border=1>";
    echo "<caption>九九乘法表</caption>";
    for($j=1;$j<=9;$j++){
        echo "<tr>";
        for($z=0; $z < 9-$j; $z++){
            echo "<td> </td>";
        }
        for($i=$j;$i>=1;$i--){
            echo"<td>{$i}*{$j}=".($i*$j)."</td>";
        }
        echo"</tr>";
    }
    echo"</table>";

?>