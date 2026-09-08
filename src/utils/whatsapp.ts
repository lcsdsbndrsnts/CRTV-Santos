import { STUDIO_INFO } from '../data/content';

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage = 'Olá! Estive navegando pelo site da CRTVSANTOS e gostaria de conversar sobre meu projeto.';
  const message = customMessage || defaultMessage;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encoded}`;
}

export function getWhatsAppUrlForService(serviceName: string): string {
  const message = `Olá! Gostaria de entender como a CRTVSANTOS pode nos ajudar com ${serviceName}. Podemos conversar?`;
  return getWhatsAppUrl(message);
}

export function getWhatsAppUrlForProject(projectName: string): string {
  const message = `Olá! Vi o case do ${projectName} no site da CRTVSANTOS e gostaria de conversar sobre um projeto semelhante para a minha marca.`;
  return getWhatsAppUrl(message);
}

export function getWhatsAppUrlWithDetails(data: {
  name?: string;
  brand?: string;
  service?: string;
  segment?: string;
  message?: string;
}): string {
  let text = 'Olá CRTVSANTOS! Gostaria de iniciar uma conversa.';
  if (data.name) text += `\n\nNome: ${data.name}`;
  if (data.brand) text += `\nMarca/Negócio: ${data.brand}`;
  if (data.segment) text += `\nSegmento: ${data.segment}`;
  if (data.service) text += `\nInteresse principal: ${data.service}`;
  if (data.message) text += `\n\nContexto: ${data.message}`;
  
  return getWhatsAppUrl(text);
}
