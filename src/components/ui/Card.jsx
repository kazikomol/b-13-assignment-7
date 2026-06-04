import React from 'react';
import { Link } from 'react-router';
const getStatusStyle = (status) => {
  switch (status) {
    case "overdue":
      return "bg-red-500 text-white";
    case "on-track":
      return "bg-emerald-800 text-white";
    case "almost due":
      return "bg-amber-400 text-white";
    default:
      return "bg-gray-200 text-gray-700";
  }
};

const Card = ( {friend} ) => {
    return (
        <div >
                        <Link to={`/${friend.id}`} className="card bg-base-100 w-65 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={friend.picture}
      alt="friends"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{friend.name}</h2>
    <p>62d ago</p>
    <div className="badge badge-success">{friend.tags}</div>
      <span
            className={`mt-3 px-3 py-1 text-xs rounded-full font-medium ${getStatusStyle(
              friend.status
            )}`}
          >
            {friend.status}
          </span>
    
  </div>
</Link>
                    </div>
    );
};

export default Card;