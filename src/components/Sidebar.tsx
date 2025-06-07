import { Home, Users, Settings } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-900 text-white p-4 space-y-6">
      <h2 className="text-2xl font-bold">Admin</h2>
      <nav className="space-y-4">
        <a href="#" className="flex items-center gap-2"><Home size={20} />Inicio</a>
        <a href="#" className="flex items-center gap-2"><Users size={20} />Usuarios</a>
        <a href="#" className="flex items-center gap-2"><Settings size={20} />Configuración</a>
      </nav>
    </div>
  );
}
