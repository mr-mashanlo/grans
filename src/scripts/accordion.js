import { Accordion } from 'accordion';

export function initAccordions() {
  const accordions = document.querySelectorAll( '.accordion' );
  accordions.forEach( accordion => { new Accordion( accordion, { modal: true } ); } );
}
