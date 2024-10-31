export abstract class BaseRequestController {
  private static abortControllers: Map<string, AbortController> = new Map();

  static isAbortError(error: unknown): boolean {
    return error instanceof DOMException && error.name === "AbortError";
  }

  protected static getControllerKey(): string {
    return this.name;
  }

  protected static cancelRequest(): void {
    const key = this.getControllerKey();
    const controller = this.abortControllers.get(key);

    if (controller) {
      controller.abort();
    }

    this.abortControllers.set(key, new AbortController());
  }

  protected static getCurrentSignal(): AbortSignal {
    const key = this.getControllerKey();

    if (!this.abortControllers.has(key)) {
      this.abortControllers.set(key, new AbortController());
    }

    return this.abortControllers.get(key)!.signal;
  }

  protected static clearController(): void {
    const key = this.getControllerKey();
    const controller = this.abortControllers.get(key);

    if (controller?.signal.aborted) {
      this.abortControllers.delete(key);
    }
  }
}
