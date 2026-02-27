import AdminHeader from "@/components/admin/Header";

const DashboardAdmin = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <AdminHeader />
      <main className="container mx-auto px-4 md:px-8 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Selamat datang di panel admin.</p>
      </main>
    </div>
  );
};

export default DashboardAdmin;
