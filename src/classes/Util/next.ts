export function next(pagina: string) {
  localStorage.setItem("pagina", pagina);
  window.location.reload();
}
