import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <div className="not-found__header">
        <h1>404</h1>
      </div>
      <section className="not-found">
        <h3>Uzur!</h3>
        <p>
        Kechirasiz,
          <br /> Siz izlayotgan sahifa endi mavjud emas.
        </p>
        <Link to="/" className="link-btn product__add-to-cart-btn">
          Orqaga qaytish
        </Link>
      </section>
    </>
  );
}
