/**
 * Input: chieuDai, chieuRong
 * 
 * Các bước xử lý:
 * - B1: Tìm các thẻ bằng id
 * - B2: Tạo hàm tính:
 *   + lấy giá trị từ form
 *   + chuVi = (chieuDai + chieuRong) * 2
 *   + dienTich = chieuDai * chieuRong
 *   + hiển thị kết quả lên UI
 * - B3: gắn hàm vào sự kiện click
 * 
 * Output: chuVi, dienTich
 */

var inpCD = document.getElementById("inpChieuDai");
var inpCR = document.getElementById("inpChieuRong");
var chuVi = 0;
var dienTich = 0;

function tinhHCN() {
    var chieuDai = Number(inpCD.value);
    var chieuRong = Number(inpCR.value);

    chuVi = (chieuDai + chieuRong) * 2;
    dienTich = chieuDai * chieuRong;

    document.getElementById("thongBaoCV").innerHTML = chuVi;
    document.getElementById("thongBaoDT").innerHTML = dienTich;
}