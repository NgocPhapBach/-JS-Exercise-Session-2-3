/**
 * Input: num, sum
 * 
 * Các bước xử lý:
 * - B1: Tìm các thẻ bằng id
 * - B2: Tạo hàm tính:
 *   + lấy giá trị từ form
 *   + soChuc = num / 10
 *   + soDonVi = num % 10 
 *   + sum = soChuc + soDonVi
 *   + hiển thị kết quả lên UI
 * - B3: gắn hàm vào sự kiện click
 * 
 * Output: sum
 */

var inpNum = document.getElementById("inpNum");
var num1 = 0;
var num2 = 0;
var sum = 0;

function tinhTong() {
    var num = inpNum.value;

    num1 = Math.floor(num / 10);
    num2 = num % 10;
    sum = num1 + num2;

    document.getElementById("thongBaoTong").innerHTML = sum;
}