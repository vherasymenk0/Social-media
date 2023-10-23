import { Toast } from '~/types/shared'

type SetGlobalToast = ((props: Toast) => void) | null

class Toaster {
  private static showToastGlobal: SetGlobalToast

  public static setGlobalToast(func: SetGlobalToast) {
    Toaster.showToastGlobal = func
  }

  public static success(message: string): void {
    if (Toaster.showToastGlobal) Toaster.showToastGlobal({ message, type: 'success' })
  }

  public static error(message: string): void {
    if (Toaster.showToastGlobal) Toaster.showToastGlobal({ message, type: 'error' })
  }

  public static info(message: string): void {
    if (Toaster.showToastGlobal) Toaster.showToastGlobal({ message, type: 'info' })
  }
}

export default Toaster
