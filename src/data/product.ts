import diagonal from '../assets/images/product/ar-condicionado-diagonal.webp';
import frontOpen from '../assets/images/product/ar-condicionado-frente-aberto.webp';

export const product = {
  name: 'FicaFrioAí',
  description:
    'A FicaFrioAí está desenvolvendo um sistema para organizar agenda, ordens de serviço e histórico de equipamentos em empresas de climatização.',
  tagline:
    'Do orçamento à manutenção, sua empresa organizada e cada aparelho com seu histórico.',
  images: { diagonal, frontOpen },
  // public/ é servido diretamente, sem passar pelo processamento de imagens.
  modelUrl: `${import.meta.env.BASE_URL}models/ar-condicionado-animado.glb`,
} as const;
