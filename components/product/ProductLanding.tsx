import suppliedDesign from './suppliedDesign.json';
import ProductNav from './ProductNav';
import './supplied.css';

export default function ProductLanding({ locale }: { locale: string }) {
  const key = locale in suppliedDesign ? locale as keyof typeof suppliedDesign : 'de';
  return <>
    <ProductNav />
    {/* Trusted, version-controlled markup ported from the supplied eight-language design.
        No external HTML or user input is accepted here. */}
    <div id="top" className="supplied-design" dir={key === 'ar' ? 'rtl' : 'ltr'}
      dangerouslySetInnerHTML={{ __html: suppliedDesign[key].replace(/<header[\s\S]*?<\/header>/, '') }} />
  </>;
}
