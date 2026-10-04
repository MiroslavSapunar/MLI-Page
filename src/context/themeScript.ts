export const THEME_STORAGE_KEY = 'mli-theme'

// Runs inline in <head> before first paint, so the prerendered HTML shows the saved theme without a flash.
// Light is the server default (data-theme="light" on <html>); this only switches to dark when saved.
export const themeInitScript = `try{if(localStorage.getItem('${THEME_STORAGE_KEY}')==='dark')document.documentElement.dataset.theme='dark'}catch(e){}`
