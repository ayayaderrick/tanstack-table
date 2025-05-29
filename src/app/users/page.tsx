import { users } from "@/lib/data";
import { UsersTable } from "@/app/users/UsersTable";
import { columns } from "@/app/users/columns";

const Users = async () => {
  const data = users;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">All Users</h1>
      <UsersTable columns={columns} data={data} />
    </div>
  );
};

export default Users;
