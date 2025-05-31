
type TProps = {
  file: null | File;
}

const EditProfile = ({ file }: TProps) => {

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(file);
  };

  return (
    <>
  
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-fieldColor">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
                defaultValue="Osman Goni"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
                defaultValue="Asadujjaman@gmail.com"
              />
            </div>
            <div>
              <label className="block text-gray-700">Contact no</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md outline-none focus:border-blue-500"
                defaultValue="+99007007007"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md"
            >
              Save Changes
            </button>
          </form>
    
    </>
  );
};

export default EditProfile;
