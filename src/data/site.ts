export const siteUrl = "https://importarvagalemania.vercel.app" as const;

export const topLinks = ["f", "t", "i"] as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catalogo" },
  { href: "/sobre-nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" }
] as const;

export const socialLinks = ["Facebook", "Twitter", "Instagram"] as const;

export const siteMeta = {
  phone: "+34 661 34 87 96",
  email: "hola@davrdguez.com",
  profile: "David San José",
  footerPhone: "+34 661 34 87 96",
  footerPrompt: "Tienes dudas? Estamos para ayudarte"
} as const;

export const footerColumns = [
  {
    title: "Modelos",
    links: [
      { label: "Volkswagen", href: "/catalogo/volkswagen" },
      { label: "SEAT", href: "/catalogo/seat" },
      { label: "Audi", href: "/catalogo/audi" },
      { label: "Skoda", href: "/catalogo/skoda" }
    ]
  },
  {
    title: "Enlaces utiles",
    links: [
      { label: "Revision mecanica", href: "/about" },
      { label: "Proceso de importacion", href: "/about" },
      { label: "Matriculacion", href: "/about" },
      { label: "Consejos de compra", href: "/blog" }
    ]
  },
  {
    title: "Sobre nosotros",
    links: [
      { label: "Empresa", href: "/about" },
      { label: "Servicio tecnico", href: "/about" },
      { label: "Novedades", href: "/blog" },
      { label: "Catalogo", href: "/catalogo" }
    ]
  },
  {
    title: "Ayuda",
    links: [
      { label: "Contacto", href: "/contacto" },
      { label: "Preguntas frecuentes", href: "/about" },
      { label: "Politica de privacidad", href: "/politica-privacidad" },
      { label: "Politica de cookies", href: "/politica-cookies" },
      { label: "Aviso legal", href: "/aviso-legal" }
    ]
  }
] as const;
