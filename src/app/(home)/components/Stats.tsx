import CountUp from "react-countup";

export default function Stats() {
  const datas = [
    { numbers: 10, title: "Parceiros" },
    { numbers: 20, title: "Patrocinadores" },
    { numbers: 30, title: "Empresas" },
    { numbers: 200, title: "Participantes" },
  ];

  return (
    <div className="flex px-12 py-8 bg-primary justify-center items-center">
      <div className="flex flex-wrap max-w-6xl w-full justify-between max-lg:justify-center gap-8 items-center">
        {datas.map((stats, index) => (
          <div
            key={index}
            className="text-white flex items-center justify-center flex-col">
            <span className="flex items-center justify-center text-3xl max-lg:text-base font-bold">
              +
              <CountUp
                end={stats.numbers}
                duration={5}
              />
            </span>

            <p className="text-2xl max-lg:text-sm font-bold">{stats.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
