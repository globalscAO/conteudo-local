import CountUp from "react-countup";

export default function Stats() {
  const datas = [
    { numbers: 10, title: "Eventos" },
    { numbers: 30, title: "Empresas" },
    { numbers: 500, title: "Participantes" },
    { numbers: 20, title: "Parceiros" },
  ];

  return (
    <div className="flex px-12 py-8 bg-primary justify-center items-center">
      <div className="flex max-w-5xl w-full justify-between items-center">
        {datas.map((stats, index) => (
          <div
            key={index}
            className="text-white flex items-center justify-center flex-col mx-4">
            <span className="flex items-center justify-center text-3xl font-bold">
              +
              <CountUp
                end={stats.numbers}
                duration={5}
              />
            </span>

            <p className="text-2xl font-bold">{stats.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
