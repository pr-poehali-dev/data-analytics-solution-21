export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/6935b8e4-8027-4f67-bed6-5a461b7945af/files/5929fb86-d801-406f-8538-39d04f82a73a.jpg"
          alt="Изготовление фигуры из пенопласта"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">От эскиза до готовой фигуры</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Создаём бутафорские фигуры, ростовые буквы и арт-объекты любой формы и размера. Точная резка пенопласта,
          надёжное армирование и финишное покрытие — фигура выглядит эффектно и служит долго.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Заказать фигуру
        </button>
      </div>
    </div>
  );
}