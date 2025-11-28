# 🚀 Portafolio Personal - Felipe Palazzi

Portafolio web profesional desarrollado con Astro, presentando mis proyectos, habilidades y experiencia como desarrollador.

🌐 **[Ver sitio en vivo](https://palazzifelipe.vercel.app)**

## ✨ Características Principales

- **🌍 Multiidioma**: Soporte completo para Español e Inglés con selector de idioma
- **📱 Diseño Responsivo**: Optimizado para todos los dispositivos y tamaños de pantalla
- **⚡ Alto Rendimiento**: Construido con Astro para máxima velocidad y SEO
- **🎨 Animaciones Fluidas**: Implementado con GSAP para transiciones suaves

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build)** - Framework web moderno
- **[Tailwind CSS](https://tailwindcss.com)** - Framework de CSS utility-first
- **[GSAP](https://greensock.com/gsap/)** - Librería de animaciones
- **JavaScript** - Interactividad y lógica del cliente

## 📁 Estructura del Proyecto

```text
/
├── public/
│   ├── favicon.webp
│   └── Portafolio.webp
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Footer.astro
│   │   ├── LanguageSelector.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   └── SocialIcons.astro
│   ├── i18n/
│   │   └── ui.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto en una terminal:

| Comando           | Acción                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Instala las dependencias                            |
| `npm run dev`     | Inicia el servidor de desarrollo en `localhost:4321`|
| `npm run build`   | Construye el sitio para producción en `./dist/`     |
| `npm run preview` | Previsualiza la build localmente antes de desplegar |

## � Despliegue

El proyecto está desplegado en [Vercel](https://vercel.com) y se actualiza automáticamente con cada push a la rama principal.

---

Desarrollado con ❤️ por Felipe Palazzi
