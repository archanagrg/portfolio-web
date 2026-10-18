export const scrollToSection = (id: string) => {
  const cleanId = id.replace('#', '');
  const element = document.getElementById(cleanId);
  if (!element) return;

  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(element, { offset: -40 });
  } else {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
