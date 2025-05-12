import Image from "next/image";

export default function Discussions() {
  return (
    <div className="flex px-12 py-12 items-center justify-center w-full">
      <div className="max-w-5xl w-full flex flex-col gap-4 text-primary text-center items-center">
        <h1 className="main-title">Principais pontos de discussão</h1>
        <p>
          Descubra os temas mais relevantes debatidos por líderes do setor
          financeiro e da indústria petrolífera, com insights valiosos sobre
          como a inovação e a colaboração estratégica estão a transformar o
          conteúdo local em Angola.
        </p>

        <ul>

            <li>
                <div className="">
                    
                    <p>

                    </p>

                </div>

                <Image src={"/"} alt={"Discussion"} width={400} height={200} className="object-cover rounded-md " />
            </li>
        </ul>
      </div>
    </div>
  );
}
