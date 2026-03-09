export const siteUrl = "https://cochesalemiavag.es" as const;

export const topLinks = ["f", "t", "i"] as const;

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catalogo" },
  { href: "/about", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" }
] as const;

export const socialLinks = ["Facebook", "Twitter", "Instagram"] as const;

export const siteMeta = {
  phone: "+62 087 400 40",
  email: "autocar@email.com",
  profile: "8 Jorinton Profile",
  footerPhone: "+6208740040",
  footerPrompt: "Tienes dudas? Estamos para ayudarte"
} as const;

export const footerColumns = [
  {
    title: "Modelos",
    links: ["Volkswagen", "SEAT", "Audi", "Skoda"]
  },
  {
    title: "Enlaces utiles",
    links: ["Revision mecanica", "Proceso de importacion", "Matriculacion", "Consejos de compra"]
  },
  {
    title: "Sobre nosotros",
    links: ["Empresa", "Servicio tecnico", "Novedades", "Catalogo"]
  },
  {
    title: "Ayuda",
    links: ["Contacto", "Preguntas frecuentes", "Politica de privacidad", "Aviso legal"]
  }
] as const;
