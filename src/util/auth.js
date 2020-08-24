function isLoggedIn() {
  if (localStorage.accessToken) {
    return true;
  }
  return false;
}
const requireAuth = (to, from, next) => {
  console.log("in requireAuth", to, isLoggedIn());

  if (isLoggedIn()) {
    next();
  } else {
    next({
      path: "/login",
    });
  }
};

export { isLoggedIn, requireAuth };
