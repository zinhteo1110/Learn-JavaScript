document.getElementById("print").addEventListener("click", print_ebook);
function print_ebook() {
	var dayso = [];
	// var begin_page = 107;
	// var end_page = 429;
	var begin_page = parseInt(document.getElementById("begin_page").value);
	var end_page = parseInt(document.getElementById("end_page").value);
	var total_pages = end_page - begin_page;
	var pair_pages = parseInt(total_pages/10);
	var each_pair = parseInt(pair_pages/2);

	for(var i = 0; i < total_pages; i++)
	{
		dayso[i] = begin_page + i;
	}

	document.write("<br> Số lượng trang: "+dayso.length);
	document.write("<br> Số trang bắt đầu: "+begin_page);
	document.write("<br> Số trang kết thúc là: "+end_page);
	document.write("<br> Số lượng các <strong>dãy</strong> số lẻ & dãy số chẵn cần để in là: "+pair_pages);
	document.write("<br> Số lượng mỗi cặp lẻ & mỗi cặp chẵn là : "+each_pair);
	document.write("<br>");

	function isEvens(num) {
		return num%2 == 0;
	} 

	function isOdds(num) {
		return num%2 == 1;
	}

	var Evens = dayso.filter(isEvens);
	var Odds = dayso.filter(isOdds);

	split10(Odds,Evens,each_pair);

	function split10(Array_Odds,Array_Evens,each_pair){
		var nums_Odd = [];
		var nums_Even = [];
		var i = 0;
		while (i < each_pair){
			nums_Odd[i] = Array_Odds.splice(0,10);
			nums_Even[i] = Array_Evens.splice(0,10);
			document.write("<br> Cặp dãy số thứ "+(i+1) + " là: ");
			document.write("<br>"+nums_Odd[i]);
			document.write("<br>"+nums_Even[i]);
			document.write("<br>");
			i++;
		}
	}
} //end function print_ebook()