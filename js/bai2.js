/**
 * Input: num1, num2, num3, num4, num5
 * 
 * Các bước xử lý:
 * - B1: Tìm các thẻ bằng id
 * - B2: Tạo hàm tính:
 *   + lấy giá trị từ form
 *   + giaTriTB = (num1 + num2 + num3 + num4 + num5) / 5
 *   + hiển thị kết quả lên UI
 * - B3: gắn hàm vào sự kiện click
 * 
 * Output: giatriTB
 */

var inpNum1 = document.getElementById("inpNum1");
var inpNum2 = document.getElementById("inpNum2");
var inpNum3 = document.getElementById("inpNum3");
var inpNum4 = document.getElementById("inpNum4");
var inpNum5 = document.getElementById("inpNum5");
var giatriTB = 0;

function tinhTB() {
    var num1 = parseFloat(inpNum1.value);
    var num2 = parseFloat(inpNum2.value);
    var num3 = parseFloat(inpNum3.value);
    var num4 = parseFloat(inpNum4.value);
    var num5 = parseFloat(inpNum5.value);

    var giatriTB = (num1 + num2 + num3 + num4 + num5) / 5;
    
    document.getElementById("thongBaoTB").innerHTML = "Giá trị trung bình là: " + giatriTB.toFixed(2);
}