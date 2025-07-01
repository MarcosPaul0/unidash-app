export const APP_ROUTES = {
  private: {
    dashboard: "/dashboard",
    courses: "/courses",
  },
  public: {
    login: "/login",
    forgotPassword: "/forgot-password",
    recoverPassword: "/recover-password",
  },
} as const;
