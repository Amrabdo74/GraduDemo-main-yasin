const AuthService = {
    isAuthenticated: false,
    signIn: () => {
      AuthService.isAuthenticated = true;
    },
    signOut: () => {
      AuthService.isAuthenticated = false;
    },
  };
  
export default AuthService;