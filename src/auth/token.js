export function setToken(jwt) {
  localStorage.setItem("accessToken", jwt.accessToken);
  localStorage.setItem("refreshToken", jwt.refreshToken);
  localStorage.setItem("refresh", 0);
}

export function isAuthenticated() {
  return localStorage.getItem("accessToken") ? true : false;
}

export function setUser() {
  if (isAuthenticated()) {
    try {
      const decodedToken = JSON.parse(atob(getRefreshToken().split(".")[1]));
      localStorage.setItem("username", decodedToken.username);
      localStorage.setItem("name", decodedToken.fullname);
    } catch {}
  }
}

export function getRefreshTokenExp() {
  if (isAuthenticated()) {
    try {
      const decodedToken = JSON.parse(atob(getRefreshToken().split(".")[1]));
      const exp = decodedToken.exp;
      return exp * 1000;
    } catch {}
  } else {
    const exp = 0;
    return exp;
  }
}

async function refreshFunction() {
  const auth = isAuthenticated();
  try {
    const response = await fetch("http://localhost:3000/auth/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({ refreshToken: getRefreshToken() }),
    });
    if (response.ok) {
      try {
        const token = await response.json();
        console.log(token);
        setToken(token);

        return token;
      } catch {}
    } else {
      console.log("Refresh failed");
      localStorage.clear();
    }
  } catch (error) {
    console.log(error);
  }
}

export const refreshJWT = async () => {
  const exp = getRefreshTokenExp();
  const currentTime = Date.now();
  const timeUntilExp = exp - currentTime;
  const interval = 540000;

  // Wait for the initial refresh timeout
  console.log(localStorage.getItem("refresh"));
  await new Promise((resolve) => setTimeout(resolve, 540000));

  const initialRefreshToken = await refreshFunction();
  localStorage.setItem("refresh", 0);
  return;
};

export function isRefresh() {}

export function getAccessToken() {
  return localStorage.getItem("accessToken");
}

export function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}

export function logout() {
  localStorage.clear();
}
