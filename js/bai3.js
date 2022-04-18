/**
 * Input: tienUSD, tiGia
 * 
 * Các bước xử lý:
 * - B1: Tìm các thẻ bằng id
 * - B2: Tạo hàm tính:
 *   + lấy giá trị từ form
 *   + tienVND = tienUSD * 23.500
 *   + hiển thị kết quả lên UI
 * - B3: gắn hàm vào sự kiện click
 * 
 * Output: tienVND
 */

var inpUSD = document.getElementById("inpTienUSD");
console.log(inpUSD);
var tiGia = 23500;
var tienVND = 0;

function doiTien() {
    var tienUSD = inpUSD.value;
    tienVND = tienUSD * tiGia;

    document.getElementById("thongBaoTien").innerHTML = tienVND.toLocaleString() + " VND";
}