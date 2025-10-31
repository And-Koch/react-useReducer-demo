import "./users.css"

export const Users = ({ users, isLoading, dispatch }) => {
    return (
      <div className="container">
        <h2>Users</h2>
        {isLoading ? (
          <p>Loading Users...</p>
        ) : (
          <div className="usersBox">
            {users.map((user) => (
              <div key={user.id} className="singleUserBox">
                <img src={user.image} alt={user.firstName}  />
                <h1>{user.firstName} {user.lastName}</h1>
                <h2>Age: {user.age}</h2>
                <h2>Phone: {user.phone}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  