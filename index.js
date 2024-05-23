// Bài 1: Quản lí tuyển sinh
// 1. Khối Nhập Dữ Liệu (Input)
//    - Nhập dữ liệu: Điểm chuẩn, Điểm môn 1, Điểm môn 2, Điểm môn 3, Khu vực, Đối tượng

// 2. Khối Xử Lý (Processing)
//    - Bước 1: Xác thực dữ liệu đầu vào
//    - Bước 2: Tính điểm ưu tiên
//      - Khu vực: A (2 điểm), B (1 điểm), C (0.5 điểm), X (0 điểm)
//      - Đối tượng: 1 (2.5 điểm), 2 (1.5 điểm), 3 (1 điểm), 0 (0 điểm)
//    - Bước 3: Tính tổng điểm
//      - Tổng điểm = Điểm môn 1 + Điểm môn 2 + Điểm môn 3 + Điểm ưu tiên khu vực + Điểm ưu tiên đối tượng
//    - Bước 4: Kiểm tra nếu có môn nào bị điểm 0
//    - Bước 5: Xác định kết quả
//      - Nếu có môn nào bị điểm 0, Kết quả = "Rớt"
//      - Nếu Tổng điểm >= Điểm chuẩn, Kết quả = "Đậu"
//      - Nếu không, Kết quả = "Rớt"

// 3. Khối Xuất Dữ Liệu (Output)
//    - Hiển thị tổng điểm
//    - Hiển thị kết quả: Đậu ("Đậu") hoặc Rớt ("Rớt")

function calculateResult() {
  const diemChuan = parseFloat(document.getElementById("diemChuan").value);
  const diemMon1 = parseFloat(document.getElementById("diemMon1").value);
  const diemMon2 = parseFloat(document.getElementById("diemMon2").value);
  const diemMon3 = parseFloat(document.getElementById("diemMon3").value);
  const khuVuc = document.getElementById("khuVuc").value.toUpperCase();
  const doiTuong = parseInt(document.getElementById("doiTuong").value);

  if (
    isNaN(diemChuan) ||
    isNaN(diemMon1) ||
    isNaN(diemMon2) ||
    isNaN(diemMon3) ||
    isNaN(doiTuong)
  ) {
    alert("Vui lòng nhập đầy đủ và chính xác thông tin.");
    return;
  }

  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    document.getElementById("result").innerText = "Rớt do có môn điểm 0.";
    return;
  }

  let diemUuTienKhuVuc = 0;
  let diemUuTienDoiTuong = 0;

  switch (khuVuc) {
    case "A":
      diemUuTienKhuVuc = 2;
      break;
    case "B":
      diemUuTienKhuVuc = 1;
      break;
    case "C":
      diemUuTienKhuVuc = 0.5;
      break;
    case "X":
      diemUuTienKhuVuc = 0;
      break;
    default:
      alert("Khu vực không hợp lệ.");
      return;
  }

  switch (doiTuong) {
    case 1:
      diemUuTienDoiTuong = 2.5;
      break;
    case 2:
      diemUuTienDoiTuong = 1.5;
      break;
    case 3:
      diemUuTienDoiTuong = 1;
      break;
    case 0:
      diemUuTienDoiTuong = 0;
      break;
    default:
      alert("Đối tượng không hợp lệ.");
      return;
  }

  const tongDiem =
    diemMon1 + diemMon2 + diemMon3 + diemUuTienKhuVuc + diemUuTienDoiTuong;

  let ketQua =
    tongDiem >= diemChuan
      ? "Bạn đã đậu nguyện vọng ^^"
      : "Bạn đã rớt nguyện vọng :(";
  document.getElementById(
    "result"
  ).innerText = `Kết quả: ${ketQua} .\n Điểm chuẩn: ${diemChuan} Tổng điểm: ${tongDiem}`;
}
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Bài 2 : Tính tiền điện
// 1. Input (Khối đầu vào)
// Nhập tên.
// Nhập số kWh tiêu thụ.
// 2. Process (Khối xử lý)
// Tính tiền điện phải trả dựa trên các mức tiêu thụ:
// 50kw đầu : 500d/kw
// 50kw kế : 650d/kw
// 100kw Kế : 850d/kw.
// 150kw kế : 1100d/kw.
// Còn lại : 1300d/kw
// 3. Output (Khối đầu ra)
// Xuất tên.
// Xuất tiền điện phải trả.
function calculateElectricityBill() {
  const ten = document.getElementById("ten").value;
  const soKw = parseFloat(document.getElementById("soKw").value);

  if (!ten || isNaN(soKw) || soKw < 0) {
    alert("Vui lòng nhập đầy đủ và chính xác thông tin.");
    return;
  }

  let totalCost = 0;

  if (soKw <= 50) {
    totalCost = soKw * 500;
  } else if (soKw <= 100) {
    totalCost = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    totalCost = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    totalCost = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    totalCost =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }

  document.getElementById(
    "electricityResult"
  ).innerText = `Tên: ${ten}. Tiền điện: ${totalCost} VND.`;
}
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Bài 3: Tính thuế thu nhập cá nhân
// 1. Input (Khối đầu vào)
// Nhập họ tên.
// Nhập tổng thu nhập năm (triệu VND).
// Nhập số người phụ thuộc.
// 2. Process (Khối xử lý)
// Tính thu nhập chịu thuế:
// Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
// Tính thuế thu nhập cá nhân phải trả dựa trên các mức thuế suất:
// Thu nhập chịu thuế(triệu) : Thuế suất (%)
// 0 Đến 60 : 5
// Trên 60 đến 120 : 10
// Trên 120 đến 210 : 15
// Trên 210 đến 384 : 20
// Trên 384 đến 624 : 25
// Trên 624 đến 960 : 30
// Trên 960 : 35
// 3. Output (Khối đầu ra)
// Xuất họ tên.
// Xuất thuế thu nhập cá nhân phải trả.
function calculateTax() {
    const hoTen = document.getElementById('hoTen').value;
    const tongThuNhap = parseFloat(document.getElementById('tongThuNhap').value);
    const soNguoiPhuThuocInput = document.getElementById('soNguoiPhuThuoc').value;
    const soNguoiPhuThuoc = soNguoiPhuThuocInput ? parseInt(soNguoiPhuThuocInput) : 0;
//     Biến soNguoiPhuThuocInput được lấy giá trị từ trường nhập.
// Nếu soNguoiPhuThuocInput trống (""), soNguoiPhuThuoc sẽ được đặt là 0; ngược lại, giá trị nhập vào sẽ được chuyển thành số nguyên (parseInt).
    if (!hoTen || isNaN(tongThuNhap) || tongThuNhap < 0 || isNaN(soNguoiPhuThuoc) || soNguoiPhuThuoc < 0) {
        alert("Vui lòng nhập đầy đủ và chính xác thông tin.");
        return;
    }

    const thuNhapChiuThue = tongThuNhap - 4 - (soNguoiPhuThuoc * 1.6);

    let thuePhaiTra = 0;

    if (thuNhapChiuThue <= 0) {
        thuePhaiTra = 0;
    } else if (thuNhapChiuThue <= 60) {
        thuePhaiTra = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120) {
        thuePhaiTra = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.10;
    } else if (thuNhapChiuThue <= 210) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.10 + (thuNhapChiuThue - 120) * 0.15;
    } else if (thuNhapChiuThue <= 384) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.20;
    } else if (thuNhapChiuThue <= 624) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + (thuNhapChiuThue - 384) * 0.25;
    } else if (thuNhapChiuThue <= 960) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + (thuNhapChiuThue - 624) * 0.30;
    } else {
        thuePhaiTra = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + 336 * 0.30 + (thuNhapChiuThue - 960) * 0.35;
    }

    document.getElementById('taxResult').innerText = `Họ Tên: ${hoTen}. Thuế Thu Nhập Cá Nhân Phải Trả: ${thuePhaiTra.toFixed(2)} triệu VND.`;
}
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Bài 4: Tính tiền cáp
// 1. Khối 1: Input (Nhập dữ liệu)
// Người dùng nhập mã khách hàng.
// Người dùng chọn loại khách hàng (Nhà dân hoặc Doanh nghiệp).
// Nếu chọn Doanh nghiệp, hiển thị ô nhập số kết nối.
// Người dùng nhập số kênh cao cấp.
// 2. Khối 2: Process (Xử lý)
// Lấy giá trị từ các ô nhập liệu:
// Mã khách hàng.
// Loại khách hàng.
// Số kết nối (nếu là doanh nghiệp).
// Số kênh cao cấp.
// Tính toán tổng tiền dựa trên loại khách hàng:
// Nếu là Nhà dân:
// Phí xử lý hóa đơn: 4.5$
// Phí dịch vụ cơ bản: 20.5$
// Phí thuê kênh cao cấp: 7.5$ x số kênh cao cấp
// Nếu là Doanh nghiệp:
// Phí xử lý hóa đơn: 15$
// Phí dịch vụ cơ bản: 75$ cho 10 kết nối đầu, mỗi kết nối sau thêm 5$
// Phí thuê kênh cao cấp: 50$ x số kênh cao cấp
// Tổng tiền = Phí xử lý hóa đơn + Phí dịch vụ cơ bản + (Phí số kết nối thêm) + Phí thuê kênh cao cấp 
// 3. Khối 3: Output (Xuất dữ liệu)
// Hiển thị tổng tiền phải trả cho khách hàng.
function toggleConnections() {
    const loaiKhachHang = document.getElementById('loaiKhachHang').value;
    const ketNoiGroup = document.getElementById('ketNoiGroup');
    if (loaiKhachHang === 'doanhnghiep') {
        ketNoiGroup.style.display = 'block';
        document.getElementById('soKetNoi').required = true;
    } else {
        ketNoiGroup.style.display = 'none';
        document.getElementById('soKetNoi').required = false;
    }
}

function calculateBill() {
    const maKhachHang = document.getElementById('maKhachHang').value;
    const loaiKhachHang = document.getElementById('loaiKhachHang').value;
    const soKetNoi = parseInt(document.getElementById('soKetNoi').value) || 0;
    const soKenhCaoCap = parseInt(document.getElementById('soKenhCaoCap').value);

    let phiXuLy = 0;
    let phiDichVu = 0;
    let phiKenhCaoCap = 0;
    let tongTien = 0;

    if (loaiKhachHang === 'nhadan') {
        phiXuLy = 4.5;
        phiDichVu = 20.5;
        phiKenhCaoCap = soKenhCaoCap * 7.5;
    } else if (loaiKhachHang === 'doanhnghiep') {
        phiXuLy = 15;
        if (soKetNoi <= 10) {
            phiDichVu = 75;
        } else {
            phiDichVu = 75 + (soKetNoi - 10) * 5;
        }
        phiKenhCaoCap = soKenhCaoCap * 50;
    }

    tongTien = phiXuLy + phiDichVu + phiKenhCaoCap;

    document.getElementById('billResult').innerText = `Mã Khách Hàng: ${maKhachHang}. Tổng Tiền Cáp: ${tongTien.toFixed(2)}$`;
}