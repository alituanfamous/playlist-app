import { useState } from "react";



function LoginPage() {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
    
              <div>
                <label className="block mb-1 text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
    
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      );
    
    

}
export default LoginPage;