import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'docs',
  title: 'Orisema',
  description: 'Documentação da comunidade Orisema',
  lang: 'pt-BR',
  locales: [
    { lang: 'pt-BR', label: 'Português (Brasil)', title: 'Orisema', description: 'Documentação da comunidade Orisema' },
    { lang: 'en', label: 'English', title: 'Orisema', description: 'Orisema community documentation' },
    { lang: 'es', label: 'Español', title: 'Orisema', description: 'Documentación de la comunidad Orisema' },
  ],
  themeConfig: {
    socialLinks: [{ icon: 'github', mode: 'link', content: 'https://github.com/Orisema' }],
  },
  outDir: 'doc_build',
});
