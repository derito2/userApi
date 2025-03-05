import React from 'react';
import { PeopleResponse } from '../types/peopleResponse';

interface UserCardProps {
    user: PeopleResponse;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <div className="border p-4 rounded shadow-lg text-center">
            <img src={user.picture.large} alt={user.name.first} className="rounded-full mx-auto mb-2" />
            <h2 className="text-lg font-bold">{user.name.first} {user.name.last}</h2>
            <p>{user.location.city}, {user.location.country}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
};

export default UserCard;