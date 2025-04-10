import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "@/contexts/ContextProvider.tsx";
import { useEffect } from "react";
import axiosClient from "@/axios-client.tsx";
import { RainbowButton } from "./ui/rainbow-button";
import { toast } from "sonner";

export const Navigation = () => {
  const { user, token, setUser, setToken } = useStateContext();
  const location = useLocation();

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post('/logout')
      .then(() => {
        // Clear user data and token
        setUser({});
        setToken(null);
        
        // Show success message
        toast.success("You have been logged out successfully");
      })
      .catch((error) => {
        // Log the error
        console.error("Logout failed:", error.response?.data || error.message);

        // Set token and user to null even on error
        setUser({});
        setToken(null);
        
        // Show feedback
        toast.error("There was a problem logging out, but you've been signed out");
      });
  };

  // Check user info when token changes or component mounts
  useEffect(() => {
    // Only fetch user data if we have a token
    if (token) {
      axiosClient.get('/user')
        .then(({ data }) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Failed to fetch user data:", error);
          // If we can't fetch user data, token might be invalid
          setUser({});
          setToken(null);
        });
    }
  }, [token]);

  return (
    <nav className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-secondary">
          BuildCost AI
        </Link>

        {token ? (
          <div className="flex gap-4 items-center">
            {/* On landing page, show "Create Estimate" button for logged in users */}
            {location.pathname === "/" ? (
              <Link to="/estimate">
                <Button className="bg-black text-white hover:bg-primary/90">
                  Create Estimate
                </Button>
              </Link>
            ) : (
              <>
                <h1 className="text-secondary">Welcome, {user.name || ""}!</h1>
                <Link to="/dashboard">
                  <Button className="bg-secondary/10 text-secondary hover:bg-secondary/20 mr-2">
                    Dashboard
                  </Button>
                </Link>
              </>
            )}
            
            <Button
              onClick={onLogout}
              className="bg-primary text-secondary hover:bg-primary/90"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Link to="/signin">
              <RainbowButton className="bg-black text-white hover:bg-primary/90">
                Sign In
              </RainbowButton>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
