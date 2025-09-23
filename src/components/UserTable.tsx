// src/components/UserTable.tsx
import { Pencil, Trash2 } from "lucide-react";

const UserTable = ({ users, onEdit, onDelete }: any) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white rounded-xl shadow-md border border-gray-200">
        <thead>
          <tr className="bg-gray-50 text-gray-700 text-sm">
            <th className="py-3 px-6 text-left font-medium">Nombre</th>
            <th className="py-3 px-6 text-left font-medium">Correo</th>
            <th className="py-3 px-6 text-left font-medium">Rol</th>
            <th className="py-3 px-6 text-center font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr
              key={user.id}
              className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td className="py-3 px-6 text-sm">{user.nombre}</td>
              <td className="py-3 px-6 text-sm">{user.correo}</td>
              <td className="py-3 px-6 text-sm">{user.role}</td>
              <td className="py-3 px-6 text-center">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => onEdit(user.id)}
                    className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(user.id)}
                    className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
