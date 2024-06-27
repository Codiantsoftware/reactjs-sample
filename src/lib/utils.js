import { clsx } from "clsx"
import Cookies from "js-cookie"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function logout() {
  Cookies.remove('token');
  window.location.reload();
}