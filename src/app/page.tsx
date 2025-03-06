'use client';
import React from 'react';
import { usePeopleApi } from './hooks/usePeopleApi';
import UserCard from './components/UserCard';

const HomePage: React.FC = () => {
    const { data, loading, error, fetchData, history } = usePeopleApi();

    return (
        <div className="flex">
            {}
            <div className="w-1/4 p-4 border-r">
                <h2 className="font-bold mb-4">Historial de Usuarios</h2>
                <ul>
                    {history.map((user, index) => (
                        <li key={index} className="mb-2 border-b pb-2">{user.name.first} {user.name.last}</li>
                    ))}
                </ul>
            </div>

            {}
            <div className="w-3/4 p-4 flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">User</h1>
                {loading && <p>Cargando...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {data && <UserCard user={data} />}
                <button onClick={fetchData} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Generar Nuevo Usuario</button>
            </div>
        </div>
    );
};

export default HomePage;