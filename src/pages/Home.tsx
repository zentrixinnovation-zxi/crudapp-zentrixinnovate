// src/App.tsx
import { useState } from "react";
import { Plus } from "lucide-react";
import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";
import UserModal from "../components/Modal";
import Swal from "sweetalert2";

const initialUsers = [
  { id: 1, nombre: "Juan Pérez", correo: "juan@example.com", role: "Admin" },
  { id: 2, nombre: "Ana López", correo: "ana@example.com", role: "Editor" },
  { id: 3, nombre: "Carlos Díaz", correo: "carlos@example.com", role: "Soporte" },
];

export default function Home() {
  const [users, setUsers] = useState(initialUsers);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);

  // Abrir modal en modo "nuevo"
  const handleAdd = () => {
    setEditingUser(null);
    setModalOpen(true);
  };

  // Abrir modal en modo "editar"
  const handleEdit = (id: number) => {
    setEditingUser(users.find((u) => u.id === id));
    setModalOpen(true);
  };

  // Eliminar usuario con confirmación
  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Este registro se eliminará permanentemente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6c757d",
    });

    if (result.isConfirmed) {
      setUsers(users.filter((u) => u.id !== id));

      Swal.fire({
        icon: "success",
        title: "Eliminado",
        text: "El usuario ha sido eliminado correctamente",
        timer: 2000,
      });
    }
  };

  // Guardar cambios (crear o editar)
  const handleSave = (user: any) => {
    if (editingUser) {
      // Editar existente
      setUsers(users.map((u) => (u.id === editingUser.id ? { ...user, id: u.id } : u)));

      Swal.fire({
        icon: "success",
        title: "Usuario actualizado",
        text: "Los cambios se guardaron correctamente",
        timer: 2000,
      });
    } else {
      // Agregar nuevo
      setUsers([...users, { ...user, id: users.length + 1 }]);

      Swal.fire({
        icon: "success",
        title: "Usuario agregado",
        text: "El usuario se creó correctamente",
        timer: 2000,
      });
    }
    setModalOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="mx-auto px-6 py-8 max-w-8xl">
        {/* Botón para agregar usuario */}
        <div className="flex justify-start mb-6">
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            <Plus size={18} /> Agregar Usuario
          </button>
        </div>

        {/* Tabla de usuarios */}
        <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      </main>

      {/* Modal para crear/editar */}
      <UserModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        user={editingUser}
      />
    </div>
  );
}
