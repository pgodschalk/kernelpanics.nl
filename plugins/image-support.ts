;(function (document) {
  function setHTMLClass(height: number, className: string) {
    if (height === 2) {
      document.documentElement.className += ` ${className}`
    } else {
      document.documentElement.className += ` not${className}`
    }
  }

  const AVIF = new Image()
  AVIF.onload = AVIF.onerror = () => {
    setHTMLClass(AVIF.height, 'avif')
  }
  AVIF.src =
    'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A='

  const WebP = new Image()
  WebP.onload = WebP.onerror = () => {
    setHTMLClass(WebP.height, 'webp')
  }
  WebP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
})(
  ((window as any).sandboxApi &&
    (window as any).sandboxApi.parentWindow &&
    (window as any).sandboxApi.parentWindow.document) ||
    document
)
