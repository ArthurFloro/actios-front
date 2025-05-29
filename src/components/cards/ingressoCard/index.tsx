
export function IngressoCard() {
  return (
    <div>
      <header className="">
        <h1>Inscrições</h1>
      </header>
      <section>
        <div>
          <h1>Inteira</h1>
          <div className="flex items-center gap-1.5">
            <span>R$ 150,00</span>
            <span>(+ R$ 5,00 taxa)</span>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h1>Meia entrada</h1>
          <div className="flex items-center gap-1.5">
            <span>R$ 85,00</span>
            <span>(+ R$ 5,00 taxa)</span>
          </div>
        </div>
      </section>
    </div>
  );
}
