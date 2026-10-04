export const THEME_STORAGE_KEY = 'mli-theme'

// Runs inline in <head> before first paint, so the prerendered HTML shows the saved theme without a flash.
// Dark is the server default (data-theme="dark" on <html>); this only switches to light when saved.
export const themeInitScript = `try{if(localStorage.getItem('${THEME_STORAGE_KEY}')==='light')document.documentElement.dataset.theme='light'}catch(e){}`
