import { NextRequest, NextResponse } from "next/server";

function getRoleFromToken(token: string) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );
    const payload = JSON.parse(jsonPayload);

    return payload?.role;
  } catch (e) {
    return null;
  }
}

export function proxy(request: NextRequest) {
  // const token = request.cookies.get("access_token")?.value;
  // const { pathname } = request.nextUrl;

  // // Daftar rute yang bisa diakses tanpa login
  // const isPublicRoute = ["/login"];
  // const isCurrentRoutePublic = isPublicRoute.includes(pathname);

  // // 1. JIKA TIDAK ADA TOKEN
  // if (!token) {
  //   // Jika rute saat ini BUKAN rute publik, tendang ke /login
  //   if (!isCurrentRoutePublic) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }
  //   // Jika rute saat ini ADALAH rute publik (seperti /login), biarkan masuk
  //   return NextResponse.next();
  // }

  // // Ambil role (Aman dijalankan karena di titik ini token DIJAMIN ada)
  // const role = getRoleFromToken(token);

  // // 3. PROTEKSI ROLE ADMIN
  // // Jika bukan ADMIN dan mencoba mengakses halaman utama ("/")
  // if (role !== "ADMIN" && pathname === "/") {
  //   // Alihkan ke halaman khusus user biasa (misal: /dashboard atau /unauthorized)
  //   // JANGAN dialihkan ke "/" lagi karena akan menyebabkan infinite loop!
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }

  // return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
