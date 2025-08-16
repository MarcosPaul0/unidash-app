import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BaseApiClient } from "./baseApiClient";
import { APP_ROUTES } from "@unidash/routes/app.routes";
import { COOKIES } from "./cookies";

export class ApiSSRClient extends BaseApiClient {
  constructor() {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_SIDE_API_URL;

    if (!baseUrl) {
      throw new Error("Server Side Base URL is not defined!");
    }

    super(process.env.NEXT_PUBLIC_SERVER_SIDE_API_URL!);
  }

  protected async getStoredToken(): Promise<string | null> {
    const cookiesSSRStore = await cookies();

    const cookieToken = cookiesSSRStore.get(COOKIES.token);

    return cookieToken?.value || null;
  }

  protected async storeToken(token: string): Promise<void> {
    const cookiesSSRStore = await cookies();

    cookiesSSRStore.set(COOKIES.token, token, { path: "/" });
  }

  protected async clearAuthDataAndRedirect(): Promise<void> {
    const cookiesSSRStore = await cookies();

    cookiesSSRStore.delete(COOKIES.refreshToken);
    cookiesSSRStore.delete(COOKIES.token);

    redirect(APP_ROUTES.public.login);
  }

  protected async manageRefreshResponse(
    refreshResponse: Response
  ): Promise<void> {
    const { accessToken } = await refreshResponse.json();

    this.setAuthorizationWithBearerToken(accessToken);

    const cookiesSSRStore = await cookies();

    const setCookies = refreshResponse.headers.getSetCookie();

    if (setCookies.length > 0) {
      const newRefreshTokenSetCookie = setCookies[0].split(";")[0];
      const newRefreshToken = newRefreshTokenSetCookie.split("=")[1];

      cookiesSSRStore.set(COOKIES.refreshToken, newRefreshToken, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });
    }

    cookiesSSRStore.set(COOKIES.token, accessToken, {
      path: "/",
    });
  }
}

export async function createApiSSRClient() {
  return await new ApiSSRClient().init();
}
