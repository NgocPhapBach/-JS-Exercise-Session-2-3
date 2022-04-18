/**
 * Input: soNgayLam, luong1Ngay
 * 
 * Các bước xử lý:
 * - B1: Tìm các thẻ bằng id
 * - B2: Tạo hàm tính:
 *   + lấy giá trị từ form
 *   + tienLuong = soNgayLam * luong1Ngay
 *   + hiển thị kết quả lên UI
 * - B3: gắn hàm vào sự kiện click
 * 
 * Output: tienLuong
 */

var inpSoNgayLam = document.getElementById("inpNgayLam");
var luong1Ngay = 100000;
var tienLuong = 0;

function tinhTienLuong() {
   var soNgayLam = inpSoNgayLam.value;
   tienLuong = soNgayLam * luong1Ngay
   document.getElementById("thongBaoLuong").innerHTML = "Tiền lương của bạn là: " + tienLuong.toLocaleString() + " VND";
}