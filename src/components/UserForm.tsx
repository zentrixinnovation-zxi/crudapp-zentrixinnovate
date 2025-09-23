// src/components/UserForm.tsx
import { useState, useEffect } from "react";

const roles = ["Admin", "Editor", "Soporte", "Usuario"];

const UserForm = ({ user, onSave, onClose }: any) => {
  const [nombre, setNombre] = useState(user ? user.nombre : "");
  const [correo, setCorreo] = useState(user ? user.correo : "");
  const [role, setRole] = useState(user ? user.role : "Usuario");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSave({ nombre, correo, role });
  };

  useEffect(() => {
    if (user) {
      setNombre(user.nombre);
      setCorreo(user.correo);
      setRole(user.role);
    }
  }, [user]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-2xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        {user ? "Editar Usuario" : "Agregar Usuario"}
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Nombre
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Nombre del Usuario"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Correo Electrónico
          </label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Correo Electrónico"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Rol
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default UserForm;
