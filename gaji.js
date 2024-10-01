function hitungGaji() {
    // Ambil nilai dari input
    let jumlahDelivery = parseInt(document.getElementById('jumlahDelivery').value) || 0;
    let jumlahPickup = parseInt(document.getElementById('jumlahPickup').value) || 0;
    let prioritasDelivery = parseInt(document.getElementById('prioritasDelivery').value) || 0;
    let prioritasPickup = parseInt(document.getElementById('prioritasPickup').value) || 0;
    let berat5 = parseInt(document.getElementById('berat5').value) || 0;
    let berat7 = parseInt(document.getElementById('berat7').value) || 0;
    let berat10 = parseInt(document.getElementById('berat10').value) || 0;

    // Harga paket
    const hargaDeliveryNormal = 1350;
    const hargaPickupNormal = 500;
    const hargaPickupLebihDari50 = 600;
    const hargaDeliveryLebihDari120 = 1400;
    const hargaPickupLebihDari120 = 150;

    // Insentif
    const insentif = 20000;
    const insentifPrioritasPickup = 300;
    const insentifPrioritasDelivery = 500;

    // Insentif tambahan untuk paket berat
    const insentifBerat5 = 1500;
    const insentifBerat7 = 3000;
    const insentifBerat10 = 4000;

    // Hitung pendapatan dari delivery
    let pendapatanDelivery = 0;
    if (jumlahDelivery >= 120) {
        pendapatanDelivery = jumlahDelivery * hargaDeliveryLebihDari120;
    } else if (jumlahDelivery >= 36) {
        pendapatanDelivery = (jumlahDelivery * hargaDeliveryNormal) + 2900;
    } else {
        pendapatanDelivery = jumlahDelivery * hargaDeliveryNormal;
    }

    // Hitung pendapatan dari pickup
    let pendapatanPickup = 0;
    if (jumlahPickup > 120) {
        pendapatanPickup = jumlahPickup * hargaPickupLebihDari120;
    } else if (jumlahPickup <= 50) {
        pendapatanPickup = jumlahPickup * hargaPickupNormal;
    } else {
        pendapatanPickup = (50 * hargaPickupNormal) + ((jumlahPickup - 50) * hargaPickupLebihDari50);
    }

    // Total pendapatan
    let totalPendapatan = pendapatanDelivery + pendapatanPickup;

    // Cek apakah total paket >= 120 untuk insentif
    if (jumlahDelivery + jumlahPickup >= 120) {
        totalPendapatan += insentif * (jumlahPickup / (jumlahDelivery + jumlahPickup)); // insentif berdasarkan persentase pickup
    }

    // Insentif tambahan untuk paket prioritas
    totalPendapatan += (prioritasPickup * insentifPrioritasPickup);
    totalPendapatan += (prioritasDelivery * insentifPrioritasDelivery);

    // Insentif tambahan untuk paket berat
    totalPendapatan += (berat5 * insentifBerat5);
    totalPendapatan += (berat7 * insentifBerat7);
    totalPendapatan += (berat10 * insentifBerat10);

    // Tampilkan hasil
    document.getElementById('hasilGaji').innerText = `Total Gaji Kurir: Rp. ${Math.round(totalPendapatan).toLocaleString()}`;
}