import { useState } from "react";
import FilterForm from "@/components/admin/validation/FilterForm";
import DataTable, { type Pendaftar } from "@/components/admin/validation/DataTable";

// Dummy data for demonstration
const dummyData: Pendaftar[] = [
  { noPendaftaran: "20251110162", nama: "INTAN MAULIDA QORRY' AINA, M.PD", statusData: "Belum Divalidasi", validasiData: "Validasi", statusPembayaran: "Sudah Bayar" },
  { noPendaftaran: "20251110163", nama: "FATIHATUL FIRDA MUHIMMAH", statusData: "Belum Divalidasi", validasiData: "Validasi", statusPembayaran: "Sudah Bayar" },
  { noPendaftaran: "20251110164", nama: "NIKEN LARASATI", statusData: "Berkas Lulus", validasiData: "Telah Divalidasi", statusPembayaran: "Sudah Bayar" },
  { noPendaftaran: "20251110165", nama: "NAILA MAZIYAH", statusData: "Berkas Lulus", validasiData: "Telah Divalidasi", statusPembayaran: "Sudah Bayar" },
  { noPendaftaran: "20251110250", nama: "RISKA HULAIMAH", statusData: "Belum Divalidasi", validasiData: "Validasi", statusPembayaran: "Sudah Bayar" },
  { noPendaftaran: "20251110333", nama: "NADILA BERLIANA ARMADA", statusData: "Berkas Lulus", validasiData: "Telah Divalidasi", statusPembayaran: "Sudah Bayar" },
  { noPendaftaran: "20251110334", nama: "NAILA SALSA BILSALWA AURARA", statusData: "Berkas Lulus", validasiData: "Telah Divalidasi", statusPembayaran: "Sudah Bayar" },
  { noPendaftaran: "20251110335", nama: "LIDYA DINDA CAHYANI", statusData: "Berkas Lulus", validasiData: "Telah Divalidasi", statusPembayaran: "Sudah Bayar" },
  { noPendaftaran: "20251110336", nama: "WALADAA AISYAH NUR JANNAH", statusData: "Berkas Lulus", validasiData: "Telah Divalidasi", statusPembayaran: "Sudah Bayar" },
  { noPendaftaran: "20251110337", nama: "MUHAMMAD FARREL PRATAMA", statusData: "Berkas Lulus", validasiData: "Telah Divalidasi", statusPembayaran: "Sudah Bayar" },
  { noPendaftaran: "20251110338", nama: "SITI NURHALIZA", statusData: "Berkas Lulus", validasiData: "Telah Divalidasi", statusPembayaran: "Sudah Bayar" },
];

const ValidasiPendaftar = () => {
  const [showTable, setShowTable] = useState(false);
  const [data, setData] = useState<Pendaftar[]>([]);

  const handleFilter = (_filters: { jalur: string; semester: string; tahun: string }) => {
    // In real app, fetch data from API using filters
    setData(dummyData);
    setShowTable(true);
  };

  const handleDetail = (noPendaftaran: string) => {
    console.log("Detail:", noPendaftaran);
  };

  const handleValidasi = (noPendaftaran: string) => {
    console.log("Validasi:", noPendaftaran);
  };

  const handleReset = (noPendaftaran: string) => {
    console.log("Reset password:", noPendaftaran);
  };

  const handleCetak = (noPendaftaran: string) => {
    console.log("Cetak formulir:", noPendaftaran);
  };

  return (
    <div className="space-y-6">
      <FilterForm onSubmit={handleFilter} />
      {showTable && <DataTable data={data} onDetail={handleDetail} onValidasi={handleValidasi} onReset={handleReset} onCetak={handleCetak} />}
    </div>
  );
};

export default ValidasiPendaftar;
