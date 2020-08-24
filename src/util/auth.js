function isLoggedIn() {
  if (localStorage.accessToken) {
    return true;
  }
  return false;
}
const requireAuth = (to, from, next) => {
  if (isLoggedIn()) {
    next();
  } else {
    next({
      path: "/login",
    });
  }
};

const noLoginPage = (to, from, next) => {
  if (isLoggedIn()) {
    next({ path: from.path });
  } else {
    next();
  }
};
export { isLoggedIn, requireAuth, noLoginPage };
