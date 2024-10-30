interface SetCookieOptions {
  path?: string;
  domain?: string;
  expires?: Date;
  secure?: boolean;
}

export class Cookies {
  static async get(name: string): Promise<string | undefined> {
    if (typeof window === "undefined") {
      const cookies = await import("next/headers").then((mod) => mod.cookies);

      const cookieStore = await cookies();
      return cookieStore.get(name)?.value;
    }

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
      return parts.pop()!.split(";").shift();
    }

    return undefined;
  }

  static set(name: string, value: string, options?: SetCookieOptions, fromRemove = false): void {
    if (window === undefined) {
      console.error("Cookies.set() can only be called in a browser environment");
      return;
    }

    if (!fromRemove) this.remove(name);

    options = options || {};

    const expires = options.expires;

    if (expires) {
      document.cookie = `${name}=${value}; expires=${expires.toUTCString()}`;
    } else {
      document.cookie = `${name}=${value}`;
    }
  }

  static remove(name: string | string[]): void {
    if (window === undefined) {
      console.error("Cookies.remove() can only be called in a browser environment");
      return;
    }

    if (typeof name === "string") {
      this.set(name, "", { expires: new Date(Date.now() - 1) }, true);
    } else {
      name.forEach((n) => this.set(n, "", { expires: new Date(Date.now() - 1) }, true));
    }
  }
}
