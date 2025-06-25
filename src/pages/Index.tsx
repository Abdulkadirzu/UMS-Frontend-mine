import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  
  useEffect(() => {
    if (isAuthenticated && user) {
      // If user is already authenticated, redirect to their dashboard
      navigate(`/dashboard/${user.role}`);
    } else {
      // Otherwise redirect to the login page
      navigate('/');
    }
  }, [isAuthenticated, user, navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting...</p>
    </div>
  );
};

export default Index;
