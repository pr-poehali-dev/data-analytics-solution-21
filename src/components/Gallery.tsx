const works = [
  {
    src: "https://cdn.poehali.dev/projects/6935b8e4-8027-4f67-bed6-5a461b7945af/bucket/cfeb751b-9212-45f5-a9c8-7c7b77899b64.jpg",
    title: "Конь для выставочного стенда",
    tag: "Бутафория",
  },
  {
    src: "https://cdn.poehali.dev/projects/6935b8e4-8027-4f67-bed6-5a461b7945af/bucket/b43aafce-560b-4bb1-ae3a-02b4968ff4f2.jpg",
    title: "Сердца из пенопласта",
    tag: "Декор",
  },
  {
    src: "https://cdn.poehali.dev/projects/6935b8e4-8027-4f67-bed6-5a461b7945af/bucket/a620c5ba-f7af-4cb4-bab5-6a813dc51a76.jpg",
    title: "Гранат — реалистичная скульптура",
    tag: "Арт-объект",
  },
  {
    src: "https://cdn.poehali.dev/projects/6935b8e4-8027-4f67-bed6-5a461b7945af/bucket/d57b2ce8-fdcb-41fe-b8be-8b3621cec923.jpg",
    title: "Ростовые буквы OMOIKIRI",
    tag: "Буквы",
  },
  {
    src: "https://cdn.poehali.dev/projects/6935b8e4-8027-4f67-bed6-5a461b7945af/bucket/3f15b716-6579-4aee-94da-3da2cf5349eb.jpg",
    title: "Морской конёк — скульптура",
    tag: "Арт-объект",
  },
];

export default function Gallery() {
  return (
    <div className="bg-neutral-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-neutral-500 text-sm tracking-widest mb-4">Наши работы</p>
        <h2 className="text-white text-4xl lg:text-6xl font-bold mb-16 leading-tight">
          Примеры из практики
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((work, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={work.src}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs uppercase tracking-widest text-neutral-300 mb-1 block">{work.tag}</span>
                <p className="text-white font-semibold text-lg leading-tight">{work.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://t.me/+79263594748"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 uppercase tracking-wide text-sm font-medium hover:bg-neutral-200 transition-colors duration-300"
          >
            Обсудить похожий проект
          </a>
        </div>
      </div>
    </div>
  );
}
